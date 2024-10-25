import parse from 'html-react-parser'
import styles from './Introduction.module.css'

const Introduction = ({title, content}) => {
  return (
    <section className={styles.introduction}>
      <h2>{title}</h2>
    
      {parse(content.html)}
    </section>
  )
}
export default Introduction