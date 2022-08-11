import React from 'react'
import Styles from './Card.module.css'

const Carousel = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className={Styles.img}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/needed.png" className="d-block w-100 mx-auto" alt="book" />
                        <div className="carousel-caption d-none d-md-block">
                            <h6>"Tell me and I forget. Teach me and I remember. Involve me and I learn" - Benjamin Franklin
                            </h6>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/needed2jpg.jpg" className="d-block w-100 rounded-5" alt="quote" />
                    </div>
                    <div className="carousel-item">
                        <img src="images/needed3.jpg" className="d-block w-100 rounded-5" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/needed4.jpg" className="d-block w-100 rounded-5" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/needed5.jpg" className="d-block w-100 rounded-5" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Carousel