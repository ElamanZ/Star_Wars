import type { PersonSummary } from "@/types/type";
import { PeopleCard } from "./PeopleCard";
import { useNavigate, useParams } from "react-router-dom";
import { Dialog } from "../ui/dialog";
import { PeopleModal } from "./PeopleModal";

type Props = {
  people: PersonSummary[];
};

export const PeopleList = ({ people }: Props) => {
  const { id } = useParams();

  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/people/${id}`);
  };

  const closeModal = () => {
    navigate("/");
  };

  return (
    <>
      {people.length === 0 ? (
        <div className="flex justify-center items-center">People not found</div>
      ) : (
        people.map((person) => (
          <div key={person.uid} onClick={() => handleCardClick(person.uid)}>
            <PeopleCard person={person} />
          </div>
        ))
      )}

      <Dialog open={!!id} onOpenChange={closeModal}>
        {id && <PeopleModal id={id} />}
      </Dialog>
    </>
  );
};
