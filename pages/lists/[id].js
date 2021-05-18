export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(plumber => {
    return {
      params: { id: plumber.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: {plumber:data}
    
  }
}


const Details = ({plumber}) => {
  return (
    <div>
      <h1>{ plumber.name }</h1>
      <p>{ plumber.email }</p>
      <p>{ plumber.website }</p>
      <p>{ plumber.address.city }</p>
    </div>
  );
}

export default Details;