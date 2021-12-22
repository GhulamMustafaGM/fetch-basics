const res = fetch( "https://reqres.in/api/users?page=2" );


res
  .then( ( res ) => res.json() )
  .then( ( data ) =>
  {
    console.log( data.data );
  } )
  .catch( () =>
  {
    console.error( "Something went wrong!" );
  } );
