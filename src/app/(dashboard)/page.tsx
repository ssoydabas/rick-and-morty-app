import { CharacterType } from "@/lib/axios/types";
import CharactersTable from "./_components/CharactersTable";
import {
  charactersTableColumns,
  charactersTableFilters,
} from "@/app/(dashboard)/_components/CharactersTable/utils";

export default function Home() {
  const dummyData = [
    {
      id: 1,
      name: "Character One",
      status: "Alive",
      species: "Human",
      type: "Hero",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      id: 2,
      name: "Character Two",
      status: "Dead",
      species: "Human",
      type: "Villain",
      gender: "Female",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      id: 3,
      name: "Character Three",
      status: "Alive",
      species: "Human",
      type: "Sidekick",
      gender: "Non-binary",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
  ] as CharacterType[];

  return (
    <div className="px-4 py-2">
      <CharactersTable
        columns={charactersTableColumns}
        data={dummyData}
        filters={charactersTableFilters}
      />
    </div>
  );
}
