import content from '../data/content.json'
import SectionHeader from './SectionHeader'

export default function Products() {
  const secao = content.produtos_secao

  return (
    <section id="produtos" className="border-t border-forest/10 bg-white px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader selo={secao.selo} titulo={secao.titulo} introducao={secao.introducao} />
        <div className="mt-12 flex flex-col gap-14 md:mt-16 md:gap-20">
          {content.produtos.map((produto) => (
            <article key={produto.nome} className="grid items-center gap-6 md:grid-cols-2 md:gap-16">
              <div className="min-w-0">
                <h3 className="font-serif text-3xl leading-tight font-medium text-forest sm:text-4xl">{produto.nome}</h3>
                <span className="mt-4 block h-px w-12 bg-gold" aria-hidden="true" />
                <p className="mt-4 max-w-md text-base leading-relaxed text-forest/75">{produto.descricao}</p>
              </div>
              <div className="min-w-0 overflow-hidden rounded-sm">
                <img
                  src={produto.url_da_imagem}
                  alt={produto.nome}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
