import { PrismaClientOptions } from '@prisma/client/runtime/library';

const prismaOptions: PrismaClientOptions = {
  datasources: {
    db: {
      url: process.env.DATABASE_URL as string,
    },
  },
};

export default prismaOptions;
