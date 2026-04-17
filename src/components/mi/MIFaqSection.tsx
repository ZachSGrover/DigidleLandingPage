import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs: { q: string; a: string }[] = [
  {
    q: "Who is Digidle for?",
    a: "Digidle is for creators, coaches, brands, and online businesses that want help building, monetizing, and scaling the backend of what they do.",
  },
  {
    q: "Do you only work with creators?",
    a: "No. We work with creators, fitness coaches, UGC brands, Ecom brands, and other online businesses depending on the need.",
  },
  {
    q: 'What does "backend" mean?',
    a: "It means the systems, people, tools, strategy, and moving parts behind the business that help it actually run and grow.",
  },
  {
    q: "Can you help if I only need one thing?",
    a: "Yes. Some people need full support, while others only need help with one piece.",
  },
  {
    q: "Do you provide talent too?",
    a: "Yes. If needed, we can bring in specialized talent for specific roles, projects, and ongoing support.",
  },
  {
    q: "What if I'm not sure what I need yet?",
    a: "That is fine. Reach out through the form and we can figure out what makes the most sense.",
  },
];

export function MIFaqSection() {
  return (
    <section className="scroll-mt-20 border-t border-white/5 bg-transparent py-24" id="faq">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-10 text-center text-3xl font-medium tracking-tight text-white md:text-4xl">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full rounded-2xl border border-white/10 bg-[#0a0a0a]/50 px-2 backdrop-blur-sm md:px-4">
          {faqs.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`} className="border-white/10 px-2">
              <AccordionTrigger className="text-left text-sm font-medium text-white hover:no-underline md:text-[15px]">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-gray-400">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
