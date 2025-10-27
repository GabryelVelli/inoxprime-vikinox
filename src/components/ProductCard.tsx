import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ProductCardProps {
  title: string;
  image: string;
  description?: string;
}

const ProductCard = ({ title, image, description }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-glow transition-smooth cursor-pointer border-2 hover:border-accent">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-110"
          />
        </div>
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-smooth">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
          <Link to="/orcamento">
            <Button variant="outline" size="sm" className="w-full mt-4">
              Solicitar Orçamento
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
