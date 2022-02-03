import React from 'react';
import BackToTop from 'react-back-to-top-button'
import { FaArrowCircleUp } from 'react-icons/fa';

export default function Back() {
  return(
      <>
        <BackToTop
            showOnScrollUp
            showAt={100}
            speed={2000}
            easing="easeInOutQuint">
            <span className='iconBack'><FaArrowCircleUp/></span>
        </BackToTop>
      
      </>
  );
}




