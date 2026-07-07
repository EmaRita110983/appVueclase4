<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-indigo-100 py-10 px-6">
    <div class="max-w-7xl mx-auto">

      <div class="flex justify-between items-center mb-8">

        <div>
          <h1 class="text-5xl font-black text-slate-800">
            Productos en Venta
          </h1>

          <p class="text-gray-500 mt-2">
            Selecciona los productos que deseas comprar.
          </p>
        </div>

        <RouterLink to="/carrito"
          class="relative bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl shadow-lg transition">

          🛒 Carrito

          <span v-if="cantidadCarrito > 0"
            class="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-7 h-7 flex items-center justify-center font-bold">
            {{ cantidadCarrito }}
          </span>

        </RouterLink>

      </div>

      <p class="text-center text-gray-500 text-lg mb-10">
        Selecciona los productos que deseas comprar.
      </p>

      <div v-if="productos.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div v-for="(producto, index) in productos" :key="index"
          class="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">

          <img :src="producto.imagen || 'https://placehold.co/600x400?text=Sin+Imagen'" :alt="producto.nombre"
            class="w-full h-56 object-contain bg-gray-100" />

          <div class="p-6">

            <h2 class="text-2xl font-bold text-slate-800">
              {{ producto.nombre }}
            </h2>

            <p class="mt-3 text-lg text-indigo-600 font-bold">
              $ {{ Number(producto.precio).toFixed(2) }}
            </p>

            <p class="text-gray-600 mt-2">
              Stock disponible:
              <span class="font-bold">{{ producto.stock }}</span>
            </p>

            <div class="mt-5">
              <label class="block mb-2 font-semibold">
                Cantidad
              </label>

              <input type="number" min="1" :max="producto.stock" v-model.number="cantidades[index]"
                class="w-full border rounded-lg px-3 py-2" />
            </div>

            <button @click="agregarCarrito(producto, index)"
              class="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition">
              Agregar al carrito
            </button>

          </div>

        </div>

      </div>

      <div v-else class="text-center py-20">

        <h2 class="text-3xl font-bold text-gray-500">
          No hay productos disponibles
        </h2>

        <p class="text-gray-400 mt-3">
          Primero agrega productos desde el módulo de Productos.
        </p>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const productos = ref([])
const cantidades = ref([])
const cantidadCarrito = computed(() => {

  const carritoGuardado = JSON.parse(
    localStorage.getItem("carrito") || "[]"
  )

  return carritoGuardado.reduce(
    (total, item) => total + Number(item?.cantidad || 0),
    0
  )

})

onMounted(() => {

  productos.value =
    JSON.parse(localStorage.getItem('productos')) || []

  cantidades.value =
    productos.value.map(() => 1)

})

function agregarCarrito(producto, index) {

  const cantidad = cantidades.value[index]

  if (cantidad < 1) {
    alert("Cantidad inválida.")
    return
  }

  if (cantidad > producto.stock) {
    alert("No hay suficiente stock.")
    return
  }

  const carrito =
    JSON.parse(localStorage.getItem('carrito')) || []

  const existente =
    carrito.find(item => item.nombre === producto.nombre)

  if (existente) {

    if (existente.cantidad + cantidad > producto.stock) {
      alert("No hay suficiente stock.")
      return
    }

    existente.cantidad += cantidad

  } else {

    carrito.push({
      ...producto,
      cantidad
    })

  }

  localStorage.setItem(
    "carrito",
    JSON.stringify(carrito)
  )

  alert("Producto agregado al carrito.")
}
</script>

<style scoped></style>