import { Injectable, Logger } from '@nestjs/common';
import { QueryParam } from './interfaces/query-param/query-param.interface';
import { ResponsePopular } from './interfaces/response-popular/response-popular.interface';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { firstValueFrom } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TmdbService {
  private readonly baseApi;
  private readonly apiKey;
  private readonly logger = new Logger(TmdbService.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseApi = this.configService.get<string>('BASE_API_TMDB');
    this.apiKey = this.configService.get<string>('API_KEY_TMDB');
  }

  getOption() {
    return {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
    };
  }

  async getMoviePopular(
    queryParam: QueryParam = {
      page: 1,
      language: 'en-US',
    },
  ): Promise<ResponsePopular> {
    const pathUrl = `${this.baseApi}/movie/popular?language=${queryParam.language}&page=${queryParam.page}`;
    const { data } = await firstValueFrom(
      this.httpService.get<ResponsePopular>(pathUrl, this.getOption()).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response?.data);
          throw new Error('Failed to fetch popular movies');
        }),
      ),
    );
    return data;
  }
}
