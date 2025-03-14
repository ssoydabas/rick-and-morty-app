import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

export default function Header() {
  return (
    <div className="flex w-full items-center justify-between gap-2 border-b border-gray-200 p-4">
      <h1 className="text-2xl font-bold">Rick and Morty</h1>

      <Button>
        <HomeIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
