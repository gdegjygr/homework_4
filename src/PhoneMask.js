import React  from "react"
import IMask from 'imask'


export default function FormStyle (elem) {
    // Phone cheker
    const phoneMask = IMask(elem, {
     mask: '+{996} (000)00-00-00'  
    })

    phoneMask.updateValue()


    return(
        <></>
        )
}









