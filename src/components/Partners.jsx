import content from '../data/content.json'

export default function Partners() {
  const secao = content.parcerias_secao

  return (
    <section id="parcerias" className="border-t border-forest/10 px-5 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl leading-tight font-medium text-forest sm:text-4xl">{secao.titulo}</h2>
        <span className="mt-4 block h-px w-12 bg-gold" aria-hidden="true" />
        <ul className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
          {content.parcerias.map((parceira) => (
            <li key={parceira.nome}>
              <div className="flex h-[5.5rem] w-[5.5rem] items-center justify-center overflow-hidden rounded-sm border border-forest/10 bg-white">
                <img
                  src={parceira.url_da_imagem}
                  alt={parceira.nome}
                  width={88}
                  height={88}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
