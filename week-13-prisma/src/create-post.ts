import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.post.create({
    data: {
      title: "My first post",
      content: "This is the content of my first post",
      published: true,
      author: {
        connect: {
          id: 1
        }
      }
    }
  })
}


main()
  .then(async () => {
    console.log('Post created successfully');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
