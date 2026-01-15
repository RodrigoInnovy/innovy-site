import { AlertCircle, TrendingDown, FileX, Users } from "lucide-react";

export const ProblemsSection = () => {
  const problems = [
    {
      icon: Users,
      title: "Sem equipe de TI",
      description: "Sua empresa não tem profissionais especializados para gerenciar sistemas de gestão",
    },
    {
      icon: AlertCircle,
      title: "Processos manuais",
      description: "Perda de tempo com planilhas e processos que poderiam ser automatizados",
    },
    {
      icon: FileX,
      title: "Dados desintegrados",
      description: "Informações espalhadas em diversos sistemas sem comunicação entre si",
    },
    {
      icon: TrendingDown,
      title: "Decisões sem embasamento",
      description: "Dificuldade em ter relatórios precisos para tomada de decisão estratégica",
    },
  ];

  return (
    <section id="sobre" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sua empresa enfrenta esses desafios?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empresas sem TI interna enfrentam dificuldades reais que impactam crescimento e eficiência
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <problem.icon className="h-6 w-6 text-destructive" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary/5 rounded-2xl p-8 border border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              A boa notícia?
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Você não precisa contratar uma equipe inteira de TI. A INNOVY atua como o{" "}
              <span className="font-semibold text-primary">departamento de TI externo</span> da sua empresa,
              cuidando de todo o sistema ERP e processos de gestão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
