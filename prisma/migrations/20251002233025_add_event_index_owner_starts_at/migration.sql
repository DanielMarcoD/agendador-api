-- CreateIndex
CREATE INDEX "Event_ownerId_startsAt_idx" ON "public"."Event"("ownerId", "startsAt");
