import React from 'react';
import Image from 'next/image';

export default function TrainingMugIconLoader() {
  return (
    <div className="grid place-content-center h-screen">
      <Image
        src="/shared/logo.svg"
        className="animate-pulse"
        width={600}
        height={600}
        alt="traningmug-logo"
      />
    </div>
  );
}
