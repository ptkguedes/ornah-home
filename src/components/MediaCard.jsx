export default function MediaCard({ imagem, titulo, descricao }) {
  return (
    <article className="group overflow-hidden rounded-sm border border-forest/10 bg-white transition hover:border-forest/25">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imagem}
          alt={titulo}
          width={1200}
          height={900}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-[1.65rem] leading-tight font-medium text-forest">{titulo}</h3>
        <p className="mt-3 text-sm leading-relaxed text-forest/75">{descricao}</p>
      </div>
    </article>
  )
}
