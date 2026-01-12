import { prisma } from '@/lib/prisma';

export async function getTools() {
  return prisma.tool.findMany({
    orderBy: { order: 'asc' },
  });
}
