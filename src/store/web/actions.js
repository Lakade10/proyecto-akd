import webApi from "@/api/webApi";

export const loadProductos = async ({ commit }, { categoria, mutation }) => {
    try {
        const { data } = await webApi.get(`/productos/${categoria}.json`)
        commit(mutation, data)
    } catch (error) {
        console.error('Error al cargar productos: ', error)
    }
}