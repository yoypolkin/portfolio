'use client';

import { ArrowDown } from 'lucide-react';
import { hankenGrotesk } from '@/ui/fonts';
import { useState } from 'react';
import SearchBar from '@/ui/search';
import { useSearchParams } from 'next/navigation';

type Skill = {
  id: string;
  title: string;
  description: string;
  order: number;
};

type SkillSection = {
  id: string;
  slug: string;
  title: string;
  order: number;
  skills: Skill[];
};

export default function SkillSectionClient({
  skillSections,
}: {
  skillSections: SkillSection[];
}) {
  const [openSection, setOpenSection] = useState<string | null>();
  const searchValue = useSearchParams().get('s')?.toLowerCase();

  const filteredSkills = searchValue
    ? skillSections
        .map((skillSection: SkillSection) => {
          return {
            ...skillSection,
            skills: skillSection.skills.filter((skill: Skill) => {
              return (
                skill.title.toLowerCase().includes(searchValue) ||
                skill.description.toLowerCase().includes(searchValue)
              );
            }),
          };
        })
        .filter((section: SkillSection) => {
          return (
            section.skills.length > 0 ||
            section.title.toLowerCase().includes(searchValue)
          );
        })
    : skillSections;

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  if (filteredSkills.length === 0) {
    return (
      <>
        <SearchBar searchText="Search for skills..." />
        <div className={`${hankenGrotesk.className} mt-10`}>
          <div className="mt-10">
            <p className="mb-5 text-2xl font-bold text-white">Skills</p>
            <div className="text-white">
              <p className="mb-2">No results by the given search parameters.</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SearchBar searchText="Search for skills..." />
      <div className={`${hankenGrotesk.className} mt-10`}>
        <div className="mt-10">
          <p className="mb-5 text-2xl font-bold text-white">Skills</p>
          <div className="space-y-4">
            {filteredSkills.map((section) => {
              const isOpen = openSection === section.id;
              return (
                <div
                  key={section.id}
                  className="rounded-xl bg-[#2a2a2a] p-4 transition hover:bg-white/10"
                >
                  <div
                    className="flex cursor-pointer items-center justify-between"
                    onClick={() => toggleSection(section.id)}
                  >
                    <p className="text-xl font-bold text-white">
                      {section.title}
                    </p>
                    <ArrowDown
                      color="white"
                      className={`transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  <div
                    className={`overflow-hidden transition-all ${
                      isOpen
                        ? 'mt-5 max-h-[1000px] opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-10">
                      {section.skills.map((skill, index) => (
                        <div
                          key={index}
                          className={
                            index !== section.skills.length - 1 ? 'mb-5' : ''
                          }
                        >
                          <div className="mb-2 flex items-center gap-2 text-lg font-semibold text-white">
                            {skill.title}
                          </div>
                          <p className="text-sm text-white/70">
                            {skill.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
