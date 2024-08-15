import { ValidationPipeOptions } from '@nestjs/common';

export const VALIDATION_PIPE_OPTION: ValidationPipeOptions = {
  whitelist: true,
  forbidNonWhitelisted: true,
  transform: true,
  transformOptions: {
    enableImplicitConversion: true,
  },
};
