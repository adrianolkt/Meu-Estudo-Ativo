// ============================================================
// MODELO DE ASSUNTO — copie este arquivo para criar um novo
// ============================================================
// Passos:
//   1. Copie este arquivo para a pasta da disciplina
//      ex: portugues/concordancia.js
//   2. Preencha os campos abaixo
//   3. Registre o arquivo em disciplinas.js
// ============================================================

var MEU_ASSUNTO = {

    // ID único do assunto (mesmo valor registrado em disciplinas.js)
    id: "id_do_assunto",

    // Título exibido no mapa mental (nó raiz)
    titulo: "Nome do Assunto",

    // Tópicos (pastas) do mapa mental
    topicos: [
        {
            id: "topico_1",           // ID único do tópico
            titulo: "Nome do Tópico", // Texto exibido na pasta
            cor: "#2b6cb0",           // Cor da pasta no mapa
            cartoes: [
                {
                    id: "cartao_1_1",
                    dica:     "📌 Palavra-chave ou dica curta",
                    conteudo: "Explicação completa que aparece ao revelar a resposta."
                },
                {
                    id: "cartao_1_2",
                    dica:     "📌 Outra dica",
                    conteudo: "Outro conteúdo completo."
                }
            ]
        },
        {
            id: "topico_2",
            titulo: "Segundo Tópico",
            cor: "#276749",
            cartoes: [
                {
                    id: "cartao_2_1",
                    dica:     "📌 Dica do segundo tópico",
                    conteudo: "Conteúdo do segundo tópico."
                }
            ]
        }
    ]
};
