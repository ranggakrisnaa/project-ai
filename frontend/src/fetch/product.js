import instance from "../lib/axios"

export async function getAllProduct() {
    try {
        const data = await instance({
            method: 'GET',
            url: '/',
        })

        return data.data
    } catch (error) {
        console.log(error);
        throw error
    }
}