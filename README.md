# Portfólio de Mateus Fernandes — React + UMC

Atividade de Sistemas de Informação da Universidade de Mogi das Cruzes (UMC): migração do portfólio anterior para um novo projeto React, com dados profissionais, formação e tecnologias de estudo.

## Executar

Instale o Node.js em uma versão compatível com o Vite do projeto (Node 22.12+ ou 24 LTS). Abra o terminal **nesta pasta**, onde está este README, e execute:

```sh
npm install
npm run dev
```

Abra o endereço informado no terminal. Para encerrar o servidor, pressione Ctrl+C.

## Gerar a versão de entrega

```sh
npm run build
npm run preview
```

O build gera a pasta `dist`. O preview permite conferir essa versão no navegador. O arquivo `dist/index.html` precisa ser servido por um servidor HTTP; não abra por duplo clique. Para recriar a instalação exata registrada no `package-lock.json`, use `npm ci`.

## O que foi feito

- Projeto independente com React, JavaScript e Vite.
- Conversão da estrutura HTML para JSX e componentes: cabeçalho, apresentação, sobre, projetos, contato e rodapé.
- Identidade visual, foto e dados do portfólio original preservados.
- Formação em Sistemas de Informação na UMC explicitada.
- Tecnologias originais organizadas por área, com React e Vite utilizados nesta atividade. Os grupos não são uma transcrição da matriz curricular oficial da UMC.
- Projetos renderizados a partir de dados, com filtro Frontend/Backend usando `useState`.
- Tema claro/escuro com `useState`, `useEffect` e preferência salva no navegador.
- Layout responsivo, navegação por teclado, foco visível, rótulos acessíveis e aviso de quantidade de projetos após o filtro.
- Links de GitHub e LinkedIn preservados. O projeto atual é identificado sem inventar um endereço de repositório.

## Atualizar seus dados

Edite `src/dados.js`: nome, formação, descrição, objetivo, redes, tecnologias e projetos. Troque `public/perfil.jfif` para atualizar a foto. O título e a descrição para o navegador ficam em `index.html`.

O nome, a formação anterior, a foto, os links e os projetos vieram do arquivo `Repositorio-Portifolio-main.zip`. A vinculação à UMC veio do enunciado da atividade. Não foram acrescentados empregos, certificações, níveis de proficiência ou semestre não informados.

## Estrutura

```text
public/              Foto e ícone
src/dados.js         Conteúdo personalizável
src/App.jsx          Componentes e interações
src/App.css          Estilos e adaptação para celular
src/main.jsx         Inicialização do React
index.html           Documento base em português
vite.config.js       Configuração do Vite
```

## Como explicar a conversão na apresentação

Antes, os dados eram fornecidos por um controlador Java/Spring e inseridos no HTML pelo Thymeleaf. Agora, eles estão em um módulo JavaScript e são exibidos por componentes React. Os atributos `th:*` foram substituídos por expressões JSX; as listas usam `map`; o filtro ocorre no navegador com estado do React; e a troca de tema é sincronizada com o navegador por um efeito.

Esta versão é um portfólio estático e não precisa do Java, do arquivo JAR ou de um banco de dados para funcionar.

## Entrega

O ZIP fornecido contém o código-fonte, os arquivos de configuração e a pasta `dist` gerada. A pasta `node_modules` não faz parte da entrega: as dependências são recuperadas com `npm install`. Para publicar em uma hospedagem estática, use o comando de build `npm run build` e o diretório de saída `dist`.
