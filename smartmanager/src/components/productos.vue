<template>
    <div>
        <h1>Productos</h1>
        <div class="row">
            <div class="addProveedor col-12 col-md-6">
                <h2>Agregar nuevo producto </h2>
                <b-form @submit="onSubmit" @reset="onReset" inline>
                    <label class="sr-only" for="name">Producto:</label>
                    <input class="mb-2 mr-sm-2 mb-sm-0" id="name" type="text" v-model="proveedor.name" placeholder="Producto:" required />
                    <label class="sr-only" for="contacto">Marca</label>
                    <input class="mb-2 mr-sm-2 mb-sm-0" id="marca" type="text" v-model="proveedor.marca" placeholder="Marca" required />
                    <label class="sr-only" for="email">Email</label>
                    <input class="mb-2 mr-sm-2 mb-sm-0" id="email" type="email" v-model="proveedor.email" placeholder="Email" required />
                    <label class="sr-only" for="tel">Telefono</label>
                    <input class="mb-2 mr-sm-2 mb-sm-0" id="tel" type="text" v-model="proveedor.tel" placeholder="Telefono" />
                    <label class="sr-only" for="ext">Extension</label>
                    <input class="mb-2 mr-sm-2 mb-sm-0" id="ext" type="text" v-model="proveedor.ext" placeholder="Extension" />
                    <label class="sr-only" for="celular">Celular</label>
                    <input class="mb-2 mr-sm-2 mb-sm-0" id="celular" type="text" v-model="proveedor.celular" placeholder="Celular" />
                    <label class="sr-only" for="credit">Linea de credito</label>
                    <input class="mb-2 mr-sm-2 mb-sm-0" id="credit" type="text" v-model="proveedor.credit" placeholder="Linea de credito" />
                    
                    <div class="separated-buttons">                        
                        <b-button class="submit-class" type="submit" variant="primary" size="sm">Submit</b-button>
                        <b-button class="submit-class" type="reset" variant="danger" size="sm" >Reset</b-button>     
                    </div>            
                </b-form>
                
            </div>
            <div class="formPreview col-12 col-md-6">
                <h2>Nuevo Proveedor: </h2>
                <!-- <p><span class="blackText">Nombre: </span> {{ proveedor.name }}</p>
                <p><span class="blackText">Representante: </span> {{ proveedor.contacto }}</p>
                <p><span class="blackText">Email: </span> {{ proveedor.email }} </p> 
                <p><span class="blackText">Celular: </span>  {{ proveedor.celular }}</p>
                <p><span class="blackText">Telefono: </span> {{ proveedor.tel }} <span class="blackText">Ext. </span> {{ proveedor.ext }} </p>
                <p><span class="blackText">Credit Line: </span> ${{ proveedor.credit }} </p> -->
            </div>
        </div>
        <div class="infoTabla">
            <b-table striped hover dark :items="productos"></b-table>
        </div>
    </div>

</template>

<script>
    export default {
        data(){
            return {
                productos: [
                    {name: "core i5 9400F", marca: "intel", numeroDeParte:"CMXXXXi59400F", mejorPrecio:"$135.35", ultimoPrecio:"$145.45", ultimoProveedor:"Malabs", proveedores:["All Plus", "Intcomex", "Malabs", "PLPC", "MPE"]},
                    {name: "core i5 9300F", marca: "intel", numeroDeParte:"CMXXXXi59400F", mejorPrecio:"$135.35", ultimoPrecio:"$145.45", ultimoProveedor:"Malabs", proveedores:["All Plus", "Intcomex", "Malabs", "PLPC", "MPE"]},
                    {name: "core i5 9200F", marca: "intel", numeroDeParte:"CMXXXXi59400F", mejorPrecio:"$135.35", ultimoPrecio:"$145.45", ultimoProveedor:"Malabs", proveedores:["All Plus", "Intcomex", "Malabs", "PLPC", "MPE"]},
                    {name: "core i5 9100F", marca: "intel", numeroDeParte:"CMXXXXi59400F", mejorPrecio:"$135.35", ultimoPrecio:"$145.45", ultimoProveedor:"Malabs", proveedores:["All Plus", "Intcomex", "Malabs", "PLPC", "MPE"]},
                ]
            }
        }
    }
</script>

<style scoped>

</style>