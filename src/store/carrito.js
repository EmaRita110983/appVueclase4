import { ref } from 'vue'

const carrito = ref(
  JSON.parse(localStorage.getItem('carrito')) || []
)

const agregarAlCarrito = (producto) => {
  carrito.value.push(producto)
  localStorage.setItem('carrito', JSON.stringify(carrito.value))
}

const eliminarDelCarrito = (index) => {
  carrito.value.splice(index, 1)
  localStorage.setItem('carrito', JSON.stringify(carrito.value))
}

const limpiarCarrito = () => {
  carrito.value = []
  localStorage.setItem('carrito', JSON.stringify([]))
}

export function useCarrito() {
  return {
    carrito,
    agregarAlCarrito,
    eliminarDelCarrito,
    limpiarCarrito
  }
}