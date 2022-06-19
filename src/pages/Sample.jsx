import styles from 'pages/sample.module.scss';
import { debounce } from "lodash";

export default function Sample() {
  const onMouseMove = e => {
    console.log('no debounce');
  }
  const onMouseMoveDebounce = debounce(e => {
    console.log('debounce');
  }, 1000);

  return (
    <section 
      className={styles.sample}
      onMouseMove={() => {
        onMouseMove();
        onMouseMoveDebounce();
      }}>
    </section>
  )
}