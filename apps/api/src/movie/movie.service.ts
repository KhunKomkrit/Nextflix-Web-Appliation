import { Injectable } from '@nestjs/common';
import { TmdbService } from '../tmdb/tmdb.service';

@Injectable()
export class MovieService {
  constructor(private readonly imdnService: TmdbService) {}
  async findAll() {
    return await this.imdnService.getMoviePopular();
  }
}
