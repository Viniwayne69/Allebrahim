# Site profissional Allê Ebrahim

Site em Next.js, React, TypeScript e Tailwind CSS para a consultora Allê Ebrahim, com layout responsivo inspirado nas referências desktop e mobile enviadas.

## Como rodar

```bash
npm run dev
```

Abra `http://localhost:3000`.

## Scripts

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## Estrutura

Os textos editáveis ficam em `src/content`.

As seções da página ficam em `src/components/sections`.

Os componentes de layout ficam em `src/components/layout`.

Formulário, sanfona, carrossel e botões ficam em `src/components/ui`.

As imagens finais ficam em `public/images`.

## Como trocar textos e números

Edite os arquivos em `src/content`, principalmente:

`site.ts`, marca, contatos, números, turma e opções do formulário

`copy.ts`, textos das seções

`testimonials.ts`, depoimentos

`faq.ts`, perguntas e respostas

`logos.ts`, blocos de logos autorizados

Os conteúdos demonstrativos estão marcados com `// EXEMPLO`.

## Como trocar imagens

Substitua os arquivos em `public/images` mantendo o mesmo nome, por exemplo `hero-alle-v2.webp`, `consultoria-reuniao.webp` ou `galeria-1.webp`.

O código já usa `next/image` com dimensões reservadas.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=
LEAD_WEBHOOK_URL=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_META_PIXEL_ID=
```

Sem `LEAD_WEBHOOK_URL`, a API registra o lead no console e responde sucesso, útil para desenvolvimento.

## Publicação na Vercel

Conecte o repositório na Vercel, configure as variáveis de ambiente e publique com o comando padrão de build:

```bash
npm run build
```

As rotas principais são `/`, `/captura`, `/api/lead`, `/robots.txt` e `/sitemap.xml`.
