import ProjectCard, { ProjectCardProps } from './components/ProjectCard';

const myProjects: ProjectCardProps[] = [
  {
    name: 'Speaking With ChatGPT',
    description:
      "A desktop application made with PyQT5 that uses OpenAI's api and Google's Text-to-Speech api to create a simple chatbot that you can talk to. It is a small project that I made for Toyohashi University of Technology's Summer Tech Camp 2024.",
    status: 'completed',
    link: 'https://github.com/odakazu66/Summer-TECH-CAMP2024',
  },
  {
    name: 'Yoyaku Janken',
    description:
      'A simple rock-paper-scissors game that I made for my friends to use when everyone is busy. It is a web app where people can register their move and finally see who wins after everyone has made their choice.',
    status: 'brushing-up',
    link: 'https://github.com/oukoutdam/yoyaku_janken',
  },
];

export default function Projects() {
  return (
    <>
      <h1 className='mb-4 text-xl font-bold'>Welcome to my Projects section</h1>
      <p className='mb-4'>
        Here I showcase some of the things that I have made or have helped made.
        Please feel free to use any of them you find useful.
      </p>

      {myProjects.map((Project, index) => {
        return <ProjectCard key={index} Project={Project} />;
      })}
    </>
  );
}
