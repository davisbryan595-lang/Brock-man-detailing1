import { Card } from "@/components/ui/card"
import { Shield, Users, Clock, Star } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "We stand behind our work with a satisfaction guarantee",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Experienced detailers who care about your vehicle",
  },
  {
    icon: Clock,
    title: "Reliable Service",
    description: "On-time service that fits your busy schedule",
  },
  {
    icon: Star,
    title: "Premium Products",
    description: "Only the finest products for superior results",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">About Brockman's</span>
              <br />
              <span className="text-white">Detailing LLC</span>
            </h2>

            <div className="space-y-6 text-purple-200 text-lg leading-relaxed">
              <p>
                At Brockman's Detailing LLC, we believe every vehicle deserves to look its absolute best. Our passion
                for automotive excellence drives us to deliver meticulous attention to detail in every service we
                provide.
              </p>

              <p>
                With years of experience and a commitment to using only premium products and techniques, we transform
                your vehicle into a showroom-quality masterpiece. From daily drivers to luxury vehicles, we treat every
                car with the same level of care and professionalism.
              </p>

              <p className="text-purple-300 font-medium text-xl">
                "I take pride in everyone's ride" - because your satisfaction is our success.
              </p>
            </div>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 glass rounded-full">
                    <value.icon className="h-6 w-6 text-purple-300" />
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                <p className="text-purple-200 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
