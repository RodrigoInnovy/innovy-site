import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowRight } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contato" className="py-20 px-4 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Pronto para transformar sua gestão?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Entre em contato para uma consultoria gratuita e descubra como podemos ser o departamento de TI que sua empresa precisa.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto">
            <a
              href="mailto:comercial@innovy.com.br"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-white/70 mb-1">Email</div>
                  <div className="font-semibold group-hover:text-accent transition-colors">
                    comercial@innovy.com.br
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/5511961787709"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-white/70 mb-1">WhatsApp</div>
                  <div className="font-semibold group-hover:text-accent transition-colors">
                    (11) 96178-7709
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="pt-8">
            <a
              href="mailto:comercial@innovy.com.br?subject=Solicito uma proposta de consultoria ERP"
              className="inline-block"
            >
              <Button
                size="lg"
                variant="accent"
                className="text-base font-semibold shadow-xl group"
              >
                Solicitar Proposta Agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
