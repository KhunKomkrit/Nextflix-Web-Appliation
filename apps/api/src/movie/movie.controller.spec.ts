import { Test, TestingModule } from '@nestjs/testing';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { TmdbService } from '../tmdb/tmdb.service';

describe('MovieController', () => {
  let controller: MovieController;
  let movieService: MovieService;

  const mockTmdbService = {
    getMoviePopular: jest.fn(),
  };

  const mockMovieService = {
    findAll: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieController],
      providers: [
        {
          provide: MovieService,
          useValue: mockMovieService,
        },
        {
          provide: TmdbService,
          useValue: mockTmdbService,
        },
      ],
    }).compile();

    controller = module.get<MovieController>(MovieController);
    movieService = module.get<MovieService>(MovieService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
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
      mockMovieService.findAll.mockResolvedValue(mockPopularMovies);

      const result = await controller.findAll();
      expect(result).toEqual(mockPopularMovies);
      expect(movieService.findAll).toHaveBeenCalled();
    });

    it('should handle errors when fetching popular movies', async () => {
      const error = new Error('Failed to fetch movies');
      mockMovieService.findAll.mockRejectedValue(error);

      await expect(controller.findAll()).rejects.toThrow(
        'Failed to fetch movies',
      );
      expect(movieService.findAll).toHaveBeenCalled();
    });
  });
});
