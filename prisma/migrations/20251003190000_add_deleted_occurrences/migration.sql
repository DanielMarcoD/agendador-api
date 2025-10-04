-- CreateTable
CREATE TABLE "DeletedEventOccurrence" (
    "id" TEXT NOT NULL,
    "parentEventId" TEXT NOT NULL,
    "occurrenceDate" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DeletedEventOccurrence_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DeletedEventOccurrence_parentEventId_occurrenceDate_key" ON "DeletedEventOccurrence"("parentEventId", "occurrenceDate");

-- AddForeignKey
ALTER TABLE "DeletedEventOccurrence" ADD CONSTRAINT "DeletedEventOccurrence_parentEventId_fkey" FOREIGN KEY ("parentEventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
