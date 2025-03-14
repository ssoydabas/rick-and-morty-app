import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ClientPage from "./_components/ClientPage";
import { getCharacters } from "@/lib/axios";

interface HomeProps {
  searchParams: Promise<{ page?: string; status?: string; gender?: string }>;
}
export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;

  const page = params.page || "1";
  const status = params.status || "";
  const gender = params.gender || "";

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["characters", { page, status, gender }],
    queryFn: () => getCharacters(Number(page), status, gender),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ClientPage
        initialPage={page}
        initialStatus={status}
        initialGender={gender}
      />
    </HydrationBoundary>
  );
}
