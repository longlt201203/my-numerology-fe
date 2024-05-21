import React from 'react';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'caption';
  className?: string;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ variant, className = '', children }) => {
  const baseClasses = 'text-midnightBlue';

  const variantClasses: { [key in TypographyProps['variant']]: string } = {
    h1: 'font-heading text-4xl mb-4',
    h2: 'font-secondary text-3xl mb-3',
    h3: 'font-secondary text-2xl mb-3',
    h4: 'font-secondary text-xl mb-2',
    h5: 'font-secondary text-lg mb-2',
    h6: 'font-secondary text-base mb-2',
    p: 'font-body text-base mb-4',
    span: 'font-body text-base',
    caption: 'font-body text-sm',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return React.createElement(variant, { className: classes }, children);
};

export default Typography;
