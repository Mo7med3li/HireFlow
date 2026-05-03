# HireFlow 🚀

HireFlow is a modern, high-fidelity recruitment portal frontend built to demonstrate advanced UI/UX development, state management, and React architecture. It features a stunning, responsive design with a fully functional candidate directory and detailed profile views.

## ✨ Features

- **Premium UI/UX**: Built with standard Tailwind CSS and customized Shadcn UI components, featuring subtle gradients, modern typography, dynamic color-coded badges, and micro-animations.
- **Candidate Directory**: A discoverability grid that beautifully presents candidate cards. 
- **URL-Driven State**: Robust search (by name, headline, or skills) and complex sorting (by score or experience) logic entirely synchronized with URL query parameters, ensuring states are shareable and persist on reload.
- **Dynamic Profile Pages**: A detailed `candidate/:id` route showing experience, top skills, availability, and recruiter notes.
- **Seamless State Persistence**: Implements optimistic cache mutation using TanStack React Query to persist Candidate Status updates (e.g., from "Open to work" to "Hired") across page navigations without relying on heavy global state managers like Redux or Zustand.
- **Clean Architecture**: Highly modular structure utilizing custom hooks (`useFetchCandidates`, `useFetchSingleCandidate`), shared skeletons, and robust error handling boundaries.

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/) + [Lucide React](https://lucide.dev/) (Icons)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Data Fetching & State Management**: [TanStack React Query v5](https://tanstack.com/query/latest)

## 📁 Project Structure

```
src/
├── app/
│   └── pages/
│       ├── candidate/         # Candidate Profile Page (/candidate/:id)
│       │   ├── components/    # Profile specific components (Header, Details)
│       │   ├── hooks/         # Custom fetching hooks
│       │   └── candidate-page.tsx
│       ├── home/              # Main Recruitment Directory (/)
│       │   ├── components/    # Directory, Candidate Cards, Hero Section
│       │   ├── hook/          # Custom directory fetching hooks
│       │   └── home-page.tsx
│       └── pagesLayout.tsx    # Global layout wrapper
├── components/
│   ├── layout/                # Global Navbar/Footer
│   ├── providers/             # Global Providers (React Query Provider)
│   ├── shared/                # Shared UI (Error States)
│   ├── skeletons/             # Loading Skeletons
│   └── ui/                    # Base Shadcn/Tailwind UI Components (Input, Select)
├── data/
│   └── candidates.json        # Simulated database
├── lib/
│   ├── apis/                  # Simulated API layer with latency
│   ├── types/                 # Global TypeScript declarations
│   └── utils.ts               # Utility functions (cn merger)
└── main.tsx                   # Application Entry Point & Router Config
```

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mo7med3li/HireFlow.git
   cd HireFlow
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the localhost port provided by Vite (usually `http://localhost:5173`).

## 💡 Key Technical Decisions

- **React Query for State Persistence**: Instead of relying on Zustand for the "Status Update" requirement, React Query's `setQueryData` was utilized to optimistically update both the individual candidate cache and the directory list cache. This elegantly solves cross-page data persistence while keeping the dependency tree small.
- **URL Query Parameters**: Search and sort states use `useSearchParams` from React Router. By deriving `filteredCandidates` during render using `useMemo`, we eliminate redundant React state (`useState`) and ensure synchronization between the UI and the URL.
- **Tailwind Native Colors**: Transitioned away from deeply nested semantic CSS variables to explicit Tailwind color utilities (e.g., `slate-900`, `blue-50`) to provide a more visually predictable, premium aesthetic.
