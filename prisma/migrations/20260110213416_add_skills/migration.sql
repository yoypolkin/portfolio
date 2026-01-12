-- CreateTable
CREATE TABLE "SkillSection" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SkillSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "sectionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SkillSection_slug_key" ON "SkillSection"("slug");

-- CreateIndex
CREATE INDEX "Skill_sectionId_idx" ON "Skill"("sectionId");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_sectionId_order_key" ON "Skill"("sectionId", "order");

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "SkillSection"("id") ON DELETE CASCADE ON UPDATE CASCADE;
