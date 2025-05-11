import { ApiProperty } from '@nestjs/swagger';
import { IMovieObject, IResponsePopular } from '@nextflix/shared/index';

export class MovieObject implements IMovieObject {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export class ResponseMovieDto implements IResponsePopular {
  @ApiProperty({ example: 1 })
  page: number;

  @ApiProperty({
    type: MovieObject,
    isArray: true,
    example: [
      {
        adult: false,
        backdrop_path: '/cJvUJEEQ86LSjl4gFLkYpdCJC96.jpg',
        genre_ids: [10752, 28],
        id: 1241436,
        original_language: 'en',
        original_title: 'Warfare',
        overview:
          'A platoon of Navy SEALs embarks on a dangerous mission in Ramadi, Iraq, with the chaos and brotherhood of war retold through their memories of the event.',
        popularity: 524.0776,
        poster_path: '/j8tqBXwH2PxBPzbtO19BTF9Ukbf.jpg',
        release_date: '2025-04-09',
        title: 'Warfare',
        video: false,
        vote_average: 7.209,
        vote_count: 196,
      },
    ],
  })
  results: IMovieObject[];

  @ApiProperty({ example: 50237 })
  total_pages: number;

  @ApiProperty({ example: 1004723 })
  total_results: number;
}
