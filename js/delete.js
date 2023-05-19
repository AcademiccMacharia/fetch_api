// deleteResource
const products_url = ('https://jsonplaceholder.typicode.com/posts');
async function deleteResource(){
    try{
        let res = await fetch(`${products_url}/2`, {
            method: 'DELETE',
        })
        let results = await res.json();
        console.log(results)
    } catch(error){
        console.log("Nothing was deleted")
    }
}

deleteResource()