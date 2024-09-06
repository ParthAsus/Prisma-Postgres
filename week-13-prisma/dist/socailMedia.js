"use strict";
// import { PrismaClient } from '@prisma/client';
// import { faker } from '@faker-js/faker';
// const prisma = new PrismaClient();
// async function main() {
//   // Create users
//   const users = [];
//   for (let i = 0; i < 50; i++) {
//     users.push({
//       name: faker.person.fullName(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//     });
//   }
//   const createdUsers = await prisma.user.createMany({ data: users });
//   // Create profiles
//   const profiles = [];
//   for (let i = 0; i < 50; i++) {
//     profiles.push({
//       userName: faker.internet.userName(),
//       bio: faker.lorem.sentence(),
//       profilePicture: faker.image.avatar(),
//       userId: faker.number.int({ min: 1, max: 50 }),
//       link: faker.internet.url(),
//     });
//   }
//   const createdProfiles = await prisma.profile.createMany({ data: profiles });
//   // Create posts
//   const posts = [];
//   for (let i = 0; i < 100; i++) {
//     posts.push({
//       content: faker.lorem.paragraph(),
//       image: faker.image.url(),
//       authorId: faker.number.int({ min: 1, max: 50 }),
//       profileId: faker.number.int({ min: 1, max: 50 }),
//     });
//   }
//   const createdPosts = await prisma.post.createMany({ data: posts });
//   // Create comments
//   const comments = [];
//   for (let i = 0; i < 200; i++) {
//     comments.push({
//       content: faker.lorem.sentence(),
//       postId: faker.number.int({ min: 1, max: 100 }),
//     });
//   }
//   const createdComments = await prisma.comment.createMany({ data: comments });
//   // Create comment follow-ups
//   const commentFollowUps = [];
//   for (let i = 0; i < 100; i++) {
//     commentFollowUps.push({
//       content: faker.lorem.sentence(),
//       commentId: faker.number.int({ min: 1, max: 200 }),
//     });
//   }
//   const createdCommentFollowUps = await prisma.commentFollowUp.createMany({ data: commentFollowUps });
//   // Create likes
//   const likes = [];
//   for (let i = 0; i < 300; i++) {
//     likes.push({
//       postId: faker.number.int({ min: 1, max: 100 }),
//     });
//   }
//   const createdLikes = await prisma.like.createMany({ data: likes });
//   console.log('Data seeded successfully!');
// }
// main()
//   .catch(e => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
