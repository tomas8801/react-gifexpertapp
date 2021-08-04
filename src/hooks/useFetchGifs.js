import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs( category )
            .then( img => {

                setTimeout(()=>{
                    setState({
                        data: img,
                        loading: false
                    })
                }, 2000)

            })
    }, [category])

    // setTimeout(() => {
    //     setState({
    //         data: [1, 2, 3, 4, 5],
    //         loading: false
    //     })
    // }, 3000)

    return state; // { data: [], loading: true };
}
