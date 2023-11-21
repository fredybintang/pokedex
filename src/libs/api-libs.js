
export const getResponseApi = async(resource) => {
    const api = "https://pokeapi.co/api/v2"
    const response = await fetch(`${api}/pokemon/${resource}`)
    const pokeAPI = response
    return pokeAPI
}