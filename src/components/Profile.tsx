import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const { level } = useContext(ChallengesContext)

    return(
        <div className={styles.profileContainer}>
            <img src="https://cosmonerd.com.br/wp-content/webp-express/webp-images/doc-root//uploads/2020/10/zenitsu-demonslayer-1024x585.jpg.webp" alt="Zenitsu"/>
            <div>
                <strong>Zenitsu</strong>
                
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level { level }
                </p>
            </div>
        </div>
    );
}