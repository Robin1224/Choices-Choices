import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = ({title, url, bgc}) => {
  return (
    <div className={styles.breadcrumb} style={{"--bgc": bgc}}>
      {url ? <a className={styles.bcText} href="{url}">{title}</a> : <span className={styles.bcText}>{title}</span>}
    </div>
  );
};
export default Breadcrumbs;
