// admin.js

// Datos simulados para el dashboard
const datosSimulados = {
    ventasHoy: 1240.50,
    ventasAyer: 1100.00,
    pedidosHoy: 42,
    pedidosAyer: 38,
    clientesHoy: 35,
    productosMasVendidos: [
        { nombre: 'Caramel Macchiato', cantidad: 28, ingresos: 154.00 },
        { nombre: 'Latte Cremoso', cantidad: 22, ingresos: 104.50 },
        { nombre: 'Croissant de Almendra', cantidad: 18, ingresos: 67.50 },
        { nombre: 'Espresso Clásico', cantidad: 15, ingresos: 52.50 },
    ],
    ventasPorHora: [320, 450, 580, 720, 890, 1100, 1240],
    pedidosRecientes: [
        { id: '#XD-8842', cliente: 'Sarah Jenkins', total: 15.45, estado: 'pendiente', items: 2, tiempo: '2 min' },
        { id: '#XD-8841', cliente: 'Michael Chen', total: 23.80, estado: 'preparando', items: 3, tiempo: '5 min' },
        { id: '#XD-8840', cliente: 'Elena Rodríguez', total: 18.25, estado: 'listo', items: 2, tiempo: '8 min' },
        { id: '#XD-8839', cliente: 'Carlos López', total: 32.50, estado: 'entregado', items: 4, tiempo: '15 min' },
        { id: '#XD-8838', cliente: 'Ana García', total: 9.75, estado: 'entregado', items: 1, tiempo: '22 min' },
    ]
};

// Función para cambiar entre secciones
function cambiarSeccion(seccion) {
    // Actualizar clases de los tabs
    document.querySelectorAll('#admin-nav button, .bottom-nav button').forEach(btn => {
        btn.classList.remove('border-primary', 'text-primary');
        btn.classList.add('border-transparent', 'text-slate-500', 'dark:text-slate-400');
    });
    
    // Activar el tab correspondiente
    const tabsActivos = document.querySelectorAll(`[onclick*="${seccion}"]`);
    tabsActivos.forEach(tab => {
        tab.classList.remove('border-transparent', 'text-slate-500', 'dark:text-slate-400');
        tab.classList.add('border-primary', 'text-primary');
    });

    // Cargar contenido según la sección
    const contenido = document.getElementById('admin-content');
    
    switch(seccion) {
        case 'dashboard':
            contenido.innerHTML = renderDashboard();
            break;
        case 'pedidos':
            contenido.innerHTML = renderPedidos();
            break;
        case 'productos':
            contenido.innerHTML = renderProductos();
            break;
        case 'inventario':
            contenido.innerHTML = renderInventario();
            break;
        case 'ventas':
            contenido.innerHTML = renderVentas();
            break;
        case 'clientes':
            contenido.innerHTML = renderClientes();
            break;
        case 'mas':
            contenido.innerHTML = renderMenuMas();
            break;
    }
}

