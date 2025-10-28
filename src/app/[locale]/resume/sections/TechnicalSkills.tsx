import ProgressBlock from '../components/ProgressBlock';

function TechnicalSkills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', value: 90, level: 'Advanced' },
        { name: 'TypeScript/JavaScript', value: 80, level: 'Intermediate' },
        { name: 'Java', value: 80, level: 'Intermediate' },
        { name: 'HTML/CSS', value: 75, level: 'Intermediate' },
        { name: 'C', value: 70, level: 'Intermediate' },
      ],
    },
    {
      category: 'Frameworks & Technologies',
      skills: [
        { name: 'PyTorch', value: 80, level: 'Intermediate' },
        { name: 'React/Next.js', value: 75, level: 'Intermediate' },
        { name: 'Git/GitHub', value: 75, level: 'Intermediate' },
        { name: 'Node.js', value: 65, level: 'Intermediate' },
      ],
    },
    {
      category: 'Tools & Platforms',
      skills: [
        { name: 'Linux/Unix Systems', value: 70, level: 'Intermediate' },
        { name: 'Arduino/Raspberry Pi', value: 55, level: 'Intermediate' },
        { name: 'Unity Game Development', value: 55, level: 'Intermediate' },
      ],
    },
  ];

  return (
    <div className='p-4'>
      <div className='space-y-6'>
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className='mb-3 text-base font-semibold'>
              {category.category}
            </h3>
            <div className='ml-4'>
              {category.skills.map((skill, skillIndex) => (
                <ProgressBlock
                  key={skillIndex}
                  name={skill.name}
                  value={skill.value}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnicalSkills;
