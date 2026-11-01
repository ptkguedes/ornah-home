import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import content from '../data/content.json'
import CtaOrcamento from './CtaOrcamento'
import Logo from './Logo'

export default function Navbar() {
  const [aberto, setAberto] = useState(false)

  useEffect(() => {
    if (!aberto) return undefined

    function fecharNoEscape(evento) {
      if (evento.key === 'Escape') setAberto(false)
    }

    document.addEventListener('keydown', fecharNoEscape)
    return () => document.removeEventListener('keydown', fecharNoEscape)
  }, [aberto])

  function fechar() {
    setAberto(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-forest/10 bg-paper/95 backdrop-blur-md">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-forest focus:outline-none focus:ring-2 focus:ring-gold"
      >
        {content.atalho}
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a
          href="#inicio"
          aria-label={content.marca}
          className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          onClick={fechar}
        >
          <Logo />
        </a>
        <nav aria-label={content.rodape.nav_rotulo} className="hidden items-center gap-8 md:flex">
          {content.navegacao.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-sm text-sm text-forest/75 transition hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              {item.rotulo}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <CtaOrcamento />
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-forest transition hover:bg-forest/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold md:hidden"
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          onClick={() => setAberto((estaAberto) => !estaAberto)}
        >
          {aberto ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          <span className="sr-only">{aberto ? content.rodape.menu_fechar : content.rodape.menu_abrir}</span>
        </button>
      </div>
      {aberto ? (
        <nav id="menu-mobile" aria-label={content.rodape.nav_rotulo} className="border-t border-forest/10 px-5 py-4 md:hidden">
          <ul className="flex flex-col">
            {content.navegacao.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-sm px-2 py-3 text-base text-forest/80 transition hover:bg-forest/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  onClick={fechar}
                >
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
          <CtaOrcamento className="mt-3 w-full" />
        </nav>
      ) : null}
    </header>
  )
}
