# Turborepo Starter
This repository contains a collection of sample services along with their basic boilerplate.

## Services Included

This project includes the following services:

- **Express Server**: Located in `app/express-server`
- **Next.js Web Application**: Located in `app/nextjs-web`
- **WebSocket Server**: Located in `app/ws-server`
- **React Web Application**: Located in `app/react-web`

## Shared Packages

In addition to the services, this repository also includes some shared packages:

- **db**: Database utilities and configurations
- **common**: Common utilities and helpers
- **backend-common**: Shared backend logic and components

## Turbo Commands

Here are some useful Turbo commands you can use in this project:

-   **Run all services in development mode**:
    
    
    ```bash
    npx turbo run dev
    
    ```
    
    Starts all services in development mode.
    
-   **Build All Services**:
    
    bash
    
    ```bash
    npx turbo run build
    
    ```
    
    Builds all services for production. This command compiles the code and prepares it for deployment.
    
- **Run Specific Service**:
    
    
    ```bash
    npx turbo run <service-name>
    
    ```
    
    Replace  `<service-name>`  with the name of the service you want to run (e.g.,  `express-server`,  `nextjs-web`, etc.).
    
-   **Run Tests**:
    
    
    ```bash
    npx turbo run test
    
    ```
    
    Executes tests for all services. Ensure your tests are defined in each service's package.
    
-   **Lint Code**:
    
    
    ```bash
    npx turbo run lint
    
    ```
    
    Runs the linter on all services to ensure code quality and consistency.
    
-   **Clean Build Artifacts**:
    
    
    ```bash
    npx turbo run clean
    
    ```
    
    Cleans up build artifacts and temporary files from all services.
    

## Contributing

We welcome contributions! If you have suggestions or improvements, feel free to open an issue or submit a pull request.
