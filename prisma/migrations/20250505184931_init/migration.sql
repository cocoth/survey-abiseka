/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Data_PT` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Data_PT` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Data_PT" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Data_PT_userId_key" ON "Data_PT"("userId");

-- AddForeignKey
ALTER TABLE "Data_PT" ADD CONSTRAINT "Data_PT_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
