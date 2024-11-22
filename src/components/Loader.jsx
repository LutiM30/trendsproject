import React from 'react';

const Loader = ({ basic = false }) =>
  !basic ? (
    <div className='spinner-wrapper'>
      <div className='spinme8 spin'>
        <div className='spinhemi'></div>
      </div>
      <div className='spinme7 spin'>
        <div className='spinhemi'></div>
      </div>
      <div className='spinme6 spin'>
        <div className='spinhemi'></div>
      </div>
      <div className='spinme5 spin'>
        <div className='spinhemi'></div>
      </div>
      <div className='spinme4 spin'>
        <div className='spinhemi'></div>
      </div>
      <div className='spinme3 spin'>
        <div className='spinhemi'></div>
      </div>
      <div className='spinme2 spin'>
        <div className='spinhemi'></div>
      </div>
      <div className='spinme1 spin'>
        <div className='spinhemi'></div>
      </div>
    </div>
  ) : (
    <div classNameName='flex items-center justify-center min-h-[200px]'>
      <div classNameName='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'></div>
    </div>
  );

export default Loader;
