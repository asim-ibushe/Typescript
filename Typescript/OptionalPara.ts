function fun(name: string,passport ?,nationality: string="Indian")
{
    console.log("Name is:",name);
    if(passport==undefined)
    {
        console.log("Sorry id dont have passport");
    }
    else{
        console.log("Passport number is:"+passport);
    }
    console.log("Nationality is:"+nationality);
}

fun("Asim Ibushe",8854786,"Irish")

function dynamic(...data:number [])
{
    console.log(data,data.length);
}

dynamic(11,22,33,44);
