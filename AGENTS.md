# Repository Guidelines

## Project Structure & Module Organization
This is a Next.js portfolio built with the App Router. Page routes live in [`app/`](./app), shared UI and feature components live in [`components/`](./components), and reusable helpers live in [`lib/`](./lib). Static files such as images, the resume PDF, and icons live in [`public/`](./public). Use `@/components/*` and `@/components/ui/*` aliases for imports when possible.

## Build, Test, and Development Commands
- `npm run dev` - Starts the local development server on `http://localhost:3000`.
- `npm run build` - Creates a production build and catches type or route errors.
- `npm run start` - Runs the production build locally.
- `npm run lint` - Runs Next.js ESLint checks.

Use `npm` for consistency with the checked-in lockfile. There is no dedicated test runner configured in this repository.

## Coding Style & Naming Conventions
This project uses TypeScript with `strict: true`. Follow the existing style: 2-space indentation, double quotes, semicolons omitted, and functional React components. Name components in `PascalCase` (`ProfilePic`, `ServicesSection`), hooks and utilities in `camelCase`, and route folders in lowercase (`app/contact`, `app/resume`). Keep Tailwind classes grouped logically and prefer small reusable components over large page-only blocks.

## Testing Guidelines
Automated tests are not currently set up. Before opening a PR, validate changes with `npm run lint` and `npm run build`. If you add tests, place them close to the feature they cover and use descriptive names such as `component-name.test.tsx`.

## Commit & Pull Request Guidelines
Recent commits use short, lower-case messages with prefixes like `feat:`, `fix:`/`corrigido`, and `update`, often written in Portuguese. Keep commits focused and descriptive, for example `feat: add mobile nav animation`. PRs should include a short summary, screenshots for UI changes, and links to related issues when applicable.

## Configuration & Content Notes
Most content is portfolio-specific and image-heavy. When updating assets in `public/images-projects/`, keep filenames descriptive and preserve existing paths referenced by components. Avoid introducing unnecessary dependencies unless they clearly support the portfolio experience.
