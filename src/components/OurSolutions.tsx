import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Smile,
  Baby,
  ScanHeart,
} from "lucide-react";
import Leaf from "../assets/Leaf.png";

const solutions = [
  {
    title: "Clínica Geral",
    description:
      "Cuidados essenciais para manter sua saúde bucal sempre em dia.",
    icon: <Stethoscope className="h-8 w-8" aria-hidden="true" />,
    iconBg: "bg-[#6d947b]/20 text-green",
  },
  {
    title: "Estética Dental",
    description:
      "Transforme seu sorriso com facetas, clareamento e muito mais.",
    icon: <Sparkles className="h-8 w-8" aria-hidden="true" />,
    iconBg: "bg-[#d8eafd] text-light-blue",
  },
  {
    title: "Implantes",
    description:
      "Recupere a função e autoestima com implantes dentários de alta qualidade.",
    icon: <ScanHeart className="h-8 w-8" aria-hidden="true" />,
    iconBg: "bg-[#6d947b]/20 text-green",
  },
  {
    title: "Ortodontia",
    description: "Alinhe seu sorriso com opções modernas e discretas.",
    icon: <Smile className="h-8 w-8" aria-hidden="true" />,
    iconBg: "bg-[#d8eafd] text-light-blue",
  },
  {
    title: "Odontopediatria",
    description: "Cuidado especial para os pequenos sorrisos da família.",
    icon: <Baby className="h-8 w-8" aria-hidden="true" />,
    iconBg: "bg-[#6d947b]/20 text-green",
  },
  {
    title: "Prevenção",
    description: "A prevenção é o melhor caminho para um sorriso saudável.",
    icon: <ShieldCheck className="h-8 w-8" aria-hidden="true" />,
    iconBg: "bg-[#d8eafd] text-light-blue",
  },
];

function SolutionsCard({
  title,
  description,
  icon,
  iconBg,
}: Readonly<{
  title: string;
  description: string;
  icon: JSX.Element;
  iconBg: string;
}>) {
  return (
    <article className="group flex items-start gap-5 rounded-[32px] border border-slate-200 bg-white p-6 transition-shadow duration-300 hover:shadow-sm rounded-t-2xl ">
      <div className="min-w-0">
        <h3 className="text-lg font-semibold text-dark-blue">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
        <button
          type="button"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-light-blue transition-colors duration-200 hover:text-light-blue/80 hover:cursor-pointer"
        >
          Saiba mais
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

function OurSolutions() {
  return (
    <section className="relative z-20 -mt-14 overflow-hidden rounded-t-[3.5rem] bg-[#f9fafb] py-20 px-30 shadow-[0_-50px_60px_-40px_rgba(15,23,42,0.15)]">
      <img
        src={Leaf}
        alt="minor leaf on section"
        className="absolute top-20 left-0 opacity-50"
      />
      <div className="mx-auto px-6 ">
        <div className="grid gap-8 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,0.5fr)] sm:items-end sm:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-light-blue">
              Nossos tratamentos
            </p>
            <h2 className="mt-3 text-3xl font-semibold font-lora leading-tight text-dark-blue sm:text-4xl max-w-100">
              Soluções completas para o seu sorriso
            </h2>
            <div className="mt-4 h-0.5 w-24 rounded-full bg-green" />
          </div>
          <div className="flex items-end text-gray-600 mb-6 ">
            <p className="text-base leading-7">
              Oferecemos uma linha completa de tratamentos odontológicos com
              tecnologia de ponta e um olhar humanizado para o seu bem-estar.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution) => (
            <SolutionsCard key={solution.title} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurSolutions;
