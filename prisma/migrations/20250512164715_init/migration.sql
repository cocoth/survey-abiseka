/*
  Warnings:

  - You are about to drop the column `statusSurveyId` on the `Survey` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[surveyId]` on the table `StatusSurvey` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Survey" DROP CONSTRAINT "Survey_statusSurveyId_fkey";

-- AlterTable
ALTER TABLE "StatusSurvey" ADD COLUMN     "surveyId" TEXT,
ALTER COLUMN "status" SET DEFAULT 'pending',
ALTER COLUMN "status" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Survey" DROP COLUMN "statusSurveyId";

-- CreateIndex
CREATE UNIQUE INDEX "StatusSurvey_surveyId_key" ON "StatusSurvey"("surveyId");

-- AddForeignKey
ALTER TABLE "StatusSurvey" ADD CONSTRAINT "StatusSurvey_surveyId_fkey" FOREIGN KEY ("surveyId") REFERENCES "Survey"("id") ON DELETE SET NULL ON UPDATE CASCADE;
