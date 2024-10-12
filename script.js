// Dados de exemplo (substitua por seus dados reais)
const videos = [
    { id: 1, title: "Jogo 1 - 10/10/2024", url: "https://youtu.be/wyfqauWZaxI?si=JuqcP6AY1f_aEey1", download: "https://www.icloud.com/iclouddrive/06eUzwvA1UeLPM7ie81nRvQSA#Gui" },
    { id: 2, title: "Jogo 2 - 17/10/2024", url: "https://www.youtube.com/watch?v=MDc9nkbskbw&list=PL5qGMSjkK_H0ivCQayg6cf6yXzJyCedss" },
    // Adicione mais vídeos conforme necessário
];

function loadVideoList() {
    const videoList = document.getElementById('video-list');
    videoList.innerHTML = videos.map(video => `
        <div class="video-item" onclick="selectVideo(${video.id})">
            ${video.title}
        </div>
    `).join('');
}

function selectVideo(id) {
    const video = videos.find(v => v.id === id);
    const mainContent = document.getElementById('main-content');
    
    switch(currentMode) {
        case 'watch':
            mainContent.innerHTML = `
                <h2>${video.title}</h2>
                <iframe width="100%" height="500" src="${video.url}" frameborder="0" allowfullscreen></iframe>
            `;
            break;
        case 'download':
            mainContent.innerHTML = `
                <h2>${video.title}</h2>
                <p>Link para download: <a href="${video.download}" target="_blank">Clique aqui</a></p>
            `;
            break;
        case 'edit':
            mainContent.innerHTML = `
                <h2>${video.title}</h2>
                <p>Ferramentas de edição serão implementadas aqui.</p>
            `;
            break;
    }
}

let currentMode = 'watch';

const modeTexts = {
    'watch': 'assistir',
    'download': 'baixar',
    'edit': 'editar'
};

function loadContent(mode) {
    currentMode = mode;
    const mainContent = document.getElementById('main-content');
    const displayText = modeTexts[mode] || mode;
    mainContent.innerHTML = `<h2>Selecione um vídeo para ${displayText}</h2>`;
}

function loadAdminArea() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <h2>Área de Administradores</h2>
        <p>Esta área é de acesso apenas aos administradores do site. Faça login abaixo</p>
        <form id="admin-login-form">
            <input type="text" id="username" placeholder="Usuário" required>
            <input type="password" id="password" placeholder="Senha" required>
            <button type="submit">Login</button>
        </form>
    `;

    document.getElementById('admin-login-form').addEventListener('submit', handleAdminLogin);
}

function loadAdminDashboard() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <h2>Painel de Administração</h2>
        <button onclick="loadNewVideoForm()">Enviar novo vídeo</button>
        <button onclick="loadEditVideoList()">Editar vídeo existente</button>
    `;
}

function loadNewVideoForm() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <h2>Enviar Novo Vídeo</h2>
        <form id="new-video-form">
            <input type="text" id="side" placeholder="Lado do Campo" required>
            <input type="date" id="date" required>
            <input type="text" id="sequence" placeholder="Sequência do Vídeo" required>
            <input type="url" id="youtube-link" placeholder="Link do YouTube" required>
            <input type="url" id="compressed-file" placeholder="URL do arquivo no Drive" required>
            <button type="submit">Enviar</button>
        </form>
    `;

    document.getElementById('new-video-form').addEventListener('submit', handleNewVideoSubmit);
}

function loadEditVideoList() {
    // Simular uma lista de vídeos (substitua por dados reais do backend)
    const videos = [
        { id: 1, title: 'Vídeo 1' },
        { id: 2, title: 'Vídeo 2' },
        { id: 3, title: 'Vídeo 3' }
    ];

    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <h2>Selecione o vídeo que deseja editar</h2>
        <input type="text" id="video-search" placeholder="Buscar vídeo">
        <ul id="video-list">
            ${videos.map(video => `<li onclick="loadEditVideoForm(${video.id})">${video.title}</li>`).join('')}
        </ul>
    `;

    document.getElementById('video-search').addEventListener('input', handleVideoSearch);
}



// Carregar a lista de vídeos quando a página for carregada
window.onload = loadVideoList;