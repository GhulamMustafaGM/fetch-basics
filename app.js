// const res = fetch("https://reqres.in/api/users?page=2");

// res
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data.data);
//   })
//   .catch(() => {
//     console.error("Something went wrong!");
//   });


async function getData ()
{
  try
  {
    const res = await fetch( "https://reqres.in/api/users" );

    const data = await res.json();
    console.log( res );
  } catch ( err )
  {
    console.log( err );
    
  }
}

getData();
console.log( "Hello World!" );
