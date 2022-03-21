import React from 'react';
import styled from 'styled-components';

const Fondo = () => {

    const Gradientes = styled.div`
        height: 100%;
        z-index: -100;
    `;
    const Gradient2 = styled.svg`
        right: .100px;
    height: 100%; 
    width: 100%;
    position: absolute;
    bottom: 0;
    `;
    const LinearGradient2 = styled.path`
    stroke: none;
    fill: #62E18E;
    
    
    `;

    const Gradient1 = styled.svg`
    right: .100px;
    height: 100%; 
    width: 100%;
    position: absolute;
    bottom: 0;
    filter:drop-shadow(0px -36px 84px rgba(0, 0, 0, 0.25));
    `;
    const LinearGradient1 = styled.path`
    stroke: none;
    fill: #62E18E;
    `;
  return (
    <div>
        <Gradientes>
            
            <Gradient2 viewBox="0 0 500 150" preserveAspectRatio="none">
               <LinearGradient2 d="M-4.22,63.66 C193.28,96.22 269.47,122.88 531.31,-12.31 L500.00,150.00 L-0.27,152.47 Z">
               </LinearGradient2>
           </Gradient2>

           <Gradient1 viewBox="0 0 500 150" preserveAspectRatio="none" >
               <LinearGradient1 d="M-9.87,99.19 C167.89,78.47 365.40,159.38 502.54,80.44 L500.00,150.00 L0.00,150.00 Z" >
               </LinearGradient1>
           </Gradient1>

       </Gradientes>
   </div>
  )
}

export default Fondo