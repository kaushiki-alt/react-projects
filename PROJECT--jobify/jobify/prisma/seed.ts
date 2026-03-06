// prisma/seed.ts
import "dotenv/config";
import { PrismaClient } from "../lib/generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import data from "../assets/mock-data.json" assert { type: "json" };

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
  ssl: true, 
  max: 1,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const clerkId = "user_39qQWif99WaHKLFIvX2RzGrq60n";

  const jobs = data.map((job) => ({
    ...job,
    clerkId,
  }));

  for (const job of jobs) {
    await prisma.job.create({
      data: job,
    });
  }

  console.log(`✅ Seeded ${jobs.length} jobs`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });