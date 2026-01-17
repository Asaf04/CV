interface TimelinePoint {
  highlight?: string;
  text: string;
}

interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  points: TimelinePoint[] | string[];
}

interface TimelineSectionProps {
  title: string;
  items: TimelineItem[];
}

export default function TimelineSection({
  title,
  items,
}: TimelineSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600">
              {item.subtitle} | {item.period}
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
              {item.points.map((point, pointIndex) => {
                const isString = typeof point === 'string';
                const highlight = isString ? null : point.highlight;
                const text = isString ? point : point.text;

                return (
                  <li key={pointIndex} className="mb-2">
                    {highlight ? (
                      <>
                        <span className="font-semibold text-gray-900">
                          {highlight}
                        </span>{' '}
                        {text}
                      </>
                    ) : (
                      text
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
