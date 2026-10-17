import React, { useEffect, useRef } from 'react'

// HanziWriter wrapper — this is a minimal wrapper. Install hanzi-writer in the project.
export default function HanziViewer({ char }: { char: string }) {
  const divRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let writer: any = null
    async function init() {
      const HanziWriter = (await import('hanzi-writer')).default
      if (divRef.current) {
        writer = HanziWriter.create(divRef.current, char, {
          width: 120,
          height: 120,
          strokeAnimationSpeed: 1,
        })
      }
    }
    init()
    return () => {
      if (writer && writer.cancelAnimation) writer.cancelAnimation()
    }
  }, [char])

  return <div ref={divRef} aria-label={`Hanzi ${char}`}></div>
}
