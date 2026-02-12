const menuData = [
    {
        categoria: "🥗 ENTRADAS Y EMPANADAS",
        items: [
            { nombre: "Provoleta Clásica", precio: 9500, desc: "Queso fundido tradicional", sub: "EMPANADAS", img: "https://images.pexels.com/photos/5639534/pexels-photo-5639534.jpeg?auto=compress&cs=tinysrgb&w=500" },
            { nombre: "Provoleta Prosciutto", precio: 11500, desc: "Rúcula, parmesano y jamón crudo.", sub: "EMPANADAS", img: "https://images.pexels.com/photos/17593640/pexels-photo-17593640/free-photo-of-comida-plato-restaurante-cena.jpeg?auto=compress&cs=tinysrgb&w=500" },
            { nombre: "Chorizo", precio: 5000, desc: "Chorizo de cerdo premium", sub: "ACHURAS", img: "https://images.pexels.com/photos/8522204/pexels-photo-8522204.jpeg?auto=compress&cs=tinysrgb&w=500" },
            { nombre: "Morcilla", precio: 5000, desc: "Morcilla bombón", sub: "ACHURAS", img: "https://images.pexels.com/photos/12313626/pexels-photo-12313626.jpeg?auto=compress&cs=tinysrgb&w=500" }
        ]
    },
    {
        categoria: "🔥 NUESTRA PARRILLA",
        items: [
            { nombre: "Clásica para 2", precio: 45000, desc: "Chorizo, morcilla, chinchulines, cerdo, asado banderita y pollo.", sub: "PARRILLADAS", img: "https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg?auto=compress&cs=tinysrgb&w=500" },
            { nombre: "Alvear para 2", precio: 56000, desc: "Chorizo, morcilla, chinchulines, cerdo, asado banderita, pollo y vacio.", sub: "PARRILLADAS", img: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=500" }
        ]
    },
    {
        categoria: "🥪 SANDWICHERÍA Y CHIVITOS",
        items: [
            { nombre: "Choripán con papas fritas", precio: 5000, desc: "Clásico con fritas", sub: "SANDWICHS", img: "https://images.pexels.com/photos/12330836/pexels-photo-12330836.jpeg?auto=compress&cs=tinysrgb&w=500" },
            { nombre: "Morcipan con papas fritas", precio: 5000, desc: "Morcilla en pan con fritas", sub: "SANDWICHS", img: "https://images.pexels.com/photos/6304313/pexels-photo-6304313.jpeg?auto=compress&cs=tinysrgb&w=500" },
            { nombre: "Chivito Clásico", precio: 14000, desc: "Lomo, huevo frito, jamón, queso, lechuga y tomate.", sub: "CHIVITO URUGUAYO", img: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=500" },
            { nombre: "Chivito Canadiense", precio: 15000, desc: "Lomo, huevo frito, jamón, queso, panceta, morrones, lechuga y tomate.", sub: "CHIVITO URUGUAYO", img: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=500" }
        ]
    },
    {
        categoria: "🍝 COCINA Y PASTAS",
        items: [
            { nombre: "Milanesa ternera con papas", precio: 30000, desc: "Con guarnición de papas fritas", sub: "MINUTAS", img: "https://images.pexels.com/photos/13522730/pexels-photo-13522730.jpeg?auto=compress&cs=tinysrgb&w=500" },
            { nombre: "Milanesa napolitana", precio: 32000, desc: "Salsa de tomate, muzzarella, jamón y papas fritas.", sub: "MINUTAS", img: "https://images.pexels.com/photos/11267597/pexels-photo-11267597.jpeg?auto=compress&cs=tinysrgb&w=500" },
            { nombre: "Risotto verde funghi", precio: 12500, desc: "Arroz cremoso con hongos", sub: "COMIDAS DE OLLA", img: "https://images.pexels.com/photos/18283533/pexels-photo-18283533.jpeg?auto=compress&cs=tinysrgb&w=500" },
            { nombre: "Lentejas", precio: 10500, desc: "Guiso casero tradicional", sub: "COMIDAS DE OLLA", img: "https://images.pexels.com/photos/6005474/pexels-photo-6005474.jpeg?auto=compress&cs=tinysrgb&w=500" },
            { nombre: "Ñoquis", precio: 6000, desc: "Pasta de papa artesanal", sub: "PASTAS", img: "https://images.pexels.com/photos/7649265/pexels-photo-7649265.jpeg?auto=compress&cs=tinysrgb&w=500" },
            { nombre: "Boloñesa", precio: 4200, desc: "Salsa de carne tradicional", sub: "SALSAS", img: "https://images.pexels.com/photos/14737/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500" }
        ]
    },
    {
        categoria: "🍃 VEGGIE Y SALUDABLE",
        items: [
            { nombre: "Ensalada mixta", precio: 5000, desc: "Lechuga, tomate y cebolla", sub: "ENSALADAS", img: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=500" },
            { nombre: "Rúcula y parmesano", precio: 6000, desc: "Fresca con escamas de queso", sub: "ENSALADAS", img: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=500" }
        ]
    },
    {
        categoria: "👶 MENÚ INFANTIL",
        items: [
            { nombre: "Ñoquis con salsa", precio: 12500, desc: "Porción para niños", sub: "INFANTIL", img: "https://images.pexels.com/photos/7649265/pexels-photo-7649265.jpeg?auto=compress&cs=tinysrgb&w=500" },
            { nombre: "Tallarines con salsa", precio: 12500, desc: "Porción para niños", sub: "INFANTIL", img: "https://images.pexels.com/photos/14737/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500" }
        ]
    },
    {
        categoria: "🍰 POSTRES Y HELADOS",
        items: [
            { nombre: "Flan Mixto", precio: 5000, desc: "Con crema y dulce de leche", sub: "POSTRES CLASICOS", img: "https://images.pexels.com/photos/6061614/pexels-photo-6061614.jpeg?auto=compress&cs=tinysrgb&w=500" },
            { nombre: "Copa Fuego", precio: 7500, desc: "Whisky, helado americana, crema, nueces y Charlot.", sub: "COPA HELADAS", img: "https://images.pexels.com/photos/1352251/pexels-photo-1352251.jpeg?auto=compress&cs=tinysrgb&w=500" },
            { nombre: "Dulce de Leche", precio: 2500, desc: "Helado artesanal", sub: "HELADOS", img: "https://images.pexels.com/photos/1352251/pexels-photo-1352251.jpeg?auto=compress&cs=tinysrgb&w=500" }
        ]
    },
    {
        categoria: "🥤 BEBIDAS",
        items: [
            { nombre: "Gaseosa 500cc", precio: 3500, desc: "Línea Coca Cola", sub: "GASEOSAS", img: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=500" },
            { nombre: "Heineken", precio: 9000, desc: "Cerveza porrón premium", sub: "CERVEZAS", img: "https://images.pexels.com/photos/1672304/pexels-photo-1672304.jpeg?auto=compress&cs=tinysrgb&w=500" }
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
                <img src="${item.img}" alt="${item.nombre}">
                <div class="card-content">
                    <h3>${item.nombre}</h3>
                    <p>${item.desc}</p>
                    <p class="card-price">$${item.precio.toLocaleString('es-AR')}</p>
                </div>
            </div>
        `;
    }).join('');
}

// Generar botones de categorías
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

// Inicializar
renderMenu(0);
document.querySelector('.category-btn').classList.add('active');