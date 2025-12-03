# Nuxt Minimal Starter

Это тестовое приложение, в котором решались задачи

1. подключить к проекту tailwindcss
2. определить новые JS-переменные для цветов primary и secondary
3. переопределить CSS-переменные значениями из JS-переменных
4. добавить новые значения переменных в CSS-темы

## Setup

Устагновка "чистого" приложения с Nuxt4

```bash
npx nuxi@latest init ArmadaFrontV2
cd ArmadaFrontV2
```

Установка зависимостей

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Development Server

Start the development server on `http://localhost:3000`:

(на самом деле порт 3000 - это порт поумолчанию, его можно переопределить в nuxt.config.ts в секции devServer.port)

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

### Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

### Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
