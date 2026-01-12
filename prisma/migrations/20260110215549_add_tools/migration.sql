-- CreateEnum
CREATE TYPE "ToolIconKind" AS ENUM ('SVG_PATH', 'SVG', 'IMAGE_URL');

-- CreateTable
CREATE TABLE "Tool" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "iconKind" "ToolIconKind" NOT NULL DEFAULT 'SVG_PATH',
    "svgPath" TEXT,
    "svgMarkup" TEXT,
    "imageUrl" TEXT,
    "color" TEXT,
    "needsWhiteBg" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tool_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tool_title_key" ON "Tool"("title");

-- CreateIndex
CREATE INDEX "Tool_order_idx" ON "Tool"("order");
