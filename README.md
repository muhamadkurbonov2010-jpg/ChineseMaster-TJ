# ChineseMaster-TJ

ChineseMaster-TJ — free Mandarin Chinese learning platform for Tajik speakers.

This repository is an initial scaffold (MVP) built with Next.js + TypeScript + Tailwind CSS and intended to be used with Supabase (Postgres + Auth + Storage). It includes database schema, RLS policy examples, seed scripts (sample 4 characters), and a minimal Next.js app skeleton with components for Hanzi rendering and a handwriting canvas.

Important notes
- No secrets or real production keys are stored in this repository.
- Audio/images provided here are placeholders. Replace with real, licensed content before production.
- Handwriting auto-evaluation is implemented as a heuristic placeholder. Results are marked "approximate" in UI.
- If Supabase or any remote API is not connected, pages will clearly indicate the limitation.

Quick start (local)

1. Clone

   git clone https://github.com/muhamadkurbonov2010-jpg/ChineseMaster-TJ.git
   cd ChineseMaster-TJ

2. Install

   npm install

3. Create a Supabase project (https://supabase.com) and set environment variables in a .env.local file:

   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key  # only for seed scripts; DO NOT expose in client

4. Run dev server

   npm run dev

5. Seed sample content (optional, requires SUPABASE_SERVICE_ROLE_KEY)

   npm run seed:sample

Files of interest
- /app - Next.js App Router scaffold (home, auth, characters)
- /components - UI components (HanziViewer, WritingCanvas)
- /db/schema.sql - DB schema (tables)
- /db/rls-policies.sql - Row Level Security policy examples
- /scripts/seed - sample seed data and seed script
- /docs/deployment.md - deployment and Supabase integration notes

Next steps
- Connect Supabase, run migrations (see db/schema.sql), run seed script.
- Add real content progressively (HSK lists, stroke JSON for hanzi-writer, licensed audio/images).
- Implement full exercises, tests, and certificate generation.

License: MIT
