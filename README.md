# @djblackeagle/code-style <!-- omit in toc -->

[![npm version](https://img.shields.io/npm/v/@djblackeagle/code-style.svg)][REF_INTERN_URL_NPMJS_PACKAGE]
[![Downloads](https://img.shields.io/npm/dm/@djblackeagle/code-style.svg)][REF_INTERN_URL_NPMJS_PACKAGE]
[![License](https://img.shields.io/badge/License-MIT-blue.svg)][REF_INTERN_URL_LICENSE]
[![Code Style](https://img.shields.io/badge/code_style-@djblackeagle/code--style-blue.svg)][REF_INTERN_URL_CODESTYLE]
[![CodeQL](https://github.com/DJBlackEagle/code-style/workflows/CodeQL/badge.svg)][REF_INTERN_URL_ACTIONS]
[![Build Status](https://github.com/DJBlackEagle/code-style/workflows/CI/badge.svg)][REF_INTERN_URL_ACTIONS]

**A unified configuration to enforce consistent code style across your JavaScript and TypeScript projects, using ESLint, Prettier, and Commitlint.**

## Table of Contents

- [Benefits](#benefits)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [Security](#security)
- [License](#license)

# Benefits

Using `@djblackeagle/code-style` offers several advantages for your projects:

- **Consistency:** Enforce a unified code style across all your JavaScript and TypeScript projects.
- **Readability:** Improve code readability and maintainability with standardized formatting.
- **Efficiency:** Save time by automating code style enforcement with ESLint and Prettier.
- **Collaboration:** Facilitate team collaboration with consistent code and commit messages.
- **Quality:** Improve code quality by catching potential issues early with ESLint.
- **Standardized Commits:** Ensure clear and informative commit messages with Commitlint, following [Conventional Commits][REF_EXTERN_CONVENTIONALCOMMITS].

[[Go to top](#djblackeaglecode-style)]

# Getting Started

This section will guide you through setting up and configuring `@djblackeagle/code-style` in your project.

[[Go to top](#djblackeaglecode-style)]

## Requirements

- [Node.js][REF_EXTERN_NODEJS] (>=18.0.0)
- [npm][REF_EXTERN_NPM] or [pnpm][REF_EXTERN_PNPM] or [Yarn][REF_EXTERN_YARN]
- [ESLint][REF_EXTERN_ESLINT] (>=9.0.0)
- [Prettier][REF_EXTERN_PRETTIER] (>=3.5.0)

[[Go to top](#djblackeaglecode-style)]

## Installation

Install `@djblackeagle/code-style` and its dependencies using your preferred package manager:

```sh
# npm
npm install --save-dev @djblackeagle/code-style eslint prettier

# pnpm
pnpm add --save-dev @djblackeagle/code-style eslint prettier

# Yarn
yarn add --dev @djblackeagle/code-style eslint prettier
```

[[Go to top](#djblackeaglecode-style)]

## Configuration

### ESLint <!-- omit in toc -->

Create or modify your eslint.config.mjs file and add the following:

```javascript
import { codeStyle } from '@djblackeagle/code-style';

/** @type {import('eslint').Linter.Config[]} */
const config = [...(await codeStyle.eslint.configs.base())];

export default config;
```

### Prettier <!-- omit in toc -->

Create or modify your prettier.config.mjs file and add the following:

```javascript
import { codeStyle } from '@djblackeagle/code-style';

const config = {
  ...codeStyle.prettier.configs.base(),
};

export default config;
```

[[Go to top](#djblackeaglecode-style)]

# Contributing

We welcome contributions from the community! If you're interested in helping to improve `@djblackeagle/code-style`, please take a look at our [Contributing Guidelines][REF_INTERN_URL_CONTRIBUTING] for more information on how to get started.

[[Go to top](#djblackeaglecode-style)]

# Code of Conduct

We are committed to fostering a welcoming and inclusive community. Please review our [Code of Conduct][REF_INTERN_URL_CODE_OF_CONDUCT] to understand our expectations for behavior within the project.

[[Go to top](#djblackeaglecode-style)]

# Security

If you discover a security vulnerability in `@djblackeagle/code-style`, please follow our [Security Guidelines][REF_INTERN_URL_SECURITY] to report it responsibly.

[[Go to top](#djblackeaglecode-style)]

# License

This project is licensed under the [MIT License][REF_INTERN_URL_LICENSE].

[[Go to top](#djblackeaglecode-style)]

[REF_INTERN_URL_GIT]: https://github.com/DJBlackEagle/code-style
[REF_INTERN_URL_CONTRIBUTING]: https://github.com/DJBlackEagle/code-style/blob/main/CONTRIBUTING.md
[REF_INTERN_URL_README]: https://github.com/DJBlackEagle/code-style/blob/main/README.md
[REF_INTERN_URL_CHANGELOG]: https://github.com/DJBlackEagle/code-style/blob/main/CHANGELOG.md
[REF_INTERN_URL_CODE_OF_CONDUCT]: https://github.com/DJBlackEagle/code-style/blob/main/CODE_OF_CONDUCT.md
[REF_INTERN_URL_LICENSE]: https://github.com/DJBlackEagle/code-style/blob/main/LICENSE
[REF_INTERN_URL_SECURITY]: https://github.com/DJBlackEagle/code-style/blob/main/SECURITY.md
[REF_INTERN_URL_ISSUES]: https://github.com/DJBlackEagle/code-style/issues
[REF_INTERN_URL_NEW_ISSUE]: https://github.com/DJBlackEagle/code-style/issues/new/choose
[REF_INTERN_URL_PULLREQUEST]: https://github.com/DJBlackEagle/code-style/pulls
[REF_INTERN_URL_COMMITS]: https://github.com/DJBlackEagle/code-style/commits/main/
[REF_INTERN_URL_VULNERABILITY]: https://github.com/DJBlackEagle/code-style/security
[REF_INTERN_URL_NEW_VULNERABILITY]: https://github.com/DJBlackEagle/code-style/security/advisories/new
[REF_INTERN_URL_ACTIONS]: https://github.com/DJBlackEagle/code-style/actions
[REF_INTERN_EMAIL_ADDRESS_COD]: mailto:djblackeagle-dev@djblackeagle.services
[REF_INTERN_EMAIL_ADDRESS_OWNER]: mailto:djblackeagle-dev@djblackeagle.services
[REF_INTERN_EMAIL_ADDRESS_SECURITY]: mailto:djblackeagle-dev@djblackeagle.services
[REF_INTERN_URL_NPMJS_PACKAGE]: https://www.npmjs.com/package/@djblackeagle/code-style
[REF_INTERN_URL_CODESTYLE]: https://github.com/DJBlackEagle/code-style
[REF_EXTERN_CONVENTIONALCOMMITS]: https://www.conventionalcommits.org/en/v1.0.0/
[REF_EXTERN_CONTRIBUTING_MD]: https://contributing.md/generator
[REF_EXTERN_NODEJS]: https://nodejs.org
[REF_EXTERN_NPM]: https://www.npmjs.com
[REF_EXTERN_PNPM]: https://pnpm.io
[REF_EXTERN_YARN]: https://yarnpkg.com
[REF_EXTERN_ESLINT]: https://eslint.org
[REF_EXTERN_PRETTIER]: https://prettier.io
