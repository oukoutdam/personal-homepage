import Image from 'next/image';
import Heading from './components/Heading';

export default function Page() {
  return (
    <>
      <h1 className='mb-4 text-xl font-bold'>Welcome to my Résumé.</h1>

      <Heading text='About Me' />
      <div>
        <div className='flex flex-col p-2 md:flex-row'>
          <div>
            <Image
              className='inline rounded-sm shadow-md'
              src='/oukoutdam_photo.jpeg'
              alt='Photo of Ouk Outdam'
              width={199}
              height={199}
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <Heading text='Programming Languages'></Heading>
        <Heading text='Human Languages'></Heading>
        <progress value='80' max='100'>
          110%
        </progress>
      </div>
      <div>
        <Heading text='Education'></Heading>
      </div>
      <div>
        <Heading text='Work Experience'></Heading>
      </div>

      <div>
        <Heading text='Volunteer Experience'></Heading>
      </div>

      <div>
        <Heading text='Awards & Achievements'></Heading>
      </div>
    </>
  );
}
