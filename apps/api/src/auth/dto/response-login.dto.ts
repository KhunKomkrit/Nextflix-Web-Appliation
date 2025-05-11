import { ApiProperty } from "@nestjs/swagger";

export class ResponseLoginDto {
    @ApiProperty({example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5leHRmbGl4QG1haWwuY29tIiwic3ViIjoxLCJpYXQiOjE3NDY5NzgyMzIsImV4cCI6MTc0NzA2NDYzMn0.WWQucALNqegpGajfxFsr_nhFg2IKpbX_0zApRFvz-Rk"})
  access_token: string;
}
