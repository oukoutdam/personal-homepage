function EducationTimeline() {
  const educationData = [
    {
      institution: 'Toyohashi University of Technology',
      program:
        'Graduate School of Engineering, Computer Science and Engineering',
      period: '2025 - Present',
      current: true,
    },
    {
      institution: 'Toyohashi University of Technology',
      program: 'School of Engineering, Computer Science and Engineering',
      period: '2023 - 2025',
    },
    {
      institution: 'Oshima National College of Maritime Technology',
      program: 'Department of Information Science and Technology',
      period: '2020 - 2023',
    },
    {
      institution: 'JASSO Tokyo Japanese Language Education Center',
      program: 'Japanese Language Course',
      period: '2019 - 2020',
    },
  ];

  const itemHeight = 100; // Height of each item in the timeline
  const svgHeight = (educationData.length - 1) * itemHeight + 40; // Calculate SVG height based on items
  const sectionHeight = svgHeight + 20; // Add some padding for the section

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
          {educationData.map((edu, index) => (
            <circle
              key={index}
              cx='20'
              cy={10 + index * itemHeight}
              r='6'
              fill={edu.current ? '#3b82f6' : '#9ca3af'}
              stroke='white'
              strokeWidth='2'
            />
          ))}
        </svg>

        {/* Content items */}
        <div className='ml-12'>
          {educationData.map((edu, index) => (
            <div
              key={index}
              className='absolute'
              style={{ top: `${index * itemHeight - 5}px` }}
            >
              <h3 className='text-base font-semibold'>{edu.institution}</h3>
              <p className='mb-1'>{edu.program}</p>
              <p className='text-sm'>{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EducationTimeline;
