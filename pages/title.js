import styles from '../styles/Home.module.css'
export default function Title(pageProps) {
    return (
        <div style={{textAlign:'center',padding:20}}><span className={styles.title}>{pageProps.title}</span></div>
    )
}

