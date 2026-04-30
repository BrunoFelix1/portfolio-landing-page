import womanHero from "../assets/HeroWoman.png";
import { Button } from "./ui/button";
import { Calendar, Cpu, Home, PlayCircle, UserCheck } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-150 flex overflow-hidden bg-offwhite"
    >
      {/* LEFT SIDE */}
      <div className="w-1/2 flex items-center px-32 z-10">
        <div>
          <h1 className="text-5xl text-dark-blue font-lora leading-tight font-semibold">
            <span className="block">Cuidado que</span>
            <span className="block text-green">transforma sorrisos</span>
          </h1>

          <p className="mt-4 text-gray-500 max-w-md ">
            Muito mais que tratamentos, oferecemos experiências acolhedoras e
            humanas para deixar você sorrindo com confiança.
          </p>
          <div className="mt-8 flex items-start  divide-x divide-gray-300">
            <div className="">
              <FeatureCard
                title="Atendimento humanizado"
                icon={<UserCheck className="h-10 w-10 text-light-blue/80" />}
              />
            </div>
            <div className="px-6">
              <FeatureCard
                title="Tecnologia avançada"
                icon={<Cpu className="h-10 w-10 text-light-blue/80" />}
              />
            </div>
            <div className="px-6">
              <FeatureCard
                title="Ambiente acolhedor"
                icon={<Home className="h-10 w-10 text-light-blue/80" />}
              />
            </div>
          </div>

          <div className="mt-9 flex items-center gap-4">
            <Button className="px-8 py-7 bg-green text-white rounded-4xl shadow-md hover:bg-green/90 transition-colors duration-250 flex items-center hover:cursor-pointer">
              Agendar consulta
              <Calendar className="ml-1 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="px-7 py-6 border border-gray-300 rounded-4xl text-gray-700 bg-white hover:bg-gray-100 transition-colors duration-250 flex items-center hover:cursor-pointer"
            >
              Conheça a clínica
              <PlayCircle className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-1/2 relative">
        <img
          src={womanHero}
          alt="Paciente sorrindo"
          className="w-full h-full object-cover"
        />

        {/* CURVED SHAPE */}
        <div className="absolute -left-5 top-0 h-full w-44">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M100,0 C60,10 60,90 100,100 L0,100 L0,0 Z"
              fill="#dbeafe" // azul claro
            />
          </svg>
        </div>
        <div className="absolute -left-17.5 top-0 h-full w-44">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M100,0 C60,10 60,90 100,100 L0,100 L0,0 Z"
              fill="#f8f6f3" //offwhite
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  icon,
}: Readonly<{ title: string; icon: JSX.Element }>) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <div>
        <div className="text-sm font-normal text-gray-600">{title}</div>
      </div>
    </div>
  );
}

export default Hero;
