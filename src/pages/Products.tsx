import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import productPump from "@/assets/product-pump.jpg";
import productConnections from "@/assets/product-connections.jpg";
import productFilter from "@/assets/product-filter.jpg";

const Products = () => {
  const products = [
    {
      title: "Bombas Sanitárias",
      image: productPump,
      description: "Bombas centrífugas e lobulares em aço inoxidável 304 e 316L",
    },
    {
      title: "Conexões",
      image: productConnections,
      description: "Cotovelos, tês, reduções e uniões em diversos diâmetros",
    },
    {
      title: "Filtros de Linha",
      image: productFilter,
      description: "Filtros tipo Y e cesto para remoção de impurezas",
    },
    {
      title: "Válvulas",
      image: productConnections,
      description: "Válvulas borboleta, esfera e diafragma em inox",
    },
    {
      title: "Tubos e Acessórios",
      image: productPump,
      description: "Tubulações sanitárias e industriais com acabamento polido",
    },
    {
      title: "Usinagem Especial",
      image: productFilter,
      description: "Peças customizadas conforme especificação do cliente",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nossos Produtos
            </h1>
            <p className="text-xl text-white/90">
              Linha completa de produtos em aço inoxidável com qualidade certificada
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                image={product.image}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Qualidade e Certificação
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-muted-foreground">
              <div className="bg-background p-6 rounded-lg shadow-elegant">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Materiais Certificados
                </h3>
                <p>
                  Todos os nossos produtos são fabricados com aço inoxidável 304 e 316L,
                  garantindo máxima resistência à corrosão e durabilidade.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-elegant">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Atendimento Personalizado
                </h3>
                <p>
                  Nossa equipe técnica está pronta para auxiliar na escolha dos produtos
                  ideais para sua aplicação específica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
