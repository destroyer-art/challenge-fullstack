/* eslint-disable @typescript-eslint/ban-ts-comment */
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  // TODO: verificar se isso está correto
  async enableShutdownHooks(app: INestApplication) {
    // @ts-ignore
    this.$on<Prisma.PrismaClientOptions>('beforeExit', async () => {
      await app.close();
    });
  }
}
