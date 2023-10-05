import { useMutation, useQuery } from "react-query";
import { getRequest, postRequest } from "../functions/network";
import { isPlainObject } from "react-query/types/core/utils";

export const useGET = (path: string) => {
  return useQuery({
    queryKey: [`GET:${path}`],
    queryFn: async () => await getRequest(path),
  });
};

export const usePOST = (path: string, body: any) => {
  return useMutation({
    mutationFn: async () => await postRequest(path, body),
    mutationKey: [`POST:${path}`],
  });
};
