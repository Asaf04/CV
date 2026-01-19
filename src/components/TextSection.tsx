interface TextSectionProps {
  title: string;
  content: string | string[];
  className?: string;
}

export default function TextSection({
  title,
  content,
  className = '',
}: TextSectionProps) {
  const paragraphs = Array.isArray(content) ? content : [content];

  return (
    <section className={`mb-12 ${className}`}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-700">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
