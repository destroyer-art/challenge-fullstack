import { Prisma } from '@prisma/client';

export class Order implements Prisma.OrderCreateInput {
  id?: number;
  customerName: string;
  deliveryAddress: string;
  status: string;
}
