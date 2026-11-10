// Edite este arquivo para atualizar os dados exibidos no portfólio.
export const perfil = {
  nome: 'Mateus Fernandes',
  iniciais: 'mf',
  foto: 'perfil.jfif',
  formacao: 'Graduado em Análise e Desenvolvimento de Sistemas',
  curso: 'Sistemas de Informação',
  instituicao: 'UMC — Universidade de Mogi das Cruzes',
  descricao: 'Sou formado em Análise e Desenvolvimento de Sistemas e estudante de Sistemas de Informação na UMC. Tenho conhecimentos em Java, Python, PHP e tecnologias para a web. Gosto de transformar aprendizado em projetos e estou sempre buscando evoluir como desenvolvedor.',
  objetivo: 'Aplicar meus conhecimentos em desenvolvimento de software e ampliar minha experiência por meio de projetos e oportunidades na área de tecnologia.',
  github: 'https://github.com/MateusPsf',
  linkedin: 'https://www.linkedin.com/in/mateus-fernandes-574981320/',
}

// Tecnologias do portfólio original e React/Vite, usados nesta atividade.
// Os grupos organizam os estudos; não representam a matriz curricular oficial.
export const stacks = [
  { area: 'Interfaces para a web', tecnologias: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { area: 'Linguagens e backend', tecnologias: ['Java', 'Python', 'PHP', 'Spring Boot'] },
  { area: 'Ferramentas e templates', tecnologias: ['Vite', 'Thymeleaf'] },
]

export const projetos = [
  {
    id: '01', titulo: 'Estrutura de uma API', categoria: 'backend',
    tecnologias: 'API · Backend', arte: '{ API }', legenda: 'ESTRUTURA · ROTAS · ORGANIZAÇÃO',
    descricao: 'Projeto de aula dedicado à organização e à estrutura de uma API.',
    url: 'https://github.com/MateusPsf/Aula-estrutura-projetoapi',
  },
  {
    id: '02', titulo: 'Meu primeiro portfólio', categoria: 'frontend',
    tecnologias: 'HTML · CSS · JavaScript', arte: '<portfolio />', legenda: 'INTERFACE · ESTILO · IDENTIDADE',
    descricao: 'O ponto de partida: minha página pessoal criada nas aulas com HTML, CSS e JavaScript.',
    url: 'https://github.com/MateusPsf/Atividade_Portifolio',
  },
  {
    id: '03', titulo: 'Portfólio em React', categoria: 'frontend',
    tecnologias: 'React · JavaScript · Vite', arte: '<React />', legenda: 'COMPONENTES · ESTADO · INTERAÇÃO',
    descricao: 'Evolução do meu portfólio para React, com componentes reutilizáveis, filtro de projetos e troca de tema. Atividade de Sistemas de Informação da UMC.',
  },
]
