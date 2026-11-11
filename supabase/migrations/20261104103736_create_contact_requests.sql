/*
# Create contact_requests table

1. New Tables
- `contact_requests`: consultation requests submitted from the landing page contact form.
  - `id` (uuid, primary key)
  - `name` (text, required)
  - `email` (text, required)
  - `company` (text, optional)
  - `message` (text, required)
  - `created_at` (timestamptz, defaults to now)

2. Security
- Row level security is enabled on `contact_requests`.
- Visitors (anon) and signed-in users can only INSERT rows. There is no read, update or delete access from the browser, so submitted leads stay private.
- Only INSERT is granted to the API roles.

3. Notes
- Length limits are enforced with CHECK constraints so oversized submissions are rejected at the database.
*/

CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 254),
  company text CHECK (company IS NULL OR char_length(company) <= 120),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_requests TO anon, authenticated;

DROP POLICY IF EXISTS "public_insert_contact_requests" ON contact_requests;
CREATE POLICY "public_insert_contact_requests" ON contact_requests FOR INSERT
TO anon, authenticated WITH CHECK (true);
