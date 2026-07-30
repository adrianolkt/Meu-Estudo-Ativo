// TI / Arquitetura — RAID (Completo)
var MEU_ASSUNTO = {
    id: "ass_raid",
    titulo: "RAID (Completo)",
    topicos: [
        { id: "raid0", titulo: "RAID 0", cor: "#2b6cb0", cartoes: [
            { id: "r0_1", dica: "⬜ Qual o foco principal do RAID 0?", conteudo: "⏱️ Desempenho (alta velocidade)." },
            { id: "r0_2", dica: "⬜ Como os dados são gravados no RAID 0?", conteudo: "⏱️ Por Fracionamento (Striping) entre os discos." },
            { id: "r0_3", dica: "⬜ Qual a tolerância a falhas do RAID 0?", conteudo: "⏱️ Nenhuma! Se 1 disco pifar, perde tudo." },
            { id: "r0_4", dica: "⬜ Qual o número mínimo de discos para RAID 0?", conteudo: "⏱️ Mínimo de 2 discos." }
        ]},
        { id: "raid1", titulo: "RAID 1", cor: "#276749", cartoes: [
            { id: "r1_1", dica: "⬜ Qual a função principal do RAID 1?", conteudo: "⏱️ Segurança / Redundância." },
            { id: "r1_2", dica: "⬜ Como os dados são gravados no RAID 1?", conteudo: "⏱️ Por Espelhamento (Mirroring) idêntico." },
            { id: "r1_3", dica: "⬜ Qual a tolerância a falhas do RAID 1?", conteudo: "⏱️ Tolera perder 1 disco do par espelhado." },
            { id: "r1_4", dica: "⬜ Quanto de espaço útil se perde no RAID 1?", conteudo: "⏱️ Perde-se 50% do espaço total (fica 1/2)." },
            { id: "r1_5", dica: "⬜ Qual o número mínimo de discos para RAID 1?", conteudo: "⏱️ Mínimo de 2 discos." }
        ]},
        { id: "raid5", titulo: "RAID 5", cor: "#805ad5", cartoes: [
            { id: "r5_1", dica: "⬜ Como a paridade é salva no RAID 5?", conteudo: "⏱️ Paridade Distribuída (espalhada pelos discos)." },
            { id: "r5_2", dica: "⬜ Qual o número mínimo de discos para RAID 5?", conteudo: "⏱️ Mínimo de 3 discos." },
            { id: "r5_3", dica: "⬜ Qual a tolerância a falhas do RAID 5?", conteudo: "⏱️ Tolera a perda de APENAS 1 disco." },
            { id: "r5_4", dica: "⬜ Como calcular o espaço útil do RAID 5?", conteudo: "⏱️ (N - 1) * Capacidade. Ex: 3 de 1TB = 2TB úteis." }
        ]},
        { id: "raid6", titulo: "RAID 6", cor: "#c05621", cartoes: [
            { id: "r6_1", dica: "⬜ Qual a principal diferença do RAID 6 para o 5?", conteudo: "⏱️ Possui DUPLA paridade." },
            { id: "r6_2", dica: "⬜ Qual o número mínimo de discos para RAID 6?", conteudo: "⏱️ Mínimo de 4 discos." },
            { id: "r6_3", dica: "⬜ Qual a tolerância a falhas do RAID 6?", conteudo: "⏱️ Tolera a perda de ATÉ 2 discos simultâneos." },
            { id: "r6_4", dica: "⬜ Como calcular o espaço útil do RAID 6?", conteudo: "⏱️ (N - 2) * Capacidade." }
        ]},
        { id: "raid10", titulo: "RAID 10", cor: "#3182ce", cartoes: [
            { id: "r10_1", dica: "⬜ RAID 10: É 1+0 ou 0+1?", conteudo: "⏱️ É 1+0: Espelha primeiro (1), Fraciona depois (0)." },
            { id: "r10_2", dica: "⬜ Qual o número mínimo de discos para RAID 10?", conteudo: "⏱️ Mínimo de 4 discos." },
            { id: "r10_3", dica: "⬜ Quanto espaço útil se perde no RAID 10?", conteudo: "⏱️ Perde 50% da capacidade total." },
            { id: "r10_4", dica: "⬜ Qual a principal vantagem do RAID 10?", conteudo: "⏱️ Alta performance (do 0) + Alta segurança (do 1)." }
        ]}
    ]
};
