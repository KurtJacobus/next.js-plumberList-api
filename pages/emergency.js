import styles from "../styles/Home.module.css";
import Link from "next/link";

const Emergency = () => {
  return (
    <div className="emergency">
      <h1 className={styles.title}>Plumbing Emergency</h1>
      <p className={styles.text}>
        Plumbing problems and issues often happen at the worst possible time,
        often being at night or on the weekends and holidays. This is where a
        reliable plumbing company such as King Plumbing can respond to these
        urgent situations at any time. We have a 24 hour / after hours plumbing
        roster where a qualified, friendly plumber can be made available to you.
      </p>

      <p className={styles.text}>
        King Plumbing has a quick turnaround time in responding to our clients
        and professional, efficient workmanship and the ability to solve many
        plumbing issues is what we guarantee.
      </p>
      <Link href="tel:0873573461">
        <div className="text-center">
          <button type="button" className="btn btn-danger">
            Call 087 357 3461
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Emergency;
