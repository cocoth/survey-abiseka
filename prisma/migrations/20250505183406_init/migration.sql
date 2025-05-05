/*
  Warnings:

  - You are about to drop the column `userID` on the `Survey` table. All the data in the column will be lost.
  - You are about to drop the `Survey_Field` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Survey_Response` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Survey_Response_Field` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `surveyId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Survey" DROP CONSTRAINT "Survey_userID_fkey";

-- DropForeignKey
ALTER TABLE "Survey_Field" DROP CONSTRAINT "Survey_Field_surveyID_fkey";

-- DropForeignKey
ALTER TABLE "Survey_Response" DROP CONSTRAINT "Survey_Response_surveyID_fkey";

-- DropForeignKey
ALTER TABLE "Survey_Response" DROP CONSTRAINT "Survey_Response_userID_fkey";

-- DropForeignKey
ALTER TABLE "Survey_Response_Field" DROP CONSTRAINT "Survey_Response_Field_fieldID_fkey";

-- DropForeignKey
ALTER TABLE "Survey_Response_Field" DROP CONSTRAINT "Survey_Response_Field_responseID_fkey";

-- AlterTable
ALTER TABLE "Survey" DROP COLUMN "userID",
ADD COLUMN     "jenis_internet" TEXT,
ADD COLUMN     "jenis_komputer" TEXT,
ADD COLUMN     "jenis_laboratorium" TEXT,
ADD COLUMN     "jumlah_komputer" TEXT,
ADD COLUMN     "jumlah_laboratorium" TEXT,
ADD COLUMN     "kecepatan_internet" TEXT,
ADD COLUMN     "pendinginan_laboratorium" TEXT,
ADD COLUMN     "provider_internet" TEXT,
ADD COLUMN     "spesifikasi_komputer" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "surveyId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Survey_Field";

-- DropTable
DROP TABLE "Survey_Response";

-- DropTable
DROP TABLE "Survey_Response_Field";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_surveyId_fkey" FOREIGN KEY ("surveyId") REFERENCES "Survey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
