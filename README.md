# React + Vite + Carbon Design System

This template provides a minimal setup to get Carbon's React components working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Carbon SASS assets

> From https://carbondesignsystem.com/migrating/guide/develop#migrating-a-react-app-or-library

| Carbon sass I’m using | Sass modules to include |
| --- | --- |
| Theme tokens | @use '@carbon/react/scss/theme' as * |
| Theme mixins | @use '@carbon/react/scss/themes' as * |
| Design language color tokens | @use '@carbon/react/scss/colors' as * |
| Spacing tokens | @use '@carbon/react/scss/spacing' as * |
| Breakpoint mixins | @use '@carbon/react/scss/breakpoint' as * |
| Motion tokens and functions | @use '@carbon/react/scss/motion' as * |
| Rem and other convert functions | @use '@carbon/react/scss/utilities/convert' as * |
| Z-index helper | @use '@carbon/react/scss/utilities/z-index' as * |
| Focus outline helper | @use '@carbon/react/scss/utilities/focus-outline' as * |
| Transform rotate helper | @use '@carbon/react/scss/utilities/rotate' as * |
| Skeleton animation helper | @use '@carbon/react/scss/utilities/skeleton' as * |
