import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "./ui/button";
import RightLeaf from "../assets/RightLeaf.png";

const testimonials = [
  {
    id: 1,
    name: "Juliana Martins",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
    text: `"Atendimento incrível! Me senti acolhida desde o primeiro dia e o resultado do meu tratamento superou minhas expectativas."`,
  },
  {
    id: 2,
    name: "Carlos Eduardo",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    text: `"Profissionais excelentes e um ambiente que transmite muita tranquilidade. Recomendo de olhos fechados!"`,
  },
  {
    id: 3,
    name: "Fernanda Silva",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop",
    text: `"Minha filha ama as consultas! O cuidado e paciência da equipe fazem toda a diferença."`,
  },
  {
    id: 4,
    name: "Mariana Costa",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
    text: `"Clínica impecável, moderna e extremamente acolhedora. Voltarei com certeza!"`,
  },
  {
    id: 5,
    name: "Ricardo Alves",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop",
    text: `"Equipe extremamente atenciosa e profissional. O atendimento foi impecável do início ao fim."`,
  },
  {
    id: 6,
    name: "Patrícia Lima",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=300&auto=format&fit=crop",
    text: `"A clínica transmite muita confiança e conforto. Me senti segura durante todo o tratamento."`,
  },
];

export function Testimonials() {
  const [page, setPage] = useState(0);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const start = page * itemsPerPage;

  const visibleTestimonials = testimonials.slice(start, start + itemsPerPage);

  return (
    <section className="bg-[#f9fafb] px-4 py-18 lg:px-42">
      <img
        src={RightLeaf}
        alt="Leaf"
        className="absolute right-0 h-100 opacity-50"
      />
      <div className="mx-auto ">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#7c96b2]">
            Depoimentos
          </span>

          <h2 className="mt-3 font-lora text-4xl font-semibold text-[#1e2b50] ">
            O que nossos pacientes dizem
          </h2>

          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#7db89d]" />
        </div>

        <div className="relative">
          <Button
            onClick={prevSlide}
            size="icon"
            className="absolute hover:cursor-pointer hover:bg-transparent  hover:text-green hover:border-green transition-all duration-400  -left-20 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 rounded-full bg-white text-[#1e2b50] shadow-md lg:flex"
          >
            <ChevronLeft size={22} />
          </Button>

          <Button
            onClick={nextSlide}
            size="icon"
            className="absolute hover:cursor-pointer hover:bg-transparent  hover:text-green hover:border-green transition-all duration-400 -right-20 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 rounded-full bg-white text-[#1e2b50] shadow-md lg:flex"
          >
            <ChevronRight size={22} />
          </Button>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{
                  duration: 0.45,
                  ease: "easeInOut",
                }}
                className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
              >
                {visibleTestimonials.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-[28px] border border-[#edf0f3] bg-white p-8 shadow-none border-none transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="mb-6 flex items-start gap-5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="aspect-square h-16 min-h-16 min-w-16 rounded-full object-cover"
                      />

                      <p className="text-[17px] leading-8 text-[#5c6470]">
                        {item.text}
                      </p>
                    </div>

                    <div className="pl-21">
                      <h3 className="font-semibold text-[#4e8c6c]">
                        {item.name}
                      </h3>

                      <div className="mt-3 flex gap-1 text-[#4e8c6c]">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={14}
                            fill="currentColor"
                            strokeWidth={1.5}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {Array.from(
            { length: totalPages },
            (_, pageNumber) => pageNumber,
          ).map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
              className={`h-3 rounded-full transition-all duration-300 ${
                page === pageNumber ? "w-8 bg-[#7db89d]" : "w-3 bg-[#d7dce2]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
