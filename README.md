
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
