import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import content from '../data/content.json'
import CtaOrcamento from './CtaOrcamento'

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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-slate-800 focus:shadow focus:outline-none focus:ring-2 focus:ring-sage"
      >
        {content.atalho}
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a
          href="#inicio"
          className="font-serif text-[1.65rem] leading-none tracking-tight text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2"
          onClick={fechar}
        >
          {content.marca}
        </a>
        <nav aria-label={content.rodape.nav_rotulo} className="hidden items-center gap-8 md:flex">
          {content.navegacao.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-sm text-sm text-slate-600 transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2"
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-800 transition hover:bg-stone-200/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage md:hidden"
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          onClick={() => setAberto((estaAberto) => !estaAberto)}
        >
          {aberto ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          <span className="sr-only">{aberto ? content.rodape.menu_fechar : content.rodape.menu_abrir}</span>
        </button>
      </div>
      {aberto ? (
        <nav id="menu-mobile" aria-label={content.rodape.nav_rotulo} className="border-t border-stone-200 px-5 py-4 md:hidden">
          <ul className="flex flex-col">
            {content.navegacao.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-lg px-2 py-3 text-base text-slate-700 transition hover:bg-stone-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
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
