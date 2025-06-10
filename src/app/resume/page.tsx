import Image from 'next/image';
import Heading from './components/Heading';
import ProgressBlock from './components/ProgressBlock';
import EducationTimeline from './education/EducationTimeline';
import WorkTimeline from './work/WorkTimeline';

export default function Page() {
  return (
    <>
      <h1 className='mb-4 text-xl font-bold'>Welcome to my Résumé.</h1>

      <Heading text='About Me' />
      <div className='p-4'>
        <div className='flex flex-col p-2 md:flex-row'>
          <div>
            <Image
              className='inline rounded-sm shadow-md'
              src='/oukoutdam_photo.jpeg'
              alt='Photo of Ouk Outdam'
              width={280}
              height={280}
              priority
            />
          </div>
          <div className='mt-2 md:ml-12 md:mt-0'>
            <table className='min-w-full'>
              <tbody>
                <tr>
                  <td className='pb-2 pr-4 align-top font-semibold'>Name:</td>
                  <td className='pb-2'>
                    Ouk Outdam
                    <br />
                    អ៊ុក ឧត្តម
                    <br />
                    オック　オドム
                  </td>
                </tr>
                <tr>
                  <td className='pb-2 pr-4 align-top font-semibold'>From:</td>
                  <td className='pb-2'>Cambodia</td>
                </tr>
                <tr>
                  <td className='pb-2 pr-4 align-top font-semibold'>
                    Hobbies:
                  </td>
                  <td className='pb-2'>
                    Programming, Photography, Listening to Music
                  </td>
                </tr>
                <tr>
                  <td className='pb-2 pr-4 align-top font-semibold'>
                    Research:
                  </td>
                  <td className='pb-2'>
                    Machine Learning, Speech Recognition,
                    Verbal&nbsp;and&nbsp;Non-Verbal&nbsp;Phenomena
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p>
          Hello, my name is Outdam. I’m currently pursuing a Master’s degree in
          Computer Science and Engineering at Toyohashi University of
          Technology. I’m deeply interested in all things related to computers
          and have a passion for learning across a wide range of topics. I enjoy
          solving problems with friends and collaborating on programming
          projects to explore new ideas and technologies.
          <br />
          <br />
          Right now, my focus is on applying machine learning to speech
          recognition, particularly in recognizing para-linguistic information
          to enable <strong>rich transcription</strong>. I’m always eager to
          learn, take on new challenges, and grow both personally and
          professionally.
        </p>
      </div>
      <div>
        <Heading text='Computer Languages' />
        <div className='p-4'>
          <ProgressBlock name='Python' value={90} />
          <ProgressBlock name='Java' value={70} />
          <ProgressBlock name='Typescript/Javascript' value={70} />
          <ProgressBlock name='HTML/CSS' value={70} />
          <ProgressBlock name='C' value={60} />
          <p>I also have some experience in:</p>
          <ul>
            <li>Game Development with Unity</li>
            <li>Prototyping with Arduino and Raspberry Pi</li>
            <li>3D modeling with Fusion360 & 3D Printing</li>
          </ul>
        </div>
      </div>
      <div>
        <Heading text='Human Languages' />
        <div className='p-4'>
          <ProgressBlock name='English' value={90} />
          <ProgressBlock name='Khmer' value={75} />
          <ProgressBlock name='Japanese' value={70} />
        </div>
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
      </div>

      <div>
        <Heading text='Awards & Achievements' />
      </div>
    </>
  );
}
