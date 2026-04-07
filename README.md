## Aplicação Full Stack de autenticação utilizando token JWT 

Um módulo de autenticação na stack **MERN**.

MERN é um acrônimo para 

**M**ongo - Banco de dados não relacional baseado em documentos -
**E**xpress - API HTTP para Node.js -
**R**eact - Biblioteca de UI baseada emcomponentes para Javascript -
**N**ode - Compilador e runtime Javascript no servidor 

Meu objetivo com essa aplicação à princípio era estudar Docker e eu queria explorá-lo à fundo, de modo que eu só poderia construir algo Full Stack.
A escolha da popular stack _MERN_, foi o caminho escolhido por ser o menos custoso. Eu já conheço bem o ecossistema Javascript, o React e o Angular, para além do longevo jQuery e o próprio _VanillaJs_.
Meus estudos com essa stack foram guiados por esse vídeo incrível que eu encontrei no youtube:

[MERN Authentication App with JWT (and TypeScript)](https://www.youtube.com/watch?v=NR2MJk9C1Js&t=13759s)

Todavia, passou a ficar complicado acompanhar o tutorial dele porque o Chakra UI mudou radicalmente da versão v2 (vídeo) para a v3 (atual), essa mudança ocorreu há menos de um ano, quando o vídeo foi publicado.
Me pareceu uma boa oportunidade para estudar o TailwindCss. Ele me ganhou por me poupar da decisão arquitetural de manter arquivos CSS, que tem uma tendência a crescer desordenadamente.
Desde então, venho usando o Docker como ambiente para estudo do React e do Tailwind, partindo de uma base arquitetural criada em torno do fluxo de autenticação com Token JWT.

Pretendo manter esse projeto como laboratório e quando puder disponibilizarei os comandos para build e deploy.

### Próximos passos 
- fechar o fluxo de autenticação;
- Personalizar os design tokens;
- Criar temas usando o TailwindCss;
- Avaliar bibliotecas do npm para Toast e Error Boundary
- Criar testes do front para esse fluxo
- Criar integrações com CI e Github Actions
- Atualizar meus Dockerfiles e compose.yaml 
