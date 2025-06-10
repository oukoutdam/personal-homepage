import React from 'react';

function Heading({ text }: { text: string }) {
  return <h2 className='m-2 text-lg font-bold'>{text}</h2>;
}

export default Heading;
