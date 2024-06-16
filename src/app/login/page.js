import Loginform from "@/components/Loginform/login";
import styles from './login.module.css';

export default function Login(){
    return(
        <div className={styles.container}>
            <Loginform />
        </div>
    );
}