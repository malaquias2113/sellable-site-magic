import { useState } from "react";
import { Briefcase, Send, CheckCircle } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const WorkWithUsSheet = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No vacancies yet; just register interest locally.
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", role: "", message: "" });
    }
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <button className="text-muted-foreground hover:text-primary transition-colors text-left">
          Trabalhe conosco
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md border-l border-border bg-background overflow-y-auto">
        <SheetHeader className="text-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Briefcase className="w-5 h-5" />
            </div>
            <SheetTitle className="text-xl font-display">
              Trabalhe conosco
            </SheetTitle>
          </div>
          <SheetDescription className="text-muted-foreground leading-relaxed">
            No momento não temos vagas abertas, mas deixe seus dados que
            entraremos em contato assim que surgir uma oportunidade.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-300">
              <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Interesse registrado!
              </h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Agradecemos o contato. Guardaremos seus dados e retornaremos
                quando houver uma vaga compatível.
              </p>
              <Button
                variant="outline"
                className="mt-6 rounded-full border-border"
                onClick={() => setOpen(false)}
              >
                Fechar
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="work-name">Nome completo</Label>
                <Input
                  id="work-name"
                  name="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-secondary/30 border-input focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="work-email">E-mail</Label>
                <Input
                  id="work-email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-secondary/30 border-input focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="work-phone">Telefone / WhatsApp</Label>
                <Input
                  id="work-phone"
                  name="phone"
                  type="tel"
                  placeholder="(61) 99999-9999"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-secondary/30 border-input focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="work-role">Área de interesse</Label>
                <Input
                  id="work-role"
                  name="role"
                  placeholder="Ex: Desenvolvimento, Design, Marketing..."
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="bg-secondary/30 border-input focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="work-message">Mensagem (opcional)</Label>
                <Textarea
                  id="work-message"
                  name="message"
                  placeholder="Conte um pouco sobre você e sua experiência..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-secondary/30 border-input focus-visible:ring-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Send className="w-4 h-4" />
                Enviar interesse
              </Button>
            </form>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default WorkWithUsSheet;
