import { Card } from "@/components/ui/card"
import { Sparkles, Car, Home, Award } from "lucide-react"

const services = [
  {
    icon: Car,
    title: "Exterior Cleaning",
    description: "Complete exterior wash, wax, and protection to make your vehicle shine like new.",
    features: ["Hand wash & dry", "Paint protection", "Wheel & tire cleaning", "Chrome polishing"],
  },
  {
    icon: Home,
    title: "Interior Cleaning",
    description: "Deep interior cleaning and conditioning for a fresh, comfortable driving experience.",
    features: ["Vacuum & shampoo", "Leather conditioning", "Dashboard treatment", "Odor elimination"],
  },
  {
    icon: Award,
    title: "Full Detailing",
    description: "Our premium service combining exterior and interior for the ultimate vehicle transformation.",
    features: ["Complete exterior", "Full interior detail", "Engine bay cleaning", "Paint correction"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Professional auto detailing services that bring out the best in your vehicle
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="glass-card p-8 hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-center">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="p-4 glass rounded-full group-hover:bg-primary/30 transition-colors">
                    <service.icon className="h-8 w-8 text-purple-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-purple-200 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-purple-100 text-sm">
                      <Sparkles className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
