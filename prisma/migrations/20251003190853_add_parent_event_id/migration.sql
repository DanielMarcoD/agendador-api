-- AlterTable
ALTER TABLE "public"."Event" ADD COLUMN     "parentEventId" TEXT;

-- CreateIndex
CREATE INDEX "Event_parentEventId_idx" ON "public"."Event"("parentEventId");
