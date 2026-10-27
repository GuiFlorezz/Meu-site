const projetos = [
    {
        titulo: "Landing Page",
        descricao: "Página focada em conversão com alto desempenho, responsiva e estruturada em HTML, CSS e JS.",
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600",
        linkSite: "https://seusite.com",
        linkGithub: "https://github.com/seuusuario/projeto2"
    },
    {
        titulo: "Sistema Web",
        descricao: "Pequeno sistema desenvolvido para organização de tarefas. Autenticação e painel administrativo.",
        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600",
        linkSite: "https://seusite.com",
        linkGithub: "https://github.com/seuusuario/projeto2"
    },
    {
        titulo: "App Mobile",
        descricao: "Aplicativo criado focado na experiência do usuário para facilitar o rastreamento de entregas.",
        img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600",
        linkSite: "https://seusite.com",
        linkGithub: "https://github.com/seuusuario/projeto2"
    },
    {
        titulo: "E-commerce",
        descricao: "Loja virtual completa com integração de pagamentos e carrinho dinâmico.",
        img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600",
        linkSite: "https://seusite.com",
        linkGithub: "https://github.com/seuusuario/projeto2"
    },
    {
        titulo: "Dashboard Financeiro",
        descricao: "Painel de controle com gráficos interativos para análise de dados e fluxo de caixa empresarial.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
        linkSite: "https://seusite.com",
        linkGithub: "https://github.com/seuusuario/projeto2"
    },
    {
        titulo: "API RESTful",
        descricao: "Arquitetura back-end segura e escalável utilizando Node.js e banco de dados relacional.",
        img: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=600",
        linkSite: "https://seusite.com",
        linkGithub: "https://github.com/seuusuario/projeto2"
    },
    {
        titulo: "Blog de Tecnologia",
        descricao: "Plataforma de artigos com sistema de CMS próprio, categorias e otimização forte para SEO.",
        img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600",
        linkSite: "https://seusite.com",
        linkGithub: "https://github.com/seuusuario/projeto2"
    },
    {
        titulo: "App de Clima",
        descricao: "Consumo de API de terceiros para exibir a previsão do tempo em tempo real com base na localização.",
        img: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=600",
        linkSite: "https://seusite.com",
        linkGithub: "https://github.com/seuusuario/projeto2"
    },
    {
        titulo: "Jogo Web",
        descricao: "Pequeno jogo de lógica criado puramente com manipulação de DOM utilizando JavaScript Vanilla.",
        img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600",
        linkSite: "https://seusite.com",
        linkGithub: "https://github.com/seuusuario/projeto2"
    }
];

// O resto do seu código JS continua aqui embaixo (let indiceAtual = 0; ...)

let indiceAtual = 0;
const wrapper = document.getElementById('carousel-3d-wrapper');

// Selecionando os elementos do Modal
const modal = document.getElementById('project-modal');
const fecharModalBtn = document.getElementById('close-modal');

// Função para abrir o modal e preencher os dados
function abrirModal(proj) {
    document.getElementById('modal-title').innerText = proj.titulo;
    document.getElementById('modal-desc').innerHTML = proj.descricaoDetalhada;
    // Podes usar proj.imgDetalhe aqui se quiseres uma imagem diferente no modal
    document.getElementById('modal-img').src = proj.img; 
    document.getElementById('modal-link-site').href = proj.linkSite;
    document.getElementById('modal-link-github').href = proj.linkGithub;
    
    modal.classList.add('show');
}

// Fechar modal ao clicar no X
fecharModalBtn.addEventListener('click', () => modal.classList.remove('show'));

// Fechar modal ao clicar fora da caixa branca
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// Janelas de informações da seção Sobre
document.querySelectorAll('[data-open-modal]').forEach((botao) => {
    botao.addEventListener('click', () => {
        const janela = document.getElementById(botao.dataset.openModal);
        if (!janela) return;

        janela.classList.add('show');
        janela.setAttribute('aria-hidden', 'false');
        janela.querySelector('[data-close-modal]')?.focus();
    });
});

document.querySelectorAll('.info-modal').forEach((janela) => {
    const fecharJanela = () => {
        janela.classList.remove('show');
        janela.setAttribute('aria-hidden', 'true');
    };

    janela.querySelector('[data-close-modal]').addEventListener('click', fecharJanela);
    janela.addEventListener('click', (e) => {
        if (e.target === janela) fecharJanela();
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.info-modal.show').forEach((janela) => {
            janela.classList.remove('show');
            janela.setAttribute('aria-hidden', 'true');
        });
    }
});

function criarCards() {
    wrapper.innerHTML = '';
    projetos.forEach((proj, i) => {
        const card = document.createElement('div');
        card.className = 'card-3d'; 
        
        card.innerHTML = `
            <img src="${proj.img}" class="card-img-top" alt="${proj.titulo}">
            <div class="card-body">
                <h4 class="card-title">${proj.titulo}</h4>
                <p class="card-text">${proj.descricao}</p>
                <!-- Mudamos de <a> para <button> para capturar o clique no JS -->
                <button class="btn-solid theme-primary btn-ver-projeto">Ver Projeto</button>
            </div>
        `;
        
        // Clicar no CARD gira o carrossel
        card.addEventListener('click', (e) => {
            // Se não clicou no botão, e o card não é o ativo, gira o carrossel
            if (!e.target.classList.contains('btn-ver-projeto') && !card.classList.contains('active')) {
                indiceAtual = i;
                atualizarCarousel3D();
            }
        });

        // Clicar no BOTÃO "Ver Projeto" abre o modal
        const btnVer = card.querySelector('.btn-ver-projeto');
        btnVer.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que o card gire ao clicar no botão
            if (card.classList.contains('active')) {
                abrirModal(proj);
            } else {
                // Se clicar no botão de um card lateral, primeiro trazemos ele pro centro
                indiceAtual = i;
                atualizarCarousel3D();
            }
        });

        wrapper.appendChild(card);
    });
}

function atualizarCarousel3D() {
    const cards = document.querySelectorAll('.card-3d');
    const total = cards.length;

    cards.forEach((card, index) => {
        // Limpa todas as classes de posição antigas
        card.classList.remove('active', 'prev', 'next', 'prev-2', 'next-2');

        // Calcula as posições para criar o loop com 5 cards visíveis
        if (index === indiceAtual) {
            card.classList.add('active'); // Centro
        } else if (index === (indiceAtual - 1 + total) % total) {
            card.classList.add('prev'); // 1º à Esquerda
        } else if (index === (indiceAtual + 1) % total) {
            card.classList.add('next'); // 1º à Direita
        } else if (index === (indiceAtual - 2 + total) % total) {
            card.classList.add('prev-2'); // 2º à Esquerda (Fundo)
        } else if (index === (indiceAtual + 2) % total) {
            card.classList.add('next-2'); // 2º à Direita (Fundo)
        }
    });
}

document.getElementById('btn-next').addEventListener('click', () => {
    indiceAtual = (indiceAtual + 1) % projetos.length;
    atualizarCarousel3D();
});

document.getElementById('btn-prev').addEventListener('click', () => {
    indiceAtual = (indiceAtual - 1 + projetos.length) % projetos.length;
    atualizarCarousel3D();
});

// Inicialização
criarCards();
atualizarCarousel3D();
