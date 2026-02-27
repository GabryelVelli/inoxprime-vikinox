import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import productPump from "@/assets/product-pump.png";
import productConnections from "@/assets/product-connections.png";
import productFilter from "@/assets/product-filter.png";
import productVB from "@/assets/product-vb.png";
import productPipe from "@/assets/product-pipe.jpeg";
import productHousing from "@/assets/product-housing.jpeg";

const Products = () => {
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
    {
      title: "V\u00E1lvulas",
      image: productVB,
      description: "Linha t\u00E9cnica de v\u00E1lvulas para controle de fluxo e seguran\u00E7a",
    },
    {
      title: "Tubos e Acess\u00F3rios",
      image: productPipe,
      description: "Tubos e acess\u00F3rios inox para montagem industrial com alta durabilidade",
    },
    {
      title: "Usinagem Especial",
      image: productHousing,
      description: "Projetos sob medida em usinagem para demandas t\u00E9cnicas espec\u00EDficas",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="pt-32 pb-12 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nossos Produtos
            </h1>
            <p className="text-xl text-white/90">
              {"Linha completa de produtos em a\u00E7o inoxid\u00E1vel com qualidade certificada"}
            </p>
          </div>
        </div>
      </section>

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

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              {"Qualidade e Certifica\u00E7\u00E3o"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-muted-foreground">
              <div className="bg-background p-6 rounded-lg shadow-elegant">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Materiais Certificados
                </h3>
                <p>
                  {"Todos os nossos produtos s\u00E3o fabricados com a\u00E7o inoxid\u00E1vel 304 e 316L, garantindo m\u00E1xima resist\u00EAncia \u00E0 corros\u00E3o e durabilidade."}
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-elegant">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Atendimento Personalizado
                </h3>
                <p>
                  {"Nossa equipe t\u00E9cnica est\u00E1 pronta para auxiliar na escolha dos produtos ideais para sua aplica\u00E7\u00E3o espec\u00EDfica."}
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
