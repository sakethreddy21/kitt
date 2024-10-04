'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProgressBarProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <ProgressBar
        height="2px"
        color="#A4C739"
        options={{
          showSpinner: true,
          easing: 'ease',
          speed: 500,
        }}
      />
    </div>
  );
};

export default ProgressBarProviders;
