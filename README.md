<<<<<<< HEAD
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
=======
# Next.js-E-commerce-Project
This project is a full-featured e-commerce application built with Next.js 13+, featuring App Router, server components, and authentication with NextAuth.js. The app demonstrates modern web development practices with React and the latest Next.js features.

Abby Store E-commerce Project
A modern e-commerce platform built with Next.js and Tailwind CSS.
Features

User Authentication: Secure login and registration with password validation
User Dashboard: Profile management and order tracking
Responsive Design: Works seamlessly on mobile, tablet, and desktop
Product Catalog: Browse and purchase products
About & Contact: Company information and contact form

Tech Stack

Framework: Next.js 13+ (App Router)
Authentication: NextAuth.js
Database: PostgreSQL with Prisma ORM
Styling: Tailwind CSS
State Management: React Hooks
Form Validation: Client-side validation

Getting Started
Prerequisites

Node.js 18.x or later
PostgreSQL
npm or yarn

Installation
Clone the repository

git clone https://github.com/yourusername/abby-store.git
cd abby-store

Install dependencies

bashCopynpm install

Set up environment variables
Create a .env file with:

DATABASE_URL="postgresql://username:password@localhost:5432/abby_store"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

Run database migrations

npx prisma generate
npx prisma db push

Start the development server

npm run dev
The application will be available at http://localhost:3000.
Deployment
This application can be deployed on platforms like Vercel, Netlify, or any hosting provider that supports Next.js.
npm run build
npm start
License
This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgments

Next.js team for the amazing framework
Tailwind CSS for the utility-first CSS framework
NextAuth.js for the authentication library
>>>>>>> 7847d4200daa32b646a166e36480f4e0533432cb
