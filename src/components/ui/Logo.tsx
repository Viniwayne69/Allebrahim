import { brand } from "@/content/site";

/**
 * Logo oficial da Allê (SVG). Todo o site (cabeçalho, menu, rodapé, páginas internas) usa este componente.
 * O tamanho acompanha o corpo do texto: ajuste com classes como "text-2xl".
 * `tone="light"` é a versão para fundo escuro; o padrão serve para fundo claro.
 */
export function Logo({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const src = tone === "light" ? "/brand/logo-alle-reduzida-claro.svg" : "/brand/logo-alle-reduzida.svg";
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={brand.name} width={140} height={77} className={`inline-block h-[2.3em] w-auto ${className}`} />;
}
