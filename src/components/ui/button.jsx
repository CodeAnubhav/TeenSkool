import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

// Here we define all the styles for our button variants.
// I've updated this to include smoother transitions and more modern aesthetics.
const buttonVariants = cva(
  // Base classes for all buttons
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
  {
    variants: {
      variant: {
        // Primary button (our main yellow CTA)
        default:
          'bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:-translate-y-px hover:shadow-xl',
        // Destructive button (for delete/cancel actions)
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:-translate-y-px',
        // Outline button (secondary action with a border)
        outline:
          'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground hover:-translate-y-px',
        // Secondary button (light gray)
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:-translate-y-px',
        // Ghost button (text-only, for subtle actions)
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        // Link button (looks like a hyperlink)
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        // Default button size
        default: 'h-10 px-4 py-2',
        // Small button size
        sm: 'h-9 px-3',
        // Large button size - made more distinct
        lg: 'h-12 rounded-xl px-8 text-base',
        // Icon-only button
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = 'Button';

export { Button, buttonVariants };
