import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Domínio e hospedagem são inclusos?",
    answer:
      "Não. O domínio e a hospedagem são serviços independentes que precisam ser contratados à parte, por você. Porém indicamos e auxiliamos na contratação da hospedagem/domínio com o melhor custo benefício do mercado.",
  },
  {
    question: "Posso solicitar alterações no projeto?",
    answer:
      "Claro! Nosso único pedido é para ser bastante específico na hora de passar a sua ideia e solicitar mudanças, assim conseguimos realizar uma entrega mais ágil juntos.",
  },
  {
    question: "Vocês dão suporte/manutenção?",
    answer:
      "Sim! Após a entrega da página você tem até 30 dias de suporte gratuito. Após os 30 dias, você poderá contratar nosso time para te auxiliar nas suas demandas.",
  },
  {
    question: "Vou ter que pagar alguma mensalidade?",
    answer:
      "Não cobramos valores de mensalidade após a entrega do projeto. Caso você precise de alguma manutenção, passaremos um orçamento específico de acordo com a sua solicitação.",
  },
  {
    question: "Consigo editar os textos da página depois?",
    answer:
      "Sim! Na entrega do seu projeto te entregaremos também um tutorial gravado de como editar os textos da sua página de forma simples e prática.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary uppercase tracking-widest text-sm font-medium mb-4">
            FAQs
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Perguntas mais <span className="text-gradient-gold">frequentes</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border/50 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
