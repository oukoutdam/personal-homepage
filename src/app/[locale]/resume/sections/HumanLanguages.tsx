import ProgressBlock from '../components/ProgressBlock';

function HumanLanguages() {
  const languages = [
    { name: 'English', value: 90, level: 'Advanced' },
    { name: 'Khmer', value: 75, level: 'Intermediate' },
    { name: 'Japanese', value: 70, level: 'Intermediate' },
  ];

  return (
    <div className='p-4'>
      <div className='ml-4'>
        {languages.map((language, index) => (
          <ProgressBlock
            key={index}
            name={language.name}
            value={language.value}
            level={language.level}
          />
        ))}
      </div>
    </div>
  );
}

export default HumanLanguages;
