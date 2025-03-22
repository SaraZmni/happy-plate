import type { ButtonHTMLAttributes, FC } from 'react';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  type = 'button',
  className,
  ...props
}) => {
  return (
    <button className={`cursor-pointer ${className}`} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
