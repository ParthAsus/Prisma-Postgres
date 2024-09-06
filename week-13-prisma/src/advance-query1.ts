import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  const user = await prisma.user.findMany({
    where: {
      email: {
        endsWith: "gmail.com"
      }
    }
  })
  console.log(user);
}
main()
