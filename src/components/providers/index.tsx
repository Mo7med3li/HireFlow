import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import { Toaster } from "../ui/sonner";

type ProviderProps = {
  children: React.ReactNode;
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function Providers({ children }: ProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* React Query Devtools */}

      {/* App Content */}

      {children}
      {/* //   <Toaster /> */}
    </QueryClientProvider>
  );
}
