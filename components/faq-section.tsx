import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does a full detail take?",
    answer:
      "A complete full detail typically takes 3-4 hours depending on the vehicle's condition and size. We never rush our work to ensure the highest quality results.",
  },
  {
    question: "Do you offer mobile detailing services?",
    answer:
      "Yes! We come to you at your home or office. Our mobile unit is fully equipped with everything needed to provide professional detailing services at your location.",
  },
  {
    question: "What products do you use?",
    answer:
      "We use only premium, professional-grade products from trusted brands. All our products are safe for your vehicle's surfaces and environmentally responsible.",
  },
  {
    question: "How often should I get my car detailed?",
    answer:
      "We recommend full detailing every 3-4 months for regular drivers, or every 6 months for garage-kept vehicles. Exterior washes can be done monthly to maintain the protective coating.",
  },
  {
    question: "Do you guarantee your work?",
    answer:
      "We stand behind our work with a 100% satisfaction guarantee. If you're not completely happy with the results, we'll make it right.",
  },
  {
    question: "Can you remove scratches and swirl marks?",
    answer:
      "Yes, our paint correction service can remove most scratches, swirl marks, and other paint imperfections. We'll assess your vehicle and recommend the best approach.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Frequently Asked</span>
            <br />
            <span className="text-white">Questions</span>
          </h2>
          <p className="text-xl text-purple-200">Everything you need to know about our detailing services</p>
        </div>

        {/* FAQ Accordion */}
        <div className="glass-card p-8 rounded-2xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass border border-white/10 rounded-lg px-6"
              >
                <AccordionTrigger className="text-white hover:text-purple-300 text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-purple-200 pb-6 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
