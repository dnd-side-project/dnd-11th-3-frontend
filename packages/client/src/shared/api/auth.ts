import {
   AdditionalInfoRequest,
   LogoutRequest,
   ReissueRequest,
   SocialLoginAPIApi,
   TempLoginRequest,
   ValidateNickNameRequest,
} from '@server-api/api'
import {
   useMutation,
   useQuery,
   useQueryClient,
   UseQueryOptions,
} from '@tanstack/react-query'
import { get } from 'http'
import { Configuration } from '@server-api/configuration'
import { config as unAuthConfig, getTmpAuthorizedConfig } from './config'

// export const usePostTmpAccessToken = () =>
//    useMutation({
//       mutationFn: async (dto: TempLoginRequest) =>
//          (
//             await new SocialLoginAPIApi(unAuthConfig).getTempToken({
//                ...dto,
//             })
//          ).data,

//       gcTime: 1000 * 60 * 60, // 1hr
//    })

export const PostTmpAccessTokenQueryKey = '/signin/temporary/token'

export const usePostTmpAccessToken = ({
   dto,
   options,
}: {
   dto: TempLoginRequest
   options?: Omit<UseQueryOptions, 'queryKey'>
}) =>
   useQuery({
      ...options,
      gcTime: 1000 * 60 * 60, // 1hr
      queryKey: [PostTmpAccessTokenQueryKey],
      queryFn: async () =>
         (await new SocialLoginAPIApi(unAuthConfig).getTempToken(dto)).data,
   })

export const usePostNicknameDuplCheck = () => {
   const config = getTmpAuthorizedConfig()

   useMutation({
      mutationFn: async (dto: ValidateNickNameRequest) =>
         (
            await new SocialLoginAPIApi(config).checkNickName({
               ...dto,
            })
         ).data,
   })
}

export const useFetchKakaoSininRedirect = (options: UseQueryOptions) =>
   useQuery({
      ...options,
      queryKey: ['/auth/sigin/kakao'],
      queryFn: async () =>
         (await new SocialLoginAPIApi(unAuthConfig).kakaoLoginRedirect()).data,
   })

export const usePostLogout = () => {
   const queryClient = useQueryClient()
   return useMutation({
      mutationFn: async (dto: LogoutRequest) =>
         (
            await new SocialLoginAPIApi(unAuthConfig).logout({
               ...dto,
            })
         ).data,

      onSuccess: () => queryClient.clear(),
   })
}

export const usePostReissueToken = () => {
   const config = getTmpAuthorizedConfig()
   useMutation({
      mutationFn: async (dto: ReissueRequest) =>
         (
            await new SocialLoginAPIApi(config).reissue({
               ...dto,
            })
         ).data,
   })
}

export const usePostSignup = () => {
   const config = getTmpAuthorizedConfig()
   useMutation({
      mutationFn: async (dto: AdditionalInfoRequest) =>
         (
            await new SocialLoginAPIApi(config).signUp({
               ...dto,
            })
         ).data,
   })
}
