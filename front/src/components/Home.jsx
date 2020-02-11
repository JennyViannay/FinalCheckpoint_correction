import React, { Component } from 'react'
import Carousel from './Carousel'
import Tour from './Tour'
import Price from './Price'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <hr/>
                <Tour />
                <hr/>
                <Price />
            </div>
        )
    }
}