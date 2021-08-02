export const getUsers = () => {
    const url = "https://jsonplaceholder.typicode.com/users"

    return fetch(url, {
        method: "GET",
        headers: {
            "Content.Type": "application/json"
        }
    })
}

export const getRandomPuppy = () => {
    const url = "https://dog.ceo/api/breeds/image/random";

    return fetch(url, {
        method: "GET"
    });
}