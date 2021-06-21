import {ADD_VIEW} from './types'

import React from 'react'

const addView = (number) =>{
    return{
        type : ADD_VIEW,
        payload : Number(number)
    }
}