# NextJS DX Starter Kit

A developer-friendly NextJS app configured with:

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [husky](https://github.com/typicode/husky) for commit hooks
- Testing with [Cypress](https://www.cypress.io/), [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

## Requirements

- [Node.js](https://nodejs.org/) installed via (Node Version Manager)[https://github.com/nvm-sh/nvm]

## Getting Started

### Enable HTTPS on localhost

Create the public and private keys:

```bash
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```

Open the `.crt` file. The Keychain Access app will open and add it to the "System" keychain.

Double click on the "localhost" cert that was just added. Under "Trust" set "When using this certificate" to "Always Trust".

### Run the development server:

```bash
npm run dev
```

Open [https://localhost:3000](https://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [https://localhost:3000/api/hello](https://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `src/pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deploy

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
