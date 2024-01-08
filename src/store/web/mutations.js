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