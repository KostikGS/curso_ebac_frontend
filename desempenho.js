function getAlunoPassou(alunoArray) {
    const alunoPassou = alunoArray.filter(aluno => aluno.nota >= 6);
    return alunoPassou;
}


const alunos = [
    { nome: "João", nota: 8.5 },
    { nome: "Maria", nota: 9.0 },
    { nome: "Pedro", nota: 7.2 },
    { nome: "Ana", nota: 9.5 },
    { nome: "Carlos", nota: 6.8 }
];

// Acessando e exibindo os dados dos alunos
for (const aluno of alunos) {
    console.log(`${aluno.nome} - Nota: ${aluno.nota}`);
}

const alunoPassou = getAlunoPassou(alunos);

console.log("Alunos aprovados:");
for (const aluno of alunoPassou) {
    console.log(`${aluno.nome} - Nota: ${aluno.nota}`);
}
