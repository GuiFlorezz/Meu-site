// Configuração do ScrollReveal: as animações só se aplicam aos elementos
// que recebem manualmente uma destas classes no HTML.
if (typeof window.ScrollReveal === 'function') {
    const sr = window.ScrollReveal({
        duration: 800,
        distance: '40px',
        reset: false
    });

    sr.reveal('.reveal-baixo', { origin: 'bottom' });
    sr.reveal('.reveal-cima', { origin: 'top' });
    sr.reveal('.reveal-esquerda', { origin: 'left' });
    sr.reveal('.reveal-direita', { origin: 'right' });

    sr.reveal('.delay-1s', { delay: 150 });
    sr.reveal('.delay-2s', { delay: 300 });
    sr.reveal('.delay-3s', { delay: 450 });
    sr.reveal('.delay-4s', { delay: 500 });
    sr.reveal('.delay-5s', { delay: 550 });


    sr.reveal('.reveal-imediato', { delay: 0 });
}

const projetos = [
    {
        titulo: "Site Diportella",
        descricao: "Página focada em conversão com alto desempenho, responsiva e estruturada em HTML, CSS e JS.",
        descricaoDetalhada: [
            { titulo: "O desafio", texto: "Apresentar os serviços da Diportella com clareza e transmitir confiança desde o primeiro contato, ajudando potenciais clientes a entender como iniciar um atendimento." },
            { titulo: "A solução", texto: "Desenvolvimento de um site responsivo, com conteúdo organizado e chamadas para contato em pontos estratégicos da navegação." },
            { titulo: "O que o site oferece", texto: "Uma apresentação digital dos serviços, acesso simples às informações da empresa e caminhos diretos para entrar em contato." }
        ],
        // Imagens locais: capa do card e imagem exibida na janela do projeto.
        imgCapa: "img/imgProjetos/Diportella.png",
        imgDetalhe: "img/imgProjetos/Diportella2.png",
        linkSite: "https://www.dianeteportella.com.br/",
        linkGithub: "https://github.com/nivotechdev/Site-Diportellarelaser"
    },
    {
        titulo: "Site A.S Desing",
        descricao: "Página de apresentação de trabalho e conversão, estruturada em HTML, CSS E JS",
        descricaoDetalhada: [
            { titulo: "O desafio", texto: "Mostrar o trabalho e os serviços da A.S Design de forma organizada, facilitando para novos clientes conhecerem a empresa e encontrarem referências dos projetos." },
            { titulo: "A solução", texto: "Criação de um site responsivo que reúne a apresentação da empresa e dá destaque ao portfólio em uma navegação objetiva." },
            { titulo: "O que o site oferece", texto: "Uma vitrine digital para os projetos e serviços, informações acessíveis em diferentes dispositivos e um caminho claro para iniciar uma conversa." }
        ],
        imgCapa: "img/imgProjetos/AS desing.png",
        imgDetalhe: "img/imgProjetos/AS desing2.png",
        linkSite: "https://asmoveisplanejados.com.br/",
        linkGithub: "https://github.com/GuiFlorezz/Site-as-desing-de-ambi"
    },
    {
        titulo: "Site Supreme Lavagens ",
        descricao: "Aplicativo criado focado na experiência do usuário para facilitar o rastreamento de entregas.",
        descricaoDetalhada: [
            { titulo: "O desafio", texto: "Facilitar o acesso às informações sobre os serviços da Supreme Lavagens e ajudar clientes a encontrar a opção adequada às suas necessidades." },
            { titulo: "A solução", texto: "Desenvolvimento de uma presença digital com conteúdo organizado e navegação simples, priorizando o acesso rápido às informações e ao contato." },
            { titulo: "O que o site oferece", texto: "Apresentação dos serviços, informações úteis para os clientes e acesso direto aos canais de atendimento." }
        ],
        imgCapa: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600",
        imgDetalhe: "img/imgProjetos/supreme-lavagens-detalhe.png",
        linkSite: "https://seusite.com",
        linkGithub: "https://github.com/GuiFlorezz/supreme-lavagem"
    },
    {
        titulo: "E-commerce",
        descricao: "Loja virtual completa com integração de pagamentos e carrinho dinâmico.",
        descricaoDetalhada: [
            { titulo: "O desafio", texto: "Permitir que clientes conheçam os produtos e concluam uma compra com um processo claro e conveniente." },
            { titulo: "A solução", texto: "Construção de uma loja virtual com catálogo organizado, carrinho e etapas de compra integradas." },
            { titulo: "O que o site oferece", texto: "Consulta de produtos, gerenciamento do carrinho e um fluxo estruturado para finalizar pedidos." }
        ],
        imgCapa: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600",
        imgDetalhe: "img/imgProjetos/e-commerce-detalhe.png",
        linkSite: "https://seusite.com",
        linkGithub: "https://github.com/seuusuario/projeto2"
    },
    {
        titulo: "Dashboard Financeiro",
        descricao: "Painel de controle com gráficos interativos para análise de dados e fluxo de caixa empresarial.",
        descricaoDetalhada: [
            { titulo: "O desafio", texto: "Reunir dados financeiros que podem ficar dispersos e dificultar a leitura do desempenho e do fluxo de caixa." },
            { titulo: "A solução", texto: "Criação de um painel que organiza os dados em indicadores e gráficos para tornar a consulta mais direta." },
            { titulo: "O que o painel oferece", texto: "Visão centralizada das informações financeiras e recursos visuais para apoiar o acompanhamento dos dados." }
        ],
        imgCapa: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
        imgDetalhe: "img/imgProjetos/dashboard-financeiro-detalhe.png",
        linkSite: "https://seusite.com",
        linkGithub: "https://github.com/seuusuario/projeto2"
    },
    {
        titulo: "API RESTful",
        descricao: "Arquitetura back-end segura e escalável utilizando Node.js e banco de dados relacional.",
        descricaoDetalhada: [
            { titulo: "O desafio", texto: "Disponibilizar dados e funcionalidades de forma consistente para que diferentes partes de uma aplicação possam se comunicar." },
            { titulo: "A solução", texto: "Implementação de uma API RESTful com rotas organizadas e integração com banco de dados relacional." },
            { titulo: "O que a API oferece", texto: "Uma interface estruturada para consultar e manipular recursos da aplicação por meio de requisições HTTP." }
        ],
        imgCapa: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=600",
        imgDetalhe: "img/imgProjetos/api-restful-detalhe.png",
        linkSite: "https://seusite.com",
        linkGithub: "https://github.com/seuusuario/projeto2"
    },
    {
        titulo: "Blog de Tecnologia",
        descricao: "Plataforma de artigos com sistema de CMS próprio, categorias e otimização forte para SEO.",
        descricaoDetalhada: [
            { titulo: "O desafio", texto: "Organizar artigos e facilitar que leitores encontrem conteúdos relevantes sem uma navegação confusa." },
            { titulo: "A solução", texto: "Desenvolvimento de uma plataforma com artigos agrupados por categorias e páginas focadas na leitura." },
            { titulo: "O que o site oferece", texto: "Publicação e consulta de conteúdos, navegação por categorias e uma estrutura preparada para mecanismos de busca." }
        ],
        imgCapa: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600",
        imgDetalhe: "img/imgProjetos/blog-tecnologia-detalhe.png",
        linkSite: "https://seusite.com",
        linkGithub: "https://github.com/seuusuario/projeto2"
    },
    {
        titulo: "App de Clima",
        descricao: "Consumo de API de terceiros para exibir a previsão do tempo em tempo real com base na localização.",
        descricaoDetalhada: [
            { titulo: "O desafio", texto: "Consultar a previsão do tempo de uma localidade sem precisar interpretar informações dispersas em diferentes fontes." },
            { titulo: "A solução", texto: "Criação de uma aplicação que consulta um serviço de clima e organiza os dados para a localização selecionada." },
            { titulo: "O que o app oferece", texto: "Busca por localidade e visualização das condições do tempo em uma interface direta." }
        ],
        imgCapa: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=600",
        imgDetalhe: "img/imgProjetos/app-clima-detalhe.png",
        linkSite: "https://seusite.com",
        linkGithub: "https://github.com/seuusuario/projeto2"
    },
    {
        titulo: "Jogo Web",
        descricao: "Pequeno jogo de lógica criado puramente com manipulação de DOM utilizando JavaScript Vanilla.",
        descricaoDetalhada: [
            { titulo: "O desafio", texto: "Criar uma experiência interativa simples de entender, com regras claras e resposta imediata às ações do jogador." },
            { titulo: "A solução", texto: "Desenvolvimento de um jogo para navegador com JavaScript, manipulando a interface conforme as ações realizadas." },
            { titulo: "O que o jogo oferece", texto: "Uma experiência jogável diretamente no navegador, com controles e objetivo apresentados na própria interface." }
        ],
        imgCapa: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600",
        imgDetalhe: "img/imgProjetos/jogo-web-detalhe.png",
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

function atualizarBloqueioRolagem() {
    const existeModalAberto = document.querySelector('.custom-modal.show');
    document.documentElement.classList.toggle('modal-open', Boolean(existeModalAberto));
    document.body.classList.toggle('modal-open', Boolean(existeModalAberto));
}

// Função para abrir o modal e preencher os dados
function abrirModal(proj) {
    document.getElementById('modal-title').innerText = proj.titulo;
    const descricao = document.getElementById('modal-desc');
    descricao.replaceChildren();
    (Array.isArray(proj.descricaoDetalhada) ? proj.descricaoDetalhada : [
        { titulo: "Sobre o projeto", texto: proj.descricaoDetalhada || proj.descricao }
    ]).forEach((secao) => {
        const bloco = document.createElement('section');
        const titulo = document.createElement('h4');
        const texto = document.createElement('p');
        titulo.textContent = secao.titulo;
        texto.textContent = secao.texto;
        bloco.append(titulo, texto);
        descricao.appendChild(bloco);
    });
    document.getElementById('modal-img').src = proj.imgDetalhe;
    document.getElementById('modal-link-site').href = proj.linkSite;
    document.getElementById('modal-link-github').href = proj.linkGithub;
    
    modal.classList.add('show');
    atualizarBloqueioRolagem();
}

function fecharModal() {
    modal.classList.remove('show');
    atualizarBloqueioRolagem();
}

// Fechar modal ao clicar no X
fecharModalBtn.addEventListener('click', fecharModal);

// Fechar modal ao clicar fora da caixa branca
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        fecharModal();
    }
});

