import { Mail, Phone, MapPin } from "lucide-react";
import logoVikinoxWhite from "@/assets/logo-vikinox-white.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-2">
              <img
                src={logoVikinoxWhite}
                alt="VIKINOX"
                className="h-24 w-auto object-contain -mt-9"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm text-white/80 -mt-6">
                {"Solu\u00E7\u00F5es em a\u00E7o inoxid\u00E1vel para diversos setores."}
              </p>
              <p className="text-xs text-white/60 mt-3">
                {"Raz\u00E3o Social: Vikinox Conex\u00F5es Tubos e Usinagem LTDA"}
              </p>
              <p className="text-xs text-white/60">
                CNPJ: 30.520.832/0001-25
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-secondary" />
                <a
                  href="mailto:vikinox@vikinox.com.br"
                  className="text-sm text-white/80 hover:text-secondary transition-smooth"
                >
                  vikinox@vikinox.com.br
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-secondary" />
                <a
                  href="tel:+5511959690000"
                  className="text-sm text-white/80 hover:text-secondary transition-smooth"
                >
                  (11) 95969-0000
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-secondary mt-1" />
                <address className="text-sm text-white/80 not-italic">
                  {"R. Sidnei, 182 \u2013 Utinga"}
                  <br />
                  {"Santo Andr\u00E9 - SP"}
                </address>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{"Links R\u00E1pidos"}</h3>
            <nav className="space-y-2">
              <a
                href="/"
                className="block text-sm text-white/80 hover:text-secondary transition-smooth"
              >
                Home
              </a>
              <a
                href="/produtos"
                className="block text-sm text-white/80 hover:text-secondary transition-smooth"
              >
                Produtos
              </a>
              <a
                href="/orcamento"
                className="block text-sm text-white/80 hover:text-secondary transition-smooth"
              >
                {"Solicite um Or\u00E7amento"}
              </a>
              <a
                href="/contato"
                className="block text-sm text-white/80 hover:text-secondary transition-smooth"
              >
                Contato
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm text-white/60">
            {"\u00A9"} {new Date().getFullYear()} VIKINOX. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
