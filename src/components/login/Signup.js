import React from 'react'

export default function Signup(props){
        let n = props.number;
        // Write your code here
        for (var x=1; x <= n; x++){
            if( x % 3 && x % 5 ) {
                
                console.log(x);
            } else {
                if( x % 3 == 0 ) {
                    // document.write("ping");
                    console.log('ping multiply by 3');
                }
                if( x % 5 == 0 ) {
                    // document.write("pong");
                    console.log('pong multiply by 5')
                }
            
            
            }  
        
    }
        //fizzBuzz(15);
        return <h1>signUp</h1>
        
}

