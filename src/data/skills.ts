import { prisma } from '@/lib/prisma';

export async function getSkills() {
  return prisma.skillSection.findMany({
    orderBy: { order: 'asc' },
    include: {
      skills: { orderBy: { order: 'asc' } },
    },
  });
}
