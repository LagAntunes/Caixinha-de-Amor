import React, { useState, useEffect } from 'react';
import Home from '../pages/Home/Home';

import styles from "./Animation.module.css"

const Animation = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        }, 30000);
    }, []);

    return(
        <>
            {loading ? (
            <div className={styles.containerAnimation}>
                <div className={styles.sewing_stuff}>
                    <div className={styles.tape}>
                        <div className={styles.tape_top}></div>
                        <div className={styles.tape_bottom}></div>
                    </div>
                    <div className={styles.pin_cushion}>
                        <div className={styles.pins}>
                            <div className={styles.pin}></div>
                            <div className={styles.pin}></div>
                            <div className={styles.pin}></div>
                            <div className={styles.pin}></div>
                            <div className={styles.pin}></div>
                            <div className={styles.pin}></div>
                        </div>
                        <div className={styles.cushion}></div>
                    </div>
                    <div className={styles.sewing_machine}> 
                        <div className={styles.thread}></div>
                        <div className={styles.needle}></div>
                        <div className={styles.machine_top}></div>
                        <div className={styles.machine_right}></div>
                        <div className={styles.machine_bottom}></div>
                    </div>
                </div>
                <div className={styles.table}></div>
            </div>
            ) : (
                <>
                    <Home/>
                </>
            )}
        </>
    )
}

export default Animation;