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
        titulo: "App de Trabalhos",
        descricao: "Pense no Linkedin, só para trabalhos como pedreiros, eletrcistas, garçom e muito mais. Com foco em serviços braçal",
        descricaoDetalhada: [
            { titulo: "O desafio", texto: "Exemplo de pedreiro, você depende do boca a boca para arrumar um pedreiro, ou ainda depende de cartazes para contratar pessoas para uma determinada tarefa, existe o linkedin mas é mais focado para outro tipo de situação." },
            { titulo: "A solução", texto: "Aqui foi criado uma rede tanto para quem procura serviço tanto para quem quer contratar mão de obra. Para quem procura serviço ou até mesmo extra consegue facílmente na palma da mão." },
            { titulo: "O que a plataforma oferece", texto: "Para quem quer contratar tanto serviço pessoal ou para sua empresa/negócio, tem acesso e pode anunciar vagas. O mesmo vale para quem está procurando um serviço fixo/temporário/extra, tem acesso a vagas e muito mais." }
        ],
        imgCapa: "img/imgProjetos/Aplicativo Bicos em destaque.png",
        imgDetalhe: "img/imgProjetos/Aplicativo Bicos no Smartphone.png",
        linkSite: "https://nivotechdev.github.io/Constru-o-Civil/mural",
        linkGithub: "https://github.com/nivotechdev/Constru-o-Civil"
    },

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
        titulo: "Base e Detalhamento",
        descricao: "Site estratégio para demonstração de serviço.",
        descricaoDetalhada: [
            { titulo: "O desafio", texto: "O serviço local tinha dificuldades para se colocar no google e na internet em si." },
            { titulo: "A solução", texto: "Uma criação de um site, com localização, demonstração de serviço, contatos tudo reunido num lugar só." },
            { titulo: "O que o site oferece", texto: "POsicionamento profissional, tipos de serviços que a empresa oferece, valores, mais detalhes sobre os serviços, localização e confiabilidade." }
        ],
        imgCapa: "img/imgProjetos/Base.png",
        imgDetalhe: "img/imgProjetos/Base2.png",
        linkSite: "https://base-site-indol.vercel.app/",
        linkGithub: "https://github.com/GuiFlorezz/Site-Base-detalhamento"
    },
    
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

// Defina como "docs/curriculo.pdf" quando o arquivo for adicionado ao projeto.
const resumeFile = 'docs/curriculo.pdf';
const resumePreview = document.getElementById('resume-preview');
const resumePending = document.getElementById('resume-pending');
const resumeDownload = document.getElementById('resume-download');

if (resumeFile) {
    resumePreview.src = resumeFile;
    resumePreview.hidden = false;
    resumePending.hidden = true;
    resumeDownload.href = resumeFile;
    resumeDownload.setAttribute('download', 'curriculo.pdf');
    resumeDownload.removeAttribute('aria-disabled');
    resumeDownload.removeAttribute('tabindex');
}
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
    email: 'guifloresvaldo@gmail.com', // Ex.: guilherme@email.com
    whatsapp: '5554991026542',
    whatsappMessage: 'Ol\u00e1, Guilherme! Gostaria de conversar sobre um projeto de programação de tecnologia.', // DDI + DDD + número, apenas dígitos. Ex.: 5511999999999
    resume: '' // Caminho relativo do currículo. Ex.: docs/curriculo.pdf
};

document.querySelectorAll('[data-contact-link]').forEach((link) => {
    const destinationType = link.dataset.contactLink;
    let href = '';

    if (destinationType === 'email' && contactDestinations.email) {
        href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactDestinations.email)}`;
    } else if (destinationType === 'whatsapp' && contactDestinations.whatsapp) {
        const phone = contactDestinations.whatsapp.replace(/\D/g, '');
        if (phone) href = `https://wa.me/${phone}?text=${encodeURIComponent(contactDestinations.whatsappMessage)}`;
    } else if (destinationType === 'resume' && contactDestinations.resume) {
        href = contactDestinations.resume;
        link.setAttribute('download', '');
    }

    if (!href) return;

    link.href = href;
    link.removeAttribute('aria-disabled');
    link.removeAttribute('tabindex');

    if (destinationType === 'whatsapp' || destinationType === 'email') {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
    }
});

// Preencha os links abaixo para ativar os perfis nas redes sociais.
const socialProfiles = {
    instagram: 'https://www.instagram.com/florezdev?obrf=ajN6MmNwZzB5NTJl&utm_source=qr', // Ex.: https://www.instagram.com/seuusuario
    tiktok: 'https://www.tiktok.com/@florez.dev?_r=1&_t=ZS-9AzLeUxeMAJ', // Ex.: https://www.tiktok.com/@seuusuario
    threads: 'https://www.threads.com/@euflorez_?igshid=NTc4MTIwNjQ2YQ==', // Ex.: https://www.threads.net/@seuusuario
    linkedin: 'https://www.linkedin.com/in/guilherme-flores-933b42302?utm_source=share_via&utm_content=profile&utm_medium=member_ios' // Ex.: https://www.linkedin.com/in/seuusuario
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
