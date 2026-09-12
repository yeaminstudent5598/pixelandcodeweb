import Link from "next/link";
import styles from "./navbar.module.css";
import type { MegaMenuData } from "./navbarData";

export default function MegaMenu({ data }: { data: MegaMenuData }) {
  return (
    <nav className={styles.subMenuMega}>
      <section className={styles.subMenuWrapper}>
        {/* Left column */}
        <div className={styles.subMenuWrapperLeft}>
          <h4>{data.leftTitle}</h4>
          {data.leftBoxes.map((box) => (
            <div key={box.title} className={styles.leftBox}>
              <h4>
                <Link href={box.href}>{box.title}</Link>
              </h4>
              <p>{box.text}</p>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className={styles.subMenuWrapperRight}>
          <h4 className={styles.subMenuTitle}>{data.rightTitle}</h4>
          <div className={styles.subNavRight}>
            <ul>
              {data.rightLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <i className={styles.bullet} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.subNavBottom}>
            <div className={styles.navBottomLeft}>
              <h4 className={styles.subMenuTitle}>{data.bottomTitle}</h4>
              <ul>
                {data.bottomLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.videoDesc}>
              <p>{data.thumbnailCaption}</p>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
}