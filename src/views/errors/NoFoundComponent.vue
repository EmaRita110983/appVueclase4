<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-gray-100 to-indigo-100 px-6">

    <div class="bg-white shadow-2xl rounded-3xl p-10 max-w-lg w-full text-center">

      <h2 class="text-3xl font-bold text-slate-800 mb-3">
        Página no encontrada
      </h2>

      <p class="text-gray-500 mb-8">
        Lo sentimos, la página que intentas visitar no existe o fue movida.
      </p>

      <RouterLink
        to="/"
        class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
      >
        🏠 Volver al Inicio
      </RouterLink>

    </div>

  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>