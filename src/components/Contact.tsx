interface ContactProps {
  email?: string;
  phone?: string;
  github?: string;
  linkedin?: string;
}

export default function Contact({
  email,
  phone,
  github,
  linkedin,
}: ContactProps) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <div className="flex flex-wrap gap-6">
        {email && (
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <span className="text-xl">📧</span>
            {email}
          </a>
        )}
        {phone && (
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <span className="text-xl">📞</span>
            {phone}
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <span className="text-xl">💻</span>
            GitHub
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <span className="text-xl">💼</span>
            LinkedIn
          </a>
        )}
      </div>
    </section>
  );
}
