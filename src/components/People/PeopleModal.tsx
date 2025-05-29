import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useFetchPeopleById } from "@/services/fetchPeopleById";
import defaultPreview from "@/assets/default_img.jpeg";

type Props = {
  id: string;
};

export const PeopleModal = ({ id }: Props) => {
  const [person] = useFetchPeopleById(id);

  return (
    <>
      {!person ? (
        <div>Данный персонаж не найден</div>
      ) : (
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <div className="aspect-square h-52 rounded-2xl overflow-hidden relative mt-4">
              <img
                src={defaultPreview}
                alt="person-preview"
                className="object-cover aspect-square w-full rounded-2xl"
              />
            </div>
            <DialogTitle className=" text-2xl">{person.name}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-2 py-4 text-sm">
            <p>Character Information</p>
            <p>
              <strong>Gender:</strong> {person.gender}
            </p>
            <p>
              <strong>Height:</strong> {person.height} cm
            </p>
            <p>
              <strong>Mass:</strong> {person.mass} kg
            </p>
            <p>
              <strong>Birth Year:</strong> {person.birth_year}
            </p>
            <p>
              <strong>Eye Color:</strong> {person.eye_color}
            </p>
            <p>
              <strong>Hair Color:</strong> {person.hair_color}
            </p>
            <p>
              <strong>Skin Color:</strong> {person.skin_color}
            </p>
          </div>
          <DialogClose asChild>
            <Button className="bg-[#8A96CA] hover:bg-[#7c85af] cursor-pointer">
              Close
            </Button>
          </DialogClose>
        </DialogContent>
      )}
    </>
  );
};
