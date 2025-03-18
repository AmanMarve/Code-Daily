console.log("Connected");

(
    //Named Iffe
    function Demo(username){
        console.log(`Hey Buddy, ${username} here`);
    }
)('Demo');

(
    (name)=>{
        console.log(`Unnamed Iffe, ${name} here!`)
    }
)("Demo")