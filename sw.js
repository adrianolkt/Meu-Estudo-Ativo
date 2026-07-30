// Service Worker do "Meu Estudo Ativo"
// Faz cache dos arquivos do app pra funcionar offline depois da primeira visita.

const CACHE_NOME = 'estudo-ativo-v1';

const ARQUIVOS_PARA_CACHE = [
    './',
    './index.html',
    './manifest.json',
    './disciplinas.js',
    './ti_arquitetura/raid.js',
    './portugues/colocacao_pronominal.js',
    './portugues/crase_geral.js',
    './portugues/crase_fcc.js',
    './dir_constitucional/art5_direitos_fundamentais.js',
    './dir_administrativo/principios_limpe.js',
    './dir_administrativo/poderes_administrativos.js',
    './icons/icon-192.png',
    './icons/icon-512.png',
    './icons/icon-512-maskable.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NOME).then((cache) => cache.addAll(ARQUIVOS_PARA_CACHE))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((nomes) =>
            Promise.all(
                nomes.filter((nome) => nome !== CACHE_NOME).map((nome) => caches.delete(nome))
            )
        )
    );
    self.clients.claim();
});

// Estratégia: tenta a rede primeiro (pra pegar atualizações), cai pro cache se offline
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        fetch(event.request)
            .then((resposta) => {
                const copia = resposta.clone();
                caches.open(CACHE_NOME).then((cache) => cache.put(event.request, copia));
                return resposta;
            })
            .catch(() => caches.match(event.request))
    );
});
