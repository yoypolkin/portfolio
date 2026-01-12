import { Suspense } from 'react';
import { getSkills } from '@/data/skills';
import SkillSectionClient from './skills-client';

export default async function SkillsPage() {
  const sections = await getSkills();

  return (
    <Suspense fallback={<div className="text-white">Loading skills...</div>}>
      <SkillSectionClient skillSections={sections} />
    </Suspense>
  );
}
