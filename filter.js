
// filterResource
const products_url = ('https://jsonplaceholder.typicode.com/posts');

let userRequire = prompt("Enter any user id between 1 and 10");
async function filterResource(){
    try {
        let res = await fetch(`${products_url}?userId=${userRequire}`, {
            method: 'GET',
            })
            let results = await res.json()
            console.log(results)
    } catch (error) {
        console.log("Aint no filtering here boy!")
    }
}
filterResource()