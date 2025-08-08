import { IsString } from "class-validator";

// DTO com decorators do class-validator, funciona em conjunto com o ValidationPipe() do main.ts
export class CreateCourseDTO {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString({ each: true })
  readonly tags: string[];
}