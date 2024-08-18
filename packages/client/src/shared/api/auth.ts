import {
   AdditionalInfoRequest,
   LogoutRequest,
   ReissueRequest,
   SocialLoginAPIApi,
   TempLoginRequest,
   ValidateNickNameRequest,
} from '@server-api/api'
import { useMutation, useQuery, UseQueryOptions } from '@tanstack/react-query'
import { config } from './config'

export const usePostTmpAccessToken = () =>
   useMutation({
      mutationFn: async (dto: TempLoginRequest) =>
         (
            await new SocialLoginAPIApi(config).getTempToken({
               ...dto,
            })
         ).data,
   })

export const usePostNicknameDuplCheck = () =>
   useMutation({
      mutationFn: async (dto: ValidateNickNameRequest) =>
         (
            await new SocialLoginAPIApi(config).checkNickName({
               ...dto,
            })
         ).data,
   })

export const useFetchKakaoSininRedirect = (options: UseQueryOptions) =>
   useQuery({
      ...options,
      queryKey: ['/auth/sigin/kakao'],
      queryFn: async () =>
         (await new SocialLoginAPIApi(config).kakaoLoginRedirect()).data,
   })

export const usePostLogout = () =>
   useMutation({
      mutationFn: async (dto: LogoutRequest) =>
         (
            await new SocialLoginAPIApi(config).logout({
               ...dto,
            })
         ).data,
   })

export const usePostReissueToken = () =>
   useMutation({
      mutationFn: async (dto: ReissueRequest) =>
         (
            await new SocialLoginAPIApi(config).reissue({
               ...dto,
            })
         ).data,
   })

export const usePostSignup = () =>
   useMutation({
      mutationFn: async (dto: AdditionalInfoRequest) =>
         (
            await new SocialLoginAPIApi(config).signUp({
               ...dto,
            })
         ).data,
   })
