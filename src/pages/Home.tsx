import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-building.jpeg";
import productPump from "@/assets/product-pump.png";
import productConnections from "@/assets/product-connections.png";
import productFilter from "@/assets/product-filter.png";
import client3m from "@/assets/client-3m.svg";
import clientColgate from "@/assets/client-colgate.svg";
import clientPall from "@/assets/logo-pall.png";
import clientDonaldson from "@/assets/logo-donaldson.png";
import clientBasf from "@/assets/logo-basf.png";
import clientParker from "@/assets/logo-parker.png";
import clientWgm from "@/assets/logo-wgm.png";
import clientZeppelin from "@/assets/logo-zeppelin.png";
import clientMerck from "@/assets/logo-merck.png";
import clientToledo from "@/assets/logo-toledo.png";

const Home = () => {
  const products = [
    {
      title: "Bombas Sanit\u00E1rias",
      image: productPump,
      description: "Bombas de alta qualidade em a\u00E7o inoxid\u00E1vel para processos sanit\u00E1rios",
    },
    {
      title: "Conex\u00F5es",
      image: productConnections,
      description: "Ampla linha de conex\u00F5es em inox para diversas aplica\u00E7\u00F5es industriais",
    },
    {
      title: "Filtros de Linha",
      image: productFilter,
      description: "Filtros de linha em a\u00E7o inoxid\u00E1vel para m\u00E1xima efici\u00EAncia",
    },
  ];

  const clients = [
    { name: "3M", logo: "3M", logoImage: client3m },
    { name: "Merck", logo: "Merck", logoImage: clientMerck },
    { name: "Colgate", logo: "Colgate", logoImage: clientColgate },
    { name: "Pall", logo: "Pall", logoImage: clientPall },
    { name: "Donaldson", logo: "Donaldson", logoImage: clientDonaldson },
    { name: "Zeppelin", logo: "Zeppelin", logoImage: clientZeppelin },
    { name: "Basf", logo: "Basf", logoImage: clientBasf },
    { name: "Parker", logo: "Parker", logoImage: clientParker },
    { name: "Toledo", logo: "Toledo", logoImage: clientToledo },
    { name: "WGM", logo: "WGM", logoImage: clientWgm },
  ];

  const features = [
    "Produtos certificados e de alta qualidade",
    "Atendimento personalizado",
    "Entrega r\u00E1pida e confi\u00E1vel",
    "Mais de 10 anos de experi\u00EAncia",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(20, 40, 60, 0), rgba(20, 40, 60, 0.8)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {"A CONFIAN\u00C7A EM "}
            <span className="text-gradient bg-gradient-to-r from-blue-300 to-blue-100">INOX</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            {"Solu\u00E7\u00F5es em tubos e conex\u00F5es de a\u00E7o inoxid\u00E1vel para diversos setores"}
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
                className="border-primary text-primary hover:bg-primary hover:text-white motion-safe:transition-colors duration-300 ease-out"
              >
                Ver Produtos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="empresa" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {"Especialistas em A\u00E7o Inoxid\u00E1vel"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {"A VIKINOX \u00E9 refer\u00EAncia em solu\u00E7\u00F5es de tubos, conex\u00F5es e usinagem em a\u00E7o inoxid\u00E1vel. Atendemos diversos setores industriais com produtos de alta qualidade e durabilidade."}
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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Descubra Nossos Produtos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {"Linha completa de produtos em a\u00E7o inoxid\u00E1vel para atender \u00E0s necessidades da sua ind\u00FAstria"}
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
                {"Ver Cat\u00E1logo Completo"}
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

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
          <div className="max-w-6xl mx-auto relative px-8 md:px-12">
            <button
              className="clients-prev hidden md:flex absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-background text-accent shadow-elegant"
              aria-label="Cliente anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="clients-next hidden md:flex absolute right-0 top-1/2 translate-x-12 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-background text-accent shadow-elegant"
              aria-label="Próximo cliente"
            >
              <ChevronRight size={20} />
            </button>
            <Swiper
              className="clients-swiper"
              modules={[Navigation, Autoplay]}
              navigation={{ prevEl: ".clients-prev", nextEl: ".clients-next" }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop
              spaceBetween={30}
              breakpoints={{
                0: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              }}
            >
              {clients.map((client, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-background p-8 rounded-lg shadow-elegant flex items-center justify-center min-h-[112px]">
                    {client.logoImage ? (
                      <div className="h-12 w-32 flex items-center justify-center">
                        <img
                          src={client.logoImage}
                          alt={`Logo ${client.name}`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    ) : (
                      <span className="text-2xl font-bold text-foreground">
                        {client.logo}
                      </span>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {"Pronto para Come\u00E7ar?"}
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {"Entre em contato conosco e descubra como podemos fornecer as melhores solu\u00E7\u00F5es em a\u00E7o inoxid\u00E1vel para o seu neg\u00F3cio"}
          </p>
          <Link to="/orcamento">
            <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
              {"Solicitar Or\u00E7amento"}
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
