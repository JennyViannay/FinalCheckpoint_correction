import React, { Component } from 'react'
import Representation from './Representation'
import Tarification from './Tarification'

export default class Home extends Component {
    render() {
        return (
            <div id="">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/switch_marvelultimatealliance3_artwork_03-crop_1.png?itok=y1kj6oaP&sc=7c23ffe07800d8971795b87fd7323c5f" alt="Second slide" />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Lorem Ipsum</h5>
                                <p>Maecenas et aliquam quam. Praesent a enim accumsan, tincidunt tortor vitae, gravida elit. Suspendisse potenti. Cras et elit ornare, dictum dui luctus, molestie velit.</p>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://www.nintendo.com//content/dam/noa/en_US/games/switch/m/marvel-ultimate-alliance-3-the-black-order-switch/Switch_MUA3_1200x675.jpg" alt="First slide" />
                            <div class="carousel-caption d-none d-md-block">
                            <h5>Lorem Ipsum</h5>
                            <p>Maecenas et aliquam quam. Praesent a enim accumsan, tincidunt tortor vitae, gravida elit. Suspendisse potenti. Cras et elit ornare, dictum dui luctus, molestie velit.</p>
                        </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a> 
                </div>
                <Representation />
                <Tarification />
            </div>
        )
    }
}