import { Button } from "./ui/button";
import logo from "@/assets/Logo.png";

function Navbar() {
  return (
    <nav className="w-full bg-white/90 backdrop-blur-sm border-b border-slate-200">
      <div className="relative mx-auto flex max-w-360 items-center justify-between gap-4 px-4 py-0">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Sorriso e Cuidado"
            className="h-28 w-auto object-contain"
          />
        </div>

        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <a
                  href="#home"
                  className="text-sm font-medium text-light-blue border-b-2 border-light-blue pb-1"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-sm font-medium text-slate-500 hover:text-primary transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#tratamentos"
                  className="text-sm font-medium text-slate-500 hover:text-primary transition-colors"
                >
                  Tratamentos
                </a>
              </li>
              <li>
                <a
                  href="#equipe"
                  className="text-sm font-medium text-slate-500 hover:text-primary transition-colors"
                >
                  Equipe
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="text-sm font-medium text-slate-500 hover:text-primary transition-colors"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-sm font-medium text-slate-500 hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center">
          <Button
            className="rounded-4xl px-7 py-6 bg-green shadow-sm hover:bg-green/90 text-sm font-medium text-white transition-all duration-250 hover:cursor-pointer"
            variant="default"
          >
            Agendar consulta
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
