'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  "rounded-lg shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-gray-800",
        outline: "border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",
        ghost: "bg-gray-50 dark:bg-gray-900",
      },
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  title?: string;
  subtitle?: string;
  footer?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, title, subtitle, footer, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cardVariants({ variant, size, className })}
        {...props}
      >
        {(title || subtitle) && (
          <div className="space-y-1.5 mb-4">
            {title && <h3 className="text-2xl font-semibold">{title}</h3>}
            {subtitle && <p className="text-gray-500 dark:text-gray-400">{subtitle}</p>}
          </div>
        )}
        {children}
        {footer && (
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            {footer}
          </div>
        )}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card, cardVariants }; 