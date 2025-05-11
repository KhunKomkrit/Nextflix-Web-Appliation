import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { TmdbModule } from '../tmdb/tmdb.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TmdbModule, AuthModule],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
