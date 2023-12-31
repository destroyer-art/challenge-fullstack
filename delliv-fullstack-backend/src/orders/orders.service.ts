import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllOrders(): Promise<Order[]> {
    const ordersFromPrisma = await this.prisma.order.findMany();
    return ordersFromPrisma.map((order) => ({
      id: order.id,
      customerName: order.customerName,
      deliveryAddress: order.deliveryAddress,
      cep: order.cep,
      city: order.city,
      neighborhood: order.neighborhood,
      status: order.status,
    }));
  }

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    const createdOrderFromPrisma = await this.prisma.order.create({
      data: createOrderDto,
    });

    return {
      id: createdOrderFromPrisma.id,
      customerName: createdOrderFromPrisma.customerName,
      deliveryAddress: createdOrderFromPrisma.deliveryAddress,
      cep: createdOrderFromPrisma.cep,
      city: createdOrderFromPrisma.city,
      neighborhood: createdOrderFromPrisma.neighborhood,
      status: createdOrderFromPrisma.status,
    };
  }

  async updateOrderStatus(orderId: number, newStatus: string): Promise<Order> {
    const updatedOrderFromPrisma = await this.prisma.order.update({
      where: { id: orderId },
      data: { status: newStatus },
    });

    return {
      id: updatedOrderFromPrisma.id,
      customerName: updatedOrderFromPrisma.customerName,
      deliveryAddress: updatedOrderFromPrisma.deliveryAddress,
      cep: updatedOrderFromPrisma.cep,
      city: updatedOrderFromPrisma.city,
      neighborhood: updatedOrderFromPrisma.neighborhood,
      status: updatedOrderFromPrisma.status,
    };
  }
}
