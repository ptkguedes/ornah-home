import content from '../data/content.json'
import { linkWhatsapp } from '../lib/contato'

export default function CtaOrcamento({ className = '' }) {
  const href = linkWhatsapp(content.contato.telefone, content.hero.mensagem_whatsapp)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${content.hero.cta}. ${content.hero.cta_aviso}`}
      className={`inline-flex items-center justify-center rounded-full bg-sage px-6 py-3 text-sm font-medium text-white transition hover:bg-sage-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 ${className}`}
    >
      {content.hero.cta}
    </a>
  )
}
