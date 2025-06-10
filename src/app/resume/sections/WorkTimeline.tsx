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

  const itemHeight = 100; // Height of each item in the timeline
  const svgHeight = (workData.length - 1) * itemHeight + 40; // Calculate SVG height based on items
  const sectionHeight = svgHeight + 40; // Add some padding for the section

  return (
    <div className='ml-4 max-w-2xl p-4'>
      <div className='relative' style={{ height: `${sectionHeight}px` }}>
        {/* SVG Timeline */}
        <svg
          width='40'
          height={svgHeight}
          className='absolute left-0 top-0'
          viewBox={`0 0 40 ${svgHeight}`}
        >
          {/* Main timeline line */}
          <line
            x1='20'
            y1='10'
            x2='20'
            y2={svgHeight - 30}
            stroke='#d1d5db'
            strokeWidth='2'
          />

          {/* Timeline dots */}
          {workData.map((work, index) => (
            <circle
              key={index}
              cx='20'
              cy={10 + index * itemHeight}
              r='6'
              fill={work.current ? '#3b82f6' : '#9ca3af'}
              stroke='white'
              strokeWidth='2'
            />
          ))}
        </svg>

        {/* Content items */}
        <div className='ml-12'>
          {workData.map((work, index) => (
            <div
              key={index}
              className='absolute'
              style={{ top: `${index * itemHeight - 5}px` }}
            >
              <h3 className='text-lg font-semibold'>{work.company}</h3>
              <p className='mb-1'>{work.role}</p>
              <p className='text-sm'>{work.period}</p>
              <p className='text-sm'>Technologies: {work.technologies}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkTimeline;
