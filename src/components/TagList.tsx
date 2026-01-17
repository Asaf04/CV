import Tag from './Tag';

interface TagListProps {
  title: string;
  items: string[];
  colorScheme?: {
    bg: string;
    text: string;
  };
}

export default function TagList({ title, items, colorScheme }: TagListProps) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <Tag key={item} colorScheme={colorScheme}>
            {item}
          </Tag>
        ))}
      </div>
    </section>
  );
}
