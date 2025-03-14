"use client";

import { ReactNode } from "react";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import NuqsProvider from "@/providers/NuqsProvider";

interface ProvidersProps {
  children: ReactNode;
}
export default function Providers({ children }: ProvidersProps) {
  return (
    <ReactQueryProvider>
      <NuqsProvider>{children}</NuqsProvider>
    </ReactQueryProvider>
  );
}
