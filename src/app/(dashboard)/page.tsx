import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ClientPage from "./_components/ClientPage";
import { getCharacters } from "@/lib/axios";

interface HomeProps {
  searchParams: { page?: string; status?: string; gender?: string };
}
export default async function Home({ searchParams }: HomeProps) {
  const page = Number(searchParams.page || "1");
  const status = searchParams.status || "";
  const gender = searchParams.gender || "";

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["characters", { page, status, gender }],
    queryFn: () => getCharacters(page, status, gender),
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
