# AgendaPro

Sistema completo de agendamento online personal trainers, desenvolvido em React com foco em experiência do usuário, regras de negócio reais e arquitetura profissional.

> Projeto desenvolvido para portfólio Front-End, simulando um sistema real utilizado por pequenos negócios.

---

## Sobre o Projeto

O **AgendaPro** é uma aplicação web que permite:

- Clientes visualizarem horários disponíveis
- Realizarem agendamentos online
- Cancelarem agendamentos
- Administradores gerenciarem agenda, treinos e alunos
- Visualizarem relatórios
- Suporte a múltiplos profissionais

O objetivo é simular um sistema real utilizado por pequenas empresas.

---

## Objetivos do Projeto

- Demonstrar domínio de React
- Trabalhar regras de negócio reais
- Simular um sistema SaaS
- Construir um projeto sólido para portfólio
- Aplicar boas práticas de arquitetura Front-End

## Problemas Resolvidos

O AgendaPro resolve:

- Conflito de horários
- Falta de organização
- Perda de agendamentos
- Falta de controle administrativo
- Experiência ruim para o cliente

---

## Tecnologias Utilizadas

### Front-end

- React
- Vite
- JavaScript
- React Router
- Context API
- React Hooks
- Custom Hooks
- Hooks customizados

### Back-end / Banco de Dados

- Supabase
- PostgreSQL (database do Supabase)
- API REST (Supabase)
- Autenticação (Auth)

### Extras

- Integração com WhatsApp
- Deploy na Vercel, Render e Supabase
- Autenticação de administrado e aluno
- CRUD de clientes
- Dark Mode
- Responsividade completa
- Sistema de login persistente (localStorage)

---

## Estrutura do Projeto

```
AgendaPro/
│
├── backend/
│   │
│   ├── data/
│   │
│   ├── login/
│   │
│   ├── database/
│   │
│   ├── repositories/
│   │
│   └── server.py
│   
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │   ├── icons/
│   │   │   ├── images/
│   │   │   ├── styles/
│   │   │
│   │   ├── components/
│   │   │   ├── admin/
│   │   │   ├── booking/
│   │   │   ├── layout/
│   │   │   ├── login/
│   │   │   ├── sections/
│   │   │   └── ui/
│   │   │
│   │   ├── contexts/
│   │   │   ├── Appointments.jsx
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── useCalendar.js
│   │   │   └── useTimeSlots.js
│   │   │
│   │   ├── pages/
│   │   │   ├── Admin/
│   │   │   │   ├── admin.styles.css
│   │   │   │   └── index.jsx
│   │   │   │
│   │   │   ├── Booking/
│   │   │   │   ├── booking.styles.css
│   │   │   │   └── index.jsx
│   │   │   │
│   │   │   ├── Login/
│   │   │   │   ├── login.styles.css
│   │   │   │   └── index.jsx
│   │   │   │
│   │   │   └── Home/
│   │   │       ├── home.styles.css
│   │   │       └── index.jsx
│   │   │
│   │   ├── routes/
│   │   │   ├── index.jsx
│   │   │   └── PrivateRoute.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── appointments.service.js
│   │   │
│   │   ├── utils/
│   │   │   ├── date.js
│   │   │   └── validation.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── index.html
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── vercel.json
│
└── README.md
```

---

## Funcionalidades

### Cliente

- [ ] Selecionar serviço
- [ ] Escolher profissional
- [ ] Escolher data
- [ ] Visualizar horários disponíveis
- [ ] Confirmar agendamento
- [ ] Cancelar agendamento
- [ ] Receber confirmação via WhatsApp
- [ ] Interface responsiva

---

### Administrador

- [ ] Login seguro
- [ ] Visualizar agenda do dia
- [ ] Filtrar por profissional
- [ ] Bloquear horários
- [ ] Cancelar agendamentos
- [ ] Dashboard com métricas
- [ ] Relatórios básicos
- [ ] Controle de horário de funcionamento

---

## Regras de Negócio

- Não permitir dois agendamentos no mesmo horário
- Bloqueio automático de horários passados
- Tempo do serviço influencia disponibilidade
- Cancelamento permitido até X horas antes
- Horários bloqueados não aparecem para clientes
- Sistema preparado para múltiplos profissionais

---

## UX & UI

O projeto foi planejado com:

- Fluxo de usuário definido
- Protótipo no Figma
- Interface minimalista
- Experiência mobile-first
- Foco em conversão

---

## Como Rodar o Projeto

```bash
# Clonar o repositório
git clone https://github.com/joaoemanuels/AgendaPro.git

# Entrar na pasta
cd agendapro

# Instalar dependências na pasta frontend
npm i

# Rodar o projeto na pasta base ( AgendaPro)
./start-dev.bat

# A aplicação estará disponível em:
http://localhost:5173

```

## Próximas Melhorias

- [ ] Sistema de pagamento online
- [ ] Notificação por e-mail
- [ ] Área do cliente com histórico
- [ ] Multi-unidade
- [ ] Sistema de cupons
- [ ] API própria com Node.js
- [ ] Testes automatizados
- [ ] Dark Mode
- [ ] Sistema de permissões

---

## Diferenciais Técnicos

- Organização modular
- Componentização reutilizável
- Separação de responsabilidades
- Regras de negócio centralizadas
- Código escalável
- Projeto estruturado como produto real

---

## Desenvolvedor

**João Emanuel**  
Front-End Developer

---

## Preview

Em breve, fotos do projeto.

![Preview do Sistema](./preview.png)
