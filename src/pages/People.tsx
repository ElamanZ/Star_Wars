import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFetchPeople } from "@/services/fetchPeople";
import { useState } from "react";
import defaultPreview from "../assets/default_img.jpeg";
import { Skeleton } from "@/components/ui/skeleton";

const People = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState<string | undefined>();

  const { data, isLoading, error } = useFetchPeople({
    page,
    limit,
    search,
    gender,
  });

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className=" bg-[#E9EAEE]">
      <header className="flex items-center justify-center gap-4 p-4 border-b shadow-sm bg-[#8A96CA] mb-5">
        <Input
          className="w-[280px] bg-white"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Select value={gender} onValueChange={setGender}>
          <SelectTrigger className="w-[200px] bg-white">
            <SelectValue placeholder="Gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Male">Male</SelectItem>
            <SelectItem value="Female">Female</SelectItem>
          </SelectContent>
        </Select>
      </header>

      {isLoading ? (
        <div className="flex flex-wrap items-center justify-center gap-4 px-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="bg-white flex w-60 h-[300px] flex-col border-b shadow-xl rounded-xl border"
            >
              <div className="aspect-square overflow-hidden relative">
                <Skeleton className="h-[100px] w-[200px] rounded-xl mx-auto mt-4" />
              </div>
              <div className="flex flex-col gap-3 p-4">
                <Skeleton className="h-6 w-40 rounded-md" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-4 px-4">
          {data?.results.map((person) => (
            <div
              key={person.url}
              className="bg-white flex w-60 h-[300px] flex-col border-b shadow-xl rounded-xl border"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={defaultPreview}
                  alt={`${person.url}-preview`}
                  className="object-cover aspect-square w-full rounded-xl"
                  width={200}
                  height={100}
                />
              </div>
              <div className="flex flex-col gap-3 p-4">
                <div className="text-xl font-bold">{person.name}</div>
                <Button className="cursor-pointer bg-[#8A96CA] hover:bg-[#7c85af]">
                  More
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="py-5 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              />
            </PaginationItem>
            <PaginationItem></PaginationItem>

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() =>
                  setPage((p) => Math.min(data?.total_pages ?? 1, p + 1))
                }
                disabled={page === data?.total_pages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default People;
