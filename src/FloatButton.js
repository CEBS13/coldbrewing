import React from 'react';
import styled from 'styled-components';




const StyleButton = styled.button`
position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color: #469fbe;
	color:#FFF;
	border-radius:50px;
	text-align:center;
    box-shadow: 2px 2px 3px #999;
    
    &:hover{
        background-color: #4dafd1;
	}
`


const FloatButton = (props) => {
    return (
        <StyleButton>  
            <div>
            {props.children}
            </div>
        </StyleButton>
    );
}
 
export default FloatButton;