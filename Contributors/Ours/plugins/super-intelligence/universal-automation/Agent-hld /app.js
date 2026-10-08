// ═══════════════════════════════════════════════════════════
// BRAND OS v3 — The Ecosystem Architecture
// ═══════════════════════════════════════════════════════════

// ─── 1. CORE ENGINE (Official Brand OS Agentic Infrastructure) ───
const CORE_DATA = {
  agents: {
    id: 'agents', title: 'AI Agents & Orchestration', desc: 'The official autonomous workers managing your brand infrastructure.',
    subCats: ['All', 'Leadership', 'Distribution', 'Intelligence', 'Sales'],
    tools: [
      { id: 'c-agt-1', name: 'Master God Agent', desc: 'Supreme orchestrator. Manages other agents and reads reports.', toolsUsed: 'All Tools', status: 'live', subCat: 'Leadership', icon: '👑' },
      { id: 'c-agt-2', name: 'Publisher Agent', desc: 'Distributes content queue across all channels automatically.', toolsUsed: 'Meta/Graph API', status: 'live', subCat: 'Distribution', icon: '📤' },
      { id: 'c-agt-3', name: 'Sales Closer Agent', desc: 'Qualifies leads and pushes pipeline deals.', toolsUsed: 'HubSpot', status: 'live', subCat: 'Sales', icon: '💰' },
    ]
  },
  support: {
    id: 'support', title: 'Customer Support', desc: 'Official customer retention and support systems.',
    subCats: ['All', 'Chatbots', 'Helpdesk'],
    tools: [
      { id: 'c-sup-1', name: 'Website Helpdesk AI', desc: 'Official chatbot trained exclusively on your domain and PDFs.', toolsUsed: 'Gemini 2.5 Flash', status: 'live', subCat: 'Chatbots', icon: '🤖' },
      { id: 'c-sup-2', name: 'Review Responder', desc: 'Auto-replies to Google and Facebook reviews.', toolsUsed: 'Gemini 2.5 Flash', status: 'live', subCat: 'Helpdesk', icon: '⭐' },
    ]
  },
  crm: {
    id: 'crm', title: 'Sales & CRM', desc: 'Pre-built lead funnels and proposal engines.',
    subCats: ['All', 'Lead Gen', 'Proposals'],
    tools: [
      { id: 'c-crm-1', name: 'Lead Qualifier Logic', desc: 'Scores incoming leads as hot/warm/cold from forms.', toolsUsed: 'Gemini 2.5 Pro', status: 'live', subCat: 'Lead Gen', icon: '🎯' },
      { id: 'c-crm-2', name: 'AI Proposal Writer', desc: 'Generates professional proposals and quotes from briefs.', toolsUsed: 'Sheets API', status: 'live', subCat: 'Proposals', icon: '📄' },
    ]
  }
};

// ─── 2. CORE PLUGINS (Public Content & Skills Marketplace) ───
const COMMUNITY_DATA = {
  image: {
    id: 'image', title: 'Image Studio', desc: 'Public generative AI nodes and workflows for visual creation.',
    subCats: ['All', 'Social Media', 'E-Commerce', 'Branding'],
    tools: [
      { id: 'pub-img-1', name: 'Ultra-Real Product Shot', desc: 'Generates mind-blowing product photography.', model: 'Nano Banana 2', status: 'live', subCat: 'E-Commerce', icon: '📸', author: '@Sagar.AI', clones: '14.2k', rating: 4.9 },
      { id: 'pub-img-2', name: 'Viral Thumbnail Creator', desc: 'High-CTR YouTube thumbnails with glowing text.', model: 'Ideogram 3', status: 'live', subCat: 'Social Media', icon: '📺', author: '@MrBeast_Strategy', clones: '8.9k', rating: 4.8 },
      { id: 'pub-img-3', name: 'Minimalist Logo Engine', desc: 'SVG brand marks and typography.', model: 'Recraft V4', status: 'live', subCat: 'Branding', icon: '✨', author: '@DesignGod', clones: '5.1k', rating: 4.7 }
    ]
  },
  video: {
    id: 'video', title: 'Video Studio', desc: 'Public video generation and editing nodes.',
    subCats: ['All', 'Short Form', 'Long Form'],
    tools: [
      { id: 'pub-vid-1', name: '10M View Hook Generator', desc: 'Creates TikTok hooks that paralyze the user.', model: 'Veo 3.1', status: 'live', subCat: 'Short Form', icon: '📱', author: '@TikTokSavant', clones: '22.1k', rating: 5.0 },
      { id: 'pub-vid-2', name: 'Faceless YouTube Engine', desc: '10-minute documentaries from a text prompt.', model: 'Kling 3.0', status: 'building', subCat: 'Long Form', icon: '▶️', author: '@CashCowFactory', clones: '1.2k', rating: 4.5 }
    ]
  },
  copy: {
    id: 'copy', title: 'Copy & Text', desc: 'Community-crafted NLP prompts and copywriting skills.',
    subCats: ['All', 'Email', 'Twitter'],
    tools: [
      { id: 'pub-txt-1', name: 'The Justin Welsh Thread', desc: '10-tweet thread structure that always goes viral.', model: 'Claude 3.5 Sonnet', status: 'live', subCat: 'Twitter', icon: '🧵', author: '@SaaSBuilder', clones: '35.6k', rating: 4.9 },
      { id: 'pub-txt-2', name: 'Cold Email B2B', desc: 'Gets a 40% reply rate on cold outbound.', model: 'Gemini 2.5 Pro', status: 'live', subCat: 'Email', icon: '✉️', author: '@SalesHacker', clones: '19.4k', rating: 4.8 }
    ]
  },
  audio: {
    id: 'audio', title: 'Audio & Music', desc: 'Public audio logic and generation blocks.',
    subCats: ['All', 'Voiceover', 'Music'],
    tools: [
      { id: 'pub-aud-1', name: 'Movie Trailer Voice', desc: 'Epic deep voiceover for video assets.', model: 'ElevenLabs', status: 'live', subCat: 'Voiceover', icon: '🎙️', author: '@AudioPro', clones: '4.3k', rating: 4.6 },
      { id: 'pub-aud-2', name: 'Lofi Chill Background', desc: 'Infinite stream audio generation.', model: 'Suno API', status: 'live', subCat: 'Music', icon: '🎧', author: '@VibeCheck', clones: '11.1k', rating: 4.7 }
    ]
  }
};

