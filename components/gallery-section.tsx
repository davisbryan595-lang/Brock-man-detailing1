import { Card } from "@/components/ui/card"

const galleryImages = [
  {
    before: "/dirty-car-exterior-before-detailing.jpg",
    after: "/images/car-after.png",
    title: "Exterior Transformation",
  },
  {
    before: "/messy-car-interior.png",
    after: "/pristine-car-interior-after-detailing.jpg",
    title: "Interior Revival",
  },
  {
    before: "/dull-car-paint-before-polishing.jpg",
    after: "/glossy-car-paint-after-professional-detailing.jpg",
    title: "Paint Correction",
  },
  {
    before: "/dirty-car-wheels-before-cleaning.jpg",
    after: "/sparkling-clean-car-wheels-after-detailing.jpg",
    title: "Wheel Restoration",
  },
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Work</span>
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            See the incredible transformations we achieve with every detail
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {galleryImages.map((item, index) => (
            <Card key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">{item.title}</h3>

              <div className="grid grid-cols-2 gap-4">
                {/* Before */}
                <div className="space-y-2">
                  <p className="text-red-400 font-medium text-center">Before</p>
                  <div className="glass rounded-lg overflow-hidden">
                    <img
                      src={item.before || "/placeholder.svg"}
                      alt={`${item.title} before`}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>

                {/* After */}
                <div className="space-y-2">
                  <p className="text-green-400 font-medium text-center">After</p>
                  <div className="glass rounded-lg overflow-hidden">
                    <img
                      src={item.after || "/placeholder.svg"}
                      alt={`${item.title} after`}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
