export const alunos = [
	{
		id: 1,
		nome: "Carlos",
		sobrenome: "Silva",
		email: "carlos.silva@gmail.com",
		senha: "hash123",
		telefone: "83998123456",
		plano_id: 1,
		inicio_plano: "2026-02-01",
		inicio_cadastro: "2026-01-28",
	},
	{
		id: 2,
		nome: "Mariana",
		sobrenome: "Souza",
		email: "mariana.souza@gmail.com",
		senha: "hash456",
		telefone: "83998234567",
		plano_id: 2,
		inicio_plano: "2026-02-10",
		inicio_cadastro: "2026-02-05",
	},
];

export const personals = [
	{
		id: 1,
		nome: "João Emanuel",
		email: "joao.personal@gmail.com",
		telefone: "83999123456",
		inicio_cadastro: "2025-12-01",
	},
	{
		id: 2,
		nome: "Aline Marianna",
		email: "aline.personal@gmail.com",
		telefone: "83999234567",
		inicio_cadastro: "2025-12-05",
	},
];

export const planos = [
	{
		id: 1,
		nome: "Plano Básico",
		preco: 120,
		secoes_semana: 2,
		duracao_dias: 30,
	},
	{
		id: 2,
		nome: "Plano Intermediário",
		preco: 180,
		secoes_semana: 3,
		duracao_dias: 30,
	},
	{
		id: 3,
		nome: "Plano Premium",
		preco: 250,
		secoes_semana: 5,
		duracao_dias: 30,
	},
];

export const treinos = [
	{
		id: 1,
		nome: "Treino Funcional",
		descricao: "Treino voltado para resistência",
		duracao: 60,
	},
	{
		id: 2,
		nome: "Hipertrofia",
		descricao: "Treino focado em ganho de massa",
		duracao: 60,
	},
	{
		id: 3,
		nome: "HIIT",
		descricao: "Treino intervalado de alta intensidade",
		duracao: 45,
	},
];

export const disponibilidadePersonal = [
	{
		id: 1,
		treinos_id: 1,
		dia_semana: "segunda",
		inicio: "08:00",
		fim: "09:00",
	},
	{
		id: 2,
		treinos_id: 2,
		dia_semana: "terça",
		inicio: "10:00",
		fim: "11:00",
	},
];

export const agendamentos = [
	{
		id: 1,
		aluno_id: 1,
		personal_id: 1,
		treino_id: 2,
		data_cadastro: "2026-03-01",
		status: "confirmado",
		inicio_cadastro: "2026-02-28",
	},
];

export const admins = [
	{
		id: 1,
		nome: "Administrador",
		email: "admin@sistema.com",
		senha: "hashadmin",
		personal_id: 1,
		funcao: "super_admin",
		inicio_cadastro: "2025-11-01",
	},
];
