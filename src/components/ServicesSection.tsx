import { Puzzle, Database, Link2, BarChart3, Wrench, Cloud, Users } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Puzzle,
      title: "Consultoria em Processos",
      description: "Análise e assessoria em processos empresariais com foco em sistemas de gestão",
    },
    {
      icon: Database,
      title: "Implantação de ERP Totvs",
      description: "Consultoria completa para implantação de ERP Totvs na sua empresa",
    },
    {
      icon: Link2,
      title: "Integrações e Automações",
      description: "Integrações entre sistemas e automação de processos operacionais",
    },
    {
      icon: BarChart3,
      title: "Relatórios Gerenciais",
      description: "Elaboração de relatórios em Excel/Power BI com dados do ERP",
    },
    {
      icon: Wrench,
      title: "Suporte Técnico Totvs",
      description: "Suporte especializado em ERP Totvs e manutenção contínua da infraestrutura",
    },
    {
      icon: Cloud,
      title: "Soluções em Nuvem",
      description: "Serviços em nuvem, segurança da informação e redes corporativas",
    },
    {
      icon: Users,
      title: "Coordenação e Gestão de TI",
      description: "Atuamos como sua equipe de TI, coordenando projetos e gerenciando toda infraestrutura tecnológica",
    },
  ];

  return (
    <section id="servicos" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em gestão empresarial e tecnologia
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-accent transition-all duration-300 hover:shadow-lg group"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-6 w-6 text-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
