import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        // Base styles for the input field
        'flex h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-background transition-all duration-300 ease-in-out',
        // Styles for the file input type
        'file:border-0 file:bg-transparent file:text-sm file:font-medium',
        // Styles for the placeholder text
        'placeholder:text-slate-400',
        // Modern focus state: border color changes to primary, and a soft ring appears
        'focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/40',
        // Disabled state
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
