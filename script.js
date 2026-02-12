// Base de datos en formato JSON
const menuData = [
    {
        categoria: "🥗 ENTRADAS Y EMPANADAS",
        items: [
            { nombre: "Provoleta Clásica", precio: 9500, desc: "Queso provolone fundido", img: "https://images.unsplash.com/photo-1574041419445-44b4977ce947?q=80&w=500" },
            { nombre: "Provoleta Prosciutto", precio: 11500, desc: "Rúcula, parmesano y jamón crudo.", img: "https://images.unsplash.com/photo-1539755530862-015a4235a62a?q=80&w=500" }
        ]
    },
    {
        categoria: "🔥 NUESTRA PARRILLA",
        items: [
            { nombre: "Clásica para 2", precio: 45000, desc: "Chorizo, morcilla, chinchulines, cerdo, asado banderita y pollo.", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500" },
            { nombre: "Alvear para 2", precio: 56000, desc: "Completa con vacío incluido.", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=500" }
        ]
    }
    // Agregar el resto de categorías aquí siguiendo el mismo formato...
];

const nav = document.getElementById('categories-nav');
const grid = document.getElementById('menu-grid');
const title = document.getElementById('category-title');

function renderMenu(categoryIndex) {
    const data = menuData[categoryIndex];
    title.innerText = data.categoria;
    grid.innerHTML = data.items.map(item => `
        <div class="card">
            <img src="${item.img}" alt="${item.nombre}">
            <div class="card-content">
                <h3>${item.nombre}</h3>
                <p>${item.desc}</p>
                <p class="card-price">$${item.precio.toLocaleString()}</p>
            </div>
        </div>
    `).join('');
}

// Cargar botones de categorías
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

// Cargar por defecto la primera
renderMenu(0);