<template>
  <div id="app">

    <router-view></router-view>  
    <boton-home></boton-home>
  </div>
</template>

<script>
  // import home from './components/home.vue';
  // import pedido from './components/pedido.vue';
  // import factura from './components/factura.vue';
  import botonHome from './components/tools/botonHome.vue';
  
  export default {
    components:{
      'botonHome': botonHome
    //   'app-home': home,
    //   'pedido': pedido,
    //   'factura': factura
    }
    
  }
</script>

<style>
  body {
    padding: 2%;
  }
  .infoTabla {
    max-width: 95%;
    margin: 2% auto;
    padding: 2%;
  }

  .blackText {
    font-weight: bold;
  }

</style>
