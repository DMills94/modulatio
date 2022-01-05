import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h4 className={styles.subtitle}>Archives</h4>
        <p>December 2021</p>
        <p>November 2021</p>
        <p>Octopus 2021</p>
        <p>September 2021</p>
        <p>July 2021</p>
        <p>June 2021</p>
        <p>May 2021</p>
      </div>
      <div>
        <h4 className={styles.subtitle}>Recent Posts</h4>
        <p>Albums of the Year 2021 - Part 2 Top 10</p>
        <p>Albums of the Year 2021 - Part 1 Shoutouts</p>
        <p>Ep. 13 Arca, Mach-Hommy</p>
        <p>Ep. 12 Silk Sonic</p>
        <p>Ep. 11 Death's Dynamic Shroud / Emma Ruth Rundle</p>
      </div>
    </footer>
  );
}
