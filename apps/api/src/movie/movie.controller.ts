import { Controller, Get, Query } from '@nestjs/common';
import { MovieService } from './movie.service';
import { QueryMovieDto } from './dto/query-movie.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { ResponseMovieDto } from './dto/response-movie.dto';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('popular')
  @ApiOkResponse({ type: ResponseMovieDto })
  findAll(@Query() queryParams: QueryMovieDto) {
    return this.movieService.findAll();
  }

  // @Get('/popular/:id')
  // async findOne(@Param('id') id: string) {
  //   return await this.movieService.findOne(+id);
  // }
}
