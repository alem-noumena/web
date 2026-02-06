interface LogoStripProps {
  title?: string;
  logos: Array<{ name: string; src?: string; alt: string }>;
}

export default function LogoStrip({ title, logos }: LogoStripProps) {
  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <p className="text-center text-sm text-gray-600 mb-8 font-medium">{title}</p>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 w-full opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            >
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-14 max-w-[120px] object-contain"
                />
              ) : (
                <span className="text-gray-400 font-semibold text-sm">{logo.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
