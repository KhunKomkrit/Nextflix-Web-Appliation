import { Injectable } from '@nestjs/common';
import { TmdbService } from '../tmdb/tmdb.service';
import { QueryMovieDto } from './dto/query-movie.dto';

@Injectable()
export class MovieService {
  constructor(private readonly imdnService: TmdbService) {}
  async findAll(queryParams: QueryMovieDto) {
    const queryUrl = {
      ...(queryParams.page && { page: queryParams.page }),
      ...(queryParams.language && { language: queryParams.language }),
    };
    return await this.imdnService.getMoviePopular(queryUrl);
  }
}
