import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

const services = [
  {
    title: "🎚 Mix & Master",
    description:
      "Få din musik att låta professionell på alla plattformar. Pris från 1500–3000 kr."
  },
  {
    title: "✍️ Toplining & Låtskrivning",
    description:
      "Vi hjälper dig skriva starka melodier och texter för alla genrer."
  },
  {
    title: "🎨 Coverart",
    description:
      "Unik och modern design till ditt nästa släpp. Perfekt för Spotify, Apple Music m.m."
  },
  {
    title: "🧩 Plugins (kommer snart)",
    description:
      "Vi utvecklar egna plugins för musikproduktion. Håll utkik – lanseras snart via hemsidan."
  }
];

const references = [
  {
    artist: "CW",
    project: "Artistprofil",
    description: "Mixning, mastering, toplining, låtskrivning och kreativ produktion.",
    image: "https://yt3.googleusercontent.com/ytc/AIdro_lWqopFHq8Vnm4bXUx4YOw1E5f8E8rMYMfL3l0G=s176-c-k-c0x00ffffff-no-rj",
    youtube: "https://www.youtube.com/@cw6674",
    spotify: "https://open.spotify.com/artist/2H4MHJnzQquT44Wpk7K2MJ"
  },
  {
    artist: "DN",
    project: "I MIN BACKSPEGEL",
    description: "Mixning, mastering, låtskrivning och kreativ produktion i samarbete med Babylon Visuals och Sun City Recordings.",
    image: "https://i.ytimg.com/vi/eEdn89rmCc8/hqdefault.jpg",
    youtube: "https://youtu.be/eEdn89rmCc8"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 font-sans">
      <Head>
        <title>SoundCraftHouse – Professionell Mix, Master & Låtskrivning | CW</title>
        <meta name="description" content="CW erbjuder mixning, mastering, toplining och coverart – med känsla för sound och detaljer." />
      </Head>

      <header className="max-w-5xl mx-auto flex justify-between items-center pb-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold"
        >
          SoundCraftHouse
        </motion.h1>
        <nav className="space-x-4">
          <Link href="#services" className="hover:underline text-gray-300">Tjänster</Link>
          <Link href="#references" className="hover:underline text-gray-300">Referenser</Link>
          <Link href="#contact" className="hover:underline text-gray-300">Kontakt</Link>
        </nav>
      </header>

      <section className="max-w-4xl mx-auto text-center">
        <p className="text-xl mb-2">
          Professionella musiktjänster – mixning, mastering, toplining & låtskrivning.
        </p>
        <p className="text-md mb-8 text-gray-400">Grundare: CW (Christopher Wilson)</p>
        <button className="bg-white text-black hover:bg-gray-200 font-semibold px-6 py-3 rounded-2xl shadow-lg">Boka nu</button>
      </section>

      <section id="services" className="mt-24 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((service) => (
          <div key={service.title} className="bg-zinc-900 p-6 rounded-xl hover:shadow-lg hover:scale-[1.01] transition">
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      <section id="references" className="mt-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">🌟 Referensprojekt</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {references.map((ref) => (
            <div key={ref.project} className="bg-zinc-900 p-6 rounded-xl hover:shadow-lg hover:scale-[1.01] transition">
              <div className="flex items-center gap-4 mb-4">
                <img src={ref.image} alt={ref.artist} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h3 className="text-xl font-semibold">{ref.artist}</h3>
                  <p className="text-sm text-gray-400">{ref.project}</p>
                </div>
              </div>
              <p className="mb-4">{ref.description}</p>
              <div className="flex gap-4">
                {ref.spotify && (
                  <a href={ref.spotify} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Spotify</a>
                )}
                {ref.youtube && (
                  <a href={ref.youtube} target="_blank" rel="noopener noreferrer" className="text-red-400 underline">YouTube</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">👤 Om CW</h2>
        <p className="text-gray-300">CW (Christopher Wilson) är producent, låtskrivare och ljudtekniker med över 10 års erfarenhet inom musikproduktion. Han brinner för att hjälpa artister hitta sitt unika sound och skapa musik som håller högsta internationella standard.</p>
      </section>

      <section id="contact" className="mt-24 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">🎧 Låt oss skapa något magiskt tillsammans</h2>
        <p className="mb-2">Kontakta oss för att boka en session, få en offert eller bara snacka sound.</p>
        <p className="mb-1">📧 <a href="mailto:chriswillprod@gmail.com" className="underline text-blue-300">chriswillprod@gmail.com</a></p>
        <p className="mb-6">📞 <a href="tel:+46760911310" className="underline text-blue-300">+46 76 091 13 10</a></p>
        <button className="bg-white text-black hover:bg-gray-200 font-semibold px-6 py-3 rounded-2xl shadow-lg">Kontakta oss</button>
      </section>
    </main>
  );
}
