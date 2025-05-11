import { ApiPropertyOptional } from '@nestjs/swagger';

export class QueryMovieDto {
  @ApiPropertyOptional({ type: 'number', example: 1, default: 1 })
  page?: number;
  @ApiPropertyOptional({ type: 'string', default: 'en-US' })
  language?: string;
}