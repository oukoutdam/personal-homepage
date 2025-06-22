import Heading from './components/Heading';
import EducationTimeline from './sections/EducationTimeline';
import WorkTimeline from './sections/WorkTimeline';
import ExtracurricularActivities from './sections/ExtracurricularActivities';
import AwardsAchievements from './sections/AwardsAchievements';
import TechnicalSkills from './sections/TechnicalSkills';
import HumanLanguages from './sections/HumanLanguages';
import AboutMe from './sections/AboutMe';

export default function Page() {
  return (
    <>
      <h1 className='mb-6 text-2xl font-bold'>Welcome to my Résumé.</h1>

      <Heading text='About Me' />
      <AboutMe />

      <div>
        <Heading text='Technical Skills' />
        <TechnicalSkills />
      </div>
      <div>
        <Heading text='Human Languages' />
        <HumanLanguages />
      </div>
      <div>
        <Heading text='Education' />
        <EducationTimeline />
      </div>
      <div>
        <Heading text='Work Experience' />
        <WorkTimeline />
      </div>

      <div>
        <Heading text='Extracurricular Activities' />
        <ExtracurricularActivities />
      </div>

      <div>
        <Heading text='Awards & Achievements' />
        <AwardsAchievements />
      </div>
    </>
  );
}
