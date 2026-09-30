import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty({
    example: 'usuario@gmail.com',
    required: true,
  })
  email: string;

  @ApiProperty({
    example: 'Juan Pérez',
    required: false,
  })
  name?: string;

  @ApiProperty({
    example: '123456',
    required: true,
  })
  password: string;

  @ApiProperty({
    example: '88888888',
    required: false,
  })
  telephone?: string;

  @ApiProperty({
    example: 'USER',
    enum: Role,
    required: false,
  })
  role?: Role;
}