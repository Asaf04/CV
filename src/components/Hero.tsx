interface HeroProps {
  name: string;
  title: string;
  location: string;
  image: string;
  languages?: string[];
  resumeUrl?: string;
}

export default function Hero({
  name,
  title,
  location,
  image,
  languages,
  resumeUrl,
}: HeroProps) {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-xl shadow-lg p-12 text-center hover:shadow-xl transition-shadow">
        <img
          src={image}
          alt={name}
          className="w-48 h-48 rounded-full mx-auto mb-6 object-cover 
  shadow-2xl hover:scale-105 transition-transform duration-300"
        />
        <h1 className="text-4xl font-bold text-gray-900">{name}</h1>
        <p className="text-xl text-gray-600 mt-2">
          {title} | {location}
        </p>
        {languages && languages.length > 0 && (
          <p className="text-sm text-gray-500 mt-3">{languages.join(' • ')}</p>
        )}

        {resumeUrl && (
          <a
            href={resumeUrl}
            download
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg 
              hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            📄 Download Resume
          </a>
        )}
      </div>
    </div>
  );
}
