import ProjectCard, { ProjectCardProps } from './components/ProjectCard';

const myProjects: ProjectCardProps[] = [
  {
    name: 'yoyaku janken',
    description:
      'A simple rock-paper-scissors web app I built for my friends to use when everyone was too busy to talk in real time. Players can register their moves, and the app reveals the winner once all choices are submitted. This project was a way for me to learn and practice using Express.js and MongoDB.',
    status: 'brushing-up',
    link: 'https://github.com/oukoutdam/yoyaku_janken',
  },
  {
    name: 'Speaking With ChatGPT',
    description:
      "A desktop application made with PyQT5 that uses OpenAI's api and Google's Text-to-Speech api to create a simple chatbot that you can talk to. It is a small project that I made for Toyohashi University of Technology's Summer Tech Camp 2024.",
    status: 'completed',
    link: 'https://github.com/odakazu66/Summer-TECH-CAMP2024',
  },
  {
    name: 'Smart Gathering',
    description:
      'A prototype of a robotic arm designed to harvest wood ear mushrooms, built using an Arduino and a Raspberry Pi. It was created for the Original Section of the 32nd National College of Technology Programming Contest. I was responsible for controlling the robotic arm and defining the communication between the Raspberry Pi and the Arduino.',
    status: 'completed',
    link: 'https://youtu.be/adpQZlHFF4k?list=PLTPqb9X7I-LlAPrKWlDrPkFlmyvIK3iXT&t=5160',
  },
  {
    name: 'Shirokuro',
    description:
      'A platformer game developed with Unity. The objective is to paint the entire level and then view the completed result of your work. This game was created for the 28th Chugoku Region College of Technology Computer Festival.',
    status: 'completed',
    link: 'https://play.unity.com/en/games/e22c51cd-c38b-421e-871d-4988a5f4629f/55m96bus',
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
