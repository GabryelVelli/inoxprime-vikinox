import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-building.jpg";
import productPump from "@/assets/product-pump.jpg";
import productConnections from "@/assets/product-connections.jpg";
import productFilter from "@/assets/product-filter.jpg";

const Home = () => {
  const products = [
    {
      title: "Bombas Sanitárias",
      image: productPump,
      description: "Bombas de alta qualidade em aço inoxidável para processos sanitários",
    },
    {
      title: "Conexões",
      image: productConnections,
      description: "Ampla linha de conexões em inox para diversas aplicações industriais",
    },
    {
      title: "Filtros de Linha",
      image: productFilter,
      description: "Filtros de linha em aço inoxidável para máxima eficiência",
    },
  ];

  const clients = [
    { name: "3M", logo: "3M" },
    { name: "Merck", logo: "Merck" },
    { name: "Colgate", logo: "Colgate" },
    { name: "Ambev", logo: "Ambev" },
  ];

  const features = [
    "Produtos certificados e de alta qualidade",
    "Atendimento personalizado",
    "Entrega rápida e confiável",
    "Mais de 10 anos de experiência",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(20, 40, 60, 0.5), rgba(20, 40, 60, 0.75)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            A CONFIANÇA EM <span className="text-gradient bg-gradient-to-r from-blue-300 to-blue-100">INOX</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            Soluções em tubos e conexões de aço inoxidável para diversos setores
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <a href="#empresa">
              <Button variant="hero" size="xl">
                Sobre a Empresa
                <ArrowRight size={20} />
              </Button>
            </a>
            <Link to="/produtos">
            <Button
              variant="outline"
              size="xl"
              className="border-primary text-primary hover:bg-primary hover:text-white
                        motion-safe:transition-colors duration-300 ease-out"
            >
              Ver Produtos
            </Button>




            </Link>
          </div>
        </div>
      </section>

      {/* Empresa Section */}
      <section id="empresa" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Especialistas em Aço Inoxidável
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A VIKINOX é referência em soluções de tubos, conexões e usinagem em aço inoxidável.
              Atendemos diversos setores industriais com produtos de alta qualidade e durabilidade.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-left bg-background p-6 rounded-lg shadow-elegant hover:shadow-glow transition-smooth"
                >
                  <CheckCircle className="text-accent flex-shrink-0" size={24} />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Descubra Nossos Produtos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Linha completa de produtos em aço inoxidável para atender às necessidades da sua indústria
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                image={product.image}
                description={product.description}
              />
            ))}
          </div>
          <div className="text-center">
            <Link to="/produtos">
              <Button variant="hero" size="xl">
                Ver Catálogo Completo
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Clientes que Confiam na VIKINOX
            </h2>
            <p className="text-lg text-muted-foreground">
              Parceiros de sucesso em diversos segmentos
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-lg shadow-elegant hover:shadow-glow transition-smooth flex items-center justify-center"
              >
                <span className="text-2xl font-bold text-foreground">{client.logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos fornecer as melhores soluções em aço inoxidável para o seu negócio
          </p>
          <Link to="/orcamento">
            <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
              Solicitar Orçamento
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
