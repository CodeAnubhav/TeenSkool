import * as React from 'react';

import { cn } from '@/lib/utils';

// The main Card component wrapper.
// I've updated this with a softer radius, a more defined shadow, and a smooth transition.
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-2xl border border-slate-200/80 bg-card text-card-foreground shadow-lg transition-shadow duration-300 ease-in-out',
      className,
    )}
    {...props}
  />
));
Card.displayName = 'Card';

// The CardHeader component.
// Increased padding for more breathing room.
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

// The CardTitle component.
// Font is now bolder to give it more emphasis.
const CardTitle = React.forwardRef(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-bold leading-none tracking-tight', // Changed to font-bold
      className,
    )}
    {...props}
  >
    {children}
  </h3>
));
CardTitle.displayName = 'CardTitle';

// The CardDescription component.
// No changes needed, the default style is perfect for secondary text.
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

// The CardContent component.
// The default padding works well.
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

// The CardFooter component.
// The default padding works well.
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
