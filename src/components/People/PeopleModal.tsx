import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useFetchPeopleById } from "@/services/fetchPeopleById";

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
            <DialogTitle className="text-2xl">
              {person.properties.name}
            </DialogTitle>
            <DialogDescription>Character Information</DialogDescription>
          </DialogHeader>
          <div className="grid gap-2 py-4 text-sm">
            <p>
              <strong>Gender:</strong> {person.properties.gender}
            </p>
            <p>
              <strong>Height:</strong> {person.properties.height} cm
            </p>
            <p>
              <strong>Mass:</strong> {person.properties.mass} kg
            </p>
            <p>
              <strong>Birth Year:</strong> {person.properties.birth_year}
            </p>
            <p>
              <strong>Eye Color:</strong> {person.properties.eye_color}
            </p>
            <p>
              <strong>Hair Color:</strong> {person.properties.hair_color}
            </p>
            <p>
              <strong>Skin Color:</strong> {person.properties.skin_color}
            </p>
          </div>
          <DialogClose asChild>
            <Button className="bg-[#8A96CA] hover:bg-[#7c85af]">Close</Button>
          </DialogClose>
        </DialogContent>
      )}
    </>
  );
};
