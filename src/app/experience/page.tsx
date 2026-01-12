import { Suspense } from 'react';
import ExperienceTimelineClient from './experience-timeline-client';
import { getExperience } from '@/data/experience';

export default async function ExperiencePage() {
  const experiences = await getExperience();

  return (
    <Suspense fallback={<div className="text-white">Loading...</div>}>
      <ExperienceTimelineClient experiences={experiences} />;
    </Suspense>
  );
}
