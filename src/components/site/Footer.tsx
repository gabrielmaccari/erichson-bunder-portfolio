import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-cream/90 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl text-cream">Erichson Bunder</h3>
          <p className="mt-3 text-sm text-cream/70 max-w-xs">
            Psicólogo, escritor, mentor, professor e perito. Escuta atenta, prática
            ética e cuidado humano.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-cream/60">Navegação</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold transition-colors">Início</Link></li>
            <li><Link to="/sobre" className="hover:text-gold transition-colors">Sobre</Link></li>
            <li><Link to="/atuacao" className="hover:text-gold transition-colors">Atuação</Link></li>
            <li><Link to="/escritor" className="hover:text-gold transition-colors">Escritor</Link></li>
            <li><Link to="/contato" className="hover:text-gold transition-colors">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-cream/60">Contato</h4>
          <p className="mt-4 text-sm text-cream/80">contato@erichsonbunder.com</p>
          <div className="mt-5 flex gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors"><Instagram size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gold transition-colors"><Linkedin size={18} /></a>
            <a href="mailto:contato@erichsonbunder.com" aria-label="Email" className="hover:text-gold transition-colors"><Mail size={18} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Erichson Bunder. Todos os direitos reservados.</p>
          <p className="font-display italic">Cuidar é também um ofício.</p>
        </div>
      </div>
    </footer>
  );
}
