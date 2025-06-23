import React from 'react';

function WorkTimeline() {
  const workData = [
    {
      company: 'e-Seikatsu',
      role: 'Frontend Developer Intern',
      period: 'January 6, 2025 - February 21, 2025',
      technologies: 'React, TypeScript, Material-UI',
      current: false,
    },
  ];

  return (
    <div className='max-w-2xl p-4'>
      <div className='relative'>
        {/* We map over the data to create each timeline entry as a self-contained unit */}
        {workData.map((work, index) => (
          <div key={index} className='relative flex pb-8 last:pb-0'>
            {/* Left side: The timeline's dot and connecting line */}
            <div className='flex h-auto w-10 flex-shrink-0 flex-col items-center pt-2'>
              {/* The Dot */}
              <div
                className={`relative z-10 h-4 w-4 rounded-full border-2 border-black dark:border-white ${
                  work.current ? 'bg-blue-500' : 'bg-gray-400'
                }`}
              ></div>

              {/* The connecting line - hidden for the last item */}
              {index < workData.length && (
                <div className='mt-1 h-full w-0.5 bg-gray-300'></div>
              )}
            </div>

            {/* Right side: The work experience content */}
            <div className='flex-grow pl-4'>
              <h3 className='text-lg font-semibold'>{work.company}</h3>
              <p>{work.role}</p>
              <p className='mt-1 text-sm'>{work.period}</p>
              <p className='mt-1 text-sm'>
                <span className='font-medium'>Technologies:</span>{' '}
                {work.technologies}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkTimeline;
