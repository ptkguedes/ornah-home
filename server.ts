import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, sep } from "node:path";
import { fileURLToPath } from "node:url";

const dist = fileURLToPath(new URL("./dist", import.meta.url));
const indice = join(dist, "index.html");
const porta = 8080;
const host = "0.0.0.0";

const tipos: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".map": "application/json; charset=utf-8",
};

function resolver(url: string | undefined): string | null {
  const bruto = (url ?? "/").split("?")[0] ?? "/";
  let decodificado: string;
  try {
    decodificado = decodeURIComponent(bruto);
  } catch {
    return null;
  }
  const relativo = decodificado.replace(/^[/\\]+/, "");
  const absoluto = normalize(join(dist, relativo));
  if (absoluto !== dist && !absoluto.startsWith(`${dist}${sep}`)) return null;
  return absoluto;
}

function escolher(absoluto: string | null): string | null {
  if (!absoluto) return null;
  if (existsSync(absoluto)) {
    const info = statSync(absoluto);
    if (info.isFile()) return absoluto;
    if (info.isDirectory()) {
      const interno = join(absoluto, "index.html");
      if (existsSync(interno) && statSync(interno).isFile()) return interno;
    }
  }
  if (extname(absoluto)) return null;
  return existsSync(indice) ? indice : null;
}

const servidor = createServer((pedido, resposta) => {
  if (pedido.method !== "GET" && pedido.method !== "HEAD") {
    resposta.writeHead(405, { Allow: "GET, HEAD" });
    resposta.end();
    return;
  }

  if (!existsSync(indice)) {
    resposta.writeHead(503, { "Content-Type": "text/plain; charset=utf-8" });
    resposta.end("Build ausente. O comando npm run build precisa gerar a pasta dist.");
    return;
  }

  const arquivo = escolher(resolver(pedido.url));
  if (!arquivo) {
    resposta.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    resposta.end("Não encontrado");
    return;
  }

  const tipo = tipos[extname(arquivo)] ?? "application/octet-stream";
  resposta.writeHead(200, { "Content-Type": tipo });
  if (pedido.method === "HEAD") {
    resposta.end();
    return;
  }
  createReadStream(arquivo).pipe(resposta);
});

servidor.listen(porta, host, () => {
  console.log(`Ornah Home ouvindo em http://${host}:${porta}`);
});
