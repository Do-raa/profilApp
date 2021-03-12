import React from 'react' 
import PropTypes from "prop-types";

function Profil(props) {  
 
    return (
        <div style={{color:'#ffab73', fontSize:'30px' , fontFamily:'cursive' }}>  
            
         <p>  My name's : {props.fullName} 
           {"\n"}  </p>
         <p>  Here is my Biography :{props.bio} 
           </p>
          <p> I am :{props.profession} {"\n"} </p>
                    <span>{props.children} {"\n"}</span>  
        <button style={{display:'block'}}onClick={()=>{props.handleName('Dorra Elkahla')}}>Click Me</button> 
  
        </div>
    )
}
 
Profil.defaultProps={ 
    fullName:"unknown" , 
    bio:"undefined"}; 

export default Profil ;


 Profil.propTypes={ 
    fullName:PropTypes.string, 
    handleName:PropTypes.func
};   