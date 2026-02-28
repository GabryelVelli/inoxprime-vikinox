import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Quote = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [cnpj, setCnpj] = useState("");

  const formatCnpj = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 14);
    return digits
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  };

  const isValidCnpj = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length !== 14) return false;
    if (/^(\d)\1{13}$/.test(digits)) return false;

    const calcDigit = (base: string, factors: number[]) => {
      const total = base
        .split("")
        .reduce((sum, num, index) => sum + Number(num) * factors[index], 0);
      const rest = total % 11;
      return rest < 2 ? 0 : 11 - rest;
    };

    const base12 = digits.slice(0, 12);
    const d1 = calcDigit(base12, [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
    const d2 = calcDigit(`${base12}${d1}`, [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);

    return digits === `${base12}${d1}${d2}`;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidCnpj(cnpj)) {
      setSubmitError("CNPJ inválido. Verifique e tente novamente.");
      setModalOpen(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/gabryel.velli@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Falha no envio.");
      }

      form.reset();
      setCnpj("");
      setModalOpen(true);
    } catch {
      setSubmitError("Não foi possível enviar agora. Tente novamente em instantes.");
      setModalOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="pt-32 pb-12 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Solicite um Orçamento
            </h1>
            <p className="text-xl text-white/90">
              Preencha o formulário abaixo e entraremos em contato rapidamente
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_subject" value="Novo orçamento - Site VIKINOX" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-sm font-semibold text-muted-foreground mb-1 block">
                    Nome Completo *
                  </label>
                  <Input id="name" name="Nome" placeholder="Seu nome" required />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-semibold text-muted-foreground mb-1 block">
                    E-mail *
                  </label>
                  <Input id="email" name="Email Remetente" type="email" placeholder="seu@email.com" required />
                </div>

                <div>
                  <label htmlFor="cnpj" className="text-sm font-semibold text-muted-foreground mb-1 block">
                    CNPJ *
                  </label>
                  <Input
                    id="cnpj"
                    name="CNPJ"
                    placeholder="00.000.000/0000-00"
                    inputMode="numeric"
                    maxLength={18}
                    value={cnpj}
                    onChange={(event) => setCnpj(formatCnpj(event.target.value))}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="text-sm font-semibold text-muted-foreground mb-1 block">
                    Telefone *
                  </label>
                  <Input id="phone" name="Telefone" placeholder="(11) 00000-0000" required />
                </div>

                <div>
                  <label htmlFor="position" className="text-sm font-semibold text-muted-foreground mb-1 block">
                    Cargo *
                  </label>
                  <Input id="position" name="Cargo" placeholder="Seu cargo" required />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-semibold text-muted-foreground mb-1 block">
                  Mensagem / Descrição do Produto *
                </label>
                <Textarea
                  id="message"
                  name="Descricao"
                  placeholder="Descreva os produtos que precisa e quantidade..."
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" variant="cta" size="xl" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{submitError ? "Falha no envio" : "Solicitação enviada"}</DialogTitle>
            <DialogDescription>
              {submitError
                ? submitError
                : "Recebemos sua solicitação de orçamento. Em breve entraremos em contato."}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Quote;
