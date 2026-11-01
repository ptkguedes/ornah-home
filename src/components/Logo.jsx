import content from '../data/content.json'

export default function Logo({ claro = false }) {
  const { logo } = content
  const indice = logo.palavra.lastIndexOf('A')
  const antes = logo.palavra.slice(0, indice)
  const letra = logo.palavra.slice(indice, indice + 1)
  const depois = logo.palavra.slice(indice + 1)
  const nome = claro ? 'text-paper' : 'text-forest'
  const apoio = claro ? 'text-paper/80' : 'text-forest/75'

  return (
    <span className="inline-flex flex-col items-center">
      <span className={`font-serif text-[1.65rem] leading-none font-semibold tracking-[0.08em] sm:text-[1.85rem] ${nome}`}>
        {antes}
        <span className="relative inline-block">
          {letra}
          <svg
            viewBox="0 0 24 46"
            aria-hidden="true"
            className="pointer-events-none absolute -top-[0.02em] left-[34%] h-[1.18em] w-[0.9em]"
          >
            <path
              d="M6 3C15 8 18.5 18 12.5 34c-1.1 3-4 3.6-5 1.2"
              fill="none"
              stroke="#bf9004"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        </span>
        {depois}
      </span>
      <span className={`mt-1 text-[0.5rem] font-medium tracking-[0.28em] uppercase sm:text-[0.56rem] ${apoio}`}>
        {logo.tagline}
      </span>
    </span>
  )
}
