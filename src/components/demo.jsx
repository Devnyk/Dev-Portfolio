import 'remixicon/fonts/remixicon.css';

const Education = () => {
  return (
    <section id="education" className="w-full py-20 px-6 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto">
          {/* Section Header - Mobile Optimized */}
          <div className="text-center mb-1 lg:mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Educations
            </h2>
            <div className="w-24 h-1 mx-auto rounded bg-blue-600 dark:bg-blue-400"></div>
          </div>

        {/* MOBILE VERSION - Only visible on screens smaller than md (768px) */}
        <div className="block md:hidden">
          <div className="relative h-[400px] flex items-end justify-center gap-1 px-4 overflow-hidden">

            {/* Mobile Book 1 - Class 10 (Purple) */}
            <div
              className="relative w-16 h-56 rounded-md shadow-xl transition-all hover:-translate-y-2 duration-500"
              style={{
                background: 'linear-gradient(180deg, #8b5cf6, #7c3aed)',
                transform: 'rotate(0deg)',
                transformOrigin: 'bottom center',
              }}
            >
              <div className="absolute inset-0 p-2 flex flex-col justify-between text-white font-satoshi">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-light opacity-90">ICSE Board</span>
                  <div className="w-px h-6 bg-white/40 mx-auto"></div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black leading-none">10</div>
                  <div className="text-xs font-light -mt-1">th</div>
                </div>
              </div>
              <div className="absolute inset-x-0 top-0 h-1 bg-white/20 rounded-t-md"></div>
            </div>

            {/* Mobile Book 2 - Class 12 (Blue) */}
            <div
              className="relative w-16 h-64 rounded-md shadow-xl transition-all hover:-translate-y-2 duration-500"
              style={{
                background: 'linear-gradient(180deg, #3b82f6, #1d4ed8)',
                transform: 'rotate(0deg)',
                transformOrigin: 'bottom center',
              }}
            >
              <div className="absolute inset-0 p-2 flex flex-col justify-between text-white font-satoshi">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="text-lg font-black tracking-tight"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)'
                    }}
                  >
                    Science
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black leading-none">12</div>
                  <div className="text-xs font-light -mt-1">th</div>
                </div>
              </div>
              <div className="absolute inset-x-0 top-0 h-1 bg-white/20 rounded-t-md"></div>
            </div>

            {/* Mobile Book 3 - BTech CSE (Navy) */}
            <div
              className="relative w-[5rem] h-72 rounded-md shadow-xl transition-all hover:-translate-y-2 duration-500 ml-6"
              style={{
                background: 'linear-gradient(180deg, #1e3a8a, #0f172a)',
                transform: 'rotate(-6deg)',
                transformOrigin: 'bottom left',
                // marginBottom: '5px',
              }}
            >
              <div className="absolute inset-0 p-2 flex flex-col justify-between font-satoshi">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="text-xl font-black tracking-tight"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                      background: 'linear-gradient(180deg, #3b82f6, #60a5fa)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    BTech
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1 text-white">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-white/60"></div>
                  </div>
                  <span className="text-[9px] font-light">CSE</span>
                  <span className="text-[7px] font-light opacity-70 text-center">
                    BPUT University
                  </span>
                </div>
              </div>
              <div className="absolute inset-x-0 top-0 h-1 bg-white/10 rounded-t-md"></div>
            </div>

            {/* Mobile Book 4 - Bootcamp (Teal/Green) */}
            <div
              className="relative w-16 h-72 rounded-md shadow-xl transition-all hover:-translate-y-2 duration-500 ml-5"
              style={{
                background: 'linear-gradient(180deg, #059669, #047857)',
                transform: 'rotate(-10deg)',
                transformOrigin: 'bottom left',
                // marginBottom: '10px',
              }}
            >
              <div className="absolute inset-0 p-2 flex flex-col justify-between font-satoshi">
                <div className="flex flex-col gap-0.5 text-right">
                  <span className="text-[9px] font-medium text-yellow-400">KODR</span>
                  <span className="text-[7px] font-light text-white/70">Batch 2</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="text-lg font-black tracking-tight text-yellow-400"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    Bootcamp
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-[10px]">🎓</span>
                    </div>
                    <span className="text-[7px] font-light text-white text-center leading-tight">
                      Sheryians<br />Coding School
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 top-0 h-1 bg-white/20 rounded-t-md"></div>
            </div>
          </div>
        </div>

        {/* DESKTOP VERSION - Only visible on md screens and larger (768px+) */}
        <div className="hidden md:block">
          <div className="relative h-[500px] flex items-end justify-center gap-2 px-4">

            {/* Desktop Book 1 - Class 10 (Purple) */}
            <div
              className="relative w-24 h-80 rounded-lg shadow-2xl transition-all hover:-translate-y-4 duration-500"
              style={{
                background: 'linear-gradient(180deg, #8b5cf6, #7c3aed)',
                transform: 'rotate(0deg)',
                transformOrigin: 'bottom center',
              }}
            >
              <div className="absolute inset-0 p-4 flex flex-col justify-between text-white font-satoshi">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-light opacity-90">ICSE Board</span>
                  <div className="w-px h-12 bg-white/40 mx-auto"></div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black leading-none">10</div>
                  <div className="text-lg font-light -mt-1">th</div>
                </div>
              </div>
              <div className="absolute inset-x-0 top-0 h-1 bg-white/20 rounded-t-lg"></div>
            </div>

            {/* Desktop Book 2 - Class 12 (Blue) */}
            <div
              className="relative w-24 h-96 rounded-lg shadow-2xl transition-all hover:-translate-y-4 duration-500"
              style={{
                background: 'linear-gradient(180deg, #3b82f6, #1d4ed8)',
                transform: 'rotate(0deg)',
                transformOrigin: 'bottom center',
              }}
            >
              <div className="absolute inset-0 p-4 flex flex-col justify-between text-white font-satoshi">
                <div className="flex flex-col items-center gap-4">
                  <div
                    className="text-3xl font-black tracking-tight"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)'
                    }}
                  >
                    Science
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black leading-none">12</div>
                  <div className="text-lg font-light -mt-1">th</div>
                </div>
              </div>
              <div className="absolute inset-x-0 top-0 h-1 bg-white/20 rounded-t-lg"></div>
            </div>

            {/* Desktop Book 3 - BTech CSE (Navy) */}
            <div
              className="relative w-28 h-[420px] rounded-lg shadow-2xl transition-all hover:-translate-y-4 hover:rotate-[-10deg] duration-500 ml-8"
              style={{
                background: 'linear-gradient(180deg, #1e3a8a, #0f172a)',
                transform: 'rotate(-6deg)',
                transformOrigin: 'bottom left',
              }}
            >
              <div className="absolute inset-0 p-4 flex flex-col justify-between font-satoshi">
                <div className="flex flex-col items-center gap-4">
                  <div
                    className="text-4xl font-black tracking-tight"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                      background: 'linear-gradient(180deg, #3b82f6, #60a5fa)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    BTech
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 text-white">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full border-2 border-white/60"></div>
                  </div>
                  <span className="text-xs font-light">CSE</span>
                  <span className="text-[8px] font-light opacity-70 text-center">
                    BPUT University
                  </span>
                </div>
              </div>
              <div className="absolute inset-x-0 top-0 h-1 bg-white/10 rounded-t-lg"></div>
            </div>

            {/* Desktop Book 4 - Bootcamp (Teal/Green) */}
            <div
              className="relative w-24 h-[440px] rounded-lg shadow-2xl transition-all hover:-translate-y-4 hover:rotate-[-20deg] duration-500 ml-14"
              style={{
                background: 'linear-gradient(180deg, #059669, #047857)',
                transform: 'rotate(-14deg)',
                transformOrigin: 'bottom left',
              }}
            >
              <div className="absolute inset-0 p-4 flex flex-col justify-between font-satoshi">
                <div className="flex flex-col gap-1 text-right">
                  <span className="text-xs font-medium text-yellow-400">KODR</span>
                  <span className="text-[8px] font-light text-white/70">Batch 2</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div
                    className="text-3xl font-black tracking-tight text-yellow-400"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    Bootcamp
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-sm">🎓</span>
                    </div>
                    <span className="text-[8px] font-light text-white text-center leading-tight">
                      Sheryians<br />Coding School
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 top-0 h-1 bg-white/20 rounded-t-lg"></div>
            </div>
          </div>
        </div>

        {/* Gray Base Bar */}
        <div className="mt-8 flex justify-center">
          <div
            className="w-full max-w-5xl h-4 rounded-full bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent shadow-lg"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Education;