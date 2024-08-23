import { APIApi } from "@server-api/api";
import { config } from "@shared/api";
import {
    useQuery,
    UseQueryOptions,
 } from '@tanstack/react-query'


/**
 * 
 * @description answers belong to question of questionPostId
 */
    export const useFetchAnswers = (
        dto:{questionPostId:number},
        options: UseQueryOptions,
     ) =>
        useQuery({
           ...options,
           queryKey: [`/question-posts/${dto.questionPostId}/answers`],
           queryFn: async () =>
              (
                 await new APIApi(config).getAnswersByQuestionPostId1(dto.questionPostId)
              ).data,
        })