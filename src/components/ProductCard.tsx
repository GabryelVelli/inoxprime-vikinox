import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ProductCardProps {
  title: string;
  image: string;
  description?: string;
  buttonText?: string;
}

const ProductCard = ({ title, image, description }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-glow transition-smooth cursor-pointer border-2 hover:border-accent">
      <CardContent className="p-0">
        <div className="h-64 flex items-center justify-center bg-white p-4">
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain transition-smooth"
          />
        </div>
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-smooth">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
          {title === "Usinagem Especial" ? (
            <Link to="/orcamento">
              <Button variant="outline" size="sm" className="w-full mt-4">
                Solicitar Orçamento
              </Button>
            </Link>
          ) : (
            <Link to="/orcamento">
              <Button variant="outline" size="sm" className="w-full mt-4">
                Conferir Catálogo
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
