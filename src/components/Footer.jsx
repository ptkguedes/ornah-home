import { AtSign, Mail, Phone } from 'lucide-react'
import content from '../data/content.json'
import { formatarTelefone, linkInstagram, linkTelefone, usuarioInstagram } from '../lib/contato'
import CtaOrcamento from './CtaOrcamento'

export default function Footer() {
  const { contato, rodape, marca } = content
  const instagram = usuarioInstagram(contato.instagram)

  const itens = [
    {
      rotulo: rodape.rotulo_telefone,
      href: linkTelefone(contato.telefone),
      texto: formatarTelefone(contato.telefone),
      icone: Phone,
      externo: false,
    },
    {
      rotulo: rodape.rotulo_email,
      href: `mailto:${contato.email}`,
      texto: contato.email,
      icone: Mail,
      externo: false,
    },
    {
      rotulo: rodape.rotulo_instagram,
      href: linkInstagram(contato.instagram),
      texto: `@${instagram}`,
      icone: AtSign,
      externo: true,
    },
  ]

  return (
    <footer id="contato" className="bg-slate-800 px-5 py-16 text-stone-100">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_1fr] md:items-start">
        <div>
          <p className="font-serif text-4xl font-medium text-white">{marca}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-300">{rodape.texto}</p>
          <div className="mt-8">
            <CtaOrcamento className="focus-visible:ring-offset-slate-800" />
          </div>
        </div>
        <ul className="flex flex-col gap-5">
          {itens.map((item) => {
            const Icone = item.icone
            return (
              <li key={item.rotulo}>
                <a
                  href={item.href}
                  {...(item.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-start gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800"
                >
                  <Icone aria-hidden="true" size={18} strokeWidth={1.5} className="mt-0.5 text-sand" />
                  <span>
                    <span className="block text-xs tracking-[0.16em] text-stone-400 uppercase">{item.rotulo}</span>
                    <span className="mt-1 block text-base text-white transition group-hover:text-sand">{item.texto}</span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="mx-auto mt-14 max-w-6xl border-t border-white/10 pt-6 text-sm text-stone-400">
        {rodape.direitos}
      </div>
    </footer>
  )
}
