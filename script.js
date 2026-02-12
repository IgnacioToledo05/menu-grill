const menuData = [
    {
        categoria: "🥗 ENTRADAS Y EMPANADAS",
        items: [
            { nombre: "Provoleta Clásica", precio: 9500, desc: "Queso fundido tradicional", sub: "PROVOLETAS", img: "https://i.pinimg.com/736x/38/43/66/384366118626d57802d04a453bee5eb2.jpg"},
            { nombre: "Provoleta Prosciutto", precio: 11500, desc: "Rúcula, parmesano y jamón crudo.", sub: "PROVOLETAS", img: "https://images.pexels.com/photos/17593640/pexels-photo-17593640/free-photo-of-comida-plato-restaurante-cena.jpeg?auto=compress&cs=tinysrgb&w=500" },
            { nombre: "Chorizo", precio: 5000, desc: "Chorizo de cerdo premium", sub: "ACHURAS", img: "https://i.pinimg.com/736x/09/ae/46/09ae46690ab224a8dfa45140608dff61.jpg" },
            { nombre: "Morcilla", precio: 5000, desc: "Morcilla bombón de campo", sub: "ACHURAS", img: "https://i.pinimg.com/736x/0b/9c/f9/0b9cf9686b4be43625fe3785537756de.jpg" }
        ]
    },
    {
        categoria: "🔥 NUESTRA PARRILLA",
        items: [
            { nombre: "Clásica para 2", precio: 45000, desc: "Chorizo, morcilla, chinchulines, cerdo, asado banderita y pollo.", sub: "PARRILLADAS", img: "https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg?auto=compress&cs=tinysrgb&w=500" },
            { nombre: "Alvear para 2", precio: 56000, desc: "Completa con vacío incluido.", sub: "PARRILLADAS", img: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=500" }
        ]
    },
    {
        categoria: "🥪 SANDWICHERÍA Y CHIVITOS",
        items: [
            { nombre: "Choripán con papas fritas", precio: 5000, desc: "Clásico argentino con fritas.", sub: "SANDWICHS", img: "https://i.pinimg.com/736x/94/e3/f4/94e3f42bef01be71f4a36bce89a3c9ca.jpg" },
            { nombre: "Chivito Canadiense", precio: 15000, desc: "Lomo, huevo frito, jamón, queso, panceta y fritas.", sub: "CHIVITOS", img: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=500" }
        ]
    },
    {
        categoria: "🍝 COCINA Y PASTAS",
        items: [
            { nombre: "Milanesa Napolitana", precio: 32000, desc: "Salsa de tomate, muzzarella y jamón con papas.", sub: "MINUTAS", img: "https://i.pinimg.com/1200x/c9/7c/e3/c97ce3b2a20b76bf5dadb1b6e6460635.jpg" },
            { nombre: "Ñoquis", precio: 6000, desc: "Pasta de papa artesanal.", sub: "PASTAS", img: "https://i.pinimg.com/1200x/75/f1/b0/75f1b0a4919fd800f399de44a7dcbabe.jpg" }
        ]
    },
    {
        categoria: "🍰 POSTRES Y HELADOS",
        items: [
            { nombre: "Flan Mixto", precio: 5000, desc: "Con crema y dulce de leche.", sub: "POSTRES", img: "https://i.pinimg.com/1200x/ee/15/da/ee15dae9ff7b702c8046b1f85d884627.jpg" }
        ]
    },
    {
        categoria: "🥤 BEBIDAS",
        items: [
            { nombre: "Agua sin gas 500ml", precio: 2500, desc: "Mineral natural", sub: "GASEOSAS", img: "https://i.pinimg.com/1200x/97/a4/9a/97a49a2225ed1337b2b7183718d55609.jpg" },
            { nombre: "Gaseosa 500cc", precio: 3500, desc: "Línea Coca Cola", sub: "GASEOSAS", img: "https://i.pinimg.com/736x/74/16/f4/7416f4766832f20da4f7fa3bf2908d8a.jpg" },
            { nombre: "Heineken", precio: 9000, desc: "Cerveza porrón premium", sub: "CERVEZAS", img: "https://i.pinimg.com/736x/fa/9e/89/fa9e8965c41f027cba5530ed1a8700f1.jpg" },
            { nombre: "Amstel 1lts", precio: 7200, desc: "Cerveza rubia familiar", sub: "CERVEZAS", img: "https://i.pinimg.com/736x/55/44/03/554403190b11a9848e8c4203937cfef0.jpg" }
        ]
    }
];

// Lógica para mostrar los platos
const nav = document.getElementById('categories-nav');
const grid = document.getElementById('menu-grid');

function renderMenu(categoryIndex) {
    const data = menuData[categoryIndex];
    document.getElementById('category-title').innerText = data.categoria;
    
    let currentSub = "";
    grid.innerHTML = data.items.map(item => {
        let subHeader = "";
        if (item.sub !== currentSub) {
            currentSub = item.sub;
            subHeader = `<h3 class="sub-category-title">${currentSub}</h3>`;
        }
        return `
            ${subHeader}
            <div class="card">
                <img src="${item.img}" alt="${item.nombre}" onerror="this.src='https://via.placeholder.com/500x300?text=Fuego+y+Sabor'">
                <div class="card-content">
                    <h3>${item.nombre}</h3>
                    <p>${item.desc}</p>
                    <p class="card-price">$${item.precio.toLocaleString('es-AR')}</p>
                </div>
            </div>
        `;
    }).join('');
}

menuData.forEach((cat, index) => {
    const btn = document.createElement('button');
    btn.className = 'category-btn';
    btn.innerText = cat.categoria;
    btn.onclick = () => {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderMenu(index);
    };
    nav.appendChild(btn);
});

renderMenu(0);
document.querySelector('.category-btn').classList.add('active');