import { Test, TestingModule } from '@nestjs/testing';
import { MovieService } from './movie.service';
import { TmdbService } from '../tmdb/tmdb.service';

describe('MovieService', () => {
  let service: MovieService;

  const mockTmdbService = {
    getMoviePopular: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MovieService,
        {
          provide: TmdbService,
          useValue: mockTmdbService,
        },
      ],
    }).compile();

    service = module.get<MovieService>(MovieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    const mockPopularMovies = {
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

    it('should return popular movies', async () => {
      mockTmdbService.getMoviePopular.mockResolvedValue(mockPopularMovies);

      const result = await service.findAll();
      expect(result).toEqual(mockPopularMovies);
      expect(mockTmdbService.getMoviePopular).toHaveBeenCalled();
    });

    it('should handle errors when fetching popular movies', async () => {
      const error = new Error('Failed to fetch movies');
      mockTmdbService.getMoviePopular.mockRejectedValue(error);

      await expect(service.findAll()).rejects.toThrow('Failed to fetch movies');
      expect(mockTmdbService.getMoviePopular).toHaveBeenCalled();
    });
  });
});
