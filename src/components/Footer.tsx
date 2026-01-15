export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">INNOVY</h3>
            <p className="text-background/80">
              Especialistas em consultoria de ERP para empresas sem TI interna.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-background/80">
              <p>comercial@innovy.com.br</p>
              <p>(11) 96178-7709</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-background/80">
              <li>Consultoria em ERP</li>
              <li>Implantação de Sistemas</li>
              <li>Suporte Especializado</li>
              <li>Integrações e Automações</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>© {new Date().getFullYear()} INNOVY - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
