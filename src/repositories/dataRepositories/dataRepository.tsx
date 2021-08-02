export const getUsers = () => {
    const url = "https://jsonplaceholder.typicode.com/users"

    return fetch(url, {
        method: "GET",
        headers: {
            "Content.Type": "application/json"
        }
    })
}