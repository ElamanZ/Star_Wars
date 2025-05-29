import { useState } from "react";
import { useFetchPeople } from "@/services/fetchPeople";
import { PeopleFilters } from "@/components/People/PeopleFilters";
import { PeopleSkeleton } from "@/components/People/PeopleSkeleton";
import { PeopleList } from "@/components/People/PeopleList";
import { PeoplePagination } from "@/components/People/PeoplePagination";
import { useDebounce } from "@/hooks/useDebounce";

const PeoplePage = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [search, setSearch] = useState("");

  const debounsedSearch = useDebounce(search, 1000);

  const { data, isLoading, error } = useFetchPeople({
    page,
    limit,
    name: debounsedSearch,
  });

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-[#E9EAEE]">
      <PeopleFilters search={search} onSearchChange={setSearch} />

      <div className="flex flex-wrap items-center justify-center gap-4 px-4">
        {isLoading ? (
          <PeopleSkeleton />
        ) : data && data.results && data.results.length > 0 ? (
          <PeopleList people={data.results} />
        ) : (
          <div className="flex justify-center items-center">
            People not found
          </div>
        )}
      </div>

      <PeoplePagination
        page={page}
        totalPages={data?.total_pages}
        onPageChange={setPage}
      />
    </div>
  );
};

export default PeoplePage;
