# 🌸 Liga Feminina de TI

A **Liga Feminina de TI** é um projeto da Universidade de Vila Velha que visa promover diversidade, inclusão e inovação no setor de tecnologia. Este site foi desenvolvido para o **1º Hackaton da Liga**.

---

## 📌 Visão Geral

![image](https://github.com/user-attachments/assets/fbff70a0-61ae-49b2-850a-e686a2573633)

O projeto é composto por diversas páginas HTML (como *A Liga*, *Integrantes* e *Mais*), que são carregadas dinamicamente via `fetch` com o auxílio de módulos JavaScript. A interface do site oferece:

- 🚀 **Navegação dinâmica:** O conteúdo é carregado conforme o usuário interage com o menu.
- 🖼️ **Galeria de imagens:** Fotos exibidas a partir de um arquivo JSON.
- 📬 **Formulário interativo:** Permite que as usuárias entrem em contato, enviando dados para o Google Sheets.
- 👩‍💻 **Exibição dos membros:** Os dados dos integrantes são carregados dinamicamente via JSON.

---

## 📁 Estrutura do Projeto

```
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
    |   |-- (ícones, logos, covers etc.)
    |   \-- galeria
    |       |-- 1.jpg
    |       |-- 2.jpg
    |       |-- 3.jpg
    |       |-- 4.jpg
    |       |-- 5.jpg
    |       |-- 6.jpg
    |
    \-- js
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
```

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 & CSS3:** Estrutura e estilos separados por arquivos temáticos.
- **JavaScript (ES6 Modules):** Código modularizado para manipulações dinâmicas.
- **Fetch API:** Utilizada para carregar conteúdo e dados JSON.
- **LocalStorage:** Permite persistência de navegação.
- **Google Apps Script:** Integração com planilhas Google para envio do formulário.

---

## 📦 Módulos JavaScript

- **`main.js`**: Inicializa eventos e restaura o conteúdo da última seção acessada.
- **`componentLoader.js`**: Carrega conteúdos HTML dinamicamente via `fetch`.
- **`eventHandlers.js`**: Garante a navegação funcional por meio de eventos.
- **`forms.js`**: Validação e envio de dados do formulário para o Google Sheets.
- **`gallery.js`**: Exibe imagens da galeria usando `imagens-galeria.json`.
- **`members.js`**: Renderiza os dados dos membros a partir de `membros.json`.
- **`navigation.js`**: Controla a troca de páginas.
- **`toggle.js`**: Alterna estilos dinâmicos em elementos da interface.

---

## 📄 Integração com Google Sheets

- 🔗 [Acessar planilha de teste do formulário](https://docs.google.com/spreadsheets/d/1C1BTThaXPCHVCrFMKl5hIHOYPOpKf8Hseid8Z7qn2PM/edit?gid=0#gid=0)

---

## 🎨 Estilização com CSS

Os arquivos foram organizados para manter clareza e padronização:

- **`variables.css`**: Cores, tipografia, dimensões e fundos.
- **`utilities.css`**: Classes utilitárias para layout e texto.
- **`reset.css`**: Reset básico para evitar inconsistências entre navegadores.
- **Estilos específicos**: Arquivos como `header.css`, `a-liga.css` e `footer.css` cuidam de seções individuais.

---

## 📂 Arquivos de Dados

- **`imagens-galeria.json`**: Lista de imagens da galeria.
- **`membros.json`**: Dados dos membros (nome, cargo, foto, LinkedIn).

---

## 🚀 Instalação e Uso

### 🔗 Publicação via GitHub Pages

- [Site Liga Feminina de TI - 1° Hackaton](https://thaissaleslye.github.io/site_LigaFemininaDeTI/)


### 💻 Desenvolvimento Local

1. **Clone o repositório:**

```bash
git clone https://github.com/ThaissaLeslye/site_LigaFemininaDeTI.git
```

2. **Abra o projeto em um servidor local:**

Como o site utiliza `fetch` para carregar arquivos locais, recomenda-se o uso de um servidor local.

**Opções recomendadas:**

- **Live Server** (extensão para VS Code)
- **http-server** (via Node.js)

Para usar o `http-server`, rode:

```bash
npx http-server
```

3. **Acesse no navegador:**

Abra `http://localhost:8080` (ou a porta indicada pelo servidor).

---

Autoria: Thaissa Lourenço
