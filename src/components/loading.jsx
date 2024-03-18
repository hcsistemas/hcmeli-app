import React from 'react';
import { Image } from 'react-bootstrap';

const Loading = () => {
  return (
    <div className='loading'>
      <Image src="/loading.gif" alt='loading'/>
    </div>
  )
}

export default Loading;
