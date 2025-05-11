import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { MovieService } from './movie.service';
import { QueryMovieDto } from './dto/query-movie.dto';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ResponseMovieDto } from './dto/response-movie.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { ResponseUnauthorized } from 'src/auth/dto/response-unauthorized.dto';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiUnauthorizedResponse({ type: ResponseUnauthorized })
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('popular')
  @ApiOkResponse({ type: ResponseMovieDto })
  findAll(@Query() queryParams: QueryMovieDto) {
    return this.movieService.findAll(queryParams);
  }

  // @Get('/popular/:id')
  // async findOne(@Param('id') id: string) {
  //   return await this.movieService.findOne(+id);
  // }
}