// ─── 3. GLOBAL PLUGINS (Private Clones & Custom Skills) ───
const PRIVATE_DATA = {
  plugins: {
    id: 'plugins', title: 'Global Plugins', desc: 'Tools you cloned from the Core Plugins.',
    subCats: ['All', 'Image Plugins', 'Text Plugins'],
    tools: [
      { id: 'glb-skl-1', name: 'Ultra-Real Product Shot', desc: '(Cloned from @Sagar.AI)', model: 'Nano Banana 2', status: 'private', subCat: 'Image Plugins', icon: '📸' },
      { id: 'glb-skl-2', name: 'The Justin Welsh Thread', desc: '(Cloned from @SaaSBuilder)', model: 'Claude 3.5', status: 'private', subCat: 'Text Plugins', icon: '🧵' },
    ]
  }
};

// ─── STATE ───
let activePillar = 'core'; // 'core', 'private', 'public', 'creator'
let activeMainCategory = 'agents';
let activeSubCategory = 'All';

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
  setupPillars();
  loadPillar('core');
});

// ─── PILLAR LOGIC (Header 1) ───
function setupPillars() {
  document.querySelectorAll('.pillar-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.pillar-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const pillar = e.currentTarget.getAttribute('data-pillar');
      loadPillar(pillar);
    });
  });
}

function loadPillar(pillar) {
  activePillar = pillar;

  const creatorView = document.getElementById('creator-view');
  const gridContainer = document.getElementById('grid-container');
  const viewTitle = document.getElementById('view-title');
  const viewDesc = document.getElementById('view-desc');
  const headerMain = document.getElementById('header-main');
  const headerSub = document.getElementById('header-sub');

  if (pillar === 'creator') {
    // Show Skill Creator Canvas
    creatorView.style.display = 'block';
    gridContainer.style.display = 'none';
    headerMain.style.display = 'none';
    headerSub.style.display = 'none';

    viewTitle.textContent = 'Plugin Creator';
    viewDesc.textContent = 'Drag, drop, and connect AI nodes to build custom logic.';

  } else {
    // Standard Grid Views
    creatorView.style.display = 'none';
    gridContainer.style.display = 'grid';
    headerMain.style.display = 'flex';
    headerSub.style.display = 'flex';

    let db;
    if (pillar === 'core') { db = CORE_DATA; activeMainCategory = Object.keys(db)[0]; }
    else if (pillar === 'public') { db = COMMUNITY_DATA; activeMainCategory = Object.keys(db)[0]; }
    else if (pillar === 'private') { db = PRIVATE_DATA; activeMainCategory = Object.keys(db)[0]; }

    activeSubCategory = 'All';
    renderMainHeader();
    renderSubHeader();
    updateViewHeader();
    renderContentGrid();
  }
}

// ─── RENDER MAIN HEADER ───
function renderMainHeader() {
  let db = getActiveDB();
  const mainNav = document.getElementById('main-nav');

  mainNav.innerHTML = Object.keys(db).map(key => {
    const isActive = key === activeMainCategory ? 'active' : '';
    const title = db[key].title;
    return `<button class="main-cat-btn ${isActive}" onclick="selectMainCategory('${key}')">${title}</button>`;
  }).join('');
}

// ─── HANDLE SELECTION ───
function selectMainCategory(key) {
  activeMainCategory = key;
  activeSubCategory = 'All';
  renderMainHeader();
  renderSubHeader();
  updateViewHeader();
  renderContentGrid();
}

function selectSubCategory(subCat) {
  activeSubCategory = subCat;
  renderSubHeader();
  renderContentGrid();
}

