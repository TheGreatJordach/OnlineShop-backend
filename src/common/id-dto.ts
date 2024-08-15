import { IsInt, IsPositive } from '@nestjs/class-validator';

export class IdDto {
  @IsInt()
  @IsPositive()
  id: number;
}
