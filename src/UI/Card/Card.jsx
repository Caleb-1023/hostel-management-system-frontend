import React from 'react';
import styles from './Card.module.css';
import Carousel from './carousel'




function Card({ children }) {
       return (
              <div className={styles.Card}>
                     <div>
                            {children}



                     </div>
                     <div className={styles['Card__right']}>
                            <div>
                                   <Carousel />

                            </div>

                     </div>
              </div>
       )
}

export default Card
