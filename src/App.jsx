import { useEffect, useState } from 'react'
import { perfil, projetos, stacks } from './dados'
import './App.css'

function LinkExterno({ href, children, className }) {
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}<span className="sr-only"> (abre em nova aba)</span></a>
}

function Marca() {
  return <a className="brand" href="#inicio" aria-label={`${perfil.nome}, início`}>{perfil.iniciais}<span>.</span></a>
}

function Cabecalho() {
  const [claro, setClaro] = useState(() => {
    try { return localStorage.getItem('portfolio-theme') === 'light' }
    catch { return false }
  })

  useEffect(() => {
    document.body.classList.toggle('light', claro)
    try { localStorage.setItem('portfolio-theme', claro ? 'light' : 'dark') }
    catch { /* A troca de tema funciona mesmo sem armazenamento disponível. */ }
  }, [claro])

  return <header className="header">
    <Marca />
    <nav aria-label="Navegação principal"><a href="#sobre">Sobre mim</a><a href="#projetos">Projetos</a><a href="#contato">Contato ↗</a></nav>
    <button className="theme" type="button" aria-label={claro ? 'Ativar tema escuro' : 'Ativar tema claro'} aria-pressed={claro} onClick={() => setClaro(!claro)}>◐</button>
  </header>
}

function Apresentacao() {
  return <section className="hero wrap" aria-labelledby="titulo">
    <div>
      <p className="eyebrow"><span className="dot" />DESENVOLVIMENTO & APRENDIZADO</p>
      <h1 id="titulo">Olá, eu sou<br /><span>{perfil.nome}</span><span className="accent">.</span></h1>
      <p className="lead">Ideias ganham forma.<br />Código abre possibilidades.</p>
      <p className="hero-description">Estudante de {perfil.curso} na UMC, apaixonado por tecnologia e por construir soluções para a web.</p>
      <div className="actions"><a className="button primary" href="#projetos">Conheça meus projetos ↗</a><a className="text-link" href="#contato">Vamos conversar →</a></div>
    </div>
    <div className="portrait">
      <div className="photo-frame"><img src={`${import.meta.env.BASE_URL}${perfil.foto}`} alt={`Foto de ${perfil.nome}`} width="420" height="480" /></div>
      <span className="photo-label">Sempre aprendendo, sempre criando.</span><span className="code-tag" aria-hidden="true">&lt;/&gt;</span>
    </div>
    <div className="hero-bottom"><span>PORTFÓLIO PESSOAL / REACT</span><a href="#sobre">Explore a página ↓</a><span>SISTEMAS DE INFORMAÇÃO · UMC</span></div>
  </section>
}

function Sobre() {
  return <section id="sobre" className="section wrap about" aria-labelledby="sobre-titulo">
    <div>
      <p className="eyebrow">01 / SOBRE MIM</p>
      <h2 id="sobre-titulo">Curiosidade que<br />vira <em>construção.</em></h2>
      <div className="education"><span className="small-title">FORMAÇÃO ACADÊMICA</span><p>{perfil.formacao}</p><p><strong>{perfil.curso}</strong><br />{perfil.instituicao}<br /><span className="education-status">Em andamento</span></p></div>
    </div>
    <div>
      <p className="about-text">{perfil.descricao}</p>
      <p className="objective"><strong>Meu objetivo profissional</strong><br />{perfil.objetivo}</p>
      <h3 className="small-title">TECNOLOGIAS QUE ESTUDO E UTILIZO</h3>
      {stacks.map(stack => <div className="stack-group" key={stack.area}><h4>{stack.area}</h4><ul className="skills">{stack.tecnologias.map(tecnologia => <li key={tecnologia}>{tecnologia}</li>)}</ul></div>)}
    </div>
  </section>
}

function CartaoProjeto({ projeto }) {
  return <article className="project">
    <div className={`project-art ${projeto.categoria}`} aria-hidden="true"><span>{projeto.id}</span><strong>{projeto.arte}</strong><small>{projeto.legenda}</small></div>
    <div className="project-body"><p className="eyebrow">{projeto.tecnologias}</p><h3>{projeto.titulo}</h3><p>{projeto.descricao}</p>
      {projeto.url ? <LinkExterno className="text-link" href={projeto.url}>Ver código no GitHub ↗</LinkExterno> : <span className="current-project">Você está visitando este projeto</span>}
    </div>
  </article>
}

function Projetos() {
  const [categoria, setCategoria] = useState('todos')
  const visiveis = projetos.filter(projeto => categoria === 'todos' || projeto.categoria === categoria)
  return <section id="projetos" className="section wrap" aria-labelledby="projetos-titulo">
    <div className="section-heading"><div><p className="eyebrow">02 / PROJETOS</p><h2 id="projetos-titulo">Aprendizado<br />colocado em prática<span className="accent">.</span></h2></div><p>Uma seleção dos meus projetos de aula.<br />Cada projeto, um novo passo.</p></div>
    <div className="filters" role="group" aria-label="Filtrar projetos">{[['todos', 'Todos'], ['frontend', 'Frontend'], ['backend', 'Backend']].map(([valor, texto]) => <button type="button" key={valor} className={categoria === valor ? 'active' : ''} aria-pressed={categoria === valor} aria-controls="lista-projetos" onClick={() => setCategoria(valor)}>{texto}</button>)}</div>
    <p className="project-count" role="status">{visiveis.length} {visiveis.length === 1 ? 'projeto exibido' : 'projetos exibidos'}</p>
    <div className="projects" id="lista-projetos">{visiveis.map(projeto => <CartaoProjeto key={projeto.id} projeto={projeto} />)}</div>
  </section>
}

function Contato() {
  return <section id="contato" className="contact wrap" aria-labelledby="contato-titulo">
    <p className="eyebrow">03 / CONTATO</p><h2 id="contato-titulo">Uma boa conversa pode<br />ser o próximo <em>começo.</em></h2>
    <p>Vamos trocar ideias sobre tecnologia, projetos e oportunidades?</p>
    <div className="actions"><LinkExterno className="button primary" href={perfil.linkedin}>Conversar no LinkedIn ↗</LinkExterno><LinkExterno className="button outline" href={perfil.github}>Meu GitHub ↗</LinkExterno></div>
  </section>
}

export default function App() {
  return <>
    <a className="skip" href="#inicio">Pular para o conteúdo</a><Cabecalho />
    <main id="inicio" tabIndex={-1}><Apresentacao /><Sobre /><Projetos /><Contato /></main>
    <footer className="wrap"><Marca /><p>© {new Date().getFullYear()} {perfil.nome}. Desenvolvido com React e Vite.</p><a href="#inicio">Voltar ao topo ↑</a></footer>
  </>
}
