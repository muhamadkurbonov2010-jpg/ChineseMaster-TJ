import fs from 'fs'
import { createClient } from '@supabase/supabase-js'
import path from 'path'

// Usage: set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in env and run `npm run seed:sample`
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error('Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in env (SERVICE_KEY only for server).')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY)

async function seed() {
  const file = path.join(process.cwd(), 'scripts/seed/sample-characters.json')
  const data = JSON.parse(fs.readFileSync(file, 'utf-8'))

  for (const item of data) {
    const { data: res, error } = await supabase.from('characters').upsert({
      char: item.char,
      pinyin: item.pinyin,
      meaning_tg: item.meaning_tg,
      meaning_ru: item.meaning_ru,
      short_definition_tg: item.short_definition_tg,
      examples: item.examples,
      strokes_json: item.strokes_json
    }, { onConflict: 'char' })

    if (error) console.error('Insert error', item.char, error)
    else console.log('Seeded', item.char)
  }
}

seed().then(() => console.log('Done')).catch(console.error)
