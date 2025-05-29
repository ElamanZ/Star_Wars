import { Button } from "@/components/ui/button";
import defaultPreview from "@/assets/default_img.jpeg";
import type { PersonSummary } from "@/types/type";

type Props = {
  person: PersonSummary;
};

export const PeopleCard = ({ person }: Props) => {
  const personData = person.properties ? person.properties : person;
  return (
    <>
      <div className="bg-white flex w-60 h-[300px] flex-col border-b shadow-xl rounded-xl border cursor-pointer">
        <div className="aspect-square overflow-hidden relative">
          <img
            src={defaultPreview}
            alt={`${personData.url}-preview`}
            className="object-cover aspect-square w-full rounded-xl"
            width={200}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-3 p-4">
          <div className="text-xl font-bold">{personData.name}</div>
          <Button className="cursor-pointer bg-[#8A96CA] hover:bg-[#7c85af]">
            More
          </Button>
        </div>
      </div>
    </>
  );
};
