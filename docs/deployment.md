# Deployment and Supabase integration

This document outlines steps to deploy the scaffold to Vercel and set up Supabase.

1) Supabase
- Create a new project at https://app.supabase.com
- Note the Project URL and anon/service_role keys.
- In the SQL editor, run the SQL from `db/schema.sql` and then `db/rls-policies.sql`.
- Create a `profiles` entry for test users or use Supabase Auth for signup.

2) Vercel
- Import the GitHub repo into Vercel.
- Add Environment Variables in Vercel project settings:
  - NEXT_PUBLIC_SUPABASE_URL
  - NEXT_PUBLIC_SUPABASE_ANON_KEY
  - SUPABASE_SERVICE_ROLE_KEY (only if you need server-side seed/migration scripts; do NOT expose to client builds)

3) Seed
- Locally run `npm run seed:sample` with SUPABASE_SERVICE_ROLE_KEY in your .env.local (server-only key).
- Alternatively run seed as a GitHub Action with secrets configured.

4) Notes
- Do not commit service role keys to the repo.
- Replace placeholder images/audio with licensed assets before production.
- Handwriting scoring is heuristic in this scaffold — mark results as approximate in the UI.
