import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* HERO */}
      <section className="pt-32 pb-12 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Política de Privacidade (LGPD)
            </h1>
            <p className="text-xl text-white/90">
              Como a Vikinox coleta, utiliza e protege seus dados pessoais.
            </p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="py-20 flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10 text-foreground">
            {/* INTRO */}
            <div className="bg-background p-6 rounded-lg shadow-elegant">
              <p className="text-muted-foreground">
                A <strong>Vikinox</strong> respeita a sua privacidade e está
                comprometida com a proteção dos dados pessoais, nos termos da Lei
                nº 13.709/2018 (Lei Geral de Proteção de Dados – LGPD).
              </p>
              <p className="text-muted-foreground mt-4">
                <strong>Última atualização:</strong> Fevereiro de 2026.
              </p>
            </div>

            {/* 1 - DADOS COLETADOS */}
            <div className="bg-background p-6 rounded-lg shadow-elegant">
              <h2 className="text-2xl font-bold mb-4">
                1. Quais dados coletamos
              </h2>
              <p className="text-muted-foreground mb-4">
                Ao preencher nosso formulário de contato/orçamento, podemos
                coletar os seguintes dados:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Nome</li>
                <li>E-mail</li>
                <li>Telefone</li>
                <li>Empresa</li>
                <li>CNPJ</li>
                <li>Cargo</li>
                <li>Mensagem enviada no formulário</li>
              </ul>
            </div>

            {/* 2 - FINALIDADE */}
            <div className="bg-background p-6 rounded-lg shadow-elegant">
              <h2 className="text-2xl font-bold mb-4">
                2. Para que usamos os dados
              </h2>
              <p className="text-muted-foreground mb-4">
                Utilizamos os dados exclusivamente para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Responder solicitações de orçamento</li>
                <li>Entrar em contato para esclarecimentos</li>
                <li>Realizar atendimento comercial</li>
                <li>
                  Manter comunicação relacionada à solicitação feita pelo
                  usuário
                </li>
              </ul>
            </div>

            {/* 3 - COMO O DADO É ENVIADO (FORM SUBMIT) */}
            <div className="bg-background p-6 rounded-lg shadow-elegant">
              <h2 className="text-2xl font-bold mb-4">
                3. Como os dados são tratados no site
              </h2>
              <p className="text-muted-foreground">
                O site da Vikinox atua como uma ponte para envio do formulário.
                As informações preenchidas são encaminhadas ao e-mail corporativo
                da empresa por meio de um serviço intermediador de envio de
                formulários (ex.: FormSubmit).
              </p>
              <p className="text-muted-foreground mt-4">
                A Vikinox não mantém armazenamento direto desses dados em banco
                de dados no site.
              </p>
            </div>

            {/* 4 - COMPARTILHAMENTO */}
            <div className="bg-background p-6 rounded-lg shadow-elegant">
              <h2 className="text-2xl font-bold mb-4">
                4. Compartilhamento de dados
              </h2>
              <p className="text-muted-foreground">
                A Vikinox não vende ou comercializa dados pessoais. O
                compartilhamento pode ocorrer apenas quando necessário para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Cumprimento de obrigação legal ou regulatória</li>
                <li>Exercício regular de direitos</li>
                <li>Prestação de serviços de comunicação (provedor de e-mail)</li>
              </ul>
            </div>

            {/* 5 - BASE LEGAL */}
            <div className="bg-background p-6 rounded-lg shadow-elegant">
              <h2 className="text-2xl font-bold mb-4">5. Base legal</h2>
              <p className="text-muted-foreground">
                O tratamento dos dados pode ocorrer com base no{" "}
                <strong>consentimento do titular</strong> (quando aplicável) e na
                necessidade de{" "}
                <strong>
                  execução de procedimentos preliminares a pedido do titular
                </strong>{" "}
                relacionados à solicitação de orçamento/contato.
              </p>
            </div>

            {/* 6 - DIREITOS */}
            <div className="bg-background p-6 rounded-lg shadow-elegant">
              <h2 className="text-2xl font-bold mb-4">
                6. Direitos do titular
              </h2>
              <p className="text-muted-foreground mb-4">
                Nos termos da LGPD, você pode solicitar:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Confirmação da existência de tratamento</li>
                <li>Acesso aos dados</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                <li>Eliminação dos dados (quando aplicável)</li>
                <li>Informações sobre uso e compartilhamento</li>
              </ul>

              <div className="mt-6 bg-muted p-4 rounded-lg">
                <p className="text-muted-foreground">
                  Para exercer seus direitos, entre em contato pelo e-mail:
                  <br />
                  <strong>contato@vikinox.com.br</strong>{" "}
                  <span className="text-sm">
                    (troque pelo e-mail real que vai receber os formulários)
                  </span>
                </p>
              </div>
            </div>

            {/* 7 - SEGURANÇA */}
            <div className="bg-background p-6 rounded-lg shadow-elegant">
              <h2 className="text-2xl font-bold mb-4">7. Segurança</h2>
              <p className="text-muted-foreground">
                Adotamos medidas técnicas e administrativas para proteger os
                dados pessoais contra acessos não autorizados, perdas e usos
                indevidos, incluindo boas práticas de segurança no acesso ao
                e-mail corporativo que recebe as solicitações.
              </p>
            </div>

            {/* 8 - COOKIES */}
            <div className="bg-background p-6 rounded-lg shadow-elegant">
              <h2 className="text-2xl font-bold mb-4">8. Cookies</h2>
              <p className="text-muted-foreground">
                Podemos utilizar cookies essenciais para o funcionamento do site.
                Caso sejam utilizados cookies de análise/marketing (como
                ferramentas de métricas), isso será indicado ao usuário por meio
                de aviso apropriado.
              </p>
            </div>

            {/* 9 - ALTERAÇÕES */}
            <div className="bg-background p-6 rounded-lg shadow-elegant">
              <h2 className="text-2xl font-bold mb-4">
                9. Alterações nesta política
              </h2>
              <p className="text-muted-foreground">
                Esta política pode ser atualizada a qualquer momento para manter
                conformidade legal. Recomendamos a revisão periódica desta
                página.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;