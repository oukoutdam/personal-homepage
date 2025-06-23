function EducationTimeline() {
  const educationData = [
    {
      institution: 'Toyohashi University of Technology',
      faculty: 'Graduate School of Engineering',
      course: 'Computer Science and Engineering',
      period: '2025 - Present',
      current: true,
    },
    {
      institution: 'Toyohashi University of Technology',
      faculty: 'School of Engineering',
      course: 'Computer Science and Engineering',
      period: '2023 - 2025',
    },
    {
      institution: 'Oshima National College of Maritime Technology',
      course: 'Department of Information Science and Technology',
      period: '2020 - 2023',
    },
    {
      institution: 'JASSO Tokyo Japanese Language Education Center',
      course: 'Japanese Language Course',
      period: '2019 - 2020',
    },
  ];

  return (
    <div className='max-w-2xl p-4'>
      <div className='relative'>
        {/* We map over the data to create each timeline entry as a self-contained unit */}
        {educationData.map((edu, index) => (
          <div key={index} className='relative flex pb-8 last:pb-0'>
            {/* Left side: The timeline's dot and connecting line */}
            <div className='flex h-auto w-10 flex-shrink-0 flex-col items-center pt-2'>
              {/* The Dot */}
              <div
                className={`relative z-10 h-4 w-4 rounded-full border-2 border-white ${
                  edu.current ? 'bg-blue-500' : 'bg-gray-400'
                }`}
              ></div>

              {/* The connecting line - hidden for the last item */}
              {index < educationData.length && (
                <div className='mt-1 h-full w-0.5 bg-gray-300'></div>
              )}
            </div>

            {/* Right side: The educational content */}
            <div className='flex-grow pl-4'>
              <h3 className='text-lg font-semibold'>{edu.institution}</h3>
              {edu.faculty && <p>{edu.faculty}</p>}
              <p>{edu.course}</p>
              <p className='mt-1 text-sm'>{edu.period}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationTimeline;
