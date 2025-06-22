function ProgressBlock({
  name,
  value,
  level,
}: {
  name: string;
  value: number;
  level?: string;
}) {
  const getProgressColor = (level) => {
    switch (level) {
      case 'Advanced':
        return 'bg-green-500';
      case 'Intermediate':
        return 'bg-blue-500';
      case 'Beginner':
        return 'bg-orange-500';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div className='mb-3 flex flex-row items-center'>
      <p className='mr-4 w-56'>{name}</p>
      <div className='ml-6 h-2 w-64 rounded-full bg-gray-200'>
        <div
          className={`h-2 rounded-full transition-colors duration-1000 ease-out ${getProgressColor(level)}`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBlock;
