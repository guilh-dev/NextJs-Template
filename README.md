# Next.js Starter Template
A high-performance, accessible, and scalable boilerplate built with the latest React ecosystem. This template is designed to streamline the development of modern web applications with a focus on type safety, internationalisation, and polished user experience.

# Key Features

- **Bleeding Edge Stack**: Built with Next.js 16 and React 19, leveraging the latest Server Components and Actions.
- **Robust Localisation (i18n):** Full support for **English** and **Portuguese** via `next-intl`, including localized routing and middleware.
- **Advanced Theming:** A sophisticated Dark/Light mode toggle powered by `next-themes`, ensuring zero "flash of unstyled content" (FOUC).
- **Accessible UI Foundations:** Utilises **Radix UI Primitives** for complex components (Tooltips, Selects, Scroll Areas), ensuring full WAI-ARIA compliance.
- **Design System Integration:** Implementation of **Radix Colors** for a mathematically balanced and accessible colour palette.

# Technical Specification

- **Framework:** Next.js 16 (App Router).
- **Library:** React 19
- **Internationalisation:** `next-intl`
- **Styling & UI:** Radix UI Primitives & Radix Colors
- **Theme Management:** `next-themes`
- **Icons	Radix:** Icons

# Getting Started

## Prerequisites
Ensure you have Node.js 24.x or later installed.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/guilh-dev/NextJs-Template.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Initialise development server:
    ```bash
    npm run dev
    ```
The application will be available at [http://localhost:3000](http://localhost:3000).

# Architecture Decisions

## Why Radix UI?
Instead of using heavy UI frameworks, this template uses Radix UI Primitives. This allows for total control over the styling (via CSS or Tailwind) while Radix handles the difficult aspects of accessibility, such as keyboard navigation and focus management.

## Internationalisation (i18n)
The project structure follows the "Localized Path" strategy:
- `/[locale]/page.tsx`: Automatically handles language-specific routes.
- `/messages/*.json`: Centralised dictionaries for easy translation scaling.

## Colour Theory
By using Radix Colors, the template provides:
- Automatic contrast ratio compliance.
- Seamless transition between Light and Dark modes using semantic colour scales (e.g.,  slate-1 to slate-12).

# Licence
Distributed under the MIT Licence. See [LICENSE](https://github.com/guilh-dev/NextJs-Template/edit/master/LICENSE.txt) for more information.
