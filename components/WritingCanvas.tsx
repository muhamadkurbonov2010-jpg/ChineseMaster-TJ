import React, { useRef, useEffect } from 'react'

// Simple canvas to capture pointer strokes. Data format: array of strokes, each stroke is array of points {x,y,t}
export default function WritingCanvas({ onFinish }: { onFinish?: (data: any) => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const isDrawing = useRef(false)
  const strokes = useRef<any[]>([])
  const currentStroke = useRef<any[]>([])

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    canvas.width = 300
    canvas.height = 300
    ctx.lineWidth = 6
    ctx.lineCap = 'round'
    ctx.strokeStyle = '#111'
  }, [])

  function getPoint(e: PointerEvent) {
    const rect = (canvasRef.current as HTMLCanvasElement).getBoundingClientRect()
    return { x: e.clientX - rect.left, y: e.clientY - rect.top, t: Date.now() }
  }

  function handlePointerDown(e: any) {
    isDrawing.current = true
    currentStroke.current = []
    ;(e.target as Element).setPointerCapture(e.pointerId)
    currentStroke.current.push(getPoint(e))
  }
  function handlePointerMove(e: any) {
    if (!isDrawing.current) return
    const p = getPoint(e)
    currentStroke.current.push(p)
    const ctx = (canvasRef.current as HTMLCanvasElement).getContext('2d')!
    ctx.beginPath()
    const pts = currentStroke.current
    if (pts.length >= 2) {
      const a = pts[pts.length - 2]
      const b = pts[pts.length - 1]
      ctx.moveTo(a.x, a.y)
      ctx.lineTo(b.x, b.y)
      ctx.stroke()
    }
  }
  function handlePointerUp(e: any) {
    isDrawing.current = false
    strokes.current.push(currentStroke.current.slice())
    currentStroke.current = []
  }

  function finish() {
    // send strokes to parent
    onFinish && onFinish({ strokes: strokes.current })
  }

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{ touchAction: 'none', background: '#fff', border: '1px solid #ddd' }}
        onPointerDown={(e) => handlePointerDown(e.nativeEvent)}
        onPointerMove={(e) => handlePointerMove(e.nativeEvent)}
        onPointerUp={(e) => handlePointerUp(e.nativeEvent)}
      />
      <div className="mt-2">
        <button className="mr-2 px-3 py-1 bg-blue-600 text-white rounded" onClick={finish}>Submit</button>
        <button className="px-3 py-1 border rounded" onClick={() => location.reload()}>Clear</button>
      </div>
    </div>
  )
}
