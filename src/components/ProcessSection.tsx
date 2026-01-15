import { MessageSquare, Search, Cog, Rocket, HeadphonesIcon } from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Diagnóstico inicial",
      description: "Entendemos seu negócio, processos atuais e necessidades específicas",
    },
    {
      number: "02",
      icon: Search,
      title: "Planejamento",
      description: "Desenvolvemos a estratégia de implementação e escolha do sistema ideal",
    },
    {
      number: "03",
      icon: Cog,
      title: "Implementação",
      description: "Configuramos, personalizamos e integramos o ERP ao seu negócio",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Go-live e treinamento",
      description: "Colocamos o sistema em produção e capacitamos sua equipe",
    },
    {
      number: "05",
      icon: HeadphonesIcon,
      title: "Suporte contínuo",
      description: "Acompanhamento permanente com suporte especializado",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como trabalhamos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Um processo estruturado para garantir o sucesso da sua implementação
          </p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute left-0 right-0 top-16 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center relative z-10">
                        <step.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-white">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
