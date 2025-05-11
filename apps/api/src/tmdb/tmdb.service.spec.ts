import { Test, TestingModule } from '@nestjs/testing';
import { TmdbService } from './tmdb.service';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { of, throwError } from 'rxjs';
import { QueryParam } from './interfaces/query-param/query-param.interface';

describe('TmdbService', () => {
  let service: TmdbService;

  const mockConfigService = {
    get: jest.fn((key: string) => {
      switch (key) {
        case 'BASE_API_TMDB':
          return 'https://api.themoviedb.org/3';
        case 'API_KEY_TMDB':
          return 'test-api-key';
        default:
          return null;
      }
    }),
  };

  const mockHttpService = {
    get: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TmdbService,
        {
          provide: HttpService,
          useValue: mockHttpService,
        },
        {
          provide: ConfigService,
          useValue: mockConfigService,
        },
      ],
    }).compile();

    service = module.get<TmdbService>(TmdbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getOption', () => {
    it('should return correct headers with API key', () => {
      const options = service.getOption();
      expect(options).toEqual({
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer test-api-key',
        },
      });
    });
  });

  describe('getMoviePopular', () => {
    const mockResponse = {
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: '/test.jpg',
          genre_ids: [1, 2],
          id: 123,
          original_language: 'en',
          original_title: 'Test Movie',
          overview: 'Test overview',
          popularity: '100',
          poster_path: '/test.jpg',
          release_date: '2024-01-01',
          title: 'Test Movie',
          video: false,
          vote_average: 8.5,
          vote_count: 1000,
        },
      ],
    };

    it('should fetch popular movies successfully', async () => {
      const queryParam: QueryParam = {
        page: 1,
        language: 'en-US',
      };

      mockHttpService.get.mockReturnValue(of({ data: mockResponse }));

      const result = await service.getMoviePopular(queryParam);
      expect(result).toEqual(mockResponse);
      expect(mockHttpService.get).toHaveBeenCalledWith(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer test-api-key',
          },
        },
      );
    });

    it('should handle API errors', async () => {
      const queryParam: QueryParam = {
        page: 1,
        language: 'en-US',
      };

      mockHttpService.get.mockReturnValue(
        throwError(() => ({
          response: {
            data: 'API Error',
          },
        })),
      );

      await expect(service.getMoviePopular(queryParam)).rejects.toThrow(
        'Failed to fetch popular movies',
      );
    });

    it('should use default parameters when none provided', async () => {
      mockHttpService.get.mockReturnValue(of({ data: mockResponse }));

      await service.getMoviePopular();
      expect(mockHttpService.get).toHaveBeenCalledWith(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        expect.any(Object),
      );
    });
  });
});
