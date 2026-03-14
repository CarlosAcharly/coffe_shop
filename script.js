// script.js

// --- MODELO DE DATOS (Estado de la Aplicación) ---
let productos = [
    // Café
    { id: 'c1', nombre: 'Espresso Clásico', descripcion: 'Café intenso y con cuerpo.', precio: 3.50, categoria: 'cafe', imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7-GMraX0gi1-oHUuqQzWFkvqlT1NmGV3Gzt_WOW2DYUSrTv0rVw9lcNq8M1eym003nnR9K_0HTdAtWkVksxSa4zE-wcM13KNk9gF_xBmXxIbU_hsF9pyY1gEu-CzZyT01g-XJoFmYoaPu-QKo6aYYCfXUJwq_mZT2W6Isd26BCZGgAA_Cg5PVKC22mI0DcLyslfY8ZWtXo6l8P9T__YDUtaIoPYVGBMSrpeRzP_SVEmYoJpZgDw20n8APiv6bQ-K8WOeBKw_XYsU' },
    { id: 'c2', nombre: 'Latte Cremoso', descripcion: 'Espresso suave con leche vaporizada.', precio: 4.75, categoria: 'cafe', imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2xQXi6hA5kNmQt_BKGOWfZKIVNQuESGWYk_co-Lnib9eyY7ccImu20pgRxKRbgVfmPZBM9Os3CyWT7rUp5BUrYrkMYm088I67bYB3_rvqkIDCHVkixU_EtEGrVomiB85gmKfBIMiPOtVDXZNkABtWyMTqjmyFO0cYglbxhsk8qyzNvPemDBeTTxJjoHKkxKSbWr1XB_zdHf7Ubl221h4ztd2SYgZcwHlQ1fyXTMONG2fDk7He7VGmiVh2n59rW-t10UR7V698ltQ' },
    { id: 'c3', nombre: 'Cappuccino', descripcion: 'Partes iguales de espresso, leche y espuma.', precio: 4.25, categoria: 'cafe', imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABBQ1SVwP_R7HYDL7Dk2H1C67JfAz1d64eQmbuF3DavfuiSHcAxRNOUjQlHiqzLC7a6YikPE7UK51hOMh7DcfVAPB910Lbi7rS4_L0UDu_6EeOxp5s7gY7dzNC4LUXMFqOqg4Ken-Vr1DGA2mRMWpYe7sD8vFBcldbgjLKkL41lKIMXAuIf8oRTpqaQy3hJz9MhBF0mkl7tfnlCl4Kg9M_Gyi-860TjUhD4WzHMJxppHMja3VufhV5WuSxjInD88TeHY3_ptjxvno' },
    { id: 'c4', nombre: 'Caramel Macchiato', descripcion: 'Leche fresca con jarabe de vainilla y caramelo.', precio: 5.50, categoria: 'cafe', imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyjkmUyIxSHMcq5UHUgrfy52oVIzUbzV7QE6bmwCILP0x844UE3AVaxIQ3DoVEray8TSuEjwuqwTkRvQCiQvm1Vd0zbt2YEGKByDehs0T1CdO0A2Ln69ve8dgfHaMctbokUD9dfvdYf6Ape8VuTFMl_JsglH7jUCg_lqKLr5t9f5LgbChL02QH8ShL2iE3_ERSaVvkdj-wpdfLlo6NXpc-DbiSFr_MvQS5jA2s_azFGaO0zylOGFYVUEYERgQ0x5BHo5nX4_fE9kU' },
    // Repostería
    { id: 'p1', nombre: 'Croissant de Almendra', descripcion: 'Hojaldrado, mantecoso y relleno de crema de almendra.', precio: 3.75, categoria: 'reposteria', imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqd6PUZ-XegvW5J7HstufPD3lAL33cUEDbVJ-8iIkENlODpBA0q96SN8mH3ygdSK4hqE8K-uDN6hz-rIeBf742douEccSwDQYNtvzxpVuTmwJFjzab5Xn-ohFNn08iCDPsnLWk2QNo1ICXPegWkxplzn9HmIFAGH2W7OYmcpJFL4nfOR8oaHiWTMJhKgthBJRpr46dACTPp7FaUqG6Cez2trqhcbD8oODjGugfgcNIVqUyEw8tq3DTA8VVxY4_rhsEMhu2Pmatw8c' },
    { id: 'p2', nombre: 'Croissant de Chocolate', descripcion: 'Masa hojaldrada rellena de chocolate.', precio: 4.25, categoria: 'reposteria', imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGhAlyn7wW0fpHOgghzW9MsK0AR3TCGD8JF0QAZjK3FfalKqFZvE_JzG3ImgIE_g74lDWc8cgibtrKlhGOL8LHPbsoIDV7TItQADVRlB24v3YwPI5iJL8b2O8T9yyVjoXpUg4Bc_j8Vog490Qyz2y2qIpxSD7NrEA_u2xkPNnq79HurJzJ-7nx-GkUYRDS_PU0-G_7C6fwEYBlZoHXIRZJs89s_nW4JNmhfb3d_DwuJ0q5fvxJGqFAKmXLrMhWqFuQI_IKwALoFW4' },
    // Té
    { id: 't1', nombre: 'Té Verde Matcha', descripcion: 'Matcha ceremonial de alta calidad.', precio: 4.50, categoria: 'te', imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6ZJZolXOX3FL-ZGTth-hGGx_LPzL-7UmH3Umq4dWbYxIafv99g4MSWEBJYWSNzqvd_ghtyQEsTAHQCmFveVGo8m1vHipLxcvgnu6GN-Pamf3kUC0GloNEWpizA7kDqGNTE_wR056T3q4aunzngq4DcW6-sT-dqXD9m7fP4CUJtCssfJjSKPiNvWSq6R4t3SW8YH5KI7oQY3HwpdDq2qFjqaDUY3pexNAyo6iaNvQ8fwOxsEJGN14KXAC7kP0VydsucroxcmymG4w' },
];

// Carrito de compras
let carrito = JSON.parse(localStorage.getItem('coffeeCart')) || [];

// --- UTILIDADES ---
function guardarCarrito() {
    localStorage.setItem('coffeeCart', JSON.stringify(carrito));
}

function getTotalItemsCarrito() {
    return carrito.reduce((total, item) => total + item.cantidad, 0);
}

function formatearPrecio(precio) {
    return `$${precio.toFixed(2)}`;
}

// --- FUNCIÓN PARA ABRIR ADMIN (NUEVA) ---
window.abrirAdmin = function() {
    window.location.href = 'admin.html';
};

// --- FUNCIÓN PARA RENDERIZAR LA BARRA DE NAVEGACIÓN (ÚNICA Y CORREGIDA) ---
function renderNavBar(pantallaActiva) {
    return `
        <nav class="fixed bottom-0 left-0 right-0 flex border-t border-primary/10 bg-background-light dark:bg-background-dark px-4 pb-6 pt-2 z-50" style="max-width: 448px; margin: 0 auto;">
            <a class="flex flex-1 flex-col items-center justify-center gap-1 ${pantallaActiva === 'inicio' ? 'text-primary' : 'text-slate-400 dark:text-slate-500 hover:text-primary transition-colors'}" href="#" onclick="irAPantalla('inicio'); return false;">
                <span class="material-symbols-outlined ${pantallaActiva === 'inicio' ? 'fill-1' : ''}">home</span>
                <p class="text-[10px] font-bold leading-normal uppercase tracking-wider">Inicio</p>
            </a>
            <a class="flex flex-1 flex-col items-center justify-center gap-1 ${pantallaActiva === 'menu' ? 'text-primary' : 'text-slate-400 dark:text-slate-500 hover:text-primary transition-colors'}" href="#" onclick="irAPantalla('menu'); return false;">
                <span class="material-symbols-outlined ${pantallaActiva === 'menu' ? 'fill-1' : ''}">coffee</span>
                <p class="text-[10px] font-bold leading-normal uppercase tracking-wider">Menú</p>
            </a>
            <a class="flex flex-1 flex-col items-center justify-center gap-1 ${pantallaActiva === 'carrito' ? 'text-primary' : 'text-slate-400 dark:text-slate-500 hover:text-primary transition-colors'}" href="#" onclick="irAPantalla('carrito'); return false;">
                <span class="material-symbols-outlined ${pantallaActiva === 'carrito' ? 'fill-1' : ''}">shopping_bag</span>
                <p class="text-[10px] font-bold leading-normal uppercase tracking-wider">Carrito</p>
            </a>
            <a class="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors" href="#" onclick="abrirAdmin(); return false;">
    <span class="material-symbols-outlined">admin_panel_settings</span>
    <p class="text-[10px] font-bold leading-normal uppercase tracking-wider">Admin</p>
</a>
        </nav>
    `;
}

// --- RENDERIZADO DE PANTALLAS ---
const pantallas = {
    // Pantalla de Inicio
    inicio: function() {
        const productosPopulares = productos.slice(0, 2);
        const totalItems = getTotalItemsCarrito();
        return `
            <!-- Header -->
            <header class="flex items-center bg-background-light dark:bg-background-dark p-4 justify-between sticky top-0 z-10 border-b border-primary/10">
                <div class="flex size-10 shrink-0 items-center overflow-hidden rounded-full border-2 border-primary/20">
                    <div class="bg-center bg-no-repeat aspect-square bg-cover w-full h-full" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDj9r3ZKAj5lRZW5sAr3Oq4z-4KMdGg7JNFnFj5kbAO6qYtka6BABtwD5yJ6iA4zO4HzWrQT_Nxzhdwhe4XyaNBARLEpUTDhbTjqih8IbkAWk9pLYL0Q2LfGnAFTBUs8FuSCTqWU80QvE9XupoMJy_x2IaC1kI6BAbZDJcg7NQvgd1l2lA8ob0g3ZOQKj2iopTBsVy7td6Uz3WPsgSL-kLor5nZDxx4QqBXXGEZzfWn--3WY_2tqkyxje6cWR-bVUGJT8nqXtnT3ew");'></div>
                </div>
                <h1 class="text-primary text-xl font-bold leading-tight tracking-[-0.015em] flex-1 text-center font-display">Cafetería XD</h1>
                <div class="flex w-10 items-center justify-end">
                    <button class="relative flex size-10 cursor-pointer items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20" onclick="irAPantalla('carrito')">
                        <span class="material-symbols-outlined">shopping_bag</span>
                        ${totalItems > 0 ? `<span class="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">${totalItems}</span>` : ''}
                    </button>
                </div>
            </header>

            <main class="flex-1 pb-24">
                <!-- Sección de Bienvenida -->
                <div class="flex p-4 @container">
                    <div class="flex w-full flex-col gap-1 items-start">
                        <h2 class="text-slate-900 dark:text-slate-100 text-2xl font-bold leading-tight tracking-tight">¡Hola, Alex!</h2>
                        <p class="text-primary font-medium text-base">¿Listo para tu dosis de cafeína?</p>
                    </div>
                </div>

                <!-- Barra de Búsqueda -->
                <div class="px-4 py-3">
                    <label class="flex flex-col min-w-40 h-12 w-full">
                        <div class="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
                            <div class="text-primary flex border-none bg-primary/5 items-center justify-center pl-4 rounded-l-xl border-r-0">
                                <span class="material-symbols-outlined">search</span>
                            </div>
                            <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-slate-900 dark:text-slate-100 focus:outline-0 focus:ring-0 border-none bg-primary/5 placeholder:text-slate-400 px-4 pl-2 text-base font-normal leading-normal" placeholder="Buscar café, té o postres" value=""/>
                        </div>
                    </label>
                </div>

                <!-- Sección de Categorías -->
                <div class="flex gap-4 overflow-x-auto px-4 py-4 no-scrollbar">
                    <div class="flex flex-col items-center gap-2 min-w-[72px]" onclick="irAPantalla('menu', 'cafe')">
                        <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                            <span class="material-symbols-outlined text-2xl">coffee</span>
                        </div>
                        <span class="text-xs font-semibold text-slate-700 dark:text-slate-300">Café</span>
                    </div>
                    <div class="flex flex-col items-center gap-2 min-w-[72px]" onclick="irAPantalla('menu', 'te')">
                        <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white dark:bg-background-dark border border-primary/20 text-primary transition-all active:scale-95">
                            <span class="material-symbols-outlined text-2xl">emoji_food_beverage</span>
                        </div>
                        <span class="text-xs font-semibold text-slate-700 dark:text-slate-300">Té</span>
                    </div>
                    <div class="flex flex-col items-center gap-2 min-w-[72px]" onclick="irAPantalla('menu', 'reposteria')">
                        <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white dark:bg-background-dark border border-primary/20 text-primary transition-all active:scale-95">
                            <span class="material-symbols-outlined text-2xl">bakery_dining</span>
                        </div>
                        <span class="text-xs font-semibold text-slate-700 dark:text-slate-300">Repostería</span>
                    </div>
                </div>

                <!-- Ofertas Destacadas -->
                <div class="mt-4">
                    <div class="flex items-center justify-between px-4 pb-3">
                        <h2 class="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight font-display">Ofertas Destacadas</h2>
                        <a class="text-primary text-sm font-semibold" href="#" onclick="irAPantalla('menu'); return false;">Ver todo</a>
                    </div>
                    <div class="flex gap-4 overflow-x-auto px-4 no-scrollbar">
                        <div class="min-w-[280px] bg-primary rounded-xl p-4 text-white relative overflow-hidden flex flex-col justify-between h-40">
                            <div class="relative z-10">
                                <p class="text-sm font-medium opacity-90">Especial del Día</p>
                                <h3 class="text-2xl font-bold mt-1">50% de descuento<br/>en tu primer Espresso</h3>
                            </div>
                            <button class="relative z-10 w-fit bg-white text-primary px-4 py-2 rounded-lg text-sm font-bold shadow-sm" onclick="irAPantalla('producto', 'c1')">Reclamar</button>
                            <div class="absolute -right-4 -bottom-4 opacity-20">
                                <span class="material-symbols-outlined text-[120px]">coffee_maker</span>
                            </div>
                        </div>
                        <div class="min-w-[280px] bg-background-dark dark:bg-slate-800 rounded-xl p-4 text-white relative overflow-hidden flex flex-col justify-between h-40 border border-white/10">
                            <div class="relative z-10">
                                <p class="text-sm font-medium opacity-90">Mañanas de Té</p>
                                <h3 class="text-2xl font-bold mt-1">Lleva 1 y<br/>el 2do es gratis en Tés</h3>
                            </div>
                            <button class="relative z-10 w-fit bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold" onclick="irAPantalla('menu', 'te')">Probar</button>
                            <div class="absolute -right-4 -bottom-4 opacity-20">
                                <span class="material-symbols-outlined text-[120px]">local_cafe</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Populares Cerca de Ti -->
                <div class="mt-8 px-4">
                    <h2 class="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight font-display mb-4">Populares Cerca de Ti</h2>
                    <div class="flex flex-col gap-4">
                        ${productosPopulares.map(p => `
                        <div class="flex gap-4 bg-white dark:bg-background-dark/50 p-3 rounded-xl border border-primary/5 items-center" onclick="irAPantalla('producto', '${p.id}')" style="cursor: pointer;">
                            <div class="h-20 w-20 rounded-lg bg-cover bg-center shrink-0" style="background-image: url('${p.imagen}');"></div>
                            <div class="flex flex-col flex-1">
                                <h4 class="font-bold text-slate-900 dark:text-slate-100">${p.nombre}</h4>
                                <p class="text-xs text-slate-500">${p.descripcion.substring(0, 30)}...</p>
                                <div class="flex items-center justify-between mt-2">
                                    <span class="font-bold text-primary">${formatearPrecio(p.precio)}</span>
                                    <div class="flex items-center gap-1 bg-primary/10 px-2 py-0.5 rounded text-primary text-xs font-bold">
                                        <span class="material-symbols-outlined text-xs">star</span> 4.8
                                    </div>
                                </div>
                            </div>
                        </div>
                        `).join('')}
                    </div>
                </div>
            </main>

            <!-- Navegación Inferior -->
            ${renderNavBar('inicio')}
        `;
    },

    // Menú de Productos
    menu: function(categoriaFiltro = 'todos') {
        let productosFiltrados = productos;
        if (categoriaFiltro !== 'todos') {
            productosFiltrados = productos.filter(p => p.categoria === categoriaFiltro);
        }
        const totalItems = getTotalItemsCarrito();
        
        const nombreCategoria = {
            'cafe': 'Café',
            'te': 'Té',
            'reposteria': 'Repostería',
            'todos': 'Todos los Productos'
        };

        return `
            <header class="sticky top-0 z-10 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-primary/10">
                <div class="text-primary flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 cursor-pointer" onclick="irAPantalla('inicio')">
                    <span class="material-symbols-outlined">arrow_back</span>
                </div>
                <h2 class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center">Nuestro Menú</h2>
                <div class="flex w-10 items-center justify-end">
                    <button class="relative flex items-center justify-center rounded-full h-10 w-10 bg-primary/10 text-primary" onclick="irAPantalla('carrito')">
                        <span class="material-symbols-outlined">shopping_cart</span>
                        ${totalItems > 0 ? `<span class="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white font-bold">${totalItems}</span>` : ''}
                    </button>
                </div>
            </header>

            <div class="px-4 py-4">
                <label class="flex flex-col w-full">
                    <div class="flex w-full items-stretch rounded-xl h-12 bg-slate-200/50 dark:bg-primary/5">
                        <div class="text-primary/60 flex items-center justify-center pl-4">
                            <span class="material-symbols-outlined">search</span>
                        </div>
                        <input class="form-input flex w-full border-none bg-transparent focus:ring-0 h-full placeholder:text-slate-500 dark:placeholder:text-slate-400 px-3 text-base font-normal" placeholder="Busca tu café favorito"/>
                    </div>
                </label>
            </div>

            <div class="flex gap-3 px-4 pb-4 overflow-x-auto no-scrollbar">
                <button class="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 ${categoriaFiltro === 'cafe' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-200 dark:bg-primary/10 text-slate-700 dark:text-slate-200'}" onclick="irAPantalla('menu', 'cafe')">
                    <span class="material-symbols-outlined text-sm">local_fire_department</span>
                    <p class="text-sm font-semibold">Café</p>
                </button>
                <button class="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 ${categoriaFiltro === 'te' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-200 dark:bg-primary/10 text-slate-700 dark:text-slate-200'}" onclick="irAPantalla('menu', 'te')">
                    <span class="material-symbols-outlined text-sm">ac_unit</span>
                    <p class="text-sm font-semibold">Té</p>
                </button>
                <button class="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 ${categoriaFiltro === 'reposteria' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-200 dark:bg-primary/10 text-slate-700 dark:text-slate-200'}" onclick="irAPantalla('menu', 'reposteria')">
                    <span class="material-symbols-outlined text-sm">bakery_dining</span>
                    <p class="text-sm font-semibold">Repostería</p>
                </button>
                <button class="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 ${categoriaFiltro === 'todos' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-200 dark:bg-primary/10 text-slate-700 dark:text-slate-200'}" onclick="irAPantalla('menu', 'todos')">
                    <span class="material-symbols-outlined text-sm">apps</span>
                    <p class="text-sm font-semibold">Todo</p>
                </button>
            </div>

            <div class="flex-1 px-4 space-y-4 pb-24">
                <h3 class="text-slate-900 dark:text-slate-100 text-xl font-bold tracking-tight capitalize">${nombreCategoria[categoriaFiltro] || categoriaFiltro}</h3>
                ${productosFiltrados.map(p => `
                <div class="flex items-center gap-4 bg-white dark:bg-white/5 p-3 rounded-2xl shadow-sm border border-slate-100 dark:border-white/10 cursor-pointer" onclick="irAPantalla('producto', '${p.id}')">
                    <div class="h-24 w-24 rounded-xl bg-cover bg-center shrink-0" style="background-image: url('${p.imagen}')"></div>
                    <div class="flex flex-col flex-1 justify-between h-24">
                        <div>
                            <h4 class="font-bold text-slate-900 dark:text-slate-100">${p.nombre}</h4>
                            <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">${p.descripcion}</p>
                        </div>
                        <div class="flex items-center justify-between">
                            <p class="text-primary font-bold text-lg">${formatearPrecio(p.precio)}</p>
                            <button class="bg-primary text-white p-2 rounded-lg flex items-center justify-center" onclick="event.stopPropagation(); agregarAlCarrito('${p.id}')">
                                <span class="material-symbols-outlined">add</span>
                            </button>
                        </div>
                    </div>
                </div>
                `).join('')}
            </div>

            ${renderNavBar('menu')}
        `;
    },

    // Detalle del Producto
    producto: function(productoId) {
        const producto = productos.find(p => p.id === productoId);
        if (!producto) return pantallas.inicio();
        const totalItems = getTotalItemsCarrito();

        return `
            <div class="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden pb-24">
                <!-- Barra Superior -->
                <div class="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
                    <div class="text-slate-900 dark:text-slate-100 flex size-12 shrink-0 items-center cursor-pointer" onclick="irAPantalla('menu')">
                        <span class="material-symbols-outlined text-2xl">arrow_back</span>
                    </div>
                    <h2 class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">${producto.nombre}</h2>
                    <div class="flex w-12 items-center justify-end">
                        <button class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-slate-900 dark:text-slate-100 gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
                            <div class="text-slate-900 dark:text-slate-100">
                                <span class="material-symbols-outlined text-2xl">favorite</span>
                            </div>
                        </button>
                    </div>
                </div>

                <!-- Imagen del Producto -->
                <div class="@container">
                    <div class="@[480px]:px-4 @[480px]:py-3">
                        <div class="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-background-light dark:bg-background-dark @[480px]:rounded-xl min-h-80" style='background-image: url("${producto.imagen}");'></div>
                    </div>
                </div>

                <!-- Título y Descripción -->
                <div class="px-4 pt-6">
                    <div class="flex justify-between items-start">
                        <h1 class="text-slate-900 dark:text-slate-100 tracking-light text-[32px] font-bold leading-tight text-left pb-2">${producto.nombre}</h1>
                        <span class="text-primary text-2xl font-bold pt-1">${formatearPrecio(producto.precio)}</span>
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pb-3 pt-1">
                        ${producto.descripcion}
                    </p>
                </div>

                <!-- Personalización: Tamaño -->
                <div class="px-4 pt-4">
                    <h3 class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] pb-3">Tamaño</h3>
                    <div class="flex gap-3">
                        <button class="flex-1 py-3 rounded-xl border-2 border-primary bg-primary/10 text-primary font-bold">Ch</button>
                        <button class="flex-1 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold hover:border-primary/50">M</button>
                        <button class="flex-1 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold hover:border-primary/50">G</button>
                    </div>
                </div>

                <!-- Personalización: Tipo de Leche -->
                <div class="px-4 pt-6">
                    <h3 class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] pb-3">Tipo de Leche</h3>
                    <div class="grid grid-cols-3 gap-3">
                        <button class="py-2 px-1 rounded-xl border-2 border-primary bg-primary/10 text-primary text-sm font-semibold">Entera</button>
                        <button class="py-2 px-1 rounded-xl border-2 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm font-semibold">Avena</button>
                        <button class="py-2 px-1 rounded-xl border-2 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm font-semibold">Almendra</button>
                    </div>
                </div>

                <!-- Shots Extra -->
                <div class="px-4 pt-6">
                    <div class="flex items-center justify-between pb-3">
                        <h3 class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em]">Shots de Espresso Extra</h3>
                        <span class="text-primary font-bold">+$0.80</span>
                    </div>
                    <div class="flex items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <span class="text-slate-700 dark:text-slate-300 font-medium">Agregar doble shot</span>
                        <div class="flex items-center gap-4">
                            <button class="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                                <span class="material-symbols-outlined text-xl">remove</span>
                            </button>
                            <span class="text-slate-900 dark:text-slate-100 font-bold">1</span>
                            <button class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                                <span class="material-symbols-outlined text-xl">add</span>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Info Nutricional -->
                <div class="px-4 pt-8 pb-4">
                    <div class="flex items-center gap-4 text-slate-500 dark:text-slate-500 text-sm">
                        <div class="flex items-center gap-1">
                            <span class="material-symbols-outlined text-sm">bolt</span>
                            <span>250 kcal</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <span class="material-symbols-outlined text-sm">coffee</span>
                            <span>150mg Cafeína</span>
                        </div>
                    </div>
                </div>

                <!-- Botón de Acción Inferior -->
                <div class="fixed bottom-0 left-0 right-0 p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800" style="max-width: 448px; margin: 0 auto;">
                    <button class="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2" onclick="agregarAlCarrito('${producto.id}')">
                        <span class="material-symbols-outlined">shopping_bag</span>
                        Añadir al Carrito • ${formatearPrecio(producto.precio)}
                    </button>
                </div>
            </div>
        `;
    },

    // Carrito y Checkout
    carrito: function() {
        let subtotal = 0;
        const itemsCarritoHTML = carrito.map(item => {
            const producto = productos.find(p => p.id === item.id);
            if (!producto) return '';
            const itemTotal = producto.precio * item.cantidad;
            subtotal += itemTotal;
            return `
                <div class="flex gap-4 items-center">
                    <div class="size-20 rounded-xl overflow-hidden shrink-0 bg-slate-200">
                        <img alt="${producto.nombre}" class="w-full h-full object-cover" src="${producto.imagen}" />
                    </div>
                    <div class="flex flex-col flex-1">
                        <div class="flex justify-between items-start">
                            <h4 class="font-bold">${producto.nombre}</h4>
                            <p class="font-bold text-primary">${formatearPrecio(producto.precio)}</p>
                        </div>
                        <p class="text-sm text-slate-500">Regular | Leche de Avena</p>
                        <div class="flex items-center gap-3 mt-2">
                            <button class="size-6 flex items-center justify-center rounded border border-primary/20 text-primary" onclick="actualizarCantidadCarrito('${item.id}', ${item.cantidad - 1}); event.stopPropagation();">
                                <span class="material-symbols-outlined text-sm">remove</span>
                            </button>
                            <span class="font-medium text-sm">${item.cantidad}</span>
                            <button class="size-6 flex items-center justify-center rounded bg-primary text-white" onclick="agregarAlCarrito('${item.id}'); event.stopPropagation();">
                                <span class="material-symbols-outlined text-sm">add</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        const costoEnvio = 2.50;
        const impuestos = subtotal * 0.08;
        const total = subtotal + costoEnvio + impuestos;

        return `
            <div class="relative flex min-h-screen w-full flex-col max-w-md mx-auto bg-background-light dark:bg-background-dark overflow-x-hidden">
                <!-- Header -->
                <div class="flex items-center p-4 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10 border-b border-primary/10">
                    <a class="text-slate-900 dark:text-slate-100 flex size-10 items-center justify-center rounded-full hover:bg-primary/10 transition-colors" href="#" onclick="irAPantalla('menu'); return false;">
                        <span class="material-symbols-outlined">arrow_back</span>
                    </a>
                    <h2 class="text-xl font-bold leading-tight tracking-tight flex-1 text-center pr-10">Checkout</h2>
                </div>

                ${carrito.length === 0 ? `
                    <div class="flex flex-col items-center justify-center flex-1 p-8 text-center">
                        <span class="material-symbols-outlined text-6xl text-primary/30 mb-4">shopping_cart</span>
                        <h3 class="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">Tu carrito está vacío</h3>
                        <p class="text-slate-500 mb-6">Parece que aún no has añadido nada.</p>
                        <button class="bg-primary text-white px-6 py-3 rounded-xl font-bold" onclick="irAPantalla('menu')">Ver Menú</button>
                    </div>
                ` : `
                    <div class="flex flex-col gap-6 p-4 pb-32">
                        <!-- Dirección de Entrega -->
                        <section>
                            <div class="flex items-center justify-between mb-3">
                                <h3 class="text-lg font-bold tracking-tight">Dirección de Entrega</h3>
                                <button class="text-primary text-sm font-semibold">Editar</button>
                            </div>
                            <div class="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                                <div class="flex items-center justify-center rounded-lg bg-primary text-white shrink-0 size-12">
                                    <span class="material-symbols-outlined">location_on</span>
                                </div>
                                <div class="flex flex-col justify-center overflow-hidden">
                                    <p class="font-bold text-base line-clamp-1">Casa</p>
                                    <p class="text-slate-600 dark:text-slate-400 text-sm line-clamp-1">Av. del Café 123, Ciudad</p>
                                </div>
                            </div>
                        </section>

                        <!-- Resumen del Pedido -->
                        <section>
                            <h3 class="text-lg font-bold tracking-tight mb-3">Resumen del Pedido</h3>
                            <div class="flex flex-col gap-4">
                                ${itemsCarritoHTML}
                            </div>
                        </section>

                        <!-- Método de Pago -->
                        <section>
                            <h3 class="text-lg font-bold tracking-tight mb-3">Método de Pago</h3>
                            <div class="flex flex-col gap-2">
                                <label class="flex items-center gap-4 p-4 rounded-xl border-2 border-primary bg-primary/5 cursor-pointer">
                                    <input checked="" class="hidden" name="payment" type="radio"/>
                                    <span class="material-symbols-outlined text-primary">credit_card</span>
                                    <div class="flex-1">
                                        <p class="font-bold text-sm">Visa terminada en 4242</p>
                                        <p class="text-xs text-slate-500">Vence 12/26</p>
                                    </div>
                                    <div class="size-5 rounded-full border-2 border-primary flex items-center justify-center">
                                        <div class="size-2.5 rounded-full bg-primary"></div>
                                    </div>
                                </label>
                            </div>
                        </section>

                        <!-- Desglose de Precios -->
                        <section class="bg-primary/5 p-4 rounded-xl flex flex-col gap-2">
                            <div class="flex justify-between text-sm">
                                <span class="text-slate-600 dark:text-slate-400">Subtotal</span>
                                <span class="font-medium">${formatearPrecio(subtotal)}</span>
                            </div>
                            <div class="flex justify-between text-sm">
                                <span class="text-slate-600 dark:text-slate-400">Costo de Envío</span>
                                <span class="font-medium">${formatearPrecio(costoEnvio)}</span>
                            </div>
                            <div class="flex justify-between text-sm">
                                <span class="text-slate-600 dark:text-slate-400">Impuestos</span>
                                <span class="font-medium">${formatearPrecio(impuestos)}</span>
                            </div>
                            <div class="h-px bg-primary/10 my-1"></div>
                            <div class="flex justify-between text-lg font-bold">
                                <span>Total</span>
                                <span class="text-primary">${formatearPrecio(total)}</span>
                            </div>
                        </section>
                    </div>
                `}

                <!-- Botón Inferior Fijo -->
                ${carrito.length > 0 ? `
                <div class="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 bg-background-light dark:bg-background-dark border-t border-primary/10">
                    <button class="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform" onclick="procesarPago()">
                        Realizar Pedido • ${formatearPrecio(total)}
                    </button>
                </div>
                ` : ''}
                ${renderNavBar('carrito')}
            </div>
        `;
    },

    // --- VISTAS DE ADMIN (Simplificadas - ya no se usan porque abrimos admin.html) ---
    // Las dejamos por si acaso, pero no se mostrarán
    adminPedidos: function() {
        return `<div class="p-4 text-center">Redirigiendo al panel de administración...</div>`;
    },
    adminPagos: function() {
        return `<div class="p-4 text-center">Redirigiendo al panel de administración...</div>`;
    },
    adminInventario: function() {
        return `<div class="p-4 text-center">Redirigiendo al panel de administración...</div>`;
    }
};

// --- LÓGICA DE APLICACIÓN ---

// Función para navegar entre pantallas
window.irAPantalla = function(pantalla, parametro = null) {
    const appDiv = document.getElementById('app');
    if (appDiv && pantallas[pantalla]) {
        if (pantalla === 'producto' && parametro) {
            appDiv.innerHTML = pantallas[pantalla](parametro);
        } else if (pantalla === 'menu' && parametro) {
            appDiv.innerHTML = pantallas[pantalla](parametro);
        } else {
            appDiv.innerHTML = pantallas[pantalla]();
        }
    } else {
        console.error('Pantalla no encontrada:', pantalla);
        if (appDiv) appDiv.innerHTML = pantallas.inicio();
    }
};

// Función para agregar producto al carrito
window.agregarAlCarrito = function(productoId) {
    const existingItem = carrito.find(item => item.id === productoId);
    if (existingItem) {
        existingItem.cantidad += 1;
    } else {
        carrito.push({ id: productoId, cantidad: 1 });
    }
    guardarCarrito();
    
    const currentScreen = window.location.hash.substring(1) || 'inicio';
    if (currentScreen === 'carrito') {
        irAPantalla('carrito');
    } else {
        const screenParams = currentScreen.split('/');
        if (screenParams[0] === 'producto' && screenParams[1]) {
            irAPantalla('producto', screenParams[1]);
        } else if (screenParams[0] === 'menu' && screenParams[1]) {
            irAPantalla('menu', screenParams[1]);
        } else {
            irAPantalla(screenParams[0]);
        }
    }
};

// Función para actualizar la cantidad de un item en el carrito
window.actualizarCantidadCarrito = function(productoId, nuevaCantidad) {
    if (nuevaCantidad <= 0) {
        carrito = carrito.filter(item => item.id !== productoId);
    } else {
        const item = carrito.find(i => i.id === productoId);
        if (item) {
            item.cantidad = nuevaCantidad;
        }
    }
    guardarCarrito();
    irAPantalla('carrito');
};

// Función para procesar el pago
window.procesarPago = function() {
    alert('¡Pago procesado con éxito! (simulación)');
    carrito = [];
    guardarCarrito();
    irAPantalla('inicio');
};

// --- INICIALIZACIÓN DE LA APLICACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    irAPantalla('inicio');

    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const parts = hash.split('/');
            irAPantalla(parts[0], parts[1]);
        } else {
            irAPantalla('inicio');
        }
    });

    const initialHash = window.location.hash.substring(1);
    if (initialHash) {
        const parts = initialHash.split('/');
        irAPantalla(parts[0], parts[1]);
    }
});