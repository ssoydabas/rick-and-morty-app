"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCharacter } from "@/hooks/queries";
import Image from "next/image";

interface ClientPageProps {
  id: number;
}
export default function ClientPage({ id }: ClientPageProps) {
  const { data, isLoading, isError } = useCharacter({ id });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  return (
    <div className="flex items-center justify-center p-12">
      <Card className="flex w-1/2 flex-col items-center">
        <CardHeader className="flex w-full flex-col items-center">
          {data?.image && (
            <div className="relative h-30 w-30 overflow-hidden rounded-full">
              <Image
                src={data.image}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <CardTitle>{data?.name}</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex gap-2">
            <p>{data?.status}</p>
            <p>{data?.gender}</p>
            <p>{data?.species}</p>
            <p>{data?.type}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
