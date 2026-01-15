import { Rocket, Settings, LineChart, Shield } from "lucide-react";

export const SolutionsSection = () => {
  const solutions = [
    {
      icon: Rocket,
      title: "Implantação completa de ERP Totvs",
      description: "Especialistas certificados em ERP Totvs. Implantamos e configuramos o sistema ideal para sua empresa, cuidando de todo o processo técnico.",
    },
    {
      icon: Settings,
      title: "Suporte e manutenção contínua",
      description: "Sua equipe sempre terá suporte especializado, seja para dúvidas, ajustes ou novas necessidades que surgirem.",
    },
    {
      icon: LineChart,
      title: "Relatórios e integrações",
      description: "Criamos relatórios personalizados em Excel/Power BI e integramos seu ERP com outros sistemas da empresa.",
    },
    {
      icon: Shield,
      title: "Consultoria em processos",
      description: "Analisamos e otimizamos seus processos de negócio alinhados ao sistema, garantindo eficiência operacional.",
    },
  ];

  return (
    <section id="solucoes" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como a INNOVY resolve
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Somos especialistas certificados em ERP Totvs, atuando como o braço de TI que sua empresa precisa
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-8 border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.2)]"
            >
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <solution.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 max-w-3xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              O resultado?
            </h3>
            <p className="text-lg text-muted-foreground">
              Sua empresa ganha <span className="font-semibold text-primary">eficiência operacional</span>,{" "}
              <span className="font-semibold text-primary">dados integrados</span> e{" "}
              <span className="font-semibold text-primary">decisões estratégicas</span> baseadas em informação —
              sem precisar contratar uma equipe de TI interna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
