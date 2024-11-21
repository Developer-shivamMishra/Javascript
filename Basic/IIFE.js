//***************Immediately Invoked funciton Expression*************** */
 
//IIFE always end with semicolon (;)
(()=>{        // Simple IIFE
    console.log(`DB CONNECTED`);
})();


(function chai(name){           //This is a Named IIFE
    console.log(`DB CONNECTED TwO ${name}`);
})("shivam");