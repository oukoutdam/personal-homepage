function ProgressBlock({ name, value }: { name: string; value: number }) {
  return (
    <div className='flex flex-row items-center'>
      <p className='mr-4 w-56'>{name}</p>
      <div className='ml-6 h-2 w-64 rounded-full bg-gray-200'>
        <div
          className='h-2 rounded-full bg-gray-600 transition-colors duration-1000 ease-out'
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBlock;
