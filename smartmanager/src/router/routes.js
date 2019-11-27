import home from '../components/home.vue';
import factura from '../components/factura.vue';
import pedido from '../components/pedido.vue';
import proveedores from '../components/proveedores.vue';
import productos from '../components/productos.vue';


export default [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/factura',
        name: 'factura',
        component: factura
    },
    {
        path: '/pedido',
        name: 'pedido',
        component: pedido
    },
    {
        path: '/proveedores',
        name: 'proveedores',
        component: proveedores
    },
    {
        path: '/productos',
        name: 'productos',
        component: productos
    }
]