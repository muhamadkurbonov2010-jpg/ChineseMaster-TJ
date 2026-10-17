'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import HanziViewer from '../../../components/HanziViewer'
import WritingCanvas from '../../../components/WritingCanvas'
import { getCharacter } from '../../../lib/localData'

export default function CharacterPage({ params }: { params: { char: string } }) {
  const raw = params.char
  const decoded = decodeURIComponent(raw)
  const charData = getCharacter(decoded)

  if (!charData) {
    return <div>Character not found.</div>
  }

  const [result, setResult] = useState<string | null>(null)

  function scoreAttempt(data: any) {
    // heuristic scoring: more strokes drawn => higher score, compare count
    const drawn = Array.isArray(data.strokes) ? data.strokes.length : 0
    const expected = charData.stroke_count || 0
    let score = 0
    if (expected === 0) score = drawn > 0 ? 60 : 0
    else {
      const ratio = Math.min(drawn / expected, 1)
      score = Math.round(40 + ratio * 60) // 40..100
    }
    // store attempt in localStorage
    const key = 'cm_writing_attempts'
    const prev = JSON.parse(localStorage.getItem(key) || '[]')
    prev.push({ char: charData.char, drawn, expected, score, at: new Date().toISOString() })
    localStorage.setItem(key, JSON.stringify(prev))

    setResult(`Натиҷа (тахминӣ): ${score} / 100 — хатҳои кашида: ${drawn}, умед: ${expected}`)
  }

  return (
    <div>
      <div className="flex items-center gap-6">
        <div>
          <div className="text-6xl font-light">{charData.char}</div>
          <div className="text-xl mt-2">{charData.pinyin}</div>
          <div className="mt-1 text-gray-700">{charData.meaning_tg} — {charData.meaning_ru}</div>
        </div>
        <div>
          <HanziViewer char={charData.char} />
        </div>
      </div>

      <section className="mt-6 bg-white p-4 border rounded">
        <h3 className="font-semibold">Машқи навиштан</h3>
        <p className="text-sm text-gray-600">Бознигарӣ: натиҷаи автоматӣ тахминӣ аст.</p>
        <WritingCanvas onFinish={scoreAttempt} />
        {result && <div className="mt-3 p-3 bg-green-50 border text-green-800 rounded">{result}</div>}
      </section>

      <section className="mt-6 bg-white p-4 border rounded">
        <h3 className="font-semibold">Мисолҳо</h3>
        {charData.examples.map((ex: any, i: number) => (
          <div key={i} className="mt-2">
            <div className="text-sm">{ex.sentence}</div>
            <div className="text-sm text-gray-600">{ex.pinyin}</div>
            <div className="text-sm">{ex.meaning_tg} / {ex.meaning_ru}</div>
          </div>
        ))}
      </section>
    </div>
  )
}
