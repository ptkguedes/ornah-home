import content from '../data/content.json'
import CtaOrcamento from './CtaOrcamento'

export default function Hero() {
  const { hero } = content

  return (
    <section id="inicio" className="px-5 pt-28 pb-16 sm:pt-32 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-medium tracking-[0.22em] text-sage uppercase">{hero.selo}</p>
          <h1 className="mt-4 max-w-xl font-serif text-[2.65rem] leading-[1.05] font-medium text-slate-800 sm:text-6xl">
            {hero.titulo}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed font-light text-slate-600">{hero.subtitulo}</p>
          <div className="mt-8">
            <CtaOrcamento className="px-8 py-4 text-base" />
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500">{hero.apoio}</p>
        </div>
        <div>
          <img
            src={hero.url_da_imagem}
            alt={hero.alt_imagem}
            width={1200}
            height={1500}
            fetchPriority="high"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-sm ring-1 ring-stone-200 sm:aspect-[5/4] lg:aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  )
}
