import Dentista from "../assets/Dentista.jpg";
import { Button } from "./ui/button";
import { Calendar, PlayCircle } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-150 flex overflow-hidden bg-offwhite"
    >
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
          <div className="mt-8 flex items-start  divide-x divide-gray-300"></div>

          <div className="mt-3 mb-10 flex items-center gap-4">
            <Button className="px-8 py-7 rounded-sm bg-green text-white  shadow-none hover:-translate-y-0.5 transition-all duration-300 flex items-center hover:cursor-pointer">
              Agendar consulta
              <Calendar className="ml-1 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="px-7 py-6 rounded-sm border-none text-gray-700 hover:bg-white bg-white hover:-translate-y-0.5 transition-all duration-300 flex items-center hover:cursor-pointer"
            >
              Conheça a clínica
              <PlayCircle className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="w-1/2 relative">
        <img
          src={Dentista}
          alt="Paciente sorrindo"
          className="w-full h-full object-cover"
        />

        <div className="absolute -left-5 top-0 h-full w-44">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M100,0 C60,10 60,90 100,100 L0,100 L0,0 Z"
              fill="#dbeafe"
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
              fill="#f8f6f3"
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
