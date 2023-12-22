import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('protected')
@UseGuards(JwtAuthGuard)
export class RouteProtectedController {
  @Get()
  getProtectedData() {
    return { message: 'This is protected data' };
  }
}
