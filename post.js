// postResources
const products_url = ('https://jsonplaceholder.typicode.com/posts');

let new_product = {
    title: 'New Product',
    body: 'This is a new product',
    userId: 1,
  };
async function postResource(){
    try {
        let res = await fetch(products_url, {
        method: 'POST',
        body: JSON.stringify(new_product)
        })
        let results = await res.json();
        console.log(results);
    } catch (error) {
        console.log("Nothing was posted")
    }
}
    postResource();