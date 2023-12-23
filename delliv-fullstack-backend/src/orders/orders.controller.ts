import { Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Order } from './entities/order.entity';

@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getAllOrders(): Promise<Order[]> {
    return this.ordersService.getAllOrders();
  }

  @Patch(':id/update-status/:newStatus')
  updateOrderStatus(
    @Param('id') orderId: number,
    @Param('newStatus') newStatus: string,
  ): Promise<Order> {
    return this.ordersService.updateOrderStatus(orderId, newStatus);
  }
}
