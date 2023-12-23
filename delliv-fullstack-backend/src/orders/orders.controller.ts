import { Controller, Get, Param, Patch, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './entities/order.entity';
import { IsPublic } from '../auth/decorators/is-public.decorator';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
@IsPublic()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async getAllOrders(): Promise<Order[]> {
    return this.ordersService.getAllOrders();
  }

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersService.createOrder(createOrderDto);
  }

  @Patch(':id/update-status/:newStatus')
  async updateOrderStatus(
    @Param('id') orderId: number,
    @Param('newStatus') newStatus: string,
  ): Promise<Order> {
    return this.ordersService.updateOrderStatus(orderId, newStatus);
  }
}
