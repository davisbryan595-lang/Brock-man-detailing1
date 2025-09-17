import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="py-12 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-8 rounded-2xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo and tagline */}
            <div className="text-center md:text-left">
              <div className="mb-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logob-FwARsTIpbMHGrLRPBnY3z70pzg8Be7.jpeg"
                  alt="Brockman's Detailing LLC Logo"
                  className="w-24 h-24 object-contain mx-auto md:mx-0"
                />
              </div>
              <h3 className="text-xl font-bold gradient-text mb-2">Brockman's Detailing LLC</h3>
              <p className="text-purple-200 text-sm">"I take pride in everyone's ride"</p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-purple-200 text-sm">
                <li>
                  <a href="#services" className="hover:text-purple-300 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-purple-300 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-purple-300 transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-purple-300 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-purple-300 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-purple-200 text-sm">
                <p>📞 502-514-6605</p>
                <p>✉️ brockmansdetailing@gmail.com</p>
                <p>📍 Louisville, KY</p>
                <p>🕒 Mon-Sat: 8AM-6PM</p>
              </div>
            </div>
          </div>

          <Separator className="bg-white/10 mb-6" />

          {/* Copyright */}
          <div className="text-center text-purple-200 text-sm">
            <p>&copy; 2024 Brockman's Detailing LLC. All rights reserved.</p>
            <p className="mt-2">Professional auto detailing services in Louisville, KY and surrounding areas.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
