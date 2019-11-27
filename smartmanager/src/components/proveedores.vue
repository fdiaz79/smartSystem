<template>
    <div>
        <h1>Lista de Proveedores Smart</h1>
        <div class="row">
            <div class="addProveedor col-12 col-md-6">
                <h2>Agregar nuevo proveedor </h2>
                <b-form @submit="onSubmit" @reset="onReset" inline>
                    <label class="sr-only" for="name">Nombre del proveedor</label>
                    <input class="mb-2 mr-sm-2 mb-sm-0" id="name" type="text" v-model="proveedor.name" placeholder="Nombre del proveedor" required />
                    <label class="sr-only" for="contacto">Persona contacto</label>
                    <input class="mb-2 mr-sm-2 mb-sm-0" id="contacto" type="text" v-model="proveedor.contacto" placeholder="Persona Contacto" required />
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
                <p><span class="blackText">Nombre: </span> {{ proveedor.name }}</p>
                <p><span class="blackText">Representante: </span> {{ proveedor.contacto }}</p>
                <p><span class="blackText">Email: </span> {{ proveedor.email }} </p> 
                <p><span class="blackText">Celular: </span>  {{ proveedor.celular }}</p>
                <p><span class="blackText">Telefono: </span> {{ proveedor.tel }} <span class="blackText">Ext. </span> {{ proveedor.ext }} </p>
                <p><span class="blackText">Credit Line: </span> ${{ proveedor.credit }} </p>
            </div>
        </div>
        <div class="infoTabla">
            <b-table striped hover dark :items="proveedores"></b-table>
            
        </div>
    </div> 
</template>

<script>
    
    export default {
        components: {
            // 'botonHome': botonHome
        },
        data(){
            return{
                proveedores: [
                    {name: "All Plus", contacto: "Rodrigo", email: "xxx.xxxx@email.com",tel: "786-777-7777", ext: "1107", cel:"305-333-3333", credit:"$200,000.00"},
                    {name: "Malabs", contacto: "Alex", email: "xxx.xxxx@email.com",tel: "408-444-4444", ext:"", cel: "510-555-5555", credit: "$75,000.00"},
                    {name: "Microinformatica", contacto: "Bernardo", email: "xxx.xxxx@email.com",tel: "305-777-7777", ext: "201", cel: "786-333-3333", credit: "$75,000.00"},
                    {name: "US Tech", contacto: "Noel", email: "xxx.xxxx@email.com",tel: "954-999-9999", ext: "965", cel: "954-555-5555", credit: "$150,000.00"}
                ],
                proveedor: {
                    name:'',
                    contacto: '',
                    email: '',
                    tel: '_ _ _-_ _ _-_ _ _ _',
                    ext: '',
                    cel: '',
                    credit: ''
                },
                submitted: false
                
            }
        },
        methods: {
            onSubmit(e){
                e.preventDefault();
                alert(JSON.stringify(this.proveedor));
                this.submitted = true,
                this.proveedor.name = '',
                this.proveedor.contacto = '',
                this.proveedor.email = ''
                this.proveedor.tel = '_ _ _-_ _ _-_ _ _ _',
                this.proveedor.ext = '',
                this.proveedor.celular = '',
                this.proveedor.credit = ''
                // this.submitted = false
            },
            onReset(e){
                e.preventDefault();
                this.proveedor.name = '',
                this.proveedor.contacto = '',
                this.proveedor.email = ''
                this.proveedor.tel = '_ _ _-_ _ _-_ _ _ _',
                this.proveedor.ext = '',
                this.proveedor.celular = '',
                this.proveedor.credit = ''
                // this.submitted = false
            }
        },
        
    }
</script>

<style scoped>
    input {
        margin: 2%;
        width: 100%;        
    }
    .separated-buttons {
        margin-top: 2%;
        margin-left: auto;
        margin-right: 0;
        
    }
    .submit-class {
        margin: 4px 2px;
    }
</style>
