import Link from 'next/link'
import { getCharacters } from '../../lib/localData'

export default function CharactersPage() {
  const chars = getCharacters()
  return (
    <div>
      <h2 className="text-2xl font-bold">Китобхонаи иероглифҳо</h2>
      <p className="mt-2">Мисолҳои намунавӣ — ҷузъи корӣ. Бо клик саҳифаи ҳар иероглиф кушода мешавад.</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
        {chars.map((c) => (
          <div key={c.char} className="p-3 bg-white border rounded">
            <div className="text-4xl mb-2">{c.char}</div>
            <div className="text-sm text-gray-600">{c.pinyin}</div>
            <div className="mt-2 text-sm">{c.meaning_tg}</div>
            <Link href={`/characters/${encodeURIComponent(c.char)}`}>
              <a className="mt-3 inline-block text-sm text-blue-600">Бингар</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
