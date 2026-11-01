export default function SectionHeader({ selo, titulo, introducao }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-medium tracking-[0.22em] text-sage uppercase">{selo}</p>
      <h2 className="mt-3 font-serif text-4xl leading-tight font-medium text-slate-800 sm:text-5xl">{titulo}</h2>
      <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{introducao}</p>
    </div>
  )
}
