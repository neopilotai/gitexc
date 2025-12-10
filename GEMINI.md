# GitExec Project Overview

GitExec is a JavaScript/TypeScript monorepo designed to enable the use of a subdirectory within a GitHub repository as a yarn or npm dependency. This allows for more flexible dependency management, especially when working with monorepos or specific parts of a larger project hosted on GitHub.

## Key Features

*   Use subfolders of a GitHub repository as yarn/npm dependencies.
*   Support for custom scripts to build source code during installation.

## Technologies Used

*   **TypeScript**: For type-safe JavaScript development.
*   **Node.js**: The runtime environment.
*   **pnpm**: A fast, disk space efficient package manager.
*   **TurboRepo**: A high-performance build system for JavaScript and TypeScript monorepos.
*   **Lerna**: A tool for managing JavaScript projects with multiple packages.
*   **Express**: For building the API.
*   **VuePress**: For documentation.

## Project Structure

This project is structured as a monorepo with the following main directories:

*   `api/`: Contains the API routes and utility functions.
*   `docs/`: Houses the project documentation built with VuePress.
*   `packages/`: Contains individual packages within the monorepo, such as `@gitexec/core`.
*   `tools/`: Utility scripts and configurations for the monorepo.

## Building and Running

To get started with GitExec, follow these steps:

1.  **Install Dependencies**:
    ```bash
    pnpm install
    ```

2.  **Build All Packages**:
    ```bash
    pnpm run build
    ```

3.  **Run in Development Mode**:
    ```bash
    pnpm run dev
    ```

4.  **Run Tests**:
    ```bash
    pnpm run test
    ```

5.  **Run Linters**:
    ```bash
    pnpm run lint
    ```

## Development Conventions

*   **Code Formatting and Linting**: The project uses `eslint` and `prettier` to enforce consistent code style. You can fix linting issues with `pnpm run lint:fix`.
*   **Testing**: Unit and integration tests are written using `Jest`.
*   **Pre-commit Hooks**: `husky` and `lint-staged` are configured to run linting and formatting checks before commits.
