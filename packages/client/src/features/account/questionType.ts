import {
   AnsweredQuestionPostsResponse,
   QuestionPostSimpleResponse,
   QuestionPostsResponse,
} from '@server-api/api'

type QuestionData =
   | QuestionPostSimpleResponse
   | QuestionPostsResponse
   | AnsweredQuestionPostsResponse

interface QuestionFields {
   title: string
   content: string
   savedCount: number
}

interface AnswerQuestionField {
   createdAt: string
}

function isQuestionPostSimpleResponse(
   data: QuestionData,
): data is QuestionPostSimpleResponse {
   return 'title' in data && 'content' in data && 'savedCount' in data
}

function isAccountAnswerResponse(
   data: QuestionData,
): data is AnsweredQuestionPostsResponse {
   return 'questionPostCreatedAt' in data
}

export function getQuestionFields(data: QuestionData): QuestionFields {
   if (isQuestionPostSimpleResponse(data)) {
      return {
         title: data.title ?? '',
         content: data.content ?? '',
         savedCount: data.savedCount ?? 0,
      }
   }
   return {
      title: data.questionTitle ?? '',
      content: data.questionContent ?? '',
      savedCount: data.bookmarkCount ?? 0,
   }
}

export function getAnswerQuestionField(
   data: QuestionData,
): AnswerQuestionField {
   if (isAccountAnswerResponse(data)) {
      return {
         createdAt: data.questionPostCreatedAt ?? '',
      }
   }
   return { createdAt: data.createdAt ?? '' }
}
