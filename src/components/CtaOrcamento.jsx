import content from '../data/content.json'
import { linkWhatsapp } from '../lib/contato'

export default function CtaOrcamento({ inverso = false, className = '' }) {
  const href = linkWhatsapp(content.contato.telefone, content.hero.mensagem_whatsapp)
  const tom = inverso
    ? 'bg-paper text-forest hover:bg-white focus-visible:ring-gold focus-visible:ring-offset-forest'
    : 'bg-forest text-paper hover:bg-forest-dark focus-visible:ring-gold focus-visible:ring-offset-paper'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${content.hero.cta}. ${content.hero.cta_aviso}`}
      className={`inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${tom} ${className}`}
    >
      {content.hero.cta}
    </a>
  )
}
