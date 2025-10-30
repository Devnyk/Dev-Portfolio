import 'remixicon/fonts/remixicon.css';
import bput from '../assets/book/bput.png';
import sher from '../assets/book/sher.png';

const Education = () => {
  return (
    <section id="education" className="w-full px-6 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto">
          {/* Section Header - Mobile Optimized */}
          <div className="text-center">
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
                background: '#7C5DFF',
                transform: 'rotate(0deg)',
                transformOrigin: 'bottom center',
              }}
            >
              <div className="absolute inset-0 p-2 flex flex-col justify-between text-white font-helvetica">
                <div className="flex flex-col items-center mt-12">
                  <span className="text-[12px] font-semibold italic">ICSE</span>
                  <span className="text-[9px] font-light">Board</span>
                  <div className="w-px h-24 bg-white mx-auto"></div>
                </div>
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-0.5">
                    <span className="text-3xl font-semibold leading-none italic">10</span>
                    <span className="text-sm font-light italic">th</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 top-0 h-1 bg-white/20 rounded-t-md"></div>
            </div>

            {/* Mobile Book 2 - Class 12 (Blue) */}
            <div
              className="relative w-16 h-64 rounded-md shadow-xl transition-all hover:-translate-y-2 duration-500"
              style={{
                background: '#0236FC',
                transform: 'rotate(0deg)',
                transformOrigin: 'bottom center',
              }}
            >
              <div className="absolute inset-0 p-2 flex flex-col justify-between text-white font-helvetica">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="text-5xl font-normal tracking-tight italic mt-6"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)'
                    }}
                  >
                    Science
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-0.5">
                    <span className="text-3xl font-semibold leading-none italic">12</span>
                    <span className="text-sm font-light italic">th</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 top-0 h-1 bg-white/20 rounded-t-md"></div>
            </div>

            {/* Mobile Book 3 - BTech CSE (Navy) */}
            <div
              className="relative w-20 h-72 rounded-md shadow-xl transition-all hover:-translate-y-2 duration-500 ml-4"
              style={{
                background: '#01033E',
                transform: 'rotate(-4.5deg)',
                transformOrigin: 'bottom left',
                // marginBottom: '5px',
              }}
            >
              <div className="absolute inset-0 p-2 flex flex-col justify-between font-helvetica">
                <div className="flex flex-col items-center">
                  <div
                    className="text-5xl font-bold tracking-tight text-[#0236FC] mt-8"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    BTech
                  </div>
                  <span className=" text-white">CSE</span>
                </div>
                <div className="flex flex-col items-center text-white gap-0.5">
                  <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center">
                    <img src={bput} alt="" />
                  </div>
                  <div className='flex flex-col'>
                    <span className="text-[10px] font-medium text-center">
                    BPUT
                  </span>
                  <span className="text-[10px] font-light text-center">
                    University
                  </span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 top-0 h-1 bg-white/10 rounded-t-md"></div>
            </div>

            {/* Mobile Book 4 - Bootcamp (Teal/Green) */}
            <div
              className="relative w-16 h-72 rounded-md shadow-xl transition-all hover:-translate-y-2 duration-500 ml-8"
              style={{
                background: 'linear-gradient(180deg, #086250, #0B2E28)',
                transform: 'rotate(-11deg)',
                transformOrigin: 'bottom left',
                // marginBottom: '10px',
              }}
            >
              <div className="absolute inset-0 p-2 flex flex-col justify-between font-helvetica">
                <div className="flex flex-col text-center">
                  <span className="text-[12px] font-medium text-[#DBED3B]">KODR</span>
                  <span className="text-[9px] font-normal text-white">Batch 2</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="text-4xl font-medim tracking-tight text-[#DBED3B] italic "
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    Bootcamp
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <span className="text-[10px]">
                        <img src={sher} alt="" />
                      </span>
                    </div>
                    <span className="text-[10px] font-normal text-white text-center leading-tight">
                      Sheryians
                    </span>
                    <span className="text-[7px] font-light text-white text-center leading-tight">
                      Coding School
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
          <div className="relative h-[500px] flex items-end justify-center gap-1 px-4">

            {/* Desktop Book 1 - Class 10 (Purple) */}
            <div
              className="relative w-24 h-80 rounded-lg shadow-2xl transition-all hover:-translate-y-4 duration-500"
              style={{
                background: '#7C5DFF',
                transform: 'rotate(0deg)',
                transformOrigin: 'bottom center',
              }}
            >
              <div className="absolute inset-0 p-4 flex flex-col justify-between text-white font-helvetica">
                <div className="flex flex-col text-center mt-24">
                  <span className="text-xl font-semibold italic">ICSE</span>
                  <span className="text-sm font-medium">Board</span>
                  <div className="w-[1.3px] h-24 bg-white mx-auto"></div>
                </div>
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-1 mt-3">
                    <span className="text-5xl font-black leading-none italic">10</span>
                    <span className="text-lg font-medium italic">th</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 top-0 h-1 bg-white/20 rounded-t-lg"></div>
            </div>

            {/* Desktop Book 2 - Class 12 (Blue) */}
            <div
              className="relative w-24 h-96 rounded-lg shadow-2xl transition-all hover:-translate-y-4 duration-500"
              style={{
                background: '#0236FC',
                transform: 'rotate(0deg)',
                transformOrigin: 'bottom center',
              }}
            >
              <div className="absolute inset-0 p-4 flex flex-col justify-between text-white font-helvetica">
                <div className="flex flex-col items-center gap-4">
                  <div
                    className="text-6xl font-medium tracking-tight italic mt-16"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)'
                    }}
                  >
                    Science
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-1 mt-12">
                    <span className="text-5xl font-black leading-none italic">12</span>
                    <span className="text-lg font-medium italic">th</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 top-0 h-1 bg-white/20 rounded-t-lg"></div>
            </div>

            {/* Desktop Book 3 - BTech CSE (Navy) */}
            <div
              className="relative w-24 h-[420px] rounded-lg shadow-2xl transition-all hover:-translate-y-4 hover:rotate-[-10deg] duration-500 ml-10"
              style={{
                background: '#01033E',
                transform: 'rotate(-6deg)',
                transformOrigin: 'bottom left',
              }}
            >
              <div className="absolute inset-0 p-4 flex flex-col justify-between font-helvetica">
                <div className="flex flex-col items-center gap-1">
                  <div
                    className="text-6xl font-semibold tracking-tight mt-16"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                      background: '#0236FC',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    BTech
                  </div>
                  <span className="text-xl font-semibold text-white">CSE</span>
                </div>
                <div className="flex flex-col items-center text-white mt-4 gap-0.5">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <img src={bput} alt="" />
                  </div>
                  <div className='flex flex-col'>
                    <span className="text-[15px] font-semibold text-center">
                    BPUT 
                  </span>
                  <span className="text-xs font-light text-white">University</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 top-0 h-1 bg-white/10 rounded-t-lg"></div>
            </div>

            {/* Desktop Book 4 - Bootcamp (Teal/Green) */}
            <div
              className="relative w-24 h-[440px] rounded-lg shadow-2xl transition-all hover:-translate-y-4 hover:rotate-[-20deg] duration-500 ml-16"
              style={{
                background: 'linear-gradient(180deg, #086250, #0B2E28)',
                transform: 'rotate(-14deg)',
                transformOrigin: 'bottom left',
              }}
            >
              <div className="absolute inset-0 p-4 flex flex-col justify-between font-helvetica">
                <div className="flex flex-col text-center">
                  <span className="text-[16px] font-semibold text-[#DBED3B]">KODR</span>
                  <span className="text-[12px] font-normal text-white">Batch 2</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div
                    className="text-6xl font-medium tracking-tight text-[#DBED3B] italic"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    Bootcamp
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <span className="text-sm">
                        <img src={sher} alt="" />
                      </span>
                    </div>
                    <span className="text-sm font-medium text-white text-center leading-tight">
                      Sheryians
                    </span>
                    <span className="text-[9px] font-light text-white text-center leading-tight">
                      Coding School
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 top-0 h-1 bg-white/20 rounded-t-lg"></div>
            </div>
          </div>
        </div>

        {/* Gray Base Bar */}
        <div className="mt-1 flex justify-center">
          <div
            className="w-full max-w-5xl h-4 rounded-full bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent shadow-lg"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Education;