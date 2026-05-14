import { HeartHandshake, Leaf, CalendarDays, ArrowRight } from "lucide-react";
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
}: Readonly<WhyUsCardProps>) {
  return (
    <div className="relative flex h-full flex-col items-center px-10 text-center">
      {showDivider && (
        <div className="absolute left-0 top-1/2 hidden h-[70%] -translate-y-1/2 border-l border-[#d8e3ee] xl:block" />
      )}

      <div className="mb-6 flex h-16 w-16 items-center justify-center">
        <Icon size={38} strokeWidth={1.8} className="text-[#7c96b2]" />
      </div>

      <h3 className="mb-4 min-h-18 font-lora text-2xl font-semibold leading-snug text-[#1e2b50]">
        {title}
      </h3>

      {/* Description */}
      <p className="max-w-55 text-base leading-8 text-[#5c6470]">
        {description}
      </p>
    </div>
  );
}

function WhyUs() {
  const items = [
    {
      id: "humanized-care",
      icon: HeartHandshake,
      title: "Atendimento humanizado",
      description: "Você é único e merece ser tratado como tal.",
    },
    {
      id: "welcoming-environment",
      icon: Leaf,
      title: "Ambiente acolhedor",
      description: "Um espaço pensado para seu conforto e tranquilidade.",
    },
    {
      id: "flexible-hours",
      icon: CalendarDays,
      title: "Horários flexíveis",
      description: "Agendamentos que se adaptam à sua rotina.",
    },
  ];

  return (
    <section className="bg-[#f9fafb] px-4 py-5 lg:px-36">
      <div className="mx-auto  rounded-[40px] bg-[#eef5fb] px-8 py-14 md:px-14">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_2fr]">
          <div className="flex flex-col justify-center">
            <span className="mb-4 text-sm font-semibold  tracking-[0.15em] text-[#7c96b2]">
              Por que escolher a gente?
            </span>

            <h2 className="max-w-md font-lora text-4xl font-semibold leading-tight text-[#1e2b50] ">
              Seu bem-estar é nossa prioridade
            </h2>

            <Button className="mt-8 font-normal flex h-12 w-fit items-center gap-3 rounded-full bg-white px-7 text-base  text-[#1e2b50] shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:cursor-pointer">
              Conheça a clínica
              <ArrowRight size={18} />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item, index) => (
              <WhyUsCard
                key={item.id}
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
