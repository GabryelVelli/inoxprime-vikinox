import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="pt-32 pb-12 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-white/90">
              {"Estamos prontos para atender voc\u00EA e sua empresa"}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  {"Informa\u00E7\u00F5es de Contato"}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {"Entre em contato conosco atrav\u00E9s de qualquer um dos canais abaixo. Nossa equipe est\u00E1 pronta para atend\u00EA-lo."}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted hover:shadow-elegant transition-smooth">
                  <Mail className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                    <a
                      href="mailto:vikinox@vikinox.com.br"
                      className="text-muted-foreground hover:text-accent transition-smooth"
                    >
                      vendas@vikinox.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted hover:shadow-elegant transition-smooth">
                  <Phone className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                    <a
                      href="tel:+551150267082"
                      className="text-muted-foreground hover:text-accent transition-smooth"
                    >
                      (11) 5026-7082
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted hover:shadow-elegant transition-smooth">
                  <MapPin className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{"Endere\u00E7o"}</h3>
                    <address className="text-muted-foreground not-italic">
                      {"R. Sidnei, 182 \u2013 Utinga"}
                      <br />
                      {"Santo Andr\u00E9 - SP"}
                    </address>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted hover:shadow-elegant transition-smooth">
                  <Clock className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{"Hor\u00E1rio"}</h3>
                    <p className="text-muted-foreground">
                      {"Segunda a Sexta: 8h \u00E0s 18h"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted p-8 rounded-lg shadow-elegant">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Envie sua Mensagem
              </h2>

              <form
                action="https://formsubmit.co/vendas@vikinox.com.br"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="Novo contato - Site VIKINOX" />
                <input type="hidden" name="_captcha" value="false" />

                <div>
                  <label htmlFor="name" className="text-sm font-semibold text-muted-foreground mb-1 block">
                    Nome *
                  </label>
                  <Input id="name" name="name" placeholder="Seu nome" required />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-semibold text-muted-foreground mb-1 block">
                    E-mail *
                  </label>
                  <Input id="email" name="email" type="email" placeholder="seu@email.com" required />
                </div>

                <div>
                  <label htmlFor="phone" className="text-sm font-semibold text-muted-foreground mb-1 block">
                    Telefone
                  </label>
                  <Input id="phone" name="phone" placeholder="(11) 00000-0000" />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-semibold text-muted-foreground mb-1 block">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Escreva sua mensagem..."
                    className="min-h-[140px]"
                    required
                  />
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              {"Nossa Localiza\u00E7\u00E3o"}
            </h2>
            <div className="aspect-video bg-background rounded-lg shadow-elegant overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=-23.6218868,-46.5357085&z=18&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={"Localiza\u00E7\u00E3o VIKINOX"}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
