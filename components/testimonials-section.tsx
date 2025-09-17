import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "Absolutely incredible work! My car looks better than when I first bought it. The attention to detail is unmatched.",
    vehicle: "2020 BMW X5",
  },
  {
    name: "Mike Rodriguez",
    rating: 5,
    text: "Professional, reliable, and the results speak for themselves. I won't trust my car to anyone else.",
    vehicle: "2019 Ford F-150",
  },
  {
    name: "Emily Chen",
    rating: 5,
    text: "The interior cleaning was phenomenal. They removed stains I thought were permanent. Highly recommended!",
    vehicle: "2021 Honda Accord",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">What Our Clients Say</span>
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Don't just take our word for it - hear from satisfied customers
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card p-8 hover:scale-105 transition-all duration-300 relative">
              {/* Quote icon */}
              <div className="absolute top-4 right-4">
                <Quote className="h-8 w-8 text-purple-400/30" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-purple-200 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              {/* Customer info */}
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-purple-300 text-sm">{testimonial.vehicle}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
