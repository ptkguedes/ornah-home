export default function SectionHeader({ selo, titulo, introducao }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-medium tracking-[0.22em] text-forest/70 uppercase">{selo}</p>
      <h2 className="mt-3 font-serif text-4xl leading-tight font-medium text-forest sm:text-5xl">{titulo}</h2>
      <span className="mt-4 block h-px w-12 bg-gold" aria-hidden="true" />
      <p className="mt-4 text-base leading-relaxed text-forest/75 sm:text-lg">{introducao}</p>
    </div>
  )
}
