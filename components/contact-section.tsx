import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Ready to give your vehicle the treatment it deserves? Contact us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <Card className="glass-card p-6 flex items-center space-x-4">
                  <div className="p-3 glass rounded-full">
                    <Phone className="h-6 w-6 text-purple-300" />
                  </div>
                  <div>
                    <p className="text-purple-200 text-sm">Phone</p>
                    <p className="text-white font-semibold text-lg">502-514-6605</p>
                  </div>
                </Card>

                <Card className="glass-card p-6 flex items-center space-x-4">
                  <div className="p-3 glass rounded-full">
                    <Mail className="h-6 w-6 text-purple-300" />
                  </div>
                  <div>
                    <p className="text-purple-200 text-sm">Email</p>
                    <p className="text-white font-semibold">brockmansdetailing@gmail.com</p>
                  </div>
                </Card>

                <Card className="glass-card p-6 flex items-center space-x-4">
                  <div className="p-3 glass rounded-full">
                    <MapPin className="h-6 w-6 text-purple-300" />
                  </div>
                  <div>
                    <p className="text-purple-200 text-sm">Service Area</p>
                    <p className="text-white font-semibold">Louisville, KY & Surrounding Areas</p>
                  </div>
                </Card>

                <Card className="glass-card p-6 flex items-center space-x-4">
                  <div className="p-3 glass rounded-full">
                    <Clock className="h-6 w-6 text-purple-300" />
                  </div>
                  <div>
                    <p className="text-purple-200 text-sm">Hours</p>
                    <p className="text-white font-semibold">Mon-Sat: 8AM-6PM</p>
                    <p className="text-purple-200 text-sm">Sunday: By Appointment</p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Map placeholder */}
            <Card className="glass-card p-6">
              <h4 className="text-white font-semibold mb-4">Service Area Map</h4>
              <div className="glass rounded-lg h-64 flex items-center justify-center">
                <img
                  src="/louisville-kentucky-service-area-map.jpg"
                  alt="Service area map"
                  className="w-full h-full object-cover rounded-lg opacity-80"
                />
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-purple-200 text-sm mb-2 block">First Name</label>
                  <Input
                    className="glass border-white/20 text-white placeholder:text-purple-300/50 focus:border-purple-400"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="text-purple-200 text-sm mb-2 block">Last Name</label>
                  <Input
                    className="glass border-white/20 text-white placeholder:text-purple-300/50 focus:border-purple-400"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="text-purple-200 text-sm mb-2 block">Email</label>
                <Input
                  type="email"
                  className="glass border-white/20 text-white placeholder:text-purple-300/50 focus:border-purple-400"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="text-purple-200 text-sm mb-2 block">Phone</label>
                <Input
                  type="tel"
                  className="glass border-white/20 text-white placeholder:text-purple-300/50 focus:border-purple-400"
                  placeholder="(502) 555-0123"
                />
              </div>

              <div>
                <label className="text-purple-200 text-sm mb-2 block">Service Needed</label>
                <select className="w-full glass border border-white/20 rounded-lg px-3 py-2 text-white bg-transparent focus:border-purple-400 focus:outline-none">
                  <option value="" className="bg-black">
                    Select a service
                  </option>
                  <option value="exterior" className="bg-black">
                    Exterior Detail
                  </option>
                  <option value="interior" className="bg-black">
                    Interior Detail
                  </option>
                  <option value="full" className="bg-black">
                    Full Detail
                  </option>
                  <option value="custom" className="bg-black">
                    Custom Package
                  </option>
                </select>
              </div>

              <div>
                <label className="text-purple-200 text-sm mb-2 block">Message</label>
                <Textarea
                  className="glass border-white/20 text-white placeholder:text-purple-300/50 focus:border-purple-400 min-h-[120px]"
                  placeholder="Tell us about your vehicle and what you're looking for..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-3 rounded-full transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
