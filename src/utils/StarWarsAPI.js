const api = 'https://swapi.dev/api'

export const getAll = () =>
    fetch(`${api}/people`)
        .then(res => res.json())
        .then(data => data.results)

// export const create = (body) =>
//     fetch(`${api}/contacts`, {
//         method: 'POST',
//         headers: {
//             ...headers,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(body)
//     }).then(res => res.json())