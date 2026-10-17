-- DB schema for ChineseMaster-TJ (initial)

-- users: use Supabase auth; optional profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  display_name text,
  locale text DEFAULT 'tg',
  daily_goal_minutes int DEFAULT 15,
  created_at timestamptz DEFAULT now()
);

-- characters table (hanzi)
CREATE TABLE IF NOT EXISTS characters (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  char text NOT NULL UNIQUE,
  pinyin text NOT NULL,
  meaning_tg text,
  meaning_ru text,
  short_definition_tg text,
  short_definition_ru text,
  audio_url text,
  stroke_count int,
  strokes_json jsonb,
  components jsonb,
  level text,
  topics text[],
  examples jsonb,
  created_at timestamptz DEFAULT now()
);

-- vocabulary table
CREATE TABLE IF NOT EXISTS vocab (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  word text NOT NULL,
  pinyin text,
  meaning_tg text,
  meaning_ru text,
  characters text[],
  image_url text,
  audio_url text,
  level text,
  topic text,
  examples jsonb,
  created_at timestamptz DEFAULT now()
);

-- sentences
CREATE TABLE IF NOT EXISTS sentences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  sentence text NOT NULL,
  pinyin text,
  meaning_tg text,
  meaning_ru text,
  audio_url text,
  created_at timestamptz DEFAULT now()
);

-- writing attempts (handwriting practice)
CREATE TABLE IF NOT EXISTS writing_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id),
  character_id uuid REFERENCES characters(id),
  attempt_data jsonb,
  score numeric,
  matched boolean,
  attempts_count int DEFAULT 1,
  created_at timestamptz DEFAULT now()
);

-- progress
CREATE TABLE IF NOT EXISTS progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id),
  item_type text,
  item_id uuid,
  status text,
  last_reviewed timestamptz,
  interval_days int DEFAULT 0,
  ease_factor float DEFAULT 2.5,
  repetition int DEFAULT 0,
  metadata jsonb,
  created_at timestamptz DEFAULT now()
);

-- favorites
CREATE TABLE IF NOT EXISTS favorites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id),
  item_type text,
  item_id uuid,
  created_at timestamptz DEFAULT now()
);

-- grammar topics (static content)
CREATE TABLE IF NOT EXISTS grammar_topics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_tg text,
  title_ru text,
  title_en text,
  content_md text,
  examples jsonb,
  created_at timestamptz DEFAULT now()
);
