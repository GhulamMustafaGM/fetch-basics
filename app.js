const res = fetch( "https://my-json-server.typicode.com/typicode/demo/posts", {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify( {
    title: 'This is a post',
  }),
});

res.then( ( res ) => res.json() )
  .then( ( data ) =>
  {
    console.log( data );
  } )
  .catch( () =>
  {
    console.error( "Something went wrong!" );
  } );
