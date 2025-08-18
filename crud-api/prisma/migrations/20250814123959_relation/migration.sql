/*
  Warnings:

  - Added the required column `userid` to the `contacts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."contacts" ADD COLUMN     "userid" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."contacts" ADD CONSTRAINT "contacts_userid_fkey" FOREIGN KEY ("userid") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
