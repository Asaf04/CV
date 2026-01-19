interface TagProps {
  children: string;
  colorScheme?: {
    bg: string;
    text: string;
  };
}

export default function Tag({
  children,
  colorScheme = { bg: 'bg-blue-100', text: 'text-blue-800' },
}: TagProps) {
  return (
    <span
      className={`px-4 py-2 ${colorScheme.bg} ${colorScheme.text} rounded-lg 
        transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default`}
    >
      {children}
    </span>
  );
}
