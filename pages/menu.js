import styles from '../styles/Home.module.css'
export default function Menu(props) {
    return (
        <div className={styles.menu} style={{...props.styles}}></div>
    )
}