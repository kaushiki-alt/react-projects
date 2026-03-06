import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";

const createPrismaClient = () => {
  const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
    max: 1,
    ssl: true, // ✅ required for Render
  });
  return new PrismaClient({
    adapter,
    log: ['error'],
  });
};

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;