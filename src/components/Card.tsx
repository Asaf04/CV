interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow ${className}`}
    >
      {children}
    </div>
  );
}
