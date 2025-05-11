import { ApiProperty } from '@nestjs/swagger';

export class ResponseUnauthorized {
  @ApiProperty({ default: 'Unauthorized' })
  message: string;
  @ApiProperty({ default: 401 })
  statusCode: number;
}
