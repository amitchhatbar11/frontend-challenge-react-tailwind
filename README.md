# Frontend Task Challenge

Welcome to the Soar Frontend Challenge repository! This project highlights a modern, modular, and responsive frontend application built with the latest web technologies and best practices.

## Live Preview

Experience the live version hosted on Vercel: [Soar Frontend Task Challenge](https://frontend-challenge-react-tailwind.vercel.app/)

---

## Running Locally

To get started on your local machine, follow these steps:

### Prerequisites

Before you begin, make sure you have installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install)

### Setup Process

1. **Clone the Repository:**
   ```bash
   git clone 
   cd soar-frontend-dev-task

2. Install Dependencies: Use `yarn` to install the necessary packages:

   ```bash
   yarn
   ```

3. Start the Development Server: Launch the project locally:

   ```bash
   yarn dev
   ```

4. Access the Application: Open your web browser and navigate to:

   ```
   http://localhost:3000
   ```

## Tech Stack

This project is built using the following technologies:

### Framework & Language

- **Next.js 15**: Enables server-side rendering, routing, and API management.
- **TypeScript**: Provides type safety and enhances the development experience.

### Styling

- **Tailwind CSS**: A utility-first CSS framework for fast UI development.
- **Shadcn/ui**: Pre-configured UI components tailored for Tailwind CSS.

### State Management

- **Zustand**: A lightweight and flexible state management library.

### Data Fetching & Handling

- **TanStack Query**: Manages asynchronous state and server-state.
- **Axios**: A robust HTTP client for API requests.

### Forms

- **React-hook-form**: Simplifies form management and validation.
- **Zod**: Provides schema validation and parsing for form inputs.

### Visualization & Carousel

- **Recharts**: Used for creating interactive data visualizations.
- **embla-carousel-react**: A modern and lightweight carousel solution for React.

### Additional Utilities

- **Sonner**: For notifications and toast messages.
- **Date-fns**: Efficient date management and formatting.

## Project Structure

The project is organized as follows:

```
soar-frontend-task/
├── components/          # Reusable UI components
├── hooks/               # Custom React hooks
├── app/                 # Next.js pages (frontend and API endpoints)
├── public/              # Static assets
├── lib/                 # Utility functions
├── stores/              # Zustand store
```

### Features

- **Mock API Integration**:

  - Uses Next.js API routes to simulate backend endpoints.
  - Axios handles API calls, with responses managed by TanStack Query.

- **Dynamic Charts**:

  - Interactive data visualizations using Recharts.

- **Forms with Validation**:

  - Robust and user-friendly forms with React-hook-form and Zod.

- **State Management**:

  - Global state managed seamlessly with Zustand.

- **Responsive Design**:

  - Ensures compatibility across various devices.

- **Carousel**:
  - Smooth and responsive content slider using embla-carousel-react.

## Additional Notes

- **Code Quality**: ESLint is configured to maintain code standards.
- **Performance**: Optimized with Next.js and TanStack Query caching.
- **Development Tools**:
  - Utilizes `@svgr/webpack` for SVG handling.
  - Configured with Tailwind CSS animations for smoother UI interactions.
# frontend-challenge-react-tailwind
