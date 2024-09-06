/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CommentFollowUp` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Like` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `title` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_postId_fkey";

-- DropForeignKey
ALTER TABLE "CommentFollowUp" DROP CONSTRAINT "CommentFollowUp_commentId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_postId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "createdAt",
DROP COLUMN "image",
DROP COLUMN "profileId",
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "content" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
ALTER COLUMN "name" DROP NOT NULL;

-- DropTable
DROP TABLE "Comment";

-- DropTable
DROP TABLE "CommentFollowUp";

-- DropTable
DROP TABLE "Like";

-- DropTable
DROP TABLE "Profile";
