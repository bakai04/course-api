import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  name: string;

  @IsString()
  title: string;

  @Min(1)
  @Max(5, {
    message: 'Рейтинг не может быть менее 1',
  })
  @IsNumber()
  rating: number;

  @IsString()
  description: string;

  @IsString()
  productId: string;
}
