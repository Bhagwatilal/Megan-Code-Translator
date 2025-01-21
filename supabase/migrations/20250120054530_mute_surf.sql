/*
  # Create user translations tracking table

  1. New Tables
    - `user_translations`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `source_language` (text)
      - `target_language` (text)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `user_translations` table
    - Add policy for authenticated users to read their own translations
    - Add policy for authenticated users to insert their own translations
*/

CREATE TABLE IF NOT EXISTS user_translations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  source_language text NOT NULL,
  target_language text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE user_translations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own translations"
  ON user_translations
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own translations"
  ON user_translations
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);