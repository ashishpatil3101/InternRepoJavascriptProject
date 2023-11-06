const getData = async ( )=>{


    try {

        //make requet get data
       const fetchData = await fetch("https://api.covidtracking.com/v1/us/daily.json");
       const actualData = await fetchData.json();//convert to js object
       
       //print the result
       for(let i = 0 ; i < 5 ;i++ ) {
           
           const dateString = actualData[i].date.toString();
           const formDate = `${dateString.substring(0 , 4)}/${dateString.substring(4 , 6)}/${dateString.substring(6 )}`
           console.log(`in US till date ${formDate} we have total covid ${actualData[i].positive} positive cases and we have  cured ${actualData[i].negative}  patients ` )       
       }

    } 
    catch (error) {
        console.log(error)
    
    }

}
getData();
