<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-indigo-100 py-10">

    <h1 class="text-5xl font-black text-center text-slate-800 mb-12">
      🛍️ Productos a la Venta
    </h1>

    <div
      class="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >

      <div
        v-for="(producto, index) in productos"
        :key="index"
        class="bg-white rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl hover:-translate-y-2"
      >

        <!-- Imagen -->
        <div class="overflow-hidden bg-gray-100">
          <img
            :src="producto.imagen"
            :alt="producto.nombre"
            class="w-full h-60 object-contain p-4 transition duration-500 hover:scale-110"
          >
        </div>

        <!-- Información -->
        <div class="p-6">

          <h2 class="text-2xl font-bold text-slate-800">
            {{ producto.nombre }}
          </h2>

          <p class="text-3xl font-extrabold text-indigo-600 mt-3">
            RD$ {{ producto.precio }}
          </p>

          <div class="flex justify-between items-center mt-5">

            <span
              v-if="producto.stock > 0"
              class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold"
            >
              Disponible
            </span>

            <span
              v-else
              class="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold"
            >
              Agotado
            </span>

            <span class="font-semibold text-gray-600">
              Stock: {{ producto.stock }}
            </span>

          </div>

          <button
            class="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition duration-300"
          >
            🛒 Agregar al carrito
          </button>

        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const productos = ref([])

onMounted(() => {
  productos.value = JSON.parse(localStorage.getItem('productos')) || []
})
</script>