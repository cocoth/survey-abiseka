/*
  Warnings:

  - The `tanggal_SK_pendirian` column on the `Data_PT` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Data_PT" DROP COLUMN "tanggal_SK_pendirian",
ADD COLUMN     "tanggal_SK_pendirian" TIMESTAMP(3);
