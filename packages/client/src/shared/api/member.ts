import { MemberAPIApi, MemberInformationResponse } from '@server-api/api'
import { config } from '@shared/api'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export const useFetchMemberInformation = (
   options?: UseQueryOptions<MemberInformationResponse>,
) =>
   useQuery({
      ...options,
      queryKey: [`/members/information`],
      queryFn: async () =>
         (await new MemberAPIApi(config).getMemberInformation()).data,
   })
