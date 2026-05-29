-- AlterEnum
ALTER TYPE "LeadStatus" ADD VALUE 'HUMAN_ASSIGNED';

-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "aiEnabled" BOOLEAN NOT NULL DEFAULT true;
