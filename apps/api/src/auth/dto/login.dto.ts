import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ default: 'nextflix@mail.com' })
  email: string;
  @ApiProperty({ default: 123456 })
  password: string;
}
