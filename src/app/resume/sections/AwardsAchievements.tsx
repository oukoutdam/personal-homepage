function AwardsAchievements() {
  const awards = [
    {
      title: 'NGK Scholarship Recipient',
      organization: 'NGK Foundation for International Students',
      year: '2025 - Present',
      description:
        'Scholarship awarded to support graduate studies, including a monthly stipend.',
    },

    {
      title: 'MEXT Scholarship Recipient',
      organization:
        'Ministry of Education, Culture, Sports, Science and Technology, Japan',
      year: '2019 - 2025',
      description:
        'Full scholarship for college of technology and undergraduate studies',
    },
    {
      title: 'Certificate of Appreciation',
      organization: "Cambodian Students' Association in Japan",
      year: '2024',
      description:
        'Recognized for volunteer contributions to the IT Committee and Media Committee',
    },
    {
      title: 'Outstanding Graduating Student Award',
      organization: '電気・情報関連学会中国支部',
      year: '2023',
      description:
        'Awarded for academic excellence by a consortium of electrical and information engineering societies in the Chūgoku region',
    },
    {
      title:
        'The 32nd National College of Technology Programming Contest - Original Section',
      organization: 'Japan Federation of KOSEN Association',
      year: '2021',
      description: "Mext Minister's Award and Grand Prize Winner",
    },

    {
      title: 'The 28th Chugoku Region College of Technology Computer Festival',
      organization: 'College of Technologies in the Chugoku Region of Japan',
      year: '2021',
      description:
        '1st place in the game development category with 2D platformer game - Shirokuro',
    },
  ];

  return (
    <div className='max-w-2xl pl-6'>
      <div className='space-y-4'>
        {awards.map((award, index) => (
          <div key={index} className='flex items-start justify-between'>
            <div className='flex-1 pr-4'>
              <h3 className='mb-1 text-base font-semibold'>{award.title}</h3>
              <p className='mb-1 text-sm font-medium'>{award.organization}</p>
              <p className='text-sm'>{award.description}</p>
            </div>
            <div className='flex-shrink-0'>
              <span className='text-sm font-medium text-blue-600'>
                {award.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AwardsAchievements;
