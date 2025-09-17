import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

const pricingPlans = [
  {
    name: "Exterior Detail",
    price: "$75",
    description: "Perfect for maintaining your vehicle's exterior shine",
    features: [
      "Hand wash & dry",
      "Wheel & tire cleaning",
      "Paint protection wax",
      "Chrome polishing",
      "Window cleaning",
    ],
    popular: false,
  },
  {
    name: "Interior Detail",
    price: "$85",
    description: "Deep clean and refresh your vehicle's interior",
    features: [
      "Complete vacuuming",
      "Upholstery cleaning",
      "Dashboard treatment",
      "Leather conditioning",
      "Odor elimination",
    ],
    popular: false,
  },
  {
    name: "Full Detail",
    price: "$150",
    description: "Our premium complete detailing service",
    features: [
      "Everything in Exterior",
      "Everything in Interior",
      "Engine bay cleaning",
      "Paint correction",
      "Premium protection",
      "Quality guarantee",
    ],
    popular: true,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">Transparent pricing for professional results</p>
        </div>

        {/* Pricing grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`glass-card p-8 hover:scale-105 transition-all duration-300 relative ${
                plan.popular ? "ring-2 ring-purple-400/50" : ""
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center">
                {/* Plan name */}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-purple-200 ml-1">per service</span>
                </div>

                {/* Description */}
                <p className="text-purple-200 mb-6">{plan.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-purple-100">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
                      : "glass-button"
                  } text-white py-3 rounded-full transition-all duration-300`}
                >
                  Book {plan.name}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Contact note */}
        <div className="text-center mt-12">
          <p className="text-purple-200">
            Custom packages available. Call <span className="text-purple-300 font-semibold">502-514-6605</span> for a
            personalized quote.
          </p>
        </div>
      </div>
    </section>
  )
}
