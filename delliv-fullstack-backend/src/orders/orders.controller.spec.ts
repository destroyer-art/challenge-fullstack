import { Test, TestingModule } from '@nestjs/testing';
import { Order } from '@prisma/client';
import { CreateOrderDto } from 'src/orders/dto/create-order.dto';
import { OrdersController } from '../orders/orders.controller';
import { OrdersService } from '../orders/orders.service';
import { PrismaService } from '../prisma/prisma.service';

describe('OrdersController', () => {
  let ordersController: OrdersController;
  let ordersService: OrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [OrdersService, PrismaService],
    }).compile();

    ordersController = module.get<OrdersController>(OrdersController);
    ordersService = module.get<OrdersService>(OrdersService);
  });

  describe('getAllOrders', () => {
    it('should return an array of orders', async () => {
      const expectedOrders: Order[] = [
        {
          id: 1,
          customerName: 'John Doe',
          deliveryAddress: '123 Main St',
          status: 'Pending',
        },
      ];

      jest
        .spyOn(ordersService, 'getAllOrders')
        .mockResolvedValue(expectedOrders);

      const result = await ordersController.getAllOrders();

      expect(result).toEqual(expectedOrders);
    });
  });

  describe('createOrder', () => {
    it('should create a new order', async () => {
      const newOrder: CreateOrderDto = {
        customerName: 'John Doe',
        deliveryAddress: '123 Main St',
        status: '',
      };
      const expectedOrder: Order = {
        id: 1,
        customerName: 'John Doe',
        deliveryAddress: '123 Main St',
        status: 'Pending',
      };

      jest.spyOn(ordersService, 'createOrder').mockResolvedValue(expectedOrder);

      const result = await ordersController.createOrder(newOrder);

      expect(result).toEqual(expectedOrder);
    });
  });

  describe('updateOrderStatus', () => {
    it('should update the order status', async () => {
      const orderId = 1;
      const newStatus = 'Delivered';
      const expectedOrder: Order = {
        id: orderId,
        customerName: 'John Doe',
        deliveryAddress: '123 Main St',
        status: newStatus,
      };

      jest
        .spyOn(ordersService, 'updateOrderStatus')
        .mockResolvedValue(expectedOrder);

      const result = await ordersController.updateOrderStatus(
        orderId,
        newStatus,
      );

      expect(result).toEqual(expectedOrder);
    });
  });
});
