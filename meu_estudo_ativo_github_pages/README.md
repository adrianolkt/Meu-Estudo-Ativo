# Meu Estudo Ativo — Publicar no GitHub Pages e gerar o APK

Este pacote já está pronto pra ser hospedado no GitHub Pages como uma PWA
(Progressive Web App) instalável, com tudo que o **PWA Builder** precisa pra
gerar um APK: `manifest.json`, ícones e Service Worker.

## Passo 1 — Criar o repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login (crie uma conta grátis se não tiver).
2. Clique em **New repository** (botão verde, canto superior direito).
3. Dê um nome, por exemplo `meu-estudo-ativo`.
4. Marque como **Public** (obrigatório pro GitHub Pages grátis funcionar).
5. Clique em **Create repository**.

## Passo 2 — Enviar os arquivos

**Opção mais simples (sem instalar nada):**
1. Na página do repositório recém-criado, clique em **uploading an existing file** (ou "Add file" → "Upload files").
2. Arraste **todos os arquivos e pastas** deste pacote (`index.html`, `manifest.json`, `sw.js`, `disciplinas.js`, a pasta `icons/` e as pastas de cada disciplina) mantendo a mesma estrutura de pastas.
3. Role pra baixo e clique em **Commit changes**.

**Opção via linha de comando** (se preferir):
```bash
git init
git add .
git commit -m "Primeira versão do app"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/meu-estudo-ativo.git
git push -u origin main
```

## Passo 3 — Ativar o GitHub Pages

1. No repositório, vá em **Settings** (aba no topo).
2. No menu lateral, clique em **Pages**.
3. Em "Build and deployment" → **Source**, selecione **Deploy from a branch**.
4. Em **Branch**, selecione `main` e a pasta `/ (root)`. Clique em **Save**.
5. Aguarde 1-2 minutos. Sua URL vai aparecer no topo dessa mesma página, algo como:
   ```
   https://SEU_USUARIO.github.io/meu-estudo-ativo/
   ```
6. Abra esse link no navegador pra confirmar que o app carrega normalmente.

## Passo 4 — Gerar o APK com o PWA Builder

1. Acesse [pwabuilder.com](https://www.pwabuilder.com).
2. Cole a URL do GitHub Pages (do passo anterior) na caixa de busca e clique em **Start**.
3. O PWA Builder vai analisar o site e mostrar uma pontuação (manifest, ícones e service worker já estão prontos, então deve pontuar bem).
4. Clique em **Package for stores** (ou "Build My PWA").
5. Escolha **Android**.
6. Configure o **Package ID** (ex: `com.seunome.estudoativo`) e o nome do app.
7. Clique em **Generate** — ele vai gerar e baixar um `.zip` contendo o **APK assinado**, pronto pra instalar no celular.

## Passo 5 — Instalar no celular

1. Transfira o `.apk` gerado pro celular (Google Drive, cabo USB, etc).
2. Abra o arquivo no celular — talvez seja preciso permitir "instalar de fontes desconhecidas" nas configurações do Android na primeira vez.
3. Pronto — o app fica instalado como qualquer outro, com ícone próprio e funcionando offline (graças ao Service Worker).

---

## Atualizando o conteúdo depois

Sempre que você editar os arquivos de disciplina/assunto (`.js`) ou o `index.html`:
1. Suba os arquivos atualizados de novo pro GitHub (upload manual ou `git push`).
2. O GitHub Pages atualiza automaticamente em 1-2 minutos.
3. **Não precisa gerar um novo APK** — como o app já está instalado como PWA, ele busca a versão mais nova da internet sozinho (o Service Worker está configurado pra sempre tentar a rede primeiro).

## Arquivos deste pacote

```
index.html                 → o app
manifest.json               → configuração da PWA (nome, ícone, cores)
sw.js                       → Service Worker (cache offline)
disciplinas.js               → catálogo de disciplinas/assuntos
_modelo_assunto.js          → modelo pra criar novos assuntos
icons/                      → ícones do app (192px, 512px, 512px maskable)
ti_arquitetura/             → arquivos de assunto de TI
portugues/                  → arquivos de assunto de Português
dir_constitucional/         → arquivos de assunto de Direito Constitucional
dir_administrativo/         → arquivos de assunto de Direito Administrativo
```
