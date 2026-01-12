import { prisma } from '@/lib/prisma.js';

export async function getExperience() {
  return prisma.experience.findMany({
    orderBy: { createdAt: 'asc' },
    include: {
      story: {
        include: {
          items: {
            orderBy: [{ type: 'asc' }, { order: 'asc' }],
          },
        },
      },
    },
  });
}
