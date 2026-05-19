import { Mail, Phone, User, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import leaf from "@/assets/Leaf.png";

export default function ClinicContactForm() {
  return (
    <section className="relative overflow-hidden bg-[#f8faf8]  py-16 lg:px-50">
      {/* Decorative Leaf */}
      <img
        src={leaf}
        alt="Leaf"
        className="absolute left-0 top-10 w-40 opacity-10"
      />

      <div className="mx-auto grid  gap-10 lg:grid-cols-2">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <span className="text-sm font-semibold tracking-[0.18em] text-[#7c96b2] uppercase">
            Entre em contato
          </span>

          <h2 className="mt-4 max-w-md font-lora text-4xl font-semibold leading-tight text-[#1e2b50]">
            Cuidamos do seu sorriso com atenção e carinho
          </h2>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-[#667085]">
            Preencha o formulário e nossa equipe entrará em contato para tirar
            dúvidas, agendar consultas ou orientar você da melhor forma.
          </p>

          <div className="mt-10 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eef5f0] text-[#4e8c6c]">
                <Phone size={18} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-[#7c96b2]">
                  Telefone
                </p>
                <p className="text-sm font-medium text-[#1e2b50]">
                  +55 (11) 99999-9999
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eef5f0] text-[#4e8c6c]">
                <Mail size={18} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-[#7c96b2]">
                  Email
                </p>
                <p className="text-sm font-medium text-[#1e2b50]">
                  contato@sorrisocuidado.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="rounded-[32px] border-none bg-white/90 p-8  backdrop-blur">
          <form className="flex flex-col gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <span className="text-sm font-medium text-[#344054]">Nome</span>

                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98a2b3]"
                  />

                  <Input
                    placeholder="Seu nome"
                    className="h-12 rounded-lg border-[#e4e7ec] bg-[#fcfcfc] pl-11 focus-visible:ring-[#4e8c6c]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-sm font-medium text-[#344054]">
                  Telefone
                </span>

                <div className="relative">
                  <Phone
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98a2b3]"
                  />

                  <Input
                    placeholder="(11) 99999-9999"
                    className="h-12 rounded-lg border-[#e4e7ec] bg-[#fcfcfc] pl-11 focus-visible:ring-[#4e8c6c]"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-sm font-medium text-[#344054]">Email</span>

              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98a2b3]"
                />

                <Input
                  type="email"
                  placeholder="voce@email.com"
                  className="h-12 rounded-lg border-[#e4e7ec] bg-[#fcfcfc] pl-11 focus-visible:ring-[#4e8c6c]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-sm font-medium text-[#344054]">
                Mensagem
              </span>

              <div className="relative">
                <MessageSquare
                  size={16}
                  className="absolute left-4 top-4 text-[#98a2b3]"
                />

                <Textarea
                  placeholder="Como podemos ajudar você?"
                  className="min-h-35 rounded-lg border-[#e4e7ec] bg-[#fcfcfc] pl-11 pt-3 focus-visible:ring-[#4e8c6c]"
                />
              </div>
            </div>

            <Button className="mt-2 h-12 rounded-lg bg-[#4e8c6c] text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3f7459]">
              Enviar mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
