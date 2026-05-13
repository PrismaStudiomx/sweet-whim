export default function SweetWhimWebsite() {
  return (
    <div className="min-h-screen bg-[#f7f2ef] text-[#3d2a1d] font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#d8c6bb] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* CAMBIAR LOGO AQUÍ */}
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=300&auto=format&fit=crop"
              alt="Sweet Whim Logo"
              className="w-14 h-14 rounded-full object-cover border-2 border-[#6f4a8e]"
            />

            <div>
              <h1 className="text-2xl font-bold tracking-wide text-[#6f4a8e]">
                Sweet Whim
              </h1>
              <p className="text-sm text-[#6b4d3c]">
                Pasteles personalizados en Jalisco
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#inicio" className="hover:text-[#6f4a8e] transition">
              Inicio
            </a>
            <a href="#productos" className="hover:text-[#6f4a8e] transition">
              Productos
            </a>
            <a href="#galeria" className="hover:text-[#6f4a8e] transition">
              Galería
            </a>
            <a href="#contacto" className="hover:text-[#6f4a8e] transition">
              Contacto
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-gradient-to-r from-[#4a2d20] to-[#6f4a8e] text-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm inline-block mb-6">
              Repostería personalizada en Jalisco
            </span>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Pasteles y postres que hacen especial cualquier evento
            </h2>

            <p className="text-lg text-white/90 mb-8 max-w-xl leading-relaxed">
              Creamos pasteles para fiestas, cumpleaños, eventos especiales y
              galletas de royal icing totalmente personalizadas. Diseños únicos,
              sabor increíble y atención personalizada.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/+523314236249"
                target="_blank"
                className="bg-white text-[#4a2d20] px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
              >
                Pedir por WhatsApp
              </a>

              <a
                href="https://instagram.com/sweetwhim"
                target="_blank"
                className="border border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-[#4a2d20] transition"
              >
                Ver Instagram
              </a>
            </div>
          </div>

          <div className="relative">
            {/* CAMBIAR IMAGEN PRINCIPAL AQUÍ */}
            <img
              src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1200&auto=format&fit=crop"
              alt="Pastel personalizado"
              className="rounded-[2rem] shadow-2xl object-cover h-[550px] w-full border-4 border-white/20"
            />
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-20 px-6 bg-[#f7f2ef]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Diseños Personalizados',
              desc: 'Creamos postres únicos adaptados a cualquier temática o evento.',
            },
            {
              title: 'Entrega en Jalisco',
              desc: 'Atendemos pedidos personalizados en diferentes zonas de Jalisco.',
            },
            {
              title: 'Atención Rápida',
              desc: 'Cotiza fácilmente por WhatsApp e Instagram.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-md border border-[#eadfd8]"
            >
              <h3 className="text-2xl font-bold text-[#6f4a8e] mb-4">
                {item.title}
              </h3>
              <p className="text-[#6b4d3c] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-[#6f4a8e] font-semibold uppercase tracking-widest">
            Nuestros productos
          </span>

          <h2 className="text-5xl font-black mt-4 mb-6">
            Repostería para cualquier ocasión
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-[#6b4d3c]">
            Desde pasteles elegantes hasta galletas decoradas y mesas de postres
            completamente personalizadas.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Pasteles Personalizados',
              img: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1200&auto=format&fit=crop',
            },
            {
              title: 'Galletas Royal Icing',
              img: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1200&auto=format&fit=crop',
            },
            {
              title: 'Postres para Eventos',
              img: 'https://images.unsplash.com/photo-1464306076886-da185f6a9d05?q=80&w=1200&auto=format&fit=crop',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-[#f7f2ef] rounded-[2rem] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
            >
              {/* CAMBIAR IMÁGENES AQUÍ */}
              <img
                src={item.img}
                alt={item.title}
                className="h-80 w-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#6f4a8e] mb-3">
                  {item.title}
                </h3>

                <p className="text-[#6b4d3c] leading-relaxed mb-6">
                  Diseños hechos especialmente para cada cliente y ocasión.
                </p>

                <a
                  href="https://wa.me/+523314236249"
                  target="_blank"
                  className="inline-block bg-[#6f4a8e] text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
                >
                  Cotizar ahora
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="py-24 px-6 bg-[#f3e9f8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 text-[#4a2d20]">
              Galería Sweet Whim
            </h2>
            <p className="text-lg text-[#6b4d3c] max-w-2xl mx-auto">
              Puedes reemplazar estas imágenes fácilmente por fotos reales de tus
              productos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=80&w=1200&auto=format&fit=crop',
              'https://images.pexels.com/photos/36943893/pexels-photo-36943893.jpeg',
            ].map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-[2rem] shadow-xl"
              >
                {/* CAMBIAR FOTOS AQUÍ */}
                <img
                  src={img}
                  alt="Postres Sweet Whim"
                  className="w-full h-80 object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#4a2d20] to-[#6f4a8e] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black mb-6">
            Haz que tu evento tenga un postre inolvidable
          </h2>

          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Contáctanos por WhatsApp o Instagram y cotiza tu diseño personalizado.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/+523314236249"
              target="_blank"
              className="bg-white text-[#4a2d20] px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition"
            >
              Enviar mensaje
            </a>

            <a
              href="https://instagram.com/sweetwhim"
              target="_blank"
              className="border border-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white hover:text-[#4a2d20] transition"
            >
              Abrir Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contacto"
        className="bg-[#2d1a12] text-white px-6 py-14"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-3xl font-black text-[#d5b4f3] mb-4">
              Sweet Whim
            </h3>
            <p className="text-white/70 leading-relaxed">
              Repostería personalizada especializada en pasteles para fiestas,
              eventos y galletas decoradas en Jalisco.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-4">Contacto</h4>
            <div className="space-y-3 text-white/80">
              <p>WhatsApp: +52 33 14 23 62 49</p>
              <p>Instagram: @sweetwhim</p>
              <p>Jalisco, México</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-4">SEO Local</h4>
            <p className="text-white/70 leading-relaxed">
              Esta página está preparada para posicionarse en búsquedas como:
              “pasteles personalizados en Jalisco”, “repostería para fiestas”,
              “galletas royal icing” y “pasteles personalizados cerca de mí”.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
          © 2026 Sweet Whim. Todos los derechos reservados.
        </div>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href="https://wa.me/+523314236249"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-8 h-8"
        >
          <path d="M20.52 3.48A11.82 11.82 0 0012.04 0C5.4 0 .02 5.38.02 12c0 2.12.56 4.18 1.62 6L0 24l6.2-1.62A11.96 11.96 0 0012.04 24c6.64 0 12.02-5.38 12.02-12 0-3.2-1.24-6.2-3.54-8.52zm-8.48 18.4c-1.82 0-3.58-.48-5.14-1.4l-.36-.2-3.68.96.98-3.58-.24-.38A9.88 9.88 0 012.02 12c0-5.52 4.5-10.02 10.02-10.02 2.68 0 5.2 1.04 7.08 2.94A9.96 9.96 0 0122.04 12c0 5.52-4.48 9.88-10 9.88zm5.48-7.42c-.3-.16-1.8-.88-2.08-.98-.28-.1-.48-.16-.68.16-.2.3-.78.98-.96 1.18-.18.2-.36.22-.66.08-.3-.16-1.28-.46-2.44-1.48-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.14-.62.14-.14.3-.36.46-.54.16-.18.2-.3.3-.5.1-.2.06-.38-.02-.54-.08-.16-.68-1.64-.94-2.24-.24-.58-.5-.5-.68-.52h-.58c-.2 0-.52.08-.8.38s-1.04 1.02-1.04 2.48c0 1.46 1.06 2.88 1.2 3.08.16.2 2.08 3.18 5.04 4.46.7.3 1.26.48 1.68.62.72.22 1.38.18 1.9.1.58-.08 1.8-.74 2.06-1.46.26-.72.26-1.34.18-1.46-.08-.12-.28-.2-.58-.36z" />
        </svg>
      </a>
    </div>
  )
}
