import React from 'react';
import '../style/home.css';
import Coco from '../images/coco.jpeg';

function Home() {
    return (
        <section className="home" id="home">
            <div className="home-data container">
                {/* Home Text */}
                <div className="home-text">
                    <div className="home-text-container">
                        <h3>Software Dev: Business Analyst</h3>
                    </div>
                    <div className="home-text-container">
                        <h2>
                            Lorem Ipsum is simply dummy
                            <br />
                            text of the printing and
                            <br />
                            typesetting industry.
                        </h2>
                    </div>
                </div>
                {/* Home Image */}
                <section className="home-section">
                    <div className="home-img-btn-container">
                        <div className="home-bg">
                            <img src={Coco} alt="" className="home-image" />
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Home;
