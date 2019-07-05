import React from 'react'
import carousel1 from '../images/banner1.jpg'
import carousel2 from '../images/banner2.jpg'
import carousel3 from '../images/banner3.jpg'
import carousel4 from '../images/banner4.jpg'
import {Carousel} from 'antd'

class Carousels extends React.Component {
    render() {
        return <Carousel effect="fade" autoplay>
            <img src={carousel1}/>
            <img src={carousel2}/>
            <img src={carousel3}/>
            <img src={carousel4}/>
        </Carousel>
    }
}

export default Carousels