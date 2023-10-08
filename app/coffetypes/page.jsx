import GlobalList from '../../components/globalList'
import styles from './coffeey.module.css'
export default function Coffetypes(){
  return (
    <div className={styles.container}>
      <div className={styles.containertypes}>
      <h1>Tipos de cafe</h1>
      </div>
      <GlobalList />
    </div>
  )
}