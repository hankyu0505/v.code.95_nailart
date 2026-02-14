
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-100 dark:bg-stone-900/80 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tighter">
                V.CODE NAIL
              </span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#services" className="text-sm font-medium hover:text-stone-600 transition-colors">Services</a>
              <a href="#gallery" className="text-sm font-medium hover:text-stone-600 transition-colors">Gallery</a>
              <a href="#about" className="text-sm font-medium hover:text-stone-600 transition-colors">About</a>
              <button className="bg-stone-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition-all dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080/2a2a2a/FFF?text=Luxury+Nail+Art+Background"
            alt="Luxury Nail Art Background"
            fill
            className="object-cover opacity-90 dark:opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-50/90 via-stone-50/20 to-transparent dark:from-stone-950/90 dark:via-stone-950/20"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight text-stone-900 dark:text-white drop-shadow-sm">
            Art at Your <br /> <span className="italic font-light text-stone-600 dark:text-stone-300">Fingertips</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 dark:text-stone-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Experience premium nail care in a sanctuary designed for relaxation.
            Defining beauty, one detail at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-stone-900 text-white rounded-full font-medium text-lg hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200">
              View Our Services
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-stone-900 border border-stone-200 rounded-full font-medium text-lg hover:bg-white transition-all shadow-sm hover:translate-y-px dark:bg-stone-800/80 dark:text-white dark:border-stone-700 dark:hover:bg-stone-800">
              Contact Us
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-stone-50 dark:bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">Curated Services</h2>
            <p className="text-stone-500 max-w-xl mx-auto">Selected treatments for your ultimate care and style.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Signature Manicure",
                desc: "Complete nail shaping, cuticle care, and massage with premium polish.",
                price: "$45",
                img: "https://placehold.co/800x600/2a2a2a/FFF?text=Signature+Manicure"
              },
              {
                title: "Gel Artistry",
                desc: "Long-lasting gel application with custom hand-painted designs.",
                price: "$65+",
                img: "https://placehold.co/800x600/2a2a2a/FFF?text=Gel+Artistry"
              },
              {
                title: "Spa Pedicure",
                desc: "Luxurious foot soak, scrub, and massage for total relaxation.",
                price: "$55",
                img: "https://placehold.co/800x600/2a2a2a/FFF?text=Spa+Pedicure"
              }
            ].map((service, idx) => (
              <div key={idx} className="group relative bg-white dark:bg-stone-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-baseline mb-3">
                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold">{service.title}</h3>
                    <span className="text-lg font-medium text-stone-400">{service.price}</span>
                  </div>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <button className="text-sm font-semibold underline decoration-stone-300 underline-offset-4 hover:decoration-stone-900 transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee / Brands */}
      <section className="py-12 border-y border-stone-200 dark:border-stone-800 overflow-hidden bg-white dark:bg-stone-900">
        <div className="flex space-x-12 animate-marquee items-center justify-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholder for Logos */}
          {["OPI", "ESSIE", "CND", "GELISH", "DND"].map((brand) => (
            <span key={brand} className="text-2xl font-bold font-[family-name:var(--font-playfair)] tracking-widest">{brand}</span>
          ))}
          {["OPI", "ESSIE", "CND", "GELISH", "DND"].map((brand) => (
            <span key={brand + "dup"} className="text-2xl font-bold font-[family-name:var(--font-playfair)] tracking-widest hidden md:inline">{brand}</span>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="gallery" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-lg">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">Our Gallery</h2>
            <p className="text-stone-500">A showcase of our finest work and latest trends.</p>
          </div>
          <button className="hidden md:block px-6 py-3 border border-stone-300 rounded-full hover:bg-stone-50 transition-colors">View Instagram</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
          <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
            <Image
              src="https://placehold.co/600x800/2a2a2a/FFF?text=Gallery+Main"
              alt="Gallery Main"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <span className="text-white font-medium">Minimalist White</span>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden group">
            <Image
              src="https://placehold.co/400x300/2a2a2a/FFF?text=Gallery+1"
              alt="Gallery 1"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden group">
            <Image
              src="https://placehold.co/400x300/2a2a2a/FFF?text=Gallery+2"
              alt="Gallery 2"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="col-span-2 relative rounded-2xl overflow-hidden group bg-stone-100 flex items-center justify-center">
            <div className="text-center p-8">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-2">Summer Collection</h3>
              <p className="text-stone-500 mb-4">Discover the vibrant colors of the season.</p>
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm group-hover:scale-110 transition-transform cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white block mb-6">
              V.CODE NAIL
            </span>
            <p className="max-w-sm mb-6 font-light">
              Elevating nail care to an art form. Join us for an experience that transcends the ordinary.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons Placeholders */}
              <div className="w-10 h-10 rounded-full bg-stone-800 hover:bg-stone-700 transition-colors flex items-center justify-center cursor-pointer">IG</div>
              <div className="w-10 h-10 rounded-full bg-stone-800 hover:bg-stone-700 transition-colors flex items-center justify-center cursor-pointer">FB</div>
              <div className="w-10 h-10 rounded-full bg-stone-800 hover:bg-stone-700 transition-colors flex items-center justify-center cursor-pointer">TW</div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Visit Us</h4>
            <ul className="space-y-4 font-light">
              <li>123 Beauty Lane, Suite 100</li>
              <li>Seoul, Gangnam-gu</li>
              <li>+82 10-1234-5678</li>
              <li>hello@vcodenail.com</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-stone-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between">
          <p>&copy; 2026 V.Code Nail Art. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with Next.js & Tailwind</p>
        </div>
      </footer>
    </div>
  );
}
