import content from '../data/content.json'
import MediaCard from './MediaCard'
import SectionHeader from './SectionHeader'

export default function Services() {
  const secao = content.servicos_secao

  return (
    <section id="servicos" className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader selo={secao.selo} titulo={secao.titulo} introducao={secao.introducao} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {content.servicos.map((servico) => (
            <MediaCard
              key={servico.titulo}
              imagem={servico.url_da_imagem}
              titulo={servico.titulo}
              descricao={servico.descricao}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
