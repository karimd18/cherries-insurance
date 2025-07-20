import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
};

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hoverEffect = true,
}) => {
  return (
    <div className={`
      bg-white rounded-xl shadow-md overflow-hidden
      ${hoverEffect ? 'hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

type CardImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export const CardImage: React.FC<CardImageProps> = ({ src, alt, className = '' }) => {
  return (
    <div className={`w-full ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

type CardContentProps = {
  children: React.ReactNode;
  className?: string;
};

export const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

type CardTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export const CardTitle: React.FC<CardTitleProps> = ({ children, className = '' }) => {
  return (
    <h3 className={`text-xl font-bold mb-2 ${className}`}>
      {children}
    </h3>
  );
};

export default Card;
