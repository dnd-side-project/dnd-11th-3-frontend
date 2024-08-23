import { MemberAPIApi } from "@server-api/api";
import { config } from "@shared/api";
import {
    useQuery,
    UseQueryOptions,
 } from '@tanstack/react-query'


export const useFetchMemberProfile = (
    options: UseQueryOptions,
 ) =>
    useQuery({
       ...options,
       queryKey: [`/members/profile`],
       queryFn: async () =>
          (
             await new MemberAPIApi(config).getMemberProfile()
          ).data,
    })