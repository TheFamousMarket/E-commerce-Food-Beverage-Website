import React from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium focus:outline-none transition-all duration-200';
  const variantStyles = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
    secondary: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200 focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500',
    outline: 'border border-indigo-600 text-indigo-600 bg-transparent hover:bg-indigo-50 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
  };
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };
  const widthStyles = fullWidth ? 'w-full' : '';
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className || ''}`;
  return <button className={combinedClassName} {...props}>
      {children}
    </button>;
};
export default Button;