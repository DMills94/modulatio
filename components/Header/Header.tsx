import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faSpotify, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

// Styles
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Modulat.io</h1>
      <div className={styles.icons}>
        <a href="https://twitter.com/modulat_io" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={styles.icon} icon={faTwitter} /></a>
        <a href="https://discord.com/invite/v7CeBe34Qu" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={styles.icon} icon={faDiscord} /></a>
        <a href="https://open.spotify.com/show/4SakicRp0mPXVyEcFtXio1" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={styles.icon} icon={faSpotify} /></a>
        <a href="https://linktr.ee/modulat.io" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={styles.icon} icon={faFileAlt} /></a>
      </div>
    </header>
  );
}
