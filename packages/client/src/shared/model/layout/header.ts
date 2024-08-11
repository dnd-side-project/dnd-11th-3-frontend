import { PageURL } from './pageURL'

/**
 * @docs order is important some path can be used in multiple places
 * @docs if it is included
 */
export const COMMON_HEADER_META_DATA: {
   title: string
   url:
      | Exclude<
           PageURL,
           PageURL.HOME | PageURL.ACCOUNT | PageURL.CHAT | PageURL.SIGNIN
        >
      | string
}[] = [
   {
      title: '회원가입',
      url: PageURL.SIGNUP,
   },
   {
      title: '질문 작성',
      url: PageURL.QUESTION_CREATE,
   },
   {
      title: '질문 수정',
      url: PageURL.QUESTION_UPDATE,
   },
   {
      title: '나의 활동',
      url: PageURL.ACCOUNT_QUESTION_LIST,
   },
   {
      title: '스크랩',
      url: PageURL.ACCOUNT_BOOKMARK,
   },
   {
      title: '크레딧',
      url: PageURL.ACCOUNT_CREDIT,
   },
   {
      title: '프로필 수정',
      url: PageURL.ACCOUNT_PROFILE_UPDATE,
   },
   {
      title: '알림',
      url: PageURL.NOTIFY,
   },
]
