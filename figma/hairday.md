#Instruções
##Estrutura, regras e requisitos do projeto

## 1. Estrutura inicial

Crie um projeto no React utilizando Vite com Typescript.

Estruture a aplicação com pelo menos dois componentes principais:

Sidebar para adicionar novos agendamentos.
Listagem de agendamentos exibindo cada agendamento no seu respectivo período.


## 2. Funcionalidades obrigatórias
➕ Adicionar agendamento
O usuário deve escolhe a data, horário e informar o nome do cliente.

Ao clicar no botão de agendar, o agendamento deve ser adicionada à lista.

Cada novo agendamento deve aparecer imediatamente na interface, com:

Horário;
Nome do cliente;
Um botão de lixeira para excluir.

🗑️ Remover agendamento
O usuário deve poder excluir qualquer agendamento da lista clicando no botão de lixeira.
Após a remoção, a lista deve ser atualizada automaticamente.

📊 Períodos
Os agendamentos devem ser agrupados e exibidos de acordo com três períodos:

Manhã: agendamentos entre 9h e 12h.
Tarde: agendamentos entre 13h e 18h.
Noite: agendamentos entre 19h e 21h.

## 3. Estados e manipulação

Use estados do React para armazenar a lista de agendamentos.
Cada agendamento deve ser representada por um objeto com pelo menos id, nome do cliente, data e horário.
Utilize métodos de array como map, filter e reduce para atualizar os estados corretamente.


## 4. Interface (baseada no layout do Figma)

Tela inicial deve exibir:

O logo.

Os inputs para adicionar o agendamento.

A sidebar.

A listagem de agendamentos

O agrupamento por períodos

O período, caso não haja agendamentos, deve exibir uma mensagem de estado vazio:

"Você ainda não tem agendamentos cadastrados nesse período.".

Botão de excluir → ícone de lixeira.

## 5. Desenvolvendo o projeto
Para desenvolver esse projeto, recomendamos utilizar as principais ferramentas que utilizamos durante o desenvolvimento do primeiro módulo da formação.

Caso você tenha alguma dificuldade você pode ir no nosso 
fórum
 e deixar sua dúvida por lá!

Após terminar o desafio, caso você queira, você pode tentar dar o próximo passo e deixar a aplicação com a sua cara. Tente mudar o layout, cores, ou até adicionar novas funcionalidades para ir além 🚀

## 6. Entrega
Após concluir o desafio, você deve enviar a URL do seu código no Github.