import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const teamMembers = [
  {
    id: 1,
    name: "Dra. Beatriz Oliveira",
    specialty: "Clínica Geral",
    cro: "CRO 12874",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Dr. Henrique Martins",
    specialty: "Implantodontia",
    cro: "CRO 21458",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Dra. Larissa Gomes",
    specialty: "Ortodontia",
    cro: "CRO 34791",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop",
  },
];

type TeamCardProps = {
  image: string;
  name: string;
  specialty: string;
  cro: string;
};

function TeamCard({ image, name, specialty, cro }: Readonly<TeamCardProps>) {
  return (
    <div className="group transition-all duration-300 hover:-translate-y-1">
      <div className="overflow-hidden rounded-[26px] shadow-none">
        <div className="overflow-hidden">
          <img
            src={image}
            alt={name}
            className="aspect-10/10 w-full object-cover transition-transform duration-500 "
          />
        </div>

        <div className="relative bg-white pt-0">
          <div className="absolute inset-x-0 -top-6 h-12 rounded-t-xl shadow-t-none bg-white" />

          <div className="relative z-10 px-4 pb-4 text-center">
            <h3 className="font-lora text-[20px] font-semibold text-[#1e2b50]">
              {name}
            </h3>

            <p className="mt-2 text-[15px] text-[#6c7a89]">{specialty}</p>

            <span className="mt-1 block text-sm text-[#9aa5b1]">{cro}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OurTeam() {
  return (
    <section className="bg-[#f9fafb] px-4 py-10 lg:px-46">
      <div className="mx-auto  rounded-[40px] bg-[#eef5fb] px-8 py-14 md:px-14">
        <div className="grid gap-14 lg:grid-cols-[320px_1fr]">
          <div>
            <span className="text-sm font-semibold  tracking-[0.15em] text-[#7c96b2]">
              Nossa equipe
            </span>

            <h2 className="mt-4 font-lora text-4xl font-semibold leading-tight text-[#1e2b50]">
              Profissionais que cuidam de você
            </h2>
            <h3 className="mt-4  text-xl font-normal leading-tight text-[#1e2b50]/40">
              Uma equipe dedicada, bem formada e comprometida com o seu
              bem-estar.
            </h3>
            <Button className="mt-8 flex h-12 w-fit items-center gap-3 rounded-full bg-white px-7 text-base font-normal text-[#1e2b50]  transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:cursor-pointer">
              Conheça toda a equipe
              <ArrowRight size={18} />
            </Button>
          </div>

          <div>
            <div className="mb-8 flex justify-end"></div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {teamMembers.map((member) => (
                <TeamCard
                  key={member.id}
                  image={member.image}
                  name={member.name}
                  specialty={member.specialty}
                  cro={member.cro}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