// Janelas de informações da seção Sobre
document.querySelectorAll('[data-open-modal]').forEach((botao) => {
    botao.addEventListener('click', () => {
        const janela = document.getElementById(botao.dataset.openModal);
        if (!janela) return;

        janela.classList.add('show');
        janela.setAttribute('aria-hidden', 'false');
        atualizarBloqueioRolagem();
        janela.querySelector('[data-close-modal]')?.focus();
    });
});

document.querySelectorAll('.info-modal').forEach((janela) => {
    const fecharJanela = () => {
        janela.classList.remove('show');
        janela.setAttribute('aria-hidden', 'true');
        atualizarBloqueioRolagem();
    };

    janela.querySelector('[data-close-modal]').addEventListener('click', fecharJanela);
    janela.addEventListener('click', (e) => {
        if (e.target === janela) fecharJanela();
    });
});

document.querySelectorAll('#mobile-menu-modal a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('mobile-menu-modal');
        menu.classList.remove('show');
        menu.setAttribute('aria-hidden', 'true');
        atualizarBloqueioRolagem();
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (modal.classList.contains('show')) fecharModal();
        document.querySelectorAll('.info-modal.show').forEach((janela) => {
            janela.classList.remove('show');
            janela.setAttribute('aria-hidden', 'true');
        });
        atualizarBloqueioRolagem();
    }
});

