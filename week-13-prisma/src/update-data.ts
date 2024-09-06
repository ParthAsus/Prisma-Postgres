import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  await prisma.user.update({
    where: {
      id: 6
    },
    data: {
      name: "jalebi-new",
      email: "Jalebi-new@gmail.com"
    }
  })
}
main()