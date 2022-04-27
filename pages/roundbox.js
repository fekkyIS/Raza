import styles from '../styles/Home.module.css'
export default function Roundbox(props){
    return(
        <div className={styles.roundcard}>
            {props.children}
        </div>
    )
}