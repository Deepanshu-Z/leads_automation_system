-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "failureReason" TEXT,
ADD COLUMN     "retryCount" INTEGER NOT NULL DEFAULT 0;
