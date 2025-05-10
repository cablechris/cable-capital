import Image from 'next/image';

const logos = {
  funds: [
    { href: "https://polychain.capital/", src: "/assets/logos/Polychain.png", alt: "Polychain Capital logo", name: "Polychain" },
    { href: "https://bankless.ventures/", src: "/assets/logos/banklessventures.png", alt: "Bankless Ventures logo", name: "Bankless Ventures" },
    { href: "https://numer.ai/", src: "/assets/logos/numerai.png", alt: "Numerai: Supreme logo", name: "Numerai" },
    { href: "https://ox.partners/", src: "/assets/logos/0xpartners.png", alt: "Ox Partners logo", name: "Ox Partners" },
  ],
  daos: [
    { href: "https://zerodao.io/", src: "/assets/logos/zerodao.png", alt: "ZeroDAO logo", name: "ZeroDAO" },
    { href: "https://flamingodao.xyz/", src: "/assets/logos/flamingo.png", alt: "Flamingo DAO logo", name: "Flamingo DAO" },
    { href: "https://readyplayerdao.xyz/", src: "/assets/logos/readyplayer.png", alt: "Ready Player DAO logo", name: "Ready Player DAO" },
    { href: "https://neondao.xyz/", src: "/assets/logos/neon.png", alt: "NEON DAO logo", name: "NEON DAO" },
    { href: "https://darkhorsedao.xyz/", src: "/assets/logos/darkhorse.png", alt: "Dark Horse DAO logo", name: "Dark Horse DAO" },
    { href: "https://spaceshipdao.xyz/", src: "/assets/logos/spaceship.png", alt: "Spaceship DAO logo", name: "Spaceship DAO" },
  ]
};

export default function Investments() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">Investments</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">I am proud to have seeded the below investments and be a founding member of each DAO</p>
      </div>

      {/* Funds Section */}
      <section>
        <h2 className="text-xl font-bold text-primary mb-6 border-b border-primary/20 inline-block pb-1">Funds</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
          {logos.funds.map(({ href, src, alt, name }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 aspect-[4/3] transition-all hover:scale-105 hover:shadow-2xl"
              aria-label={name}
            >
              <div className="relative w-full h-24 md:h-28">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 80vw, 33vw"
                />
              </div>
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">{name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* DAOs Section */}
      <section className="mt-14">
        <h2 className="text-xl font-bold text-primary mb-6 border-b border-primary/20 inline-block pb-1">DAOs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
          {logos.daos.map(({ href, src, alt, name }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 aspect-[4/3] transition-all hover:scale-105 hover:shadow-2xl"
              aria-label={name}
            >
              <div className="relative w-full h-24 md:h-28">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 80vw, 33vw"
                />
              </div>
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-900/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">{name}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
} 