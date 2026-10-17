-- RLS policies examples for Supabase

-- Enable RLS on writing_attempts
ALTER TABLE IF EXISTS public.writing_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY IF NOT EXISTS "users_can_manage_their_attempts" ON public.writing_attempts
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- progress table policies
ALTER TABLE IF EXISTS public.progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY IF NOT EXISTS "users_can_manage_their_progress" ON public.progress
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- profiles table
ALTER TABLE IF EXISTS public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY IF NOT EXISTS "allow_own_profile" ON public.profiles
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- characters: allow read-only for everyone
ALTER TABLE IF EXISTS public.characters ENABLE ROW LEVEL SECURITY;

CREATE POLICY IF NOT EXISTS "allow_read_chars" ON public.characters
  FOR SELECT
  USING (true);
