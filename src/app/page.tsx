export default function Page() {
  return (
    <main>
      <h2 className="text-xl">Hello,</h2>
      <p>My name is Ouk Outdam. Welcome to my personal website.</p>
      <br />
      <p className="leading-relaxed">I am a Computer Science student currently studying in Japan, pursuing my Master&apos;s degree in 2025. My research focuses on speech recognition, though I also enjoy writing various programs in different languages during my free time.</p>
      <br />
      <div className="space-y-3">
        <p className="text-lg">What to expect on this website:</p>
        <ul className="space-y-2 list-none ml-4">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong className="font-medium">Portfolio</strong> - A comprehensive overview of my background and experiences</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong className="font-medium">Blog</strong> - A space where I document and share what I learn</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong className="font-medium">Tools</strong> - A showcase of programs I&apos;ve made</span>
          </li>
        </ul>
      </div>
    </main>

  );
}