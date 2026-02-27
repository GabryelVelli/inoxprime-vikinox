import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const quoteFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter no m\u00EDnimo 2 caracteres").max(100),
  email: z.string().email("E-mail inv\u00E1lido").max(255),
  cnpj: z.string().min(14, "CNPJ inv\u00E1lido").max(18),
  phone: z.string().min(10, "Telefone inv\u00E1lido").max(15),
  position: z.string().min(2, "Cargo deve ter no m\u00EDnimo 2 caracteres").max(100),
  deadline: z.string().min(2, "Prazo inv\u00E1lido").max(50),
  message: z.string().min(10, "Mensagem deve ter no m\u00EDnimo 10 caracteres").max(1000),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

const Quote = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      cnpj: "",
      phone: "",
      position: "",
      deadline: "",
      message: "",
    },
  });

  const onSubmit = (data: QuoteFormData) => {
    console.log("Quote form data:", data);
    setIsSubmitted(true);
    toast({
      title: "Or\u00E7amento enviado com sucesso!",
      description: "Entraremos em contato em breve.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-accent" size={48} />
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {"Solicita\u00E7\u00E3o Enviada!"}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {"Recebemos sua solicita\u00E7\u00E3o de or\u00E7amento. Nossa equipe entrar\u00E1 em contato em breve para discutir suas necessidades."}
              </p>
              <Button variant="cta" size="lg" onClick={() => setIsSubmitted(false)}>
                {"Enviar Novo Or\u00E7amento"}
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="pt-32 pb-12 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {"Solicite um Or\u00E7amento"}
            </h1>
            <p className="text-xl text-white/90">
              {"Preencha o formul\u00E1rio abaixo e entraremos em contato rapidamente"}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Completo *</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="seu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cnpj"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CNPJ *</FormLabel>
                        <FormControl>
                          <Input placeholder="00.000.000/0000-00" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone *</FormLabel>
                        <FormControl>
                          <Input placeholder="(11) 00000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cargo *</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu cargo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="deadline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prazo *</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 30 dias" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{"Mensagem / Descri\u00E7\u00E3o do Produto *"}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Descreva os produtos que precisa e quantidade..."
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" variant="cta" size="xl" className="w-full">
                  {"Enviar Solicita\u00E7\u00E3o"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;
