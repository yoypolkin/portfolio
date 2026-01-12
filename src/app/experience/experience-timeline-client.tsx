'use client';

import { useState } from 'react';
import { hankenGrotesk } from '@/ui/fonts';
import ExperienceModal from '@/ui/experience-modal';

type StoryItemType = 'ACTION' | 'RESULT';

type Experience = {
  id: string;
  period: string;
  position: string;
  company: string;
  projectTitle: string;
  summary: string;
  story: {
    problem: string;
    items: { type: StoryItemType; order: number; text: string }[];
  } | null;
};

export default function ExperienceTimeline({
  experiences,
}: {
  experiences: Experience[];
}) {
  const [openModal, setOpenModal] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const handleOpenModal = (index: number) => setOpenModal(index);
  const handleCloseModal = () => setOpenModal(null);

  const total = experiences.length;
  const isExpanded = visibleCount >= total;

  return (
    <div className={`${hankenGrotesk.className} bg-[#212121] p-8`}>
      <h1 className="mb-16 text-4xl font-bold text-white">
        Experience Overview
      </h1>

      <div className="mx-auto max-w-7xl">
        {experiences.slice(0, visibleCount).map((experience, index) => (
          <div
            key={index}
            className="relative mb-12 grid grid-cols-1 gap-6 md:grid-cols-7 md:gap-8"
          >
            {/* --- Left column --- */}
            <div className="md:col-span-2 md:text-right">
              <div className="mb-2 text-base font-medium text-white/70">
                {experience.period}
              </div>
              <h2 className="mb-1 text-2xl font-bold text-white">
                {experience.position}
              </h2>
              <p className="text-sm text-white/50">{experience.company}</p>
            </div>

            {/* --- Timeline --- */}
            <div className="relative hidden md:col-span-1 md:flex md:justify-center">
              {index !== visibleCount - 1 && (
                <div className="absolute left-1/2 top-8 h-full w-0.5 -translate-x-1/2 bg-white/20"></div>
              )}
              <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#2a2a2a] bg-[#212121]">
                <div className="h-3 w-3 rounded-full bg-[#2783CF]" />
              </div>
            </div>

            {/* --- Card --- */}
            <div className="md:col-span-4">
              <div className="rounded-xl bg-white/5 p-6 transition-all hover:bg-white/10">
                <h3 className="mb-3 text-xl font-bold text-white">
                  {experience.projectTitle}
                </h3>
                <p className="mb-4 leading-relaxed text-white/70">
                  {experience.summary}
                </p>
                <button
                  onClick={() => handleOpenModal(index)}
                  className="cursor-pointer rounded-lg bg-[#2783CF] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#2783CF]/80"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* --- Show more / less --- */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setVisibleCount(isExpanded ? 3 : experiences.length)}
            className="w-full cursor-pointer rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10"
          >
            {isExpanded ? 'Show less' : 'Show more'}
          </button>
        </div>
      </div>

      {/* --- Modal --- */}
      {openModal !== null && (
        <ExperienceModal
          isOpen={openModal !== null}
          onClose={handleCloseModal}
          projectTitle={experiences[openModal].projectTitle}
          period={experiences[openModal].period}
          company={experiences[openModal].company}
          story={experiences[openModal].story}
        />
      )}
    </div>
  );
}
