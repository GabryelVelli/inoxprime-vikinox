import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5511966100100";

  const message =
    "Olá! Vim pelo site da Vikinox e gostaria de mais informações.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group flex items-center">
      
      {/* Tooltip */}
      <div className="mr-3 hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
        <div className="bg-white text-gray-800 text-sm px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
          Se preferir, aqui está nosso WhatsApp de contato 👋
        </div>
      </div>

      {/* Botão */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20b858] p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="white"
        >
          <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2 7.9L.2 31.8l8.1-2.1c2.3 1.2 4.8 1.8 7.4 1.8 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.4c-2.3 0-4.5-.6-6.4-1.7l-.5-.3-4.8 1.3 1.3-4.7-.3-.5c-1.2-1.9-1.8-4.1-1.8-6.4C3.5 8.3 9.8 2 16 2s12.5 6.3 12.5 14-6.3 12.8-12.5 12.8zm6.9-9.6c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.2.3-.9 1.2-1.1 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 3s1.3 3.6 1.5 3.8c.2.2 2.6 4 6.3 5.6.9.4 1.6.6 2.1.7.9.3 1.7.3 2.4.2.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.1-.3-.2-.7-.4z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;