import Image from 'next/image';

function AboutMe() {
  console.log(`${process.env.NODE_ENV}`);
  console.log(`${process.env.PAGES_BASE_PATH}`);

  return (
    <>
      <div className='p-4'>
        {/* Profile Overview */}
        <div className='mb-8 flex flex-col p-2 md:flex-row'>
          <div className='flex-shrink-0'>
            <Image
              className='rounded-lg shadow-md'
              src={'/oukoutdam_photo.jpeg'}
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
                    <span className='text-sm'>
                      អ៊ុក ឧត្តម
                      <br />
                      オック　オドム
                    </span>
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
                    Machine Learning, Speech Recognition, Para-linguistic
                    Analysis
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Personal Introduction */}
        <div className='mb-6'>
          <h3 className='mb-3 text-base font-semibold'>
            Personal Introduction
          </h3>
          <div className='ml-4'>
            <p className='leading-relaxed'>
              Hello, my name is Outdam. I&apos;m currently pursuing a
              Master&apos;s degree in Computer Science and Engineering at
              Toyohashi University of Technology. I&apos;m deeply interested in
              all things related to computers and have a passion for learning
              across a wide range of topics. I enjoy solving problems with
              friends and collaborating on programming projects to explore new
              ideas and technologies.
            </p>
          </div>
        </div>

        {/* Research Focus */}
        <div>
          <h3 className='mb-3 text-base font-semibold'>Current Research</h3>
          <div className='ml-4'>
            <p className='leading-relaxed'>
              My current research focuses on applying machine learning to speech
              recognition, particularly in recognizing para-linguistic
              information to enable <strong>rich transcription</strong>. This
              involves developing systems that can capture not just what is
              said, but how it&apos;s said—including intonation, fillers worlds,
              laughter, and other non-verbal vocal cues that add meaning to
              human communication.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
