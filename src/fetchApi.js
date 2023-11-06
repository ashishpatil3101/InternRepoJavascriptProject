

function getInfo(){

    //make request and store result
    const requestData = fetch("https://api.covidtracking.com/v1/us/daily.json")
   
    //parse the json 
    requestData.then((data)=>{
        return data.json();
     })
     .then( ( data)=>{ //handle the final output
        
         const info = data;
         
         for(let i = 0 ; i < 5 ;i++ ) {
            
            const dateString = info[i].date.toString();
            const formDate = `${dateString.substring(0 , 4)}/${dateString.substring(4 , 6)}/${dateString.substring(6 )}`
            console.log(`in US till date ${formDate} we have total covid ${info[i].positive} positive cases and we have  cured ${info[i].negative}  patients ` )
     
            
         }
     })
     .catch( ( error )=>{
         
         console.log(error)
     })
}
//call function
getInfo();
