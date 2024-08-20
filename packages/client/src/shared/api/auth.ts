import {
   AdditionalInfoRequest,
   SocialLoginAPIApi,
   TempSignUpRequest,
   ValidateNickNameRequest,
} from '@server-api/api'
import {
   useMutation,
   useQuery,
   useQueryClient,
   UseQueryOptions,
} from '@tanstack/react-query'

import { config } from './config'

export const PostTmpAccessTokenQueryKey = '/signin/temporary/token'

export const usePostNicknameDuplCheck = () => {
   return useMutation({
      mutationFn: async (dto: ValidateNickNameRequest) =>
         (
            await new SocialLoginAPIApi(config).checkNickName({
               ...dto,
            })
         ).data,
   })
}

export const usePostLogout = () => {
   const queryClient = useQueryClient()
   return useMutation({
      mutationFn: async () =>
         (await new SocialLoginAPIApi(config).logout()).data,

      onSuccess: () => queryClient.clear(),
   })
}

export const usePostReissueToken = () => {
   return useMutation({
      mutationFn: async () =>
         (await new SocialLoginAPIApi(config).reissue()).data,
   })
}

export const usePostTempSignup = (
   dto: TempSignUpRequest,
   options: UseQueryOptions,
) =>
   useQuery({
      ...options,
      queryKey: ['/auth/sigin/kakao'],
      queryFn: async () =>
         (
            await new SocialLoginAPIApi(config).tempSignUp({
               ...dto,
            })
         ).data,
   })

export const usePostMember = () => {
   return useMutation({
      mutationFn: async (dto: AdditionalInfoRequest) =>
         (
            await new SocialLoginAPIApi(config).signUp({
               ...dto,
            })
         ).data,
   })
}
