import React from 'react'
import spinner from './img/spinner.gif';
import styled from 'styled-components'
const Loader = () => {
    return (
        <>
            <Card>
                <div className="spinner" >

                    <img src={spinner} alt="Spinner" />
                    <h1 className="text-center">Loading...</h1>
                </div>
            </Card>

        </>
    )
}

export default Loader

const Card = styled.div`
    align-items: center;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
`;