import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  const user = await prisma.user.findMany({});
  console.log(user);

  // const user = await prisma.user.findUnique({
  //   where:{
  //     email: "Jalebi@gmail.com"
  //   },
  //   include: {
  //     posts: true
  //   }
  // })
  console.log(user);
}

main()
