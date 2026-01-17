import { type ReactElement } from 'react';
import Card from './Card';

interface CardContainerProps {
  children: ReactElement | ReactElement[];
  className?: string;
}

export default function CardContainer({
  children,
  className = '',
}: CardContainerProps) {
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div className={`space-y-6 ${className}`}>
      {childrenArray.map((child, index) => (
        <Card key={index}>{child}</Card>
      ))}
    </div>
  );
}
