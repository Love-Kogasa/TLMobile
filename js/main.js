document.addEventListener('DOMContentLoaded', async () => {
    // 加载mod数据
    const modData = await fetchModData();

    // 获取DOM元素
    const searchInput = document.getElementById('modsearch');
    const searchResults = document.getElementById('search-results');
    const menuButton = document.getElementById('menu-button');
    const navDrawer = document.getElementById('nav-drawer');

    // 搜索功能
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        searchResults.innerHTML = '';

        if (query.length > 0) {
            const results = searchMods(query, modData);

            if (results.length > 0) {
                results.forEach(mod => {
                    const modCard = createModCard(mod);
                    searchResults.appendChild(modCard);
                });
                searchResults.classList.add('search-results--visible');
            } else {
                showNoResults(searchResults);
            }
        } else {
            searchResults.classList.remove('search-results--visible');
        }
    });

    // 点击外部关闭搜索结果
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('search-results--visible');
        }
    });

    // 导航抽屉切换
    menuButton.addEventListener('click', toggleNavDrawer);

    // 点击外部关闭导航抽屉
    document.addEventListener('click', (e) => {
        if (!menuButton.contains(e.target) && !navDrawer.contains(e.target)) {
            navDrawer.classList.remove('nav-drawer--open');
        }
    });
});

// 从服务器获取mod数据
async function fetchModData() {
    try {
        const response = await fetch('data/mods.json');
        return await response.json();
    } catch (error) {
        console.error('加载mod数据失败:', error);
        return [];
    }
}

// 搜索mods
function searchMods(query, mods) {
    return mods.filter(mod => {
        // 搜索名称、作者、描述
        return (
            mod.name.toLowerCase().includes(query) ||
            (mod.writer && mod.writer.toLowerCase().includes(query)) ||
            mod.description.toLowerCase().includes(query)
        );
    });
}

// 创建mod卡片
function createModCard(mod) {
    const modCard = document.createElement('div');
    modCard.className = 'mod-card';
    modCard.innerHTML = `
    <img src="${mod.icon || 'imgs/default-mod.png'}" 
         class="mod-card__image" 
         onerror="this.src='imgs/default-mod.png'" alt="">
    <div class="mod-card__info">
      <div class="mod-card__name">${mod.name}</div>
      <div class="mod-card__author">${mod.writer || '未知作者'}</div>
    </div>
  `;
    modCard.addEventListener('click', () => {
        window.location.href = mod.link || '#';
    });
    return modCard;
}

// 显示无结果
function showNoResults(container) {
    const noResults = document.createElement('div');
    noResults.className = 'mod-card';
    noResults.innerHTML = `
    <div class="mod-card__info">
      <div class="mod-card__name">未找到匹配的mod</div>
      <div class="mod-card__author">请尝试其他关键词</div>
    </div>
  `;
    container.appendChild(noResults);
    container.classList.add('search-results--visible');
}

// 切换导航抽屉
function toggleNavDrawer() {
    const navDrawer = document.getElementById('nav-drawer');
    navDrawer.classList.toggle('nav-drawer--open');
}