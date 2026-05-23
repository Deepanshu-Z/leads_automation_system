// import { PrismaClient } from "@/lib/generated/prisma";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

// const prisma = new PrismaClient();

async function main() {
  // =====================================
  // HASH PASSWORD
  // =====================================

  const passwordHash = await bcrypt.hash(
    "admin123",

    10,
  );

  // =====================================
  // CREATE ADMIN
  // =====================================

  await prisma.agent.create({
    data: {
      name: "Deepanshu",

      email: "admin@test.com",

      passwordHash,

      role: "ADMIN",

      isOnline: true,
    },
  });

  console.log("✅ Admin created");
}

main();
