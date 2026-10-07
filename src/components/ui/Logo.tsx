import { brand } from "@/content/site";

/**
 * Marca da Allê.
 * Quando o logo oficial (SVG) chegar, troque o conteúdo abaixo por ele:
 * todo o site (cabeçalho, menu, rodapé, páginas internas) usa este componente.
 */
export function Logo({ className = "" }: { className?: string }) {
  return <span className={`brand-logo whitespace-nowrap ${className}`}>{brand.name}</span>;
}
