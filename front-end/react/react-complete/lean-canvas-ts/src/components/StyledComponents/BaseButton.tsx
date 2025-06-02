import type { ReactNode } from 'react';

type BaseButtonProps = {
  className?: string;
  children: ReactNode;
};

const BaseButton = ({ className, children }: BaseButtonProps) => {
  return <button className={className}> {children} </button>;
};

export default BaseButton;