// Renderizar Dashboard
function renderDashboard() {
    const variacionVentas = ((datosSimulados.ventasHoy - datosSimulados.ventasAyer) / datosSimulados.ventasAyer * 100).toFixed(1);
    const variacionPedidos = ((datosSimulados.pedidosHoy - datosSimulados.pedidosAyer) / datosSimulados.pedidosAyer * 100).toFixed(1);
    
    return `
        <div class="space-y-6">
            <!-- Tarjetas de resumen -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="bg-white dark:bg-white/5 rounded-xl p-6 border border-primary/10 shadow-sm">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-medium text-slate-500">Ventas Hoy</span>
                        <span class="material-symbols-outlined text-primary">payments</span>
                    </div>
                    <div class="text-2xl font-bold text-slate-900 dark:text-white">$${datosSimulados.ventasHoy.toFixed(2)}</div>
                    <div class="flex items-center gap-1 mt-2 ${variacionVentas >= 0 ? 'text-green-600' : 'text-red-600'}">
                        <span class="material-symbols-outlined text-sm">${variacionVentas >= 0 ? 'trending_up' : 'trending_down'}</span>
                        <span class="text-sm font-medium">${variacionVentas}% vs ayer</span>
                    </div>
                </div>

                <div class="bg-white dark:bg-white/5 rounded-xl p-6 border border-primary/10 shadow-sm">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-medium text-slate-500">Pedidos Hoy</span>
                        <span class="material-symbols-outlined text-primary">shopping_bag</span>
                    </div>
                    <div class="text-2xl font-bold text-slate-900 dark:text-white">${datosSimulados.pedidosHoy}</div>
                    <div class="flex items-center gap-1 mt-2 ${variacionPedidos >= 0 ? 'text-green-600' : 'text-red-600'}">
                        <span class="material-symbols-outlined text-sm">${variacionPedidos >= 0 ? 'trending_up' : 'trending_down'}</span>
                        <span class="text-sm font-medium">${variacionPedidos}% vs ayer</span>
                    </div>
                </div>

                <div class="bg-white dark:bg-white/5 rounded-xl p-6 border border-primary/10 shadow-sm">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-medium text-slate-500">Clientes Nuevos</span>
                        <span class="material-symbols-outlined text-primary">person_add</span>
                    </div>
                    <div class="text-2xl font-bold text-slate-900 dark:text-white">${datosSimulados.clientesHoy}</div>
                    <div class="flex items-center gap-1 mt-2 text-green-600">
                        <span class="material-symbols-outlined text-sm">trending_up</span>
                        <span class="text-sm font-medium">+12% vs ayer</span>
                    </div>
                </div>

                <div class="bg-white dark:bg-white/5 rounded-xl p-6 border border-primary/10 shadow-sm">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-medium text-slate-500">Ticket Promedio</span>
                        <span class="material-symbols-outlined text-primary">receipt</span>
                    </div>
                    <div class="text-2xl font-bold text-slate-900 dark:text-white">$${(datosSimulados.ventasHoy / datosSimulados.pedidosHoy).toFixed(2)}</div>
                    <div class="flex items-center gap-1 mt-2 text-green-600">
                        <span class="material-symbols-outlined text-sm">trending_up</span>
                        <span class="text-sm font-medium">+5% vs ayer</span>
                    </div>
                </div>
            </div>

            <!-- Gráfico y productos más vendidos -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Gráfico de ventas -->
                <div class="lg:col-span-2 bg-white dark:bg-white/5 rounded-xl p-6 border border-primary/10 shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-bold">Ventas por Hora</h3>
                        <span class="text-sm text-slate-500">Hoy</span>
                    </div>
                    <canvas id="ventasChart" height="200"></canvas>
                </div>

                <!-- Productos más vendidos -->
                <div class="bg-white dark:bg-white/5 rounded-xl p-6 border border-primary/10 shadow-sm">
                    <h3 class="text-lg font-bold mb-4">Productos Más Vendidos</h3>
                    <div class="space-y-4">
                        ${datosSimulados.productosMasVendidos.map(p => `
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="font-medium">${p.nombre}</p>
                                    <p class="text-xs text-slate-500">${p.cantidad} unidades · $${p.ingresos.toFixed(2)}</p>
                                </div>
                                <span class="text-primary font-bold">${Math.round(p.cantidad / 28 * 100)}%</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Pedidos recientes -->
            <div class="bg-white dark:bg-white/5 rounded-xl p-6 border border-primary/10 shadow-sm">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-bold">Pedidos Recientes</h3>
                    <button onclick="cambiarSeccion('pedidos')" class="text-primary text-sm font-medium hover:underline">Ver todos</button>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="text-left text-sm text-slate-500 border-b border-primary/10">
                                <th class="pb-3 font-medium">Pedido</th>
                                <th class="pb-3 font-medium">Cliente</th>
                                <th class="pb-3 font-medium">Items</th>
                                <th class="pb-3 font-medium">Total</th>
                                <th class="pb-3 font-medium">Estado</th>
                                <th class="pb-3 font-medium">Tiempo</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-primary/10">
                            ${datosSimulados.pedidosRecientes.map(p => `
                                <tr class="text-sm">
                                    <td class="py-3 font-medium text-primary">${p.id}</td>
                                    <td class="py-3">${p.cliente}</td>
                                    <td class="py-3">${p.items}</td>
                                    <td class="py-3 font-medium">$${p.total.toFixed(2)}</td>
                                    <td class="py-3">
                                        <span class="px-2 py-1 rounded-full text-xs font-bold ${getEstadoClass(p.estado)}">
                                            ${getEstadoText(p.estado)}
                                        </span>
                                    </td>
                                    <td class="py-3 text-slate-500">${p.tiempo}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// Renderizar Pedidos
function renderPedidos() {
    return `
        <div class="space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h2 class="text-2xl font-bold">Gestión de Pedidos</h2>
                <div class="flex gap-2">
                    <button class="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors">
                        <span class="material-symbols-outlined text-sm align-middle mr-1">filter_list</span>
                        Filtrar
                    </button>
                    <button class="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                        <span class="material-symbols-outlined text-sm align-middle mr-1">download</span>
                        Exportar
                    </button>
                </div>
            </div>

            <!-- Tabs de estado -->
            <div class="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                <button class="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium whitespace-nowrap">Todos (42)</button>
                <button class="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium whitespace-nowrap hover:bg-primary/20">Pendientes (12)</button>
                <button class="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium whitespace-nowrap hover:bg-primary/20">Preparando (8)</button>
                <button class="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium whitespace-nowrap hover:bg-primary/20">Listos (6)</button>
                <button class="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium whitespace-nowrap hover:bg-primary/20">Entregados (16)</button>
            </div>

            <!-- Lista de pedidos -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                ${generarTarjetasPedidos()}
            </div>
        </div>
    `;
}

// Renderizar Productos
function renderProductos() {
    return `
        <div class="space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h2 class="text-2xl font-bold">Catálogo de Productos</h2>
                <button class="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                    <span class="material-symbols-outlined text-sm align-middle mr-1">add</span>
                    Nuevo Producto
                </button>
            </div>

            <!-- Grid de productos -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                ${generarTarjetasProductos()}
            </div>
        </div>
    `;
}

// Renderizar Inventario
function renderInventario() {
    return `
        <div class="space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h2 class="text-2xl font-bold">Control de Inventario</h2>
                <div class="flex gap-2">
                    <button class="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20">
                        <span class="material-symbols-outlined text-sm align-middle mr-1">inventory</span>
                        Ajustar Stock
                    </button>
                    <button class="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90">
                        <span class="material-symbols-outlined text-sm align-middle mr-1">add</span>
                        Nuevo Ingrediente
                    </button>
                </div>
            </div>

            <!-- Tabla de inventario -->
            <div class="bg-white dark:bg-white/5 rounded-xl border border-primary/10 overflow-hidden">
                <table class="w-full">
                    <thead class="bg-primary/5">
                        <tr class="text-left text-sm">
                            <th class="px-4 py-3 font-medium">Ingrediente</th>
                            <th class="px-4 py-3 font-medium">Stock Actual</th>
                            <th class="px-4 py-3 font-medium">Stock Mínimo</th>
                            <th class="px-4 py-3 font-medium">Unidad</th>
                            <th class="px-4 py-3 font-medium">Estado</th>
                            <th class="px-4 py-3 font-medium">Acciones</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-primary/10">
                        ${generarFilasInventario()}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// Renderizar Ventas
function renderVentas() {
    return `
        <div class="space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h2 class="text-2xl font-bold">Reporte de Ventas</h2>
                <div class="flex gap-2">
                    <select class="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border-none focus:ring-2 focus:ring-primary">
                        <option>Últimos 7 días</option>
                        <option>Últimos 30 días</option>
                        <option>Este mes</option>
                        <option>Este año</option>
                    </select>
                    <button class="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">
                        <span class="material-symbols-outlined text-sm align-middle mr-1">download</span>
                        Descargar
                    </button>
                </div>
            </div>

            <!-- Tarjetas de métricas -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="bg-white dark:bg-white/5 rounded-xl p-6 border border-primary/10">
                    <p class="text-sm text-slate-500 mb-1">Ventas Totales</p>
                    <p class="text-2xl font-bold">$8,450.00</p>
                    <p class="text-xs text-green-600 mt-2">+15.3% vs período anterior</p>
                </div>
                <div class="bg-white dark:bg-white/5 rounded-xl p-6 border border-primary/10">
                    <p class="text-sm text-slate-500 mb-1">Pedidos</p>
                    <p class="text-2xl font-bold">284</p>
                    <p class="text-xs text-green-600 mt-2">+8.2% vs período anterior</p>
                </div>
                <div class="bg-white dark:bg-white/5 rounded-xl p-6 border border-primary/10">
                    <p class="text-sm text-slate-500 mb-1">Ticket Promedio</p>
                    <p class="text-2xl font-bold">$29.75</p>
                    <p class="text-xs text-green-600 mt-2">+6.5% vs período anterior</p>
                </div>
                <div class="bg-white dark:bg-white/5 rounded-xl p-6 border border-primary/10">
                    <p class="text-sm text-slate-500 mb-1">Clientes</p>
                    <p class="text-2xl font-bold">156</p>
                    <p class="text-xs text-green-600 mt-2">+12 nuevos</p>
                </div>
            </div>

            <!-- Gráfico de ventas -->
            <div class="bg-white dark:bg-white/5 rounded-xl p-6 border border-primary/10">
                <canvas id="ventasPeriodoChart" height="300"></canvas>
            </div>
        </div>
    `;
}

// Renderizar Clientes
function renderClientes() {
    return `
        <div class="space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h2 class="text-2xl font-bold">Clientes</h2>
                <div class="flex gap-2">
                    <input type="text" placeholder="Buscar cliente..." class="px-4 py-2 bg-primary/5 border border-primary/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <button class="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">
                        <span class="material-symbols-outlined text-sm align-middle mr-1">search</span>
                        Buscar
                    </button>
                </div>
            </div>

            <!-- Lista de clientes -->
            <div class="bg-white dark:bg-white/5 rounded-xl border border-primary/10 overflow-hidden">
                <table class="w-full">
                    <thead class="bg-primary/5">
                        <tr class="text-left text-sm">
                            <th class="px-4 py-3 font-medium">Cliente</th>
                            <th class="px-4 py-3 font-medium">Email</th>
                            <th class="px-4 py-3 font-medium">Teléfono</th>
                            <th class="px-4 py-3 font-medium">Pedidos</th>
                            <th class="px-4 py-3 font-medium">Gasto Total</th>
                            <th class="px-4 py-3 font-medium">Última Visita</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-primary/10">
                        ${generarFilasClientes()}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// Renderizar menú "Más" para móvil
function renderMenuMas() {
    return `
        <div class="space-y-4 p-4">
            <h2 class="text-2xl font-bold mb-6">Más Opciones</h2>
            <button onclick="cambiarSeccion('inventario')" class="w-full flex items-center gap-4 p-4 bg-white dark:bg-white/5 rounded-xl border border-primary/10">
                <span class="material-symbols-outlined text-primary">inventory</span>
                <span class="font-medium">Inventario</span>
            </button>
            <button onclick="cambiarSeccion('clientes')" class="w-full flex items-center gap-4 p-4 bg-white dark:bg-white/5 rounded-xl border border-primary/10">
                <span class="material-symbols-outlined text-primary">people</span>
                <span class="font-medium">Clientes</span>
            </button>
            <button class="w-full flex items-center gap-4 p-4 bg-white dark:bg-white/5 rounded-xl border border-primary/10">
                <span class="material-symbols-outlined text-primary">settings</span>
                <span class="font-medium">Configuración</span>
            </button>
            <button class="w-full flex items-center gap-4 p-4 bg-white dark:bg-white/5 rounded-xl border border-primary/10">
                <span class="material-symbols-outlined text-primary">support</span>
                <span class="font-medium">Soporte</span>
            </button>
        </div>
    `;
}

// Funciones auxiliares
function getEstadoClass(estado) {
    const clases = {
        'pendiente': 'bg-yellow-100 text-yellow-800',
        'preparando': 'bg-blue-100 text-blue-800',
        'listo': 'bg-green-100 text-green-800',
        'entregado': 'bg-slate-100 text-slate-800'
    };
    return clases[estado] || 'bg-slate-100 text-slate-800';
}

function getEstadoText(estado) {
    const textos = {
        'pendiente': 'Pendiente',
        'preparando': 'Preparando',
        'listo': 'Listo',
        'entregado': 'Entregado'
    };
    return textos[estado] || estado;
}

function generarTarjetasPedidos() {
    const pedidos = [
        { id: '#XD-8842', cliente: 'Sarah Jenkins', items: ['Vanilla Latte', 'Butter Croissant'], total: 15.45, estado: 'pendiente', tiempo: '2 min', direccion: 'Av. del Café 123' },
        { id: '#XD-8841', cliente: 'Michael Chen', items: ['Cold Brew x2', 'Avocado Toast'], total: 23.80, estado: 'preparando', tiempo: '5 min', direccion: 'Calle del Té 456' },
        { id: '#XD-8840', cliente: 'Elena Rodríguez', items: ['Flat White', 'Blueberry Muffin x2'], total: 18.25, estado: 'listo', tiempo: '8 min', direccion: 'Plaza del Grano 789' },
    ];
    
    return pedidos.map(p => `
        <div class="bg-white dark:bg-white/5 rounded-xl p-4 border border-primary/10 shadow-sm">
            <div class="flex items-center justify-between mb-3">
                <span class="font-bold text-primary">${p.id}</span>
                <span class="px-2 py-1 rounded-full text-xs font-bold ${getEstadoClass(p.estado)}">${getEstadoText(p.estado)}</span>
            </div>
            <div class="mb-3">
                <p class="font-medium">${p.cliente}</p>
                <p class="text-sm text-slate-500">${p.direccion}</p>
            </div>
            <div class="text-sm text-slate-600 dark:text-slate-400 mb-3">
                ${p.items.join(' · ')}
            </div>
            <div class="flex items-center justify-between pt-3 border-t border-primary/10">
                <span class="font-bold text-primary">$${p.total.toFixed(2)}</span>
                <span class="text-xs text-slate-500">${p.tiempo}</span>
            </div>
            <div class="flex gap-2 mt-3">
                <button class="flex-1 px-3 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90">Ver Detalle</button>
                <button class="px-3 py-2 border border-primary/20 rounded-lg text-sm font-medium text-slate-600 hover:bg-primary/5">
                    <span class="material-symbols-outlined text-base align-middle">more_horiz</span>
                </button>
            </div>
        </div>
    `).join('');
}

function generarTarjetasProductos() {
    const productos = [
        { nombre: 'Espresso Clásico', precio: 3.50, categoria: 'Café', stock: 45, imagen: 'https://via.placeholder.com/100' },
        { nombre: 'Latte Cremoso', precio: 4.75, categoria: 'Café', stock: 32, imagen: 'https://via.placeholder.com/100' },
        { nombre: 'Caramel Macchiato', precio: 5.50, categoria: 'Café', stock: 28, imagen: 'https://via.placeholder.com/100' },
        { nombre: 'Croissant de Almendra', precio: 3.75, categoria: 'Repostería', stock: 15, imagen: 'https://via.placeholder.com/100' },
        { nombre: 'Té Verde Matcha', precio: 4.50, categoria: 'Té', stock: 20, imagen: 'https://via.placeholder.com/100' },
    ];
    
    return productos.map(p => `
        <div class="bg-white dark:bg-white/5 rounded-xl p-4 border border-primary/10 shadow-sm">
            <div class="h-32 bg-primary/10 rounded-lg mb-3 bg-cover bg-center" style="background-image: url('${p.imagen}')"></div>
            <div class="flex items-start justify-between mb-2">
                <div>
                    <h4 class="font-bold">${p.nombre}</h4>
                    <p class="text-xs text-slate-500">${p.categoria}</p>
                </div>
                <span class="text-primary font-bold">$${p.precio.toFixed(2)}</span>
            </div>
            <div class="flex items-center justify-between text-sm">
                <span class="text-slate-500">Stock: ${p.stock} uds</span>
                <span class="text-green-600">● Activo</span>
            </div>
            <div class="flex gap-2 mt-3">
                <button class="flex-1 px-3 py-2 border border-primary/20 rounded-lg text-sm font-medium text-primary hover:bg-primary/5">Editar</button>
                <button class="px-3 py-2 border border-primary/20 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50">Desactivar</button>
            </div>
        </div>
    `).join('');
}

function generarFilasInventario() {
    const inventario = [
        { ingrediente: 'Granos de Café', stock: 25, minimo: 10, unidad: 'kg', estado: 'normal' },
        { ingrediente: 'Leche Entera', stock: 8, minimo: 15, unidad: 'l', estado: 'bajo' },
        { ingrediente: 'Jarabe de Vainilla', stock: 5, minimo: 5, unidad: 'l', estado: 'critico' },
        { ingrediente: 'Harina', stock: 30, minimo: 20, unidad: 'kg', estado: 'normal' },
        { ingrediente: 'Mantequilla', stock: 12, minimo: 10, unidad: 'kg', estado: 'normal' },
    ];
    
    return inventario.map(i => {
        let estadoClass = 'text-green-600';
        let estadoText = 'Normal';
        if (i.estado === 'bajo') {
            estadoClass = 'text-yellow-600';
            estadoText = 'Stock Bajo';
        } else if (i.estado === 'critico') {
            estadoClass = 'text-red-600';
            estadoText = 'Crítico';
        }
        
        return `
            <tr class="text-sm">
                <td class="px-4 py-3 font-medium">${i.ingrediente}</td>
                <td class="px-4 py-3">${i.stock}</td>
                <td class="px-4 py-3">${i.minimo}</td>
                <td class="px-4 py-3">${i.unidad}</td>
                <td class="px-4 py-3">
                    <span class="${estadoClass} font-medium">${estadoText}</span>
                </td>
                <td class="px-4 py-3">
                    <button class="text-primary hover:underline text-sm">Ajustar</button>
                </td>
            </tr>
        `;
    }).join('');
}

function generarFilasClientes() {
    const clientes = [
        { nombre: 'Sarah Jenkins', email: 'sarah.j@email.com', telefono: '+1 555-0123', pedidos: 12, gasto: 156.50, ultima: 'Hoy' },
        { nombre: 'Michael Chen', email: 'michael.c@email.com', telefono: '+1 555-0456', pedidos: 8, gasto: 98.75, ultima: 'Ayer' },
        { nombre: 'Elena Rodríguez', email: 'elena.r@email.com', telefono: '+1 555-0789', pedidos: 15, gasto: 203.25, ultima: 'Hace 2 días' },
    ];
    
    return clientes.map(c => `
        <tr class="text-sm">
            <td class="px-4 py-3 font-medium">${c.nombre}</td>
            <td class="px-4 py-3">${c.email}</td>
            <td class="px-4 py-3">${c.telefono}</td>
            <td class="px-4 py-3">${c.pedidos}</td>
            <td class="px-4 py-3 font-medium">$${c.gasto.toFixed(2)}</td>
            <td class="px-4 py-3 text-slate-500">${c.ultima}</td>
        </tr>
    `).join('');
}

// Inicializar gráficos
function initCharts() {
    const ctx = document.getElementById('ventasChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm'],
                datasets: [{
                    label: 'Ventas ($)',
                    data: datosSimulados.ventasPorHora,
                    borderColor: '#cf4517',
                    backgroundColor: 'rgba(207, 69, 23, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
}

// Funciones de navegación
function volverALaTienda() {
    window.location.href = 'index.html';
}

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cambiarSeccion('dashboard');
    setTimeout(initCharts, 100); // Esperar a que se renderice el canvas
});