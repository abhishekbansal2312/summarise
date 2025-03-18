# Summarise - AI-Powered Document Summarization SaaS

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue)](https://summarise-nine.vercel.app/)

Summarise is an AI-powered SaaS application built with Next.js that generates concise summaries from PDF documents. The application features secure user authentication, subscription-based payment processing, and an intuitive dashboard for managing summaries and account information.

![Project Screenshot Placeholder](/summarise//public//heading.png)

## ✨ Features

- **PDF Processing**: Upload PDF documents and receive AI-generated summaries
- **Dual AI Integration**: Choose between OpenAI or Gemini AI for document summarization
- **User Authentication**: Secure login with email/password or social providers via Clerk
- **Subscription Management**: Tiered pricing with free and premium plans via Stripe
- **Responsive Dashboard**: Intuitive interface for managing documents and account
- **Dark/Light Mode**: Toggle between visual themes for better user experience

## 🛠️ Tech Stack

### Core Technologies

- **Next.js 15**: Server-side rendering, API routes, and optimized performance
- **TailwindCSS**: Utility-first CSS framework for responsive design
- **Shadcn UI**: Accessible, customizable component library
- **TypeScript**: Type-safe development experience

### Authentication & Storage

- **Clerk**: Comprehensive authentication with social logins and security features
- **NeonDB**: Serverless PostgreSQL database with scalability and built-in branching
- **UploadThing**: Secure and efficient file upload service with validation

### AI & Payments

- **OpenAI & Gemini AI**: Dual integration for flexible document summarization
- **Stripe**: Secure subscription management and payment processing

### Development Tools

- **Zod**: Type-safe form validation and data integrity
- **React Hook Form**: Efficient form state management

## 🏗️ Project Architecture

### Application Structure

```
/app
  /api           # API endpoints
  /(auth)        # Authentication pages
  /(dashboard)   # Protected dashboard routes
/components      # Reusable UI components
/lib             # Utility functions and hooks
/public          # Static assets
```

### Database Schema

The application uses a relational database with three primary tables:

- **Users**: Stores core user information and subscription status
- **PDF Summaries**: Stores processed document data and generated content
- **Payments**: Tracks all financial transactions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Clerk account for authentication
- Stripe account for payments
- NeonDB or PostgreSQL database
- OpenAI API key and/or Gemini AI API key

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/summarise.git
cd summarise
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file with the following variables:

```
# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Database
DATABASE_URL=postgres://...

# Storage
UPLOADTHING_SECRET=sk_...
UPLOADTHING_APP_ID=...

# AI Services
OPENAI_API_KEY=sk-...
GEMINI_API_KEY=...

# Payments
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

4. Set up the database schema:

```bash
# Using your preferred PostgreSQL client, run the schema.sql file
```

5. Run the development server:

```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Core Functionalities

### PDF Processing Workflow

1. User uploads PDF document through the dashboard
2. Backend extracts text content using PDF.js
3. Content is sent to AI service for summarization
4. Results are stored in database and displayed to user

### Subscription Management

- Free tier with limited summaries per month
- Premium tier with increased limits and additional features
- Seamless upgrade/downgrade process
- Payment history and receipts

## 🧰 Development Tools

For optimal development workflow, consider these VS Code extensions:

- **Tailwind Intellisense**: Autocomplete for Tailwind CSS classes
- **VS Code Icons**: Improved file navigation
- **Prettier**: Consistent code formatting
- **ESLint**: Code quality and standards enforcement
- **GitLens**: Enhanced Git capabilities

## 🚀 Deployment

The application is deployed on Vercel with the following configuration:

- Connected GitHub repository for continuous deployment
- Environment variables configured in Vercel dashboard
- Edge Functions for improved global performance
- Custom domain and SSL setup

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Clerk](https://clerk.com/)
- [NeonDB](https://neon.tech/)
- [OpenAI](https://openai.com/)
- [Gemini AI](https://ai.google.dev/)
- [Stripe](https://stripe.com/)
- [UploadThing](https://uploadthing.com/)
