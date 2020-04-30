# GoBarberGoStack
  ## Definições da aplicação

  Um app para facilitar na hora de marcar um horario com algum barbeiro, podendo ver os horarios disponiveis de cada barbeiro cadastrado no app via app Mobile.
  O barbeiro tambem pode via aplicação Web fazer o seu cadastro, e colocar horario disponiveis

  Atualmente o que o backend esta fazendo as rotas de marcar um horario, a partir do POST "/appointments" 
  sendo passados o provider_id, que é o id do usario que esta oferecendo o serviço, e o date, que é a data que o usuario queira marcar

  <img src="https://i.imgur.com/Xv85CAX.png">


  A listagem esta sendo feita a partir do GET "/appointments"

  Para fazer o cadastro no App é por meio do POST "/users" sendo passados o name, email e password
  Podendo tambem fazer a atualização do avatar a partir no PATCH "/users/avatar" sendo passado uma imagem como Multipart Form.
  No codigo a imagem é armazenada usando o multer
  <img src="https://i.imgur.com/rH2GUOa.png">

  Para logar é mandado email e usuario a partir do POST "/sessions"
  
  **O base_url usado no Insomnia significa http://localhost:3333**

  ## Tecnologias
  1. No arquivo BackEnd GoStack foram usadas as seguintes ferramentas:
      - Linguagens:
        1. JavaScript 
        1. Node.js
        1. TypeScript
      - Para padronizar o codigo foram usados:
        1. EsLint
        1. Prettier
        1.EditorConfig
      - Banco de Dados Usado:
        - PostgreSQL
      - Para fazer conexao com o banco foi usado:
        - TypeORM
          - Para fazer as modificações no banco esta sendo usado migrations para que elas fiquem documentadas 

  ## Como Usar 

  1. Com o [Node](https://nodejs.org/en/download/package-manager/), [yarn](https://classic.yarnpkg.com/en/docs/install/) e o banco PostgreSQL (De preferencia utilize o docker) instalado, entre no projeto e rode o comando **yarn** para instalar as dependencias
  1. Crie um banco de dados para poder fazer a conexão 
  1. Com o banco criado defina no arquivo ormconfig.json a porta usada, o username colocado e o password definido por você
  1. Após a configuração, yarn typeorm migration:start, assim sera feito as criações das tabelas no banco
  1. Com a database criada rode o codigo com yarn dev:server, assim sera rodado o servidor em node
  1. Com o servidor rodando, use o Insomnia para usar, criar usuarios, criar sessoes, criar e listar os agendamentos
