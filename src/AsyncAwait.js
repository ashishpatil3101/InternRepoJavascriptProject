async function employeeId(){
    
    return "here is your id: 12345";
}

async function getEmail(){
    
    return "example@gmail.com"
    
}

async function profilePhoto() {

    // return "photo.jpg"
   
}

async function getPhoto(){
     
    const empId = await employeeId();
    const emailID = await getEmail();
    const pic= await profilePhoto();

    console.log( pic);
}
// console.log(getPhoto());
getPhoto();