<template>
    <div>
        <h1 class="title">SISTEMA DE GESTION SMART COMPUTER</h1>
        <div class="row vertAlign">        
            <div class="col-1 col-md-2 col-lg-3"></div>
            <div class="butGrp col-5 col-md-4 col-lg-3">
                <b-button-group vertical>
                    <router-link to="/"><b-button variant="success" class="btnLink" >Nuevo Pedido </b-button></router-link>
                    <router-link to="/"><b-button variant="info" class="btnLink" >Nueva Factura</b-button></router-link>
                    <router-link to="/"><b-button variant="warning" class="btnLink" >Nueva Guia</b-button></router-link>
                    <router-link to="/"><b-button variant="primary" class="btnLink" >Nuevo Producto</b-button></router-link>
                    <router-link to="/"><b-button variant="danger" class="btnLink" >Nuevo Proveedor</b-button></router-link>
                </b-button-group>
            </div>
            <div class="butGrp col-5 col-md-4 col-lg-3">
                <b-button-group vertical>
                    <router-link to="/pedido"><b-button variant="success" class="btnLink" > Consultar Pedido </b-button></router-link>
                    <router-link to="/factura"><b-button variant="info" class="btnLink" > Consultar Factura </b-button></router-link>
                    <router-link to="/"><b-button variant="warning" class="btnLink" > Consultar Guia </b-button></router-link>
                    <router-link to="/"><b-button variant="primary" class="btnLink" > Consultar Producto </b-button></router-link>
                    <router-link to="/"><b-button variant="danger" class="btnLink" > Consultar Proveedor </b-button></router-link>
                </b-button-group>
            </div>
            <div class="col-1 col-md-2 col-lg-3"></div>
        </div>
    </div>
        
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .btnLink {
        min-width: 214px;
        min-height: 55px;
        font-weight: bold;
        font-size: 1em;
    }
    .title {
        text-align: center;
        margin: 2% auto;
    }
    .vertAlign {
        margin-top: 6%;      
    }
    .butGrp {
        margin: 0% auto;
    }

</style>