/*
  Warnings:

  - You are about to drop the column `name` on the `StatusSurvey` table. All the data in the column will be lost.
  - Added the required column `status` to the `StatusSurvey` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StatusSurvey" DROP COLUMN "name",
ADD COLUMN     "status" BOOLEAN NOT NULL;
