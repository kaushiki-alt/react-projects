"use client"

import * as React from "react"
import { useState } from 'react';
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [queryClient] = useState(
    () => new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60*1000*5,
    },
  },
})
  );
  return <NextThemesProvider {...props}
   attribute="class" 
  defaultTheme="light"
  enableSystem
  disableTransitionOnChange
  >
    <Toaster />
    <QueryClientProvider client={queryClient}>
    {children}
    </QueryClientProvider>
  </NextThemesProvider>
}