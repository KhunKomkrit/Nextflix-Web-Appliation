"use client"
import { useQuery } from '@tanstack/react-query';

import { IResponsePopular } from '@nextflix/shared/index';
import { getPopularMovies } from '../../services/movie.service';

export const usePopularMovies = (page: number = 1, language: string = 'en-US') => {
  return useQuery<IResponsePopular>({
    queryKey: ['movies', page, language],
    queryFn: () => getPopularMovies({ page, language }),
  });
};