import styles from "../../styles/Plumbers.module.css"
import Styles from "../../styles/Home.module.css"
import Link from "next/link"

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { plumbers: data },
  }
}

const Plumbers = ({ plumbers }) => {
  // console.log(plumbers)

  return (
    <div>
      <h1 className="my-5" className={Styles.title}>
        All Plumbers
      </h1>
      {plumbers.map((plumber) => (
        <Link href={"/lists/" + plumber.id} key={plumber.id}>
          <a className={styles.single}>
            <h3>{plumber.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default Plumbers;
