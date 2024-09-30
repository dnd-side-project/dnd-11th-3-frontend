import { MemberAPIApi, MemberProfileResponse } from '@server-api/api'
import { config } from '@shared/api'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export const useGetMemberProfile = (
   options?: UseQueryOptions<MemberProfileResponse>,
) =>
   useQuery({
      ...options,
      queryKey: [`/members/question-posts`],
      queryFn: async () =>
         (await new MemberAPIApi(config).getMemberProfile()).data,
   })
