import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Empresa", path: "/#empresa" },
    { name: "Produtos", path: "/produtos" },
    { name: "Contato", path: "/contato" },
  ];

  const isActive = (path: string) => {
    if (path.includes("#")) {
      const [basePath, hash] = path.split("#");
      const normalizedBase = basePath || "/";
      return location.pathname === normalizedBase && location.hash === `#${hash}`;
    }
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold">
              <span className={isScrolled ? "text-foreground" : "text-white"}>VIKI</span>
              <span className="text-gradient">NOX</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className={`text-sm font-medium transition-smooth ${
                  isScrolled
                    ? "hover:text-accent"
                    : "text-white/90 hover:text-white"
                } ${
                  isActive(item.path)
                    ? "text-accent"
                    : isScrolled
                      ? "text-foreground"
                      : "text-white/90"
                }`}
              >
                {item.name}
              </a>
            ))}
            <Link to="/orcamento">
              <Button variant="hero" size="lg">
                {"Solicite um Or\u00E7amento"}
              </Button>
            </Link>
          </nav>

          <button
            className={`md:hidden p-2 transition-smooth ${
              isScrolled
                ? "text-foreground hover:text-accent"
                : "text-white hover:text-white/80"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            className={`md:hidden pt-2 pb-4 border-t ${
              isScrolled
                ? "bg-background border-border"
                : "bg-transparent border-white/20"
            }`}
          >
            <nav className="flex flex-col space-y-4 px-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className={`text-sm font-medium transition-smooth ${
                    isActive(item.path)
                      ? "text-accent"
                      : isScrolled
                        ? "text-foreground hover:text-accent"
                        : "text-white/95 hover:text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Link to="/orcamento" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="cta" size="lg" className="w-full">
                  {"Solicite um Or\u00E7amento"}
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
