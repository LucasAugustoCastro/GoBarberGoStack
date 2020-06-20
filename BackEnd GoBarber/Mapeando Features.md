# Recuperar Senha

**RF (Requisitos funcionais)**

- O usuário deve poder recuperar sua senha informanfo o seu email
- o usuario deve recever um email com instruçoes de recuperaçao de senha;
- O usuário deve poder resetar sua senha;

**RNF (Requisito nao funcional)**

- Utilizar MailTrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção
- O envo de e-mails deve acontecer em segundo plano (background job);

**RN (Regra de Negocio)**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;


# Atualizaçao do perfil

**RF**

- O usuario deve poder atualizar seu nome, email e senha;

**RN**

- o usuário não pode alterar seu email para um email já utilizado;
- Para atualixar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel de prestador

**RF**

- O usuário deve poder listar seua agendamentos de um dia especifico;
- O prestador deve receber uma notificaçao sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificaçoes não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificaçoes de prestador devem ser armazenadas no MongoDB;
- A notificaçao do prestador devem ser enviadas em tempo-real utilizando Socket.io

**RN**

- A notificação deve ter um status de lida ou nao-lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviço cadastrado;
- O usuário deve poder listar os dias de um mês com pelo menos um horario disponivel de um prestador
- O Usuário deve poder listart horarios disponiveis em um dia especifico de um prestador;
O usuario devve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenado em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h ( Primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horario já ocupado;
- O usuário não pode agendar em um horario que já passou;
- O usuário nao pode agendar um serviço consigo mesmo;
