# HairDay ✂️ - Sistema de Agendamentos

Aplicação web moderna desenvolvida em **React**, **TypeScript** e **Vite** para controle e agendamento de atendimentos em barbearias/salões, baseada rigorosamente no design system e layout do **Figma**.

---

## 🚀 Funcionalidades

- **➕ Adicionar Agendamento**:
  - Seleção de data através de um seletor amigável.
  - Seleção de horário agrupado por turnos (Manhã, Tarde e Noite).
  - Horários já ocupados são desabilitados automaticamente para evitar agendamentos em conflito.
  - Informação do nome do cliente com validação.
  - Botão de confirmação estilizado conforme os estados definidos no Figma (Default, Hover e Disabled).

- **🗑️ Remover Agendamento**:
  - Exclusão instantânea clicando no botão com ícone de lixeira (`Trash`).
  - Atualização imediata do estado da interface e liberação do horário.

- **📊 Agrupamento por Períodos**:
  - **Manhã**: 09:00 às 12:00 (ícone de Sol nascendo).
  - **Tarde**: 13:00 às 18:00 (ícone de Sol com nuvem).
  - **Noite**: 19:00 às 21:00 (ícone de Lua e estrelas).
  - Estado vazio com a mensagem oficial: *"Você ainda não tem agendamentos cadastrados nesse período."*

- **💾 Persistência de Dados**:
  - Armazenamento em `localStorage` para manter os agendamentos salvos no navegador.
  - Carregamento inicial com dados de exemplo idênticos à captura do Figma.

- **🎨 Design System Fiel ao Figma**:
  - **Tipografia**: Fonte oficial `Catamaran` (Google Fonts).
  - **Paleta de Cores**:
    - Produto: `#DBC170` (yellow-light), `#B8952E` (yellow), `#846F2E` (yellow-dark).
    - Base: `#F5F4F5` (gray-100) até `#050505` (gray-900).
  - **Ícones**: Ícones oficiais da biblioteca `@phosphor-icons/react`.

---

## 🛠️ Tecnologias Utilizadas

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [@phosphor-icons/react](https://phosphoricons.com/)
- [dayjs](https://day.js.org/)
- CSS Modules & Custom Properties (Variáveis CSS)

---

## 📦 Como Executar o Projeto

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acesse no seu navegador:**
   ```
   http://localhost:5173
   ```

4. **Para gerar a build de produção:**
   ```bash
   npm run build
   ```

---

Desenvolvido para o desafio HairDay. 🚀
