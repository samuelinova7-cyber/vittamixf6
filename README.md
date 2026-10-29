# 🌿 Vitta Mix — Cardápio Digital Multilíngue

Cardápio oficial digital e multilíngue da Vitta Mix (Português, Inglês, Espanhol, Francês e Japonês) com seleção de sucos especiais, açaí funcional, polpas tropicais, lanches, carrinho com envio via WhatsApp e integração iFood / Google Avaliações.

---

## 🚀 Como fazer Deploy na Vercel

O projeto já está 100% configurado para a Vercel com Vite, TypeScript e Tailwind CSS v4.

### Opção 1: Pelo painel web da Vercel (Recomendado)

1. Envie o código para o seu repositório no **GitHub**, **GitLab** ou **Bitbucket**.
2. Acesse [vercel.com](https://vercel.com) e clique em **Add New... > Project**.
3. Importe o repositório do projeto.
4. As configurações são detectadas automaticamente:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. (Opcional) Em **Environment Variables**, adicione se for usar recursos do Gemini:
   - `GEMINI_API_KEY`: sua chave de API Gemini (caso use recursos adicionais de IA)
6. Clique em **Deploy**.

---

### Opção 2: Pela linha de comando (Vercel CLI)

1. Instale a Vercel CLI globalmente se ainda não tiver:
   ```bash
   npm install -g vercel
   ```

2. Na raiz do projeto, execute:
   ```bash
   vercel
   ```

3. Para deploy em produção:
   ```bash
   vercel --prod
   ```

---

## 🛠️ Scripts Disponíveis

- `npm run dev`: Inicia o servidor local de desenvolvimento na porta 3000.
- `npm run build`: Gera o bundle de produção otimizado na pasta `dist/`.
- `npm run preview`: Visualiza o build de produção localmente.
- `npm run lint`: Checagem de tipagem com TypeScript (`tsc --noEmit`).
