import { Input } from "@/components/ui/input";

type Props = {
  search: string;
  onSearchChange: (value: string) => void;
};

export const PeopleFilters = ({ search, onSearchChange }: Props) => {
  return (
    <header className="flex items-center justify-center gap-4 p-4 border-b shadow-sm bg-[#8A96CA] mb-5">
      <Input
        className="w-[280px] bg-white"
        placeholder="Search"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </header>
  );
};
