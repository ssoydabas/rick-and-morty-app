# Rick and Morty App - Next.js Demo Project

This repository contains a Next.js application that showcases characters from the Rick and Morty API. The project demonstrates modern web development practices including Docker containerization, code quality tools, and a well-structured React application.

## Features

- Next.js 15 with App Router
- Docker containerization
- React Query for data fetching
- Shadcn UI components
- TypeScript
- Tailwind CSS
- Husky for Git hooks
- ESLint and Prettier for code quality
- Environment variable management

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm
- Docker (optional, for containerized deployment)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ssoydabas/rick-and-morty-app.git
cd rick-and-morty-app
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file based on the example:

```bash
cp .env.example .env
```

4. Run the development server:

```bash
npm run dev
```

5. Open http://localhost:3000 in your browser.

# Docker Setup

The application is containerized using Docker with a multi-stage build process for optimized production images.

### Dockerfile

The Dockerfile uses a straightforward single-stage build process:

- Base Image: Uses Node.js 20 Alpine for a lightweight container
- Dependencies: Installs npm dependencies from package.json
- Build: Copies the source code and builds the Next.js application
- Environment: Sets up production environment variables
- Startup: Runs the application with npm start

### Building and Running with Docker

```bash
docker build -t rick-and-morty-app .
docker run -p 3000:3000 rick-and-morty-app
```

Access the application at http://localhost:3000.

### Environment Variables

The application uses environment variables for configuration:

- NEXT_PUBLIC_API_URL: The public URL for the Rick and Morty API
- API_URL: The server-side URL for the Rick and Morty API

These are validated using @t3-oss/env-nextjs to ensure type safety.

### Project Structure

```
rick-and-morty-app/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # Reusable UI components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions and API clients
│   ├── providers/           # React context providers
│   └── env.ts               # Environment variable validation
├── public/                  # Static assets
├── .husky/                  # Git hooks configuration
├── Dockerfile               # Docker configuration
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── package.json             # Project dependencies and scripts
```

### Code Quality Tools

- Husky: Git hooks for linting and formatting
- ESLint: JavaScript linting
- Prettier: Code formatting
- lint-staged: Lint staged files before committing
- tsc: TypeScript compiler

### API Integration

The application uses the Rick and Morty API to fetch character data. The API client is implemented using Axios and React Query for efficient data fetching and caching.

### UI

The application uses Shadcn UI components for the UI.

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgments

- Rick and Morty API for providing the data
- Next.js for the React framework
- Tailwind CSS for styling
- shadcn/ui for UI components
