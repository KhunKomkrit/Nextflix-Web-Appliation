import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function CenteredMessage({ children }: Props) {
  return (
    <div className="flex justify-center items-center h-[300px] w-full text-white text-lg">
      {children}
    </div>
  );
}
