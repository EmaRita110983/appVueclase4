<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-indigo-100 py-10 px-6">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-6xl font-black text-center text-slate-800 mb-3">
        Gestión de Productos
      </h1>

      <p class="text-center text-gray-500 mb-12 text-lg">
        Administra tus productos de manera rápida y sencilla.
      </p>

      <!-- Formulario de Producto -->
      <div class="bg-white rounded-3xl shadow-2xl p-8 mb-10 border border-slate-200">
        <h1 class="text-2xl font-semibold text-gray-700 mb-4">Nuestros Productos</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="nombre" class="block text-sm font-medium text-gray-700">Ingrese nombre del producto:</label>
            <input type="text" v-model="producto.nombre" id="nombre"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Ej: Laptop Gamer" />
          </div>
          <div>
            <label for="stock" class="block text-sm font-medium text-gray-700">Stock:</label>
            <input type="number" id="stock" v-model="producto.stock"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Ej: 50" />
          </div>
          <div>
            <label for="precio" class="block text-sm font-medium text-gray-700">Precio:</label>
            <input type="number" id="precio" v-model="producto.precio"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Ej: 1200.00" />
          </div>
          <div>
            <label for="imagen" class="block text-sm font-medium text-gray-700">URL de la Imagen:</label>
            <input type="text" id="imagen" v-model="producto.imagen"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Ej: https://ejemplo.com/imagen.jpg" />
          </div>
        </div>

        <button @click="guardarProducto"
          class="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300">

          {{ indiceEditar === -1 ? 'Guardar Producto' : 'Actualizar Producto' }}

        </button>

      </div>

      <!-- Lista de Productos -->
      <div v-if="productos.length">

        <h2 class="text-3xl font-bold text-slate-800 mb-6">
          Productos Registrados
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div v-for="(prod, index) in productos" :key="index"
            class="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">

            <img :src="prod.imagen" class="h-56 w-full object-cover">

            <div class="p-6">

              <h3 class="text-xl font-bold mb-3">
                {{ prod.nombre }}
              </h3>

              <p class="text-gray-600">
                💲 Precio:
                <strong>${{ prod.precio.toFixed(2) }}</strong>
              </p>

              <p class="text-gray-600 mt-2">
                📦 Stock:
                <strong>{{ prod.stock }}</strong>
              </p>

              <div class="flex gap-3 mt-6">

                <button @click="editarProducto(index)"
                  class="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-xl">
                  Editar
                </button>

                <button @click="eliminarProducto(index)"
                  class="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl">
                  Eliminar
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
      <div v-else class="text-center text-gray-500 py-8">
        <p>No hay productos registrados aún. ¡Agrega uno!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const productos = ref([]);
const indiceEditar = ref(-1);
const producto = ref({
  nombre: '',
  stock: 0,
  precio: 0,
  imagen: ''
});

onMounted(() => {
  // Puedes cargar productos desde una API o localStorage aquí
  console.log("Componente de gestión de productos montado.");
});

function guardarProducto() {

  if (!producto.value.nombre ||
    producto.value.stock < 0 ||
    producto.value.precio < 0) {

    alert("Complete correctamente los campos.");
    return;
  }

  if (indiceEditar.value === -1) {

    // Agregar
    productos.value.push({ ...producto.value });

    alert("Producto agregado correctamente.");

  } else {

    // Editar
    productos.value[indiceEditar.value] = { ...producto.value };

    indiceEditar.value = -1;

    alert("Producto actualizado.");

  }

  producto.value = {
    nombre: "",
    stock: 0,
    precio: 0,
    imagen: ""
  };

}
function editarProducto(index) {

  producto.value = { ...productos.value[index] };

  indiceEditar.value = index;

}
function eliminarProducto(index) {

  if (confirm("¿Desea eliminar este producto?")) {

    productos.value.splice(index, 1);

  }

}
</script>

<style scoped>
/* Tailwind CSS se encarga de la mayoría de los estilos, 
   pero puedes añadir estilos personalizados aquí si es necesario. */
</style>
