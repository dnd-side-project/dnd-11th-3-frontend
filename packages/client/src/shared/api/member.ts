import { MemberAPIApi, MemberInformationResponse } from '@server-api/api'
import { Configuration } from '@server-api/configuration'
import { config } from '@shared/api'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export const useFetchMemberInformation = (
   options?: Omit<UseQueryOptions<MemberInformationResponse>, 'queryKey'>,
) =>
   useQuery({
      ...options,
      queryKey: [`/members/information`],
      queryFn: async () =>
         (await new MemberAPIApi(config).getMemberInformation()).data,
   })

export const fetchMemberInformation = async (ssrConfig: Configuration) =>
   (await new MemberAPIApi(ssrConfig).getMemberInformation()).data
