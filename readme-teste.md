# 🌸 Liga Feminina de TI

A **Liga Feminina de TI** é um projeto da Universidade de Vila Velha que visa promover diversidade, inclusão e inovação no setor de tecnologia. Este site foi desenvolvido para o **1º Hackaton da Liga**.

---

## 📌 Visão Geral

O projeto é composto por diversas páginas HTML (como *A Liga*, *Integrantes* e *Mais*), que são carregadas dinamicamente via `fetch` com o auxílio de módulos JavaScript. A interface do site oferece:

- 🚀 **Navegação dinâmica:** O conteúdo é carregado conforme o usuário interage com o menu.
- 🖼️ **Galeria de imagens:** Fotos exibidas a partir de um arquivo JSON.
- 📬 **Formulário interativo:** Permite que as usuárias entrem em contato, enviando dados para o Google Sheets.
- 👩‍💻 **Exibição dos membros:** Os dados dos integrantes são carregados dinamicamente via JSON.

---

## 📁 Estrutura do Projeto

|-- a-liga.html
|-- index.html
|-- integrantes.html
|-- mais.html
|
\-- assets
    |-- css
    |   |-- a-liga.css
    |   |-- footer.css
    |   |-- header.css
    |   |-- integrantes.css
    |   |-- mais.css
    |   |-- reset.css
    |   |-- style.css
    |   |-- utilities.css
    |   |-- variables.css
    |
    |-- data
    |   |-- imagens-galeria.json
    |   |-- membros.json
    |
    |-- images
    |   |-- (imagens diversas, como ícones, logos e covers)
    |   |-- galeria
    |       |-- 1.jpg
    |       |-- 2.jpg
    |       |-- 3.jpg
    |       |-- 4.jpg
    |       |-- 5.jpg
    |       |-- 6.jpg
    |
    |-- js
        |-- main.js
        |
        \-- modules
            |-- componentLoader.js
            |-- eventHandlers.js
            |-- forms.js
            |-- gallery.js
            |-- members.js
            |-- navigation.js
            |-- toggle.js


## Tecnologias Utilizadas

- **HTML5 & CSS3:** Estrutura e estilização divididas em arquivos específicos (*variables.css*, *utilities.css*, *reset.css*, etc.).
- **JavaScript (ES6 Modules):** Código modularizado para carregamento dinâmico de conteúdos, manipulação de formulários e interações.
- **Fetch API:** Carregamento dos componentes HTML e dos dados para galeria/membros.
- **LocalStorage:** Mantém o estado atual da seção exibida, proporcionando uma navegação persistente.
- **Integração com Google Sheets:** Envio dos dados do formulário para uma planilha via Google Apps Script.

## Módulos JavaScript

- **main.js:** Inicializa os _event listeners_ e restaura o último conteúdo exibido no `<main>` ao carregar o site.
- **componentLoader.js:** Responsável por carregar, via `fetch`, os conteúdos HTML de cada página.
- **eventHandlers.js:** Configura os eventos de clique para os links de navegação.
- **forms.js:** Gerencia o formulário de contato, incluindo validação, captura de dados e envio para o Google Sheets.
- **gallery.js:** Carrega e exibe as imagens da galeria a partir do arquivo `imagens-galeria.json`.
- **members.js:** Renderiza o painel de integrantes com os dados do arquivo `membros.json`.
- **navigation.js:** Controla a troca de seções e integra callbacks específicos para cada página.
- **toggle.js:** Implementa funções para alternar classes CSS, destacando elementos conforme necessário.

## Integração com Google Sheets
- Planilha para testes:
 <a href="https://docs.google.com/spreadsheets/d/1C1BTThaXPCHVCrFMKl5hIHOYPOpKf8Hseid8Z7qn2PM/edit?gid=0#gid=0" target="_blank">Sheets do formulário</a>

## Estilização com CSS

Os arquivos de estilo foram organizados para facilitar a manutenção e a consistência visual:

- **variables.css:** Define variáveis para cores, tipografia, dimensões e imagens de fundo.
- **utilities.css:** Classes utilitárias para alinhamento, exibição flexível e formatação de texto.
- **reset.css:** Remove margens, paddings e outros estilos padrões para garantir consistência entre navegadores.
- **Estilos Específicos:** Arquivos como *a-liga.css*, *header.css* e *footer.css* cuidam da estilização de seções específicas do site.

## Arquivos de Dados

- **imagens-galeria.json:** Contém a lista de URLs das imagens para a galeria.
- **membros.json:** Armazena os dados dos membros, incluindo nome, foto, cargo e perfil do LinkedIn.

## Instalação e Uso

### Publicação via GitHub Pages
https://<seu-usuario>.github.io/<nome-do-repositorio>/

### Desenvolvimento Local
Caso deseje realizar testes ou desenvolver localmente, siga os seguintes passos:

1. **Clone o repositório:**
```bash
git clone <URL_DO_REPOSITORIO>

2. Abra o projeto em um servidor local: Como o projeto utiliza fetch para carregar arquivos HTML e JSON, recomenda-se o uso de um servidor local. Algumas opções incluem:

Live Server

http-server

Para utilizar o http-server, execute:

bash
npx http-server

3. Acesse o site: Abra o seu navegador e acesse http://localhost:8080 (ou a porta indicada pelo servidor).