import content from '../data/content.json'
import MediaCard from './MediaCard'
import SectionHeader from './SectionHeader'

export default function Products() {
  const secao = content.produtos_secao

  return (
    <section id="produtos" className="border-t border-forest/10 bg-white px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader selo={secao.selo} titulo={secao.titulo} introducao={secao.introducao} />
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {content.produtos.map((produto) => (
            <div key={produto.nome} className="min-w-0">
              <MediaCard imagem={produto.url_da_imagem} titulo={produto.nome} descricao={produto.descricao} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
