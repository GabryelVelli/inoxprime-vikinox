import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

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
                      vikinox@vikinox.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted hover:shadow-elegant transition-smooth">
                  <Phone className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                    <a
                      href="tel:+5511959690000"
                      className="text-muted-foreground hover:text-accent transition-smooth"
                    >
                      (11) 95969-0000
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
                Dados da Empresa
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-1">
                    {"Raz\u00E3o Social"}
                  </h3>
                  <p className="text-foreground">
                    {"Vikinox Conex\u00F5es Tubos e Usinagem LTDA"}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-1">
                    CNPJ
                  </h3>
                  <p className="text-foreground">30.520.832/0001-25</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-1">
                    E-mail Comercial
                  </h3>
                  <p className="text-foreground">vikinox@vikinox.com.br</p>
                </div>
              </div>
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
