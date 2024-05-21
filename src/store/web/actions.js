import webApi from "@/api/webApi";

/* Productos */

export const loadProductos = async ({ commit }, { categoria, mutation }) => {
    try {
        const { data } = await webApi.get(`/productos/${categoria}.json`)
        commit(mutation, data)
    } catch (error) {
        console.error('Error al cargar productos: ', error)
    }
}

export const agregarAlCarrito = async ({ commit }, data ) => {
    try {
        commit('addProductosAlCarrito', data)
    } catch (error) {
        console.error('Error al añadir producto al carrito: ', error)
    }
}

export const quitarDelCarrito = async ({ commit }, data ) => {
    try {
        commit('removeProductosDelCarrito', data)
    } catch (error) {
        console.error('Error al remover producto del carrito: ', error)
    }
}

export const removerTodoDelCarrito = async ({ commit }) => {
    try {
        commit('removerTodoDelCarrito')
    } catch (error) {
        console.error('Error al remover todo el carrito: ', error)
    }
}

/* Existe una funcion del mismo nombre en CarritoItems y en las mutaciones */
export const habilitarFormulario = async ({ commit }) => {
    try {
        commit('habilitarFormulario')
    } catch (error) {
        console.error('Error al mostrar el formulario de compra: ', error)
    }
}

export const deshabilitarFormulario = async ({ commit }) => {
    try {
        commit('deshabilitarFormulario')
    } catch (error) {
        console.error('Error al ocultar el formulario de compra: ', error)
    }
}

/* Noticias */

export const loadNoticias = async({commit}, {categoria, mutation}) => {
    try {
        const { data } = await webApi.get(`/noticias/${categoria}.json`)
        commit(mutation, data)
    } catch (error) {
        console.error('Error al cargar noticias: ', error)
    }
}

export const loadNoticiaById = async({commit}, {categoria, id, mutation}) => {
    try {
        const { data } = await webApi.get(`/noticias/${categoria}/noticiaId${id}.json`)
        commit(mutation, data)
    } catch (error) {
        console.error('Error al cargar noticia: ', error)
    }
}