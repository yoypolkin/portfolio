import { hankenGrotesk } from '@/ui/fonts';

const experienceData = [
  {
    period: '2023 - Current',
    company: 'MWND Agency',
    sections: [
      {
        title: 'Project Description',
        content: [
          'SaaS product for creating email signatures. A Web Application aimed to help business and private persons to create email and integrate their own email signatures. Email signatures builder.',
        ],
      },
      {
        title: 'Project Role',
        content: ['Senior QA Automation Engineer'],
      },
      {
        title: 'Responsibilities',
        content: [
          'Led automation framework setup',
          'Designed test architecture',
          'Mentored team members',
          'Established CI/CD pipelines',
        ],
      },
      {
        title: 'Team Size',
        content: ['8-10 members'],
      },
      {
        title: 'Tools & Technologies',
        content: ['Playwright, TypeScript, Docker, GitHub Actions, AWS'],
      },
    ],
  },
  {
    period: '2021 - 2023',
    company: 'Previous Company',
    sections: [
      {
        title: 'Project Description',
        content: ['Healthcare management system for patient data tracking.'],
      },
      {
        title: 'Project Role',
        content: ['QA Automation Engineer'],
      },
      {
        title: 'Responsibilities',
        content: [
          'Built automation frameworks',
          'Performed API testing',
          'Collaborated with developers',
        ],
      },
      {
        title: 'Team Size',
        content: ['5-7 members'],
      },
      {
        title: 'Tools & Technologies',
        content: ['Selenium, JavaScript, Jenkins, Postman'],
      },
    ],
  },
];

export default function ExperienceOverview() {
  return (
    <div className={`${hankenGrotesk.className} p-8`}>
      <h1 className="mb-12 text-4xl font-bold text-white">
        Experience Overview
      </h1>

      <div className="relative">
        {experienceData.map((experience, index) => (
          <div key={index} className="mb-16 flex gap-8">
            {/* Left column - Date */}
            <div className="flex-1 pt-1 text-right">
              <div className="text-lg font-semibold text-white/90">
                {experience.period}
              </div>
            </div>

            {/* Details column - 5 parts */}
            <div className="flex-[5] pt-1">
              {/* Sections */}
              <div className="space-y-6">
                {experience.sections.map((section, sectionIndex) => (
                  <div
                    key={sectionIndex}
                    className="gap-5 md:flex md:items-start"
                  >
                    <p className="flex-1 text-sm font-semibold uppercase leading-relaxed tracking-wide text-white/60 md:text-right">
                      {section.title}
                    </p>
                    <div className="md:text-md flex-[4] text-base leading-relaxed text-white/80">
                      <ul>
                        {section.content.map((item: string, index: number) => {
                          return <li key={index}>{item}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
