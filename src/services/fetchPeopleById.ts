import type { PersonResponse } from "@/types/type";
import { baseAxios } from "@/utils/baseAxios";
import { useQuery } from "@tanstack/react-query";

export const fetchPeopleById = async (id: string) => {
  const { data } = await baseAxios.get<PersonResponse>(`people/${id}`);
  return data;
};

export const useFetchPeopleById = (id: string) => {
  const query = useQuery({
    queryFn: () => fetchPeopleById(id),
    queryKey: ["people", id],
    staleTime: 1000 * 60 * 5,
  });

  return [query.data?.result.properties ?? null, query] as const;
};
