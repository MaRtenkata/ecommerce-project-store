import { cn } from '@/lib/utils';
import React, { MouseEventHandler } from 'react';

interface IconButtonProps {
  handleClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  handleClick,
  icon,
  className,
}) => {
  return (
    <button
      onClick={handleClick}
      className={cn(
        'rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition',
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
