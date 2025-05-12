
import { IResponsePopular } from '@nextflix/shared/index';
import { axiosClient } from '@lib/axios/client';

export const getPopularMovies = async ({
  page,
  language,
}: {
  page: number;
  language: string;
}): Promise<IResponsePopular> => {
  const res = await axiosClient.get('/movie/popular', {
    params: { page, language },
  });
  return res.data;
};