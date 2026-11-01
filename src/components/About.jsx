import { Compass, Leaf, Ruler } from 'lucide-react'
import content from '../data/content.json'

const icones = {
  compass: Compass,
  ruler: Ruler,
  leaf: Leaf,
}

export default function About() {
  const { sobre } = content

  return (
    <section id="sobre" className="border-y border-stone-200 bg-white px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.22em] text-sage uppercase">{sobre.selo}</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight font-medium text-slate-800 sm:text-5xl">
            {sobre.titulo}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">{sobre.texto}</p>
        </div>
        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {sobre.destaques.map((item) => {
            const Icone = icones[item.icone] ?? Leaf
            return (
              <li key={item.titulo}>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 text-sage">
                  <Icone aria-hidden="true" size={20} strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-medium text-slate-800">{item.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.descricao}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
