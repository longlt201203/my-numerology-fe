import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  type = 'button',
  className = '',
  children,
  onClick,
}) => {
  const baseClasses = 'rounded focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses: { [key in NonNullable<ButtonProps['variant']>]: string } = {
    primary: 'bg-deepPurple text-crystalWhite hover:bg-lavender',
    secondary: 'bg-softGold text-midnightBlue hover:bg-lavender',
    tertiary: 'bg-transparent text-deepPurple hover:text-lavender border border-deepPurple',
  };

  const sizeClasses: { [key in NonNullable<ButtonProps['size']>]: string } = {
    small: 'text-sm px-2 py-1',
    medium: 'text-base px-4 py-2',
    large: 'text-lg px-6 py-3',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
