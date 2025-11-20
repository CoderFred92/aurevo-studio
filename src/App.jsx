import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useRef } from "react"
import emailjs from "@emailjs/browser"

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
          Aurevo Studio
        </Link>
        <div className="hidden md:flex gap-10 text-lg">
          <Link to="/" className="hover:text-pink-400 transition">Home</Link>
          <Link to="/#portfolio" className="hover:text-pink-400 transition">Portfolio</Link>
          <Link to="/#contact" className="hover:text-pink-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

function Home() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      "service_77dnan9",
      "template_gc6bale",
      form.current,
      "Dt6s5FCvjqKeV8yKk"
    )
      .then(() => alert("Message sent! I’ll reply in <24h"))
      .catch(() => alert("Error — WhatsApp me instead!"))
    e.target.reset()
  }

  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-7xl md:text-9xl font-bold text-white mb-8">
            Aurevo <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-violet-600">Studio</span>
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-12 max-w-4xl mx-auto">
            Bold Graphics That Make Brands Unforgettable
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#portfolio" className="px-12 py-6 bg-violet-600 hover:bg-violet-700 rounded-full text-xl font-bold transition-all hover:scale-105 shadow-2xl">
              View Portfolio
            </a>
            <a href="#contact" className="px-12 py-6 border-2 border-white hover:bg-white hover:text-black rounded-full text-xl font-bold transition-all">
              Start Project
            </a>
          </div>
        </motion.div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-6xl md:text-8xl font-bold mb-20">
            Recent Work
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1626785774625-f973d04d47e2?w=800",
              "https://images.unsplash.com/photo-1619984681238-0a85c4d94b3f?w=800",
              "https://images.unsplash.com/photo-1620641788421-7a1c342ea42d?w=800",
              "https://images.unsplash.com/photo-1597733336794-12d05021d510?w=800",
              "https://images.unsplash.com/photo-1558655146-d09349e92777?w=800",
              "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl cursor-pointer"
              >
                <img src={src} alt="Portfolio" className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div>
                    <p className="text-2xl font-bold text-white">Brand Identity</p>
                    <p className="text-gray-300">2025</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-6xl md:text-8xl font-bold mb-12">
            Let’s Create Magic
          </motion.h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <input required name="name" placeholder="Your Name" className="w-full px-8 py-6 bg-gray-900 rounded-2xl text-white text-xl focus:outline-none focus:ring-4 focus:ring-pink-500" />
            <input required name="email" type="email" placeholder="your@email.com" className="w-full px-8 py-6 bg-gray-900 rounded-2xl text-white text-xl focus:outline-none focus:ring-4 focus:ring-pink-500" />
            <textarea required name="message" rows="6" placeholder="Tell me about your project..." className="w-full px-8 py-6 bg-gray-900 rounded-2xl text-white text-xl focus:outline-none focus:ring-4 focus:ring-pink-500"></textarea>
            <button type="submit" className="px-16 py-6 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full text-2xl font-bold hover:scale-105 transition-all shadow-2xl">
              Send Message
            </button>
          </form>
          <p className="mt-12 text-2xl text-gray-400">Or WhatsApp me directly → +233 Your Number</p>
        </div>
      </section>

      {/* WHATSAPP FLOATING BUTTON – PERFECT */}
      <a
        href="https://wa.me/233502033942"   // ← CHANGE TO YOUR REAL NUMBER
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl z-50 flex items-center justify-center hover:scale-110 transition-all"
        target="_blank"
        rel="noreferrer"
      >
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.263c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App