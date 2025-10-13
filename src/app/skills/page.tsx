import { Search, BadgeEuroIcon } from 'lucide-react';

export default function Page() {
  return (
    <>
      <div className="flex w-1/2 items-center gap-2 rounded-xl bg-[#2a2a2a] pl-3">
        <Search size={18} color="white" />
        <input
          type="text"
          placeholder="Search for skills..."
          className="w-full border-none bg-transparent px-2 py-2 text-white outline-none"
        />
      </div>
      <div className="mt-10">
        <div className="mt-10">
          <p className="mb-5 text-2xl font-bold text-white">Tools</p>
          <div className="flex flex-wrap gap-8">
            <div className="border-1 flex cursor-pointer flex-col items-center justify-between rounded-xl border-white/30 bg-[#2a2a2a] p-4 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-md hover:shadow-white/30">
              <BadgeEuroIcon size={50} color="white" />
              <p className="text-white">React</p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <p className="mb-5 text-2xl font-bold text-white">Skills</p>
          <div className="flex gap-8">
            <div className="border-1 flex cursor-pointer flex-col items-center justify-between rounded-xl border-white/30 bg-[#2a2a2a] p-4 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-md hover:shadow-white/30">
              <BadgeEuroIcon size={50} color="white" />
              <p className="text-white">React</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
