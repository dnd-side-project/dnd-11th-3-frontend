import {
   QuestionPostSimpleResponse,
   QuestionPostsResponse,
} from '@server-api/api'

type QuestionData = QuestionPostSimpleResponse | QuestionPostsResponse

interface QuestionFields {
   title: string
   content: string
   savedCount: number
}

function isQuestionPostSimpleResponse(
   data: QuestionData,
): data is QuestionPostSimpleResponse {
   return 'title' in data && 'content' in data && 'savedCount' in data
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
