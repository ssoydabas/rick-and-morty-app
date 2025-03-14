import ClientPage from "@/app/(dashboard)/character/[id]/_components/ClientPage";
import { characterQueryKey, useCharacter } from "@/hooks/queries";
import { getCharacter } from "@/lib/axios";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

interface CharacterPageProps {
  params: Promise<{ id: string }>;
}
export default async function CharacterPage({ params }: CharacterPageProps) {
  const { id } = await params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [characterQueryKey, { id: Number(id) }],
    queryFn: () => getCharacter(Number(id)),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <ClientPage id={Number(id)} />
    </HydrationBoundary>
  );
}
