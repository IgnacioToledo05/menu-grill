const menuData = [
    {
        categoria: "🥗 ENTRADAS Y EMPANADAS",
        items: [
            { nombre: "Provoleta Clásica", precio: 9500, desc: "Queso fundido tradicional", sub: "PROVOLETAS", img: "https://images.pexels.com/photos/5639534/pexels-photo-5639534.jpeg?auto=compress&cs=tinysrgb&w=500" },
            { nombre: "Provoleta Prosciutto", precio: 11500, desc: "Rúcula, parmesano y jamón crudo.", sub: "PROVOLETAS", img: "https://images.pexels.com/photos/17593640/pexels-photo-17593640/free-photo-of-comida-plato-restaurante-cena.jpeg?auto=compress&cs=tinysrgb&w=500" },
            { nombre: "Chorizo", precio: 5000, desc: "Chorizo de cerdo premium", sub: "ACHURAS", img: "https://images.pexels.com/photos/12313626/pexels-photo-12313626.jpeg?auto=compress&cs=tinysrgb&w=500" }
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
        categoria: "🥪 SANDWICHERÍA",
        items: [
            { nombre: "Choripán con papas", precio: 5000, desc: "Clásico argentino", sub: "SANDWICHS", img: "https://images.pexels.com/photos/12330836/pexels-photo-12330836.jpeg?auto=compress&cs=tinysrgb&w=500" },
            { nombre: "Chivito Canadiense", precio: 15000, desc: "Lomo, huevo, jamón, queso y papas.", sub: "CHIVITOS", img: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=500" }
        ]
    }
];

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
                <img src="${item.img}" alt="${item.nombre}" onerror="this.src='https://via.placeholder.com/500x300?text=Grill+Fuego+y+Sabor'">
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