import type { PeopleFilterArgs, PeopleResponse } from "@/types/type";
import { baseAxios } from "@/utils/baseAxios";
import { useQuery } from "@tanstack/react-query";

export const fetchPeople = async (params: PeopleFilterArgs) => {
  const { data } = await baseAxios.get<PeopleResponse>("people", { params });
  return data;
};

export const useFetchPeople = (arg: PeopleFilterArgs) => {
  const query = useQuery({
    queryFn: () => fetchPeople(arg),
    queryKey: ["people", arg],
    staleTime: 1000 * 60 * 5,
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    error: query.error,
  };
};
