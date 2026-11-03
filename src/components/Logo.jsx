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
            viewBox="0 0 100 100"
            aria-hidden="true"
            className="pointer-events-none absolute top-[-2.4%] left-[-19.5%] h-[74%] w-[122%] overflow-visible"
          >
            <path
              d="M1.5 0.5C14 22 40 38 66 52C86 63 101 74 99 85C97 95 84 103 72 97"
              fill="none"
              stroke="#BF9004"
              strokeWidth="4"
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
