// Datos de emojis
const emojiData = {
    categories: {
        recent: {
            title: "Usados frecuentemente",
            emojis: ["😎", "😂", "📱", "😄", "⚖️"]
        },
        people: {
            title: "Emoticonos y personas",
            emojis: ["😀", "😃", "😄", "😁", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😉"],
            keywords: {
                "😂": {
                    name: "Cara con lágrimas de alegría",
                    description: "Una cara amarilla con una sonrisa abierta y lágrimas de felicidad. Expresa que algo es tan gracioso que te hace llorar de risa.",
                    synonyms: [
                        "risa", "carcajada", "gracioso", "divertido", "jajaja",
                        "risas", "humor", "diversión", "chiste", "gracia",
                        "chistoso", "cómico", "buenísimo", "morirse de risa",
                        "partirse", "troncharse", "desternillarse", "reventarse"
                    ]
                }
            }
        },
        animals: {
            title: "Animales y naturaleza",
            emojis: ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼"]
        },
        food: {
            title: "Alimentos y bebidas",
            emojis: ["☕", "🍺", "🍷", "🍕", "🍔", "🍟", "🌮", "🌯"]
        },
        activities: {
            title: "Actividades",
            emojis: ["⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🏉", "🎱"]
        },
        travel: {
            title: "Viajes y lugares",
            emojis: ["🚗", "🚕", "🚙", "🚌", "🚎", "🏎", "🚓", "🚑"]
        },
        objects: {
            title: "Objetos",
            emojis: ["📱", "💻", "⌚", "📷", "📞", "💡", "🔋", "🔌"]
        },
        symbols: {
            title: "Símbolos",
            emojis: ["❤️", "💔", "💫", "⭐", "✨", "💥", "🔥", "💯"]
        },
        flags: {
            title: "Banderas",
            emojis: ["🏳️", "🏴", "🏁", "🚩", "🏳️‍🌈", "🏳️‍⚧️", "🇪🇸", "🇲🇽"]
        }
    }
};

// Estado de la aplicación
let recentEmojis = new Set(emojiData.categories.recent.emojis);

// Funciones de utilidad
function normalizeText(text) {
    return text.toLowerCase()
        .normalize("NFD")
        .replace(/[-]/g, "");
}

// Inicialización de la interfaz
function initializeCategories() {
    const container = document.querySelector('.emoji-categories');
    
    Object.entries(emojiData.categories).forEach(([key, category]) => {
        if (document.getElementById(`${key}Emojis`)) return;
        
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        categoryDiv.innerHTML = `
            <h3>${category.title}</h3>
            <div class="emoji-grid" id="${key}Emojis"></div>
        `;
        container.appendChild(categoryDiv);
        
        const grid = categoryDiv.querySelector('.emoji-grid');
        category.emojis.forEach(emoji => {
            const emojiDiv = document.createElement('div');
            emojiDiv.className = 'emoji-item';
            emojiDiv.textContent = emoji;
            emojiDiv.addEventListener('click', () => selectEmoji(emoji));
            grid.appendChild(emojiDiv);
        });
    });
}

// Manejo de emojis
function selectEmoji(emoji) {
    // Actualizar panel derecho
    document.querySelector('.selected-emoji').textContent = emoji;
    
    // Obtener datos del emoji
    const emojiInfo = emojiData.categories.people.keywords[emoji] || {
        name: "Emoji",
        description: "Descripción no disponible"
    };
    
    document.querySelector('.emoji-name').textContent = emojiInfo.name;
    document.querySelector('.emoji-description').textContent = emojiInfo.description;
    
    // Actualizar emojis recientes
    updateRecentEmojis(emoji);
}

function updateRecentEmojis(emoji) {
    recentEmojis.delete(emoji);
    recentEmojis.add(emoji);
    
    // Mantener solo los 5 más recientes
    if (recentEmojis.size > 5) {
        recentEmojis.delete([...recentEmojis][0]);
    }
    
    // Actualizar grid de recientes
    const recentGrid = document.getElementById('recentEmojis');
    recentGrid.innerHTML = '';
    [...recentEmojis].reverse().forEach(emoji => {
        const emojiDiv = document.createElement('div');
        emojiDiv.className = 'emoji-item';
        emojiDiv.textContent = emoji;
        emojiDiv.addEventListener('click', () => selectEmoji(emoji));
        recentGrid.appendChild(emojiDiv);
    });
}

// Búsqueda
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = normalizeText(e.target.value);
        
        Object.entries(emojiData.categories).forEach(([key, category]) => {
            const grid = document.getElementById(`${key}Emojis`);
            const items = grid.getElementsByClassName('emoji-item');
            
            Array.from(items).forEach(item => {
                const emoji = item.textContent;
                const emojiInfo = emojiData.categories.people.keywords[emoji];
                
                let shouldShow = false;
                if (emojiInfo) {
                    shouldShow = emojiInfo.synonyms.some(synonym => 
                        normalizeText(synonym).includes(searchTerm)
                    );
                }
                
                item.style.display = searchTerm === '' || shouldShow ? 'block' : 'none';
            });
        });
    });
}

// Copiar emoji
function setupCopyButton() {
    const copyButton = document.querySelector('.copy-button');
    copyButton.addEventListener('click', () => {
        const emoji = document.querySelector('.selected-emoji').textContent;
        navigator.clipboard.writeText(emoji).then(() => {
            const originalText = copyButton.textContent;
            copyButton.textContent = '¡Copiado!';
            setTimeout(() => {
                copyButton.innerHTML = `<span class="copy-icon">📋</span>Copiar`;
            }, 2000);
        });
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    initializeCategories();
    setupSearch();
    setupCopyButton();
});