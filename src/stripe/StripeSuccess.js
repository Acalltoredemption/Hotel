import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {stripeSuccessRequest} from '../actions/stripe';


const StripeSuccess = ({match, history}) => {
    const {auth} = useSelector((state) => ({...state}));
    const {token} = auth;

    useEffect(() => {
        console.log('send this hotelid to backend to create order', match.params.hotelId);
        stripeSuccessRequest(token, match.params.hotelId)
        .then(res => {
            if(res.data.success){
                history.push('/dashboard');
            } else {
                history.push('/stripe/cancel');
            }
        })
    }, [match.params.hotelId]);



    return (
        <div className="container">
            <div className="col">
                <h2 className="text-center p-5">Payment Success! {match.params.hotelId}</h2>
            </div>
        </div>
    )
};

export default StripeSuccess;