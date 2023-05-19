const products_url = ('https://jsonplaceholder.typicode.com/posts');

async function updateResource(){
    try {
        let res = await fetch(`${products_url}/1`, {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'New Update',
            body: 'This is a new update',
            userId: 1,
        })
        })
        let results = await res.json();
        console.log(results);
    } catch (error) {
        console.log("Nothing was updated")
    }
 }
updateResource()