import Logo from "../assets/Logo.png";

export function Footer() {
  return (
    <footer className=" bg-offwhite/90 px-46 ">
      <div className="mx-auto flex  flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-16" />
        </div>

        <p className="text-xs text-[#64748b]">
          Sorriso&Cuidado® {new Date().getFullYear()} Todos os direitos
          reservados.
        </p>

        <p className="text-xs text-[#64748b]">
          Desenvolvido por{" "}
          <span className="font-medium text-[#1e2b50]">@BrunoFelix</span>
        </p>
      </div>
    </footer>
  );
}
