  // listing resources

  const products_url = ('https://jsonplaceholder.typicode.com/posts');

  async function listResources(){
      try {
          let result = await fetch(products_url);
          console.log(result);
          let data = await result.json();
          console.log(data);
      } catch (error) {
          console.log("Ooops you lose");
      }
  }
  
  listResources();