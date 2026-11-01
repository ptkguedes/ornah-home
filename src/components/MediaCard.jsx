export default function MediaCard({ imagem, titulo, descricao }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition hover:shadow-md">
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
        <h3 className="font-serif text-[1.65rem] leading-tight font-medium text-slate-800">{titulo}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{descricao}</p>
      </div>
    </article>
  )
}
