const api = 'https://swapi.dev/api'

let token = localStorage.token

if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': token
}

export const getAll = () =>
    fetch(`${api}/people`, { headers })
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