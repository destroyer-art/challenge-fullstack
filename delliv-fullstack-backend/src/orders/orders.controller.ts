import { Controller, Get, Param, Patch } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './order.entity';

@Controller('orders')
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
