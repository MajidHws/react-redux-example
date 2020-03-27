import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { buyIceCream } from '../redux'

const IceCreamContainer = (props) => {
    return (
        <div>
            <h2>Num of Ice Creams - {props.numOfIceCreams}</h2>
            <button onClick={() => props.buyIceCream()}>buy ice cream</button>
        </div>
     )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)