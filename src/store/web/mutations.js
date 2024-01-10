// Mutaciones que traen los productos según categoría elegida

export const setProductosDeportivos = ( state, productos ) => {
    state.productosDeportivos = productos
    state.productosSeleccionados = state.productosDeportivos
}

export const setProductosCasuales = ( state, productos ) => {
    state.productosCasuales = productos
    state.productosSeleccionados = state.productosCasuales
}

export const setProductosAccesorios = ( state, productos ) => {
    state.productosAccesorios = productos
    state.productosSeleccionados = state.productosAccesorios
}

export const setProductosHogar = ( state, productos ) => {
    state.productosHogar = productos
    state.productosSeleccionados = state.productosHogar
}

export const setProductosDestacados = ( state, productos ) => {
    state.productosDestacados = productos
    state.productosSeleccionados = state.productosDestacados
}

// Mutaciones del carrito de compras

export const addProductosAlCarrito = ( state, producto ) => {
    
    let index = -1;

    for (let i = 0; i <= state.carrito.length - 1; i++) {
        if (state.carrito[i].nombre === producto.nombre) {
            index = i;
            break;
        }
    }

    // console.log(index)

    if (index !== -1) {
        if (state.carrito[index].cantidad < producto.stock){
            // Si el producto ya está en el carrito, incrementa la cantidad
            state.carrito[index].cantidad = (state.carrito[index].cantidad || 0) + 1;
            state.carrito[index].totalPrecio += producto.precio;
        }
    } else if (producto.stock !== 0) {
        // Si el producto no está en el carrito, agrégalo con cantidad 1
        state.carrito.push({ ...producto, cantidad: 1, totalPrecio: producto.precio });
    } else {
        alert('Fuera de stock')
    }
}

export const removeProductosDelCarrito = ( state, producto ) => {

    let index = -1;

    for (let i = 0; i <= state.carrito.length - 1; i++) {
        if (state.carrito[i].nombre === producto.nombre) {
            index = i;
            break;
        }
    }
    
    if (index !== -1) {
        // Si la cantidad llegó a 0, lo elimina del array
        if (state.carrito[index].cantidad === 1){
            state.carrito.splice(index, 1)
        } else {
            // Si la cantidad es mayor a 1, decrementa la cantidad
            state.carrito[index].cantidad--;
            state.carrito[index].totalPrecio -= producto.precio;
        }
    }

}

export const removerTodoDelCarrito = ( state ) => {
    state.carrito = []
}