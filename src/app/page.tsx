export default function Page() {
  return (
    <>
      <h2 className='text-xl'>Hello,</h2>
      <p>My name is Ouk Outdam. Welcome to my personal website.</p>
      <br />
      <p className='leading-relaxed'>
        I am a Computer Science student currently studying in Japan, pursuing my
        Master&apos;s degree in 2025. My research focuses on speech recognition,
        though I also enjoy writing various programs in different languages
        during my free time.
      </p>
      <br />
      <div className='space-y-3'>
        <p className='text-lg'>What to expect on this website:</p>
        <ul className='ml-4 list-none space-y-2'>
          <li className='flex items-start'>
            <span className='mr-2'>•</span>
            <span>
              <strong className='font-medium'>Résumé</strong> - A comprehensive
              overview of my background and experiences
            </span>
          </li>
          <li className='flex items-start'>
            <span className='mr-2'>•</span>
            <span>
              <strong className='font-medium'>Blog</strong> - A space where I
              document and share what I learn
            </span>
          </li>
          <li className='flex items-start'>
            <span className='mr-2'>•</span>
            <span>
              <strong className='font-medium'>Projects</strong> - A showcase of
              programs I&apos;ve made
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
