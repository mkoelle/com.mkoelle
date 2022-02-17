# com.mkoelle

Base project for mkoelle.com

## Infrastructure

### Hosting and backend

Hosted on [AWS S3](https://aws.amazon.com/s3) and served with [CloudFront](https://aws.amazon.com/cloudfront) with a custom domain, configured with [CloudFormation](https://aws.amazon.com/cloudformation)

### Feature and Tech

- [vue 3](https://vuejs.org)
- [Vite 2](https://vitejs.dev)
- File Based Routing via [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)
- Markdown Support via [vite-plugin-md](https://github.com/antfu/vite-plugin-md)
- [TypeScript](https://www.typescriptlang.org)
- Unit Testing via [Vilest](https://vitest.dev)
- E2E Testing via [playwright](https://playwright.dev)
- Package updates via [npx](https://github.com/raineorshine/npm-check-updates) or [taze](https://github.com/antfu/taze) (pending decision)

### Pending Feature and Tech

- Linting via [Eslint](https://eslint.org)
- Layouts via [vite-plugin-vue-layouts](https://github.com/johncampionjr/vite-plugin-vue-layouts)
- CSS and styling via [TBD](#)
- State management via [Pina](https://pinia.vuejs.org)
- Resume via [JSON Resume](https://jsonresume.org/)

## Reading

- [vitesse-stackter-clean-architect](https://github.com/shamscorner/vitesse-stackter-clean-architect)
- [vitesse](https://github.com/antfu/vitesse)
