<template>
    <div>
        <h1>Lista de Proveedores Smart</h1>
        <h2> </h2>
        <b-table striped hover dark :items="proveedores"></b-table>
    </div> 
</template>

<script>
    export default {
        data(){
            return{
                proveedores: [
                    {name: "All Plus", contacto: "Rodrigo", tel: "786-777-7777", ext: "1107", cel:"305-333-3333", credit:"$200,000.00"},
                    {name: "Malabs", contacto: "Alex", tel: "408-444-4444", ext:"", cel: "510-555-5555", credit: "$75,000.00"},
                    {name: "Microinformatica", contacto: "Bernardo", tel: "305-777-7777", ext: "201", cel: "786-333-3333", credit: "$75,000.00"},
                    {name: "US Tech", contacto: "Noel", tel: "954-999-9999", ext: "965", cel: "954-555-5555", credit: "$150,000.00"}
                ]
                
            }
        }
        
    }
</script>

<style scoped>

</style>
