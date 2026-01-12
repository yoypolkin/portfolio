-- CreateEnum
CREATE TYPE "StoryItemType" AS ENUM ('ACTION', 'RESULT');

-- CreateTable
CREATE TABLE "Experience" (
    "id" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "projectTitle" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExperienceStory" (
    "id" TEXT NOT NULL,
    "problem" TEXT NOT NULL,
    "experienceId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExperienceStory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExperienceStoryItem" (
    "id" TEXT NOT NULL,
    "type" "StoryItemType" NOT NULL,
    "text" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "storyId" TEXT NOT NULL,

    CONSTRAINT "ExperienceStoryItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExperienceStory_experienceId_key" ON "ExperienceStory"("experienceId");

-- CreateIndex
CREATE INDEX "ExperienceStoryItem_storyId_type_idx" ON "ExperienceStoryItem"("storyId", "type");

-- CreateIndex
CREATE UNIQUE INDEX "ExperienceStoryItem_storyId_type_order_key" ON "ExperienceStoryItem"("storyId", "type", "order");

-- AddForeignKey
ALTER TABLE "ExperienceStory" ADD CONSTRAINT "ExperienceStory_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "Experience"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExperienceStoryItem" ADD CONSTRAINT "ExperienceStoryItem_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "ExperienceStory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
