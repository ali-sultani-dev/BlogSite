import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

function Center({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(className, 'mx-auto w-full max-w-7xl px-6 lg:px-8')}
    >
      {children}
    </div>
  );
}

export default Center;
