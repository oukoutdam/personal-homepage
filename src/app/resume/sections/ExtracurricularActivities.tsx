function ExtracurricularActivities() {
  // Extracurricular activities data
  const activities = [
    {
      organization: "Cambodian Students' Association in Japan",
      roles: [
        {
          title: 'Leader of IT Committee',
          period: '2025 January - Present',
          current: true,
        },
        {
          title: 'Member of IT Committee and Media Committee',
          period: '2024 January - 2024 December',
          current: false,
        },
      ],
    },
    {
      organization:
        'Oshima National College of Maritime Technology, Computer Club',
      roles: [
        {
          title: 'Member',
          period: '2021 April - 2023 March',
          current: false,
        },
      ],
    },
  ];

  return (
    <div className='max-w-2xl pl-6'>
      <div className='space-y-2'>
        {activities.map((activity, index) => (
          <div key={index}>
            <h3 className='mb-2 text-base font-semibold'>
              {activity.organization}
            </h3>

            <div className='ml-4 space-y-2'>
              {activity.roles.map((role, roleIndex) => (
                <div
                  key={roleIndex}
                  className='flex items-start justify-between'
                >
                  <div>
                    <p className='font-medium'>{role.title}</p>
                    <p className='text-sm'>{role.period}</p>
                  </div>
                  {role.current && (
                    <span className='text-xs font-semibold text-blue-600'>
                      Current
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExtracurricularActivities;
