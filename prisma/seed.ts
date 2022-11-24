// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy users
  const user1 = await prisma.user.upsert({
    where: { name: 'Alice' },
    update: {},
    create: { name: 'Alice' },
  });

  const user2 = await prisma.user.upsert({
    where: { name: 'Bob' },
    update: {},
    create: {
      name: 'Bob',
    },
  });

  console.log({ user1, user2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
