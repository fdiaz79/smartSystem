<template>
    <div>
        <h1>Pedido Numero: {{ id }}</h1>
        <h2>Finalizado en: {{ date }} </h2>
        <b-table striped hover dark :items="products"></b-table>
    </div>    
</template>

<script>
    export default {
        data(){
            return{
                id: 191120,
                products: [
                    {producto: "core i5-9400F Box", cantidad: 100, proveedor: "All Plus", precio: "$135.35", comprado: true, ultimoPrecio: "$141.42", ultimoProveedor: "Malabs"},
                    {producto: "core i3-9100F Box", cantidad: 200, proveedor: "All Plus", precio: "$93.21", comprado: true, ultimoPrecio: "$93.21", ultimoProveedor: "Intcomex"},
                    {producto: "DDR4 4GB 2600", cantidad: 300, proveedor: "US Tech", precio: "$14.20", comprado: false, ultimoPrecio: "$15.00", ultimoProveedor: "Adata"},
                    {producto: "H310M", cantidad: 300, proveedor: "MSI", precio: "$35.35", comprado: true, ultimoPrecio: "$35.35", ultimoProveedor: "MSI"}
                ],
                date: "19/11/22"
            }
        }
    }
</script>

<style scoped>

</style>