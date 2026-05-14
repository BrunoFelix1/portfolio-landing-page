import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Building2,
  CalendarCheck,
  Leaf,
} from "lucide-react";
import { Button } from "./ui/button";
import leaf from "@/assets/Leaf.png";

const infoItems = [
  {
    id: "clinic-type",
    title: "Tipo de atendimento",
    value: "Clinica odontologica especializada",
    icon: Building2,
  },
  {
    id: "address",
    title: "Endereco",
    value: "Rua das Flores, 123 - Centro, Sao Paulo - SP",
    icon: MapPin,
  },
  {
    id: "email",
    title: "Email",
    value: "contato@sorrisocuidado.com",
    icon: Mail,
  },
  {
    id: "phone",
    title: "Telefone",
    value: "+55 (11) 99999-9999",
    icon: Phone,
  },
  {
    id: "hours",
    title: "Horario",
    value: "Seg a Sex, 08:00 - 19:00",
    icon: Clock,
  },
];

export default function ClinicInfo() {
  return (
    <section className="bg-[#f9fafb] px-4 py-10 lg:px-50">
      <img src={leaf} alt="Leaf" className="absolute left-0 opacity-50" />
      <div className="mx-auto">
        <div className="flex flex-col gap-10 border-b border-[#e4e7ec] pb-10">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold  tracking-[0.15em] text-[#7c96b2]">
              Nossas informações
            </span>
            <h2 className="max-w-2xl font-lora text-4xl font-semibold leading-tight text-[#1e2b50]">
              Entre em contato conosco
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button className="flex h-11 items-center gap-3 rounded-lg  bg-green text-white px-6 text-sm font-normal transition-all duration-300 hover:-translate-y-0.5 hover:cursor-pointer ">
              Enviar mensagem
              <Mail size={16} />
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {infoItems.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 rounded-2xl border border-[#e6e9ee] bg-white px-6 py-5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full  text-[#4e8c6c]">
                <item.icon size={20} strokeWidth={1.6} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7c96b2]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm font-medium text-[#1e2b50]">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
