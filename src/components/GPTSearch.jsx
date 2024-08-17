import React from 'react';
import { B_IMG } from '../utils/constants';
import GptSearchBar from './GptSearchBar';

const GPTSearch = () => {

  return (
    <div className='flex justify-center'>
      <img src={B_IMG} alt="" className='absolute -z-10'/>
      <GptSearchBar/>
      
    </div>
  );
}

export default GPTSearch;