// ─── RENDER SUB HEADER ───
function renderSubHeader() {
  const db = getActiveDB();
  const subNav = document.getElementById('sub-nav');
  const catData = db[activeMainCategory];

  subNav.innerHTML = catData.subCats.map(sub => {
    const isActive = sub === activeSubCategory ? 'active' : '';
    return `<button class="sub-cat-btn ${isActive}" onclick="selectSubCategory('${sub}')">${sub}</button>`;
  }).join('');
}

function updateViewHeader() {
  const db = getActiveDB();
  const catData = db[activeMainCategory];
  document.getElementById('view-title').textContent = catData.title;
  document.getElementById('view-desc').textContent = catData.desc;
}

// ─── HELPER ───
function getActiveDB() {
  if (activePillar === 'core') return CORE_DATA;
  if (activePillar === 'public') return COMMUNITY_DATA;
  if (activePillar === 'private') return PRIVATE_DATA;
  return CORE_DATA;
}

// ─── RENDER GRID CONTENT ───
function renderContentGrid() {
  const grid = document.getElementById('grid-container');
  const db = getActiveDB();
  const catData = db[activeMainCategory];

  let toolsToRender = catData.tools;
  if (activeSubCategory !== 'All') {
    toolsToRender = toolsToRender.filter(t => t.subCat === activeSubCategory);
  }

  // Visual class based on public vs private
  let extraClass = activePillar === 'public' ? 'community-card' : '';

  grid.innerHTML = toolsToRender.map((tool, index) => {
    let statusClass = tool.status === 'live' ? 'status-live' :
      tool.status === 'building' ? 'status-building' : 'status-private';
    let statusLabel = tool.status === 'live' ? 'LIVE' :
      tool.status === 'building' ? 'BUILDING' : 'PRIVATE';

    let metaVal = tool.model ? tool.model : tool.toolsUsed;
    let metaLabel = tool.model ? 'Model: ' : 'Uses: ';
    let animDelay = `${index * 0.04}s`;

    // If it's the Community Hub, inject author and clones
    let communityStats = '';
    if (activePillar === 'public' && tool.author) {
      communityStats = `
        <div class="card-author">
           <div class="author-avatar" style="background:${stringToColor(tool.author)}"></div>
           ${tool.author}
        </div>
        <div class="tool-stats">⭐ ${tool.rating} | 📥 ${tool.clones} Clones</div>
      `;
    }

    return `
      <div class="tool-card ${extraClass}" style="animation-delay: ${animDelay}" onclick="openModal('${tool.id}')">
        <div class="card-header">
          <div class="card-icon">${tool.icon || '🛠️'}</div>
          <span class="card-status ${statusClass}">${statusLabel}</span>
        </div>
        
        <h3 class="card-title">${tool.name}</h3>
        ${communityStats}
        <p class="card-desc">${tool.desc}</p>
        
        <div class="card-meta">
          <span>${metaLabel} <span class="card-meta-model">${metaVal}</span></span>
        </div>
      </div>
    `;
  }).join('');
}

// ─── MODAL LOGIC ───
function openModal(toolId) {
  const db = getActiveDB();
  const catData = db[activeMainCategory];
  const tool = catData.tools.find(t => t.id === toolId);
  if (!tool) return;

  document.getElementById('modal-icon').textContent = tool.icon || '🛠️';
  document.getElementById('modal-title').textContent = tool.name;
  document.getElementById('modal-desc').textContent = tool.desc;

  // Author & Stats block (Only for Community)
  const authorBlock = document.getElementById('modal-author-block');
  const statsBlock = document.getElementById('modal-stats-block');
  const cloneBtn = document.getElementById('modal-action-2');
  const launchBtn = document.getElementById('modal-action');

  if (activePillar === 'public') {
    authorBlock.style.display = 'inline-flex';
    statsBlock.style.display = 'flex';
    document.getElementById('modal-author-name').textContent = 'By ' + tool.author;
    document.getElementById('modal-clones').textContent = tool.clones;
    document.getElementById('modal-rating').textContent = '⭐ ' + tool.rating;
    document.getElementById('modal-author-avatar').style.background = stringToColor(tool.author);

    // Buttons
    launchBtn.style.display = 'none';
    cloneBtn.style.display = 'block';
  } else {
    authorBlock.style.display = 'none';
    statsBlock.style.display = 'none';

    // Buttons
    launchBtn.style.display = 'block';
    cloneBtn.style.display = 'none';

    launchBtn.textContent = tool.status === 'building' ? 'In Development ⏳' : 'Launch Engine 🚀';
    launchBtn.style.opacity = tool.status === 'building' ? '0.5' : '1';
  }

  let metaVal = tool.model ? tool.model : tool.toolsUsed;
  document.getElementById('modal-model').textContent = metaVal;

  const statusEl = document.getElementById('modal-status');
  statusEl.textContent = tool.status.toUpperCase();
  statusEl.className = 'meta-tag status';

  if (tool.status === 'live') statusEl.style.color = '#81C784';
  else if (tool.status === 'private') statusEl.style.color = '#A78BFA';
  else statusEl.style.color = '#FFD54F';

  document.getElementById('modal-overlay').classList.add('active');
}

function stringToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
  return `hsl(${hash % 360}, 70%, 50%)`;
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
