document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
    const rapperName = document.querySelector('input').value
    try {
        const response = await fetch(`https://rapper-api-100devs-7ee06a129a0c.herokuapp.com/api/${rapperName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.birthName
    } catch (error) {
        console.log(error)
    }
}