var genderType ="female";
function printGender()
{
    let colour ="brown"
    if(genderType.startsWith("female"))
    {
        var age=30
        let colour="pink"
        console.log("Inside if block colour:", colour)
    }

 console.log("age inside function:",age)

}

printGender()
console.log("Gender:",genderType);



