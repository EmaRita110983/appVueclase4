<template>
    <h1>Mis publicaciones</h1>
   
<div v-for = "publi in publiocaciones" >
        <h1>{{ publi.title }}</h1>
        <h2>{{ publi.precio }}</h2>
        <img :src="publi.cover_image" :alt="`Imagen de la publicación: ${publi.title}`">
    </div>

</template>
<script setup>
import { onMounted, ref } from 'vue'
const publiocaciones = ref([]);
onMounted(() => {
    obtenerDatosApiBackend()
});
const obtenerDatosApiBackend = async () => {
    fetch('https://dev.to/api/articles')
        .then((response) => response.json())
        .then((json) => {
            publiocaciones.value = json
        })
}
</script>
