import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
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

  @Put(':id/update-status')
  async updateOrderStatus(
    @Param('id') orderId: number,
    @Body('newStatus') newStatus: string,
  ): Promise<Order> {
    return this.ordersService.updateOrderStatus(orderId, newStatus);
  }
}
