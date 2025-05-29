import type { PeopleResponse } from "@/types/type";
import { baseAxios } from "@/utils/baseAxios";
import { useQuery } from "@tanstack/react-query";

type PeopleFilterArgs = {
  page: number;
  limit: number;
  search?: string;
  gender?: string;
};

export const fetchPeople = async (params: PeopleFilterArgs) => {
  const { data } = await baseAxios.get<PeopleResponse>("people", { params });
  return data;
};

export const useFetchPeople = (arg: PeopleFilterArgs) => {
  const query = useQuery({
    queryFn: () => fetchPeople(arg),
    queryKey: ["people", arg],
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
};
