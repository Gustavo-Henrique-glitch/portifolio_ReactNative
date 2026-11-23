/** Dados do currículo — mesmos textos do portfólio web (app/page.js). */

export const GITHUB = "https://github.com/Gustavo-Henrique-glitch";
export const LINKEDIN =
  "https://www.linkedin.com/in/gustavo-henrique-mendes-pinheiro-07708333b/";
export const EMAIL = "gh33493@gmail.com";

export const OBJETIVO =
  "Atuar como desenvolvedor full-stack, aplicando conhecimentos em React, Next.js e IA para criar soluções inovadoras.";

export const TECNOLOGIAS = [
  "Python",
  "JavaScript",
  "React",
  "Next.js",
  "Django",
  "Java",
  "C",
  "C++",
  "Arduino",
  "PostgreSQL",
  "Jupyter",
  "Git",
  "LaTeX",
];

export type ItemCurriculo = {
  titulo: string;
  contexto?: string;
  descricao: string;
};

export const PESQUISA: ItemCurriculo[] = [
  {
    titulo:
      "Iniciação Científica: previsão de crises epilépticas a partir de sinais de EEG",
    descricao:
      "Pesquisa em andamento voltada à identificação de padrões em sinais de EEG capazes de antecipar crises em pacientes com epilepsia. Envolve análise de dados, revisão de literatura científica internacional e aplicação de técnicas computacionais a dados clínicos.",
  },
  {
    titulo: "Replicação de artigo científico em Inteligência Artificial",
    descricao:
      "Reprodução dos experimentos do artigo “Joint Diagnosis of Pneumonia, COVID-19, and Tuberculosis from Chest X-ray Images: A Deep Learning Approach” (Diagnostics, MDPI, 2023), com redes neurais convolucionais aplicadas a radiografias de tórax, validação dos resultados originais e proposta de melhoria sobre o método do autor.",
  },
];

export const EXPERIENCIA: ItemCurriculo[] = [
  {
    titulo: "Sistema de Controle de Acesso Biométrico",
    contexto: "5º CTA — Exército Brasileiro",
    descricao:
      "Projeto desenvolvido em parceria com o 5º Centro de Telemática de Área a partir de dois problemas levantados em visita técnica: a dificuldade de remover usuários do sistema biométrico em uso e a ausência de histórico de entradas e saídas. A solução integra um terminal biométrico Anviz T50M, um servidor e um painel web administrativo, com autenticação em duas etapas, gestão de ambientes com permissões por pessoa, registro de todas as tentativas de acesso, logs de auditoria e integração com câmeras de vigilância. Inclui documentação técnica completa produzida em LaTeX.",
  },
  {
    titulo: "Projeto Integrador",
    contexto: "Astech",
    descricao:
      "Site institucional e catálogo de produtos para empresa de venda e locação de equipamentos hospitalares em Recife, com carrinho de compras, chatbot e fluxo de contato via WhatsApp. Desenvolvido em equipe com Next.js, CSS Modules, Zustand e Back4App.",
  },
];

export const EXTRACURRICULARES = [
  "Estudo autodidata de Inteligência Artificial e Machine Learning",
  "Experimentos com sistemas embarcados e robótica (Arduino e C++)",
  "Desenvolvimento web pessoal com Django e Next.js",
  "Produção de documentação técnica e artigos em LaTeX / Overleaf",
];

export type Projeto = {
  titulo: string;
  descricao: string;
  tecnologias: string;
  repositorio: string;
};

export const PROJETOS: Projeto[] = [
  {
    titulo: "Projeto de Inteligência Artificial",
    descricao:
      "Classificação de imagens médicas com redes neurais convolucionais, desenvolvido em Jupyter Notebook.",
    tecnologias: "Python · Jupyter · CNN · Keras",
    repositorio: `${GITHUB}/projetoInteligenciaArtificial`,
  },
  {
    titulo: "Métodos Numéricos — Interpolação",
    descricao:
      "Implementação e comparação de dois métodos de interpolação, com análise de desempenho e precisão no formato IEEE Conference.",
    tecnologias: "Python",
    repositorio: `${GITHUB}/Metodos-Numericos-Interpolacao`,
  },
  {
    titulo: "Projeto Transporte UDP",
    descricao:
      "Chat com confirmação de entrega (ACK) e reenvio manual de mensagens pendentes sobre o protocolo UDP.",
    tecnologias: "Python · Sockets",
    repositorio: `${GITHUB}/projeto_Transporte_UDP`,
  },
  {
    titulo: "Programação Web e Mobile",
    descricao:
      "Aplicação web desenvolvida em grupo com Next.js e Back4App.",
    tecnologias: "Next.js · React · CSS",
    repositorio: `${GITHUB}/programacaowebemobile`,
  },
];
