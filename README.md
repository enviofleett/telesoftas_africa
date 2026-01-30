# Telesoftas Project

This is a modern web application built with [Next.js](https://nextjs.org), integrated with [Supabase](https://supabase.com) for blog management and authentication, and [Resend](https://resend.com) for email services.

## Getting Started

### Prerequisites

- Node.js 18+
- A Supabase Project
- A Resend API Key

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables by creating a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   RESEND_API_KEY=your_resend_api_key
   ```

### Database Setup (Supabase)

1. Go to your Supabase SQL Editor.
2. Run the following SQL to create the `posts` table and set up Row Level Security (RLS):

```sql
-- Create the posts table
CREATE TABLE posts (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT,
  description TEXT,
  image_url TEXT,
  content TEXT,
  author TEXT,
  read_time TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Allow public read access" ON posts FOR SELECT TO public USING (true);

-- Authenticated full access (for Admin)
CREATE POLICY "Allow authenticated full access" ON posts FOR ALL TO authenticated USING (true) WITH CHECK (true);
```

### Authentication & Admin Access

1. In Supabase, go to **Authentication > Users**.
2. Click **Add user** and create an admin email/password.
3. You can now log into the admin dashboard at `/admin/login`.

### Data Migration

To migrate existing blog post data from the local JSON file to Supabase, run:
```bash
npx tsx src/scripts/migrate.ts
```
*Note: This requires `SUPABASE_SERVICE_ROLE_KEY` to be set in your `.env.local`.*

### Email Service (Resend)

The contact form uses [Resend](https://resend.com) to send email notifications when users submit the contact form.

#### Setup Steps:

1. **Create a Resend Account**
   - Go to [resend.com](https://resend.com) and sign up for a free account.

2. **Get Your API Key**
   - In your Resend dashboard, go to **API Keys**.
   - Click **Create API Key** and copy the generated key.

3. **Add the API Key to Environment Variables**
   - Add to your `.env.local` file:
     ```env
     RESEND_API_KEY=re_your_api_key_here
     ```

4. **Configure the Recipient Email**
   - Open `src/app/api/send/route.ts`
   - Update the `to` field with your actual email address:
     ```typescript
     to: ['your-actual-email@example.com'],
     ```

5. **Verify Your Domain (Optional but Recommended)**
   - In Resend dashboard, go to **Domains**.
   - Add and verify your domain to send emails from your own address instead of `onboarding@resend.dev`.
   - Once verified, update the `from` field in `src/app/api/send/route.ts`:
     ```typescript
     from: 'Contact Form <contact@yourdomain.com>',
     ```

#### Testing

- During development, Resend's free tier allows 100 emails/month.
- With `onboarding@resend.dev` as the sender, emails can only be sent to the email address associated with your Resend account.
- Verify your domain to send to any email address.

## Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
