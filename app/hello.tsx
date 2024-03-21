
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const hello = () => {
  const [isImageTrue, setIsImageTrue] = useState(true);
  const router = useRouter();

  const handleImageClick = () => {
    if (isImageTrue) {

      setIsImageTrue(false);
    } else {
     
      router.push('/hello');
    }
  };

  return (
    <div>
      <h1>Image Button Example</h1>
      <img
        src={isImageTrue ? '/animated1.jpg' : '/back.jpj'}
        alt="Image Button"
        onClick={handleImageClick}
      />
    </div>
  );
};

export default hello;
