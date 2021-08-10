# NextJS Starter Kit

A Next.js app configured with:

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [husky](https://github.com/typicode/husky) for commit hooks
- Testing with [Cypress](https://www.cypress.io/), [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

## Requirements

- [Node.js](https://nodejs.org/) v15.11.0 or later

Recommended:

- [Node Version Manager](https://github.com/nvm-sh/nvm)

## Getting Started

### Install dependencies

```bash
npm install
```

### Setup Husky Git Hooks

#### Pre-commit
```bash
npx husky add .husky/pre-commit 'npm run lint && npm run format -- --staged && npm run test:pre-commit && npm run e2e:headless'
```
#### Pre-push
```bash
npx husky add .husky/pre-push 'npm run type-check'
```

### Run the development server

```bash
npm run dev
```

Open [https://localhost:3000](https://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [https://localhost:3000/api/hello](https://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `src/pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/ronsj/nextjs-dx-starter&project-name=nextjs-dx-starter&repository-name=nextjs-dx-starter)

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