function criarCards() {
    wrapper.innerHTML = '';
    projetos.forEach((proj, i) => {
        const card = document.createElement('div');
        card.className = 'card-3d'; 
        
        card.innerHTML = `
            <img src="${proj.imgCapa}" class="card-img-top" alt="${proj.titulo}">
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

// A ilha aparece quando o Hero sai da área visível e retorna ao voltar ao topo.
const siteHeader = document.querySelector('.site-header');
const heroSection = document.getElementById('inicio');

if (siteHeader && heroSection && 'IntersectionObserver' in window) {
    const heroObserver = new IntersectionObserver(([entry]) => {
        siteHeader.classList.toggle('is-island', !entry.isIntersecting);
    }, { threshold: 0, rootMargin: '-80px 0px 0px 0px' });

    heroObserver.observe(heroSection);
} else if (siteHeader && heroSection) {
    const atualizarCabecalho = () => {
        siteHeader.classList.toggle('is-island', window.scrollY >= heroSection.offsetHeight - 80);
    };
    window.addEventListener('scroll', atualizarCabecalho, { passive: true });
    atualizarCabecalho();
}

// Vincula o avanço horizontal da trajetória ao scroll vertical da página.
const trajectorySection = document.getElementById('trajetoria');
const trajectoryViewport = trajectorySection?.querySelector('.trajectory-viewport');
const trajectoryList = document.getElementById('trajectory-list');

if (trajectorySection && trajectoryViewport && trajectoryList) {
    const trajectoryPin = trajectorySection.querySelector('.trajectory-pin');
    const trajectoryItems = [...trajectoryList.querySelectorAll('.trajectory-item')];
    let trajectoryScrollQueued = false;

    trajectorySection.classList.add('is-scroll-driven');

    function updateTrajectory() {
        const travelDistance = Math.max(0, trajectoryList.scrollWidth - trajectoryViewport.clientWidth);
        const scrollDistance = Math.max(1, trajectorySection.offsetHeight - trajectoryPin.offsetHeight);
        const progress = Math.max(0, Math.min(1, -trajectorySection.getBoundingClientRect().top / scrollDistance));

        trajectoryList.style.transform = `translate3d(${-travelDistance * progress}px, 0, 0)`;
        trajectoryList.style.setProperty('--trajectory-progress', progress);

        const activeIndex = Math.round(progress * Math.max(trajectoryItems.length - 1, 0));
        trajectoryItems.forEach((item, index) => {
            item.classList.toggle('is-past', index < activeIndex);
            item.classList.toggle('is-current', index === activeIndex);
        });
    }

    function queueTrajectoryUpdate() {
        if (trajectoryScrollQueued) return;
        trajectoryScrollQueued = true;
        requestAnimationFrame(() => {
            trajectoryScrollQueued = false;
            updateTrajectory();
        });
    }

    function resizeTrajectory() {
        const travelDistance = Math.max(0, trajectoryList.scrollWidth - trajectoryViewport.clientWidth);
        trajectorySection.style.setProperty('--trajectory-distance', `${travelDistance}px`);
        queueTrajectoryUpdate();
    }

    window.addEventListener('scroll', queueTrajectoryUpdate, { passive: true });
    window.addEventListener('resize', resizeTrajectory);
    window.addEventListener('load', resizeTrajectory, { once: true });
    document.fonts?.ready.then(resizeTrajectory);
    resizeTrajectory();
}

// Preencha estes valores para ativar os botões da seção de contato.
const contactDestinations = {
    email: '', // Ex.: guilherme@email.com
    whatsapp: '', // DDI + DDD + número, apenas dígitos. Ex.: 5511999999999
    resume: '' // Caminho relativo do currículo. Ex.: docs/curriculo.pdf
};

document.querySelectorAll('[data-contact-link]').forEach((link) => {
    const destinationType = link.dataset.contactLink;
    let href = '';

    if (destinationType === 'email' && contactDestinations.email) {
        href = `mailto:${contactDestinations.email}`;
    } else if (destinationType === 'whatsapp' && contactDestinations.whatsapp) {
        const phone = contactDestinations.whatsapp.replace(/\D/g, '');
        if (phone) href = `https://wa.me/${phone}`;
    } else if (destinationType === 'resume' && contactDestinations.resume) {
        href = contactDestinations.resume;
        link.setAttribute('download', '');
    }

    if (!href) return;

    link.href = href;
    link.removeAttribute('aria-disabled');
    link.removeAttribute('tabindex');

    if (destinationType === 'whatsapp') {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
    }
});

// Preencha os links abaixo para ativar os perfis nas redes sociais.
const socialProfiles = {
    instagram: '', // Ex.: https://www.instagram.com/seuusuario
    tiktok: '', // Ex.: https://www.tiktok.com/@seuusuario
    threads: '', // Ex.: https://www.threads.net/@seuusuario
    linkedin: '' // Ex.: https://www.linkedin.com/in/seuusuario
};

document.querySelectorAll('[data-social-link]').forEach((link) => {
    const profileUrl = socialProfiles[link.dataset.socialLink];
    if (!profileUrl) return;

    link.href = profileUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.removeAttribute('aria-disabled');
    link.removeAttribute('tabindex');
});

const currentYear = document.getElementById('current-year');
if (currentYear) currentYear.textContent = new Date().getFullYear();
