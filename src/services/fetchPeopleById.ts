import type { PeopleResponse } from "@/types/type";
import { baseAxios } from "@/utils/baseAxios";
import { useQuery } from "@tanstack/react-query";

export const fetchPeopleById = async (id: string) => {
  const { data } = await baseAxios.get<PeopleResponse>(`people/${id}`);
  return data;
};

export const useFetchPeopleById = (id: string) => {
  const query = useQuery({
    queryFn: () => fetchPeopleById(id),
    queryKey: ["people", id],
    staleTime: 1000 * 60 * 5,
  });

  return [query.data?.result ?? null, query] as const;
};
