<template>
    <div>
        <h1>Numero de Factura {{ id }} </h1>
        <h2>Pedido Numero: {{ pedido }}</h2>
        <h2>Fecha: {{ fecha }} </h2>

        <b-table striped hover :items="products"></b-table>
        <h3>Transporte: ${{ transport }} </h3>
        <h2>Total Factura: ${{ totalFactura }} </h2>
    </div>    
</template>

<script>
    export default {
        data(){
            return{
                id: 28967,
                pedido: 191120,
                fecha: "11/22/2019",
                products: [
                    {producto: "core i5-9400F Box", cantidad: 100, precioVenta: 135.35, total: 13535.00 },
                    {producto: "core i3-9100F Box", cantidad: 200, precioVenta: 93.21, total: 18642.00},
                    {producto: "DDR4 4GB 2600", cantidad: 300, precioVenta: "$14.20", total: 4260.00},
                    {producto: "H310M", cantidad: 300, precioVenta: "$35.35", total: 10605.00}
                ],
                transport: 180.00,
                totalFactura: 0
            }
        }
    }
</script>

<style scoped>

</style>