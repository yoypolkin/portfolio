import { hankenGrotesk } from '@/ui/fonts';

const experienceData = [
  {
    period: '2023 - Current',
    position: 'Senior QA Automation Engineer',
    company: 'MWND Agency',
    projectTitle: 'Email Signature SaaS Platform',
    summary:
      'Led automation framework architecture and implementation for a SaaS product. Built scalable test infrastructure, mentored team members, and established CI/CD pipelines for continuous delivery.',
  },
  {
    period: '2021 - 2023',
    position: 'QA Automation Engineer',
    company: 'Healthcare Tech Inc',
    projectTitle: 'Patient Management System',
    summary:
      'Developed end-to-end automation frameworks for healthcare applications. Implemented API testing strategies and collaborated with cross-functional teams to ensure quality delivery.',
  },
  {
    period: '2019 - 2021',
    position: 'QA Engineer',
    company: 'Tech Solutions Ltd',
    projectTitle: 'E-commerce Platform',
    summary:
      'Built automated test suites for web applications. Established testing processes and documentation standards for the QA team.',
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="min-h-screen bg-[#212121] p-8">
      <h1 className="mb-16 text-4xl font-bold text-white">
        Experience Overview
      </h1>

      <div className="mx-auto max-w-7xl">
        {experienceData.map((experience, index) => (
          <div
            key={index}
            className="relative mb-12 grid grid-cols-1 gap-6 md:grid-cols-7 md:gap-8"
          >
            {/* Left Column - Date, Position, Company (2 parts) */}
            <div className="md:col-span-2 md:text-right">
              <div className="mb-2 text-base font-medium text-white/70">
                {experience.period}
              </div>
              <h2 className="mb-1 text-2xl font-bold text-white">
                {experience.position}
              </h2>
              <p className="text-sm text-white/50">{experience.company}</p>
            </div>

            {/* Middle Column - Timeline (1 part) */}
            <div className="relative hidden md:col-span-1 md:flex md:justify-center">
              {/* Vertical line */}
              {index !== experienceData.length - 1 && (
                <div className="absolute left-1/2 top-8 h-full w-0.5 -translate-x-1/2 bg-white/20"></div>
              )}
              {/* Dot with border */}
              <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#2a2a2a] bg-[#212121]">
                <div className="h-3 w-3 rounded-full bg-[#2783CF]"></div>
              </div>
            </div>

            {/* Right Column - Card (4 parts) */}
            <div className="md:col-span-4">
              <div className="rounded-xl bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1">
                <h3 className="mb-3 text-xl font-bold text-white">
                  {experience.projectTitle}
                </h3>
                <p className="mb-4 leading-relaxed text-white/70">
                  {experience.summary}
                </p>
                <button className="cursor-pointer rounded-lg bg-[#2783CF] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#2783CF]/80">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
