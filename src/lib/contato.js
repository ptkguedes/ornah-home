export function apenasDigitos(texto) {
  return String(texto).replace(/\D/g, '')
}

export function formatarTelefone(telefone) {
  const digitos = apenasDigitos(telefone)
  if (digitos.length === 13) {
    return `+${digitos.slice(0, 2)} (${digitos.slice(2, 4)}) ${digitos.slice(4, 9)}-${digitos.slice(9)}`
  }
  return String(telefone)
}

export function linkTelefone(telefone) {
  return `tel:+${apenasDigitos(telefone)}`
}

export function linkWhatsapp(telefone, mensagem) {
  const digitos = apenasDigitos(telefone)
  const texto = encodeURIComponent(mensagem)
  return `https://wa.me/${digitos}?text=${texto}`
}

export function usuarioInstagram(instagram) {
  return String(instagram).replace(/^@/, '')
}

export function linkInstagram(instagram) {
  return `https://instagram.com/${usuarioInstagram(instagram)}`
}
