# Penguinops Website

This project is now a [Quarto](https://quarto.org/) static website.

## Prerequisites

Install Quarto on your system:

https://quarto.org/docs/get-started/

## Local Development

```bash
quarto preview
```

This starts a local preview server with live reload.

You can also use the helper npm scripts (no runtime dependencies):

```bash
npm run preview
```

## Build

```bash
quarto render
```

The generated static site is written to `_site/`.

## Publish

For GitHub Pages (via `gh-pages` branch):

```bash
quarto publish gh-pages
```
