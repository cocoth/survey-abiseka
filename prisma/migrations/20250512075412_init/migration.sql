-- AlterTable
ALTER TABLE "Survey" ADD COLUMN     "statusSurveyId" TEXT;

-- CreateTable
CREATE TABLE "StatusSurvey" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "name" TEXT NOT NULL,

    CONSTRAINT "StatusSurvey_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Survey" ADD CONSTRAINT "Survey_statusSurveyId_fkey" FOREIGN KEY ("statusSurveyId") REFERENCES "StatusSurvey"("id") ON DELETE SET NULL ON UPDATE CASCADE;
