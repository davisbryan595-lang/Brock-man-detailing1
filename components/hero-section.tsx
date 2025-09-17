import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/5 to-transparent rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "20s" }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Logo placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="glass-card p-6 rounded-2xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logob-FwARsTIpbMHGrLRPBnY3z70pzg8Be7.jpeg"
              alt="Brockman's Detailing LLC Logo"
              className="w-48 h-48 object-contain mx-auto"
            />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-float">
          <span className="gradient-text">BROCKMAN'S</span>
          <br />
          <span className="text-white text-glow">DETAILING</span>
          <br />
          <span className="text-purple-300 text-4xl md:text-5xl font-normal">LLC</span>
        </h1>

        {/* Slogan */}
        <p className="text-xl md:text-2xl text-purple-200 mb-8 font-light tracking-wide">
          "I take pride in everyone's ride"
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="glass-button text-white px-8 py-4 text-lg rounded-full group hover:scale-105 transition-all duration-300"
          >
            Get Your Quote Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="glass border-purple-400/50 text-purple-200 hover:bg-purple-500/20 px-8 py-4 text-lg rounded-full bg-transparent"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            View Our Work
          </Button>
        </div>

        {/* Contact info */}
        <div className="mt-12 glass-card p-4 rounded-xl inline-block">
          <p className="text-purple-200 text-lg font-medium">📞 502-514-6605</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
