<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-indigo-100 py-10 px-6">

    <div class="max-w-6xl mx-auto">

      <h1 class="text-5xl font-black text-center text-slate-800 mb-10">
        🛒 Mi Carrito
      </h1>

      <div v-if="carrito.length">

        <div
          v-for="(item, index) in carrito"
          :key="index"
          class="bg-white rounded-3xl shadow-xl p-6 mb-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >

          <div class="flex items-center gap-5">

            <img
              :src="item.imagen || 'https://placehold.co/120x120?text=Producto'"
              class="w-28 h-28 object-contain rounded-xl bg-gray-100"
            />

            <div>

              <h2 class="text-2xl font-bold">
                {{ item.nombre }}
              </h2>

              <p class="text-gray-600">
                Precio: <strong>RD$ {{ Number(item.precio).toFixed(2) }}</strong>
              </p>

              <p class="text-gray-600">
                Cantidad: <strong>{{ item.cantidad }}</strong>
              </p>

              <p class="text-indigo-700 font-bold text-lg">
                Subtotal:
                RD$ {{ (item.precio * item.cantidad).toFixed(2) }}
              </p>

            </div>

          </div>

          <button
            @click="eliminarProducto(index)"
            class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl"
          >
            Eliminar
          </button>

        </div>

        <div class="bg-white rounded-3xl shadow-xl p-8 mt-8">

          <h2 class="text-3xl font-bold text-right">
            Total: RD$ {{ total.toFixed(2) }}
          </h2>

          <div class="flex flex-wrap justify-end gap-4 mt-8">

            <button
              @click="vaciarCarrito"
              class="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-xl"
            >
              Vaciar carrito
            </button>

            <button
              @click="finalizarCompra"
              class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
            >
              Finalizar compra
            </button>

          </div>

        </div>

      </div>

      <div v-else class="text-center py-20">

        <h2 class="text-3xl font-bold text-gray-500">
          Tu carrito está vacío
        </h2>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const carrito = ref([])

onMounted(() => {
  cargarCarrito()
})

function cargarCarrito() {
  carrito.value =
    JSON.parse(localStorage.getItem("carrito")) || []
}

const total = computed(() => {

  return carrito.value.reduce((suma, item) => {

    return suma + (Number(item.precio) * Number(item.cantidad))

  }, 0)

})

function eliminarProducto(index) {

  carrito.value.splice(index, 1)

  localStorage.setItem(
    "carrito",
    JSON.stringify(carrito.value)
  )

}

function vaciarCarrito() {

  if (!confirm("¿Vaciar el carrito?")) return

  carrito.value = []

  localStorage.removeItem("carrito")

}

function finalizarCompra() {

  if (!carrito.value.length) return

  let productos =
    JSON.parse(localStorage.getItem("productos")) || []

  carrito.value.forEach(item => {

    const producto = productos.find(
      p => p.nombre === item.nombre
    )

    if (producto) {

      producto.stock -= item.cantidad

      if (producto.stock < 0)
        producto.stock = 0

    }

  })

  localStorage.setItem(
    "productos",
    JSON.stringify(productos)
  )

  localStorage.removeItem("carrito")

  carrito.value = []

  alert("Compra realizada correctamente.")

}
</script>