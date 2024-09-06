import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      name: "Jalebi",
      email: "Jalebi@gmail.com"
    }
  })
}

main()
  .then(async () => {
    console.log("user created successfully")
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })