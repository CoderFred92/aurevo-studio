import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { motion } from "framer-motion"

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-500 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
          Aurevo Studio
        </Link>
        <div className="hidden md:flex gap-10 text-lg">
          <Link to="/" className="hover:text-pink-400 transition">Home</Link>
          <Link to="/portfolio" className="hover:text-pink-400 transition">Portfolio</Link>
          <Link to="/contact" className="hover:text-pink-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

function Home() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-pink-900 relative">
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-7xl md:text-9xl font-bold text-white mb-8">
            Aurevo <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-600">Studio</span>
          </h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-12">Bold Graphics That Make Brands Unforgettable</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/portfolio" className="px-12 py-6 bg-violet-600 hover:bg-violet-700 rounded-full text-xl font-bold transition-all hover:scale-105">
              View Portfolio
            </Link>
            <Link to="/contact" className="px-12 py-6 border-2 border-white hover:bg-white hover:text-black rounded-full text-xl font-bold transition-all">
              Start Project
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="py-32 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-bold mb-20">Our Magic</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {["Social Media Graphics", "Digital Flyers & Posters", "Banners & Ad Creatives"].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-12 bg-gray-900 rounded-3xl hover:bg-gray-800 transition-all hover:scale-105 border border-gray-800"
              >
                <div className="text-6xl mb-6">Icon</div>
                <h3 className="text-3xl font-bold mb-4">{s}</h3>
                <p className="text-gray-400 text-lg">Stunning designs that convert</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="bg-blue-500 text-white">
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