import {
  HeartHandshake,
  Smile,
  Leaf,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";

type WhyUsCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  showDivider?: boolean;
};

function WhyUsCard({
  icon: Icon,
  title,
  description,
  showDivider,
}: WhyUsCardProps) {
  return (
    <div className="relative flex h-full flex-col items-center px-10 text-center">
      {/* Divider */}
      {showDivider && (
        <div className="absolute left-0 top-1/2 hidden h-[70%] -translate-y-1/2 border-l border-[#d8e3ee] xl:block" />
      )}

      {/* Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center">
        <Icon size={38} strokeWidth={1.8} className="text-[#7c96b2]" />
      </div>

      {/* Title */}
      <h3 className="mb-4 min-h-[72px] font-lora text-2xl font-semibold leading-snug text-[#1e2b50]">
        {title}
      </h3>

      {/* Description */}
      <p className="max-w-[220px] text-base leading-8 text-[#5c6470]">
        {description}
      </p>
    </div>
  );
}

function WhyUs() {
  const items = [
    {
      icon: HeartHandshake,
      title: "Atendimento humanizado",
      description: "Você é único e merece ser tratado como tal.",
    },
    {
      icon: Leaf,
      title: "Ambiente acolhedor",
      description: "Um espaço pensado para seu conforto e tranquilidade.",
    },
    {
      icon: CalendarDays,
      title: "Horários flexíveis",
      description: "Agendamentos que se adaptam à sua rotina.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] px-4 py-5 lg:px-20">
      <div className="mx-auto max-w-7xl rounded-[40px] bg-[#eef5fb] px-8 py-14 md:px-14">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_2fr]">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <span className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#7c96b2]">
              Por que escolher a gente?
            </span>

            <h2 className="max-w-md font-lora text-4xl font-semibold leading-tight text-[#1e2b50] ">
              Seu bem-estar é nossa prioridade
            </h2>

            <Button className="mt-8 flex h-12 w-fit items-center gap-3 rounded-full bg-white/80 px-7 text-base font-medium text-[#1e2b50] shadow-none transition-all duration-300 hover:scale-105 hover:bg-white hover:cursor-pointer">
              Conheça a clínica
              <ArrowRight size={18} />
            </Button>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item, index) => (
              <WhyUsCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                showDivider={index !== 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
