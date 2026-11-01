import content from '../data/content.json'
import CtaOrcamento from './CtaOrcamento'

export default function Hero() {
  const { hero } = content

  return (
    <section id="inicio" className="px-5 pt-32 pb-16 sm:pt-36 md:pt-40 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-medium tracking-[0.22em] text-forest/70 uppercase">{hero.selo}</p>
          <span className="mt-4 block h-px w-12 bg-gold" aria-hidden="true" />
          <h1 className="mt-5 max-w-xl font-serif text-[2.65rem] leading-[1.05] font-medium text-forest sm:text-6xl">
            {hero.titulo}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-forest/75">{hero.subtitulo}</p>
          <div className="mt-8">
            <CtaOrcamento className="px-8 py-4 text-base" />
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-forest/60">{hero.apoio}</p>
        </div>
        <div>
          <img
            src={hero.url_da_imagem}
            alt={hero.alt_imagem}
            width={1200}
            height={1500}
            fetchPriority="high"
            className="aspect-[4/5] w-full rounded-sm object-cover ring-1 ring-forest/10 sm:aspect-[5/4] lg:aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  )
}
