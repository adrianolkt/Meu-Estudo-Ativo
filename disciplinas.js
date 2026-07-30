// ============================================================
// CATÁLOGO GERAL — TRÊS NÍVEIS:
//   Contexto (Banca/Órgão/Geral) → Disciplina → Assunto
//
// Para adicionar um novo contexto, disciplina ou assunto:
//   1. Crie (ou reuse) a pasta e o arquivo .js do assunto
//   2. Registre aqui seguindo o modelo abaixo
// ============================================================

const CATALOGO = [

    // --------------------------------------------------------
    // ESTUDO GERAL (independente de banca ou órgão)
    // --------------------------------------------------------
    {
        id: "ctx_geral",
        nome: "Estudo Geral",
        icone: "📚",
        descricao: "Conteúdo base, sem foco em banca específica",
        disciplinas: [
            {
                id: "disc_ti",
                nome: "TI / Arquitetura",
                icone: "💻",
                assuntos: [
                    { id: "ass_raid",       titulo: "RAID (Completo)",         arquivo: "ti_arquitetura/raid.js" }
                ]
            },
            {
                id: "disc_portugues",
                nome: "Português",
                icone: "📝",
                assuntos: [
                    { id: "ass_colocacao",  titulo: "Colocação Pronominal",    arquivo: "portugues/colocacao_pronominal.js" },
                    { id: "ass_crase",      titulo: "Crase (Geral)",           arquivo: "portugues/crase_geral.js" }
                ]
            },
            {
                id: "disc_dir_const",
                nome: "Dir. Constitucional",
                icone: "⚖️",
                assuntos: [
                    { id: "ass_art5",        titulo: "Art. 5º: Direitos Fundamentais", arquivo: "dir_constitucional/art5_direitos_fundamentais.js" }
                ]
            },
            {
                id: "disc_dir_adm",
                nome: "Dir. Administrativo",
                icone: "🏛️",
                assuntos: [
                    { id: "ass_limpe",   titulo: "Princípios (LIMPE)",         arquivo: "dir_administrativo/principios_limpe.js" },
                    { id: "ass_poderes", titulo: "Poderes Administrativos",     arquivo: "dir_administrativo/poderes_administrativos.js" }
                ]
            }
        ]
    },

    // --------------------------------------------------------
    // FCC — Fundação Carlos Chagas
    // --------------------------------------------------------
    {
        id: "ctx_fcc",
        nome: "Banca: FCC",
        icone: "🎯",
        descricao: "Questões e foco no estilo FCC",
        disciplinas: [
            {
                id: "disc_portugues_fcc",
                nome: "Português FCC",
                icone: "📝",
                assuntos: [
                    { id: "ass_crase_fcc",  titulo: "Domínio da Crase",    arquivo: "portugues/crase_fcc.js" }
                    
                ]
            }
        ]  // adicione assuntos conforme for criando (ex: portugues/crase_fcc.js)
    },

    // --------------------------------------------------------
    // CESPE / CEBRASPE
    // --------------------------------------------------------
    {
        id: "ctx_cespe",
        nome: "Banca: CESPE",
        icone: "🎯",
        descricao: "Questões e foco no estilo CESPE/Cebraspe",
        disciplinas: []  // adicione assuntos conforme for criando
    },

    // --------------------------------------------------------
    // EXEMPLO: Órgão específico
    // --------------------------------------------------------
    {
        id: "ctx_trf",
        nome: "Órgão: TRF",
        icone: "🏢",
        descricao: "Edital do TRF — Analista de TI",
        disciplinas: []  // adicione assuntos conforme o edital
    }

];
