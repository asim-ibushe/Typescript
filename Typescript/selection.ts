
function sequence()
{
    console.log("Demostration of sequence:")
    var arr : number[] =[10,20,30,40];
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
}


function iteration1() : number
{
    console.log("Demostration of iteration:")
    var arr : number[] =[10,20,30,40,50];
    var icnt : number=0;
    var isum : number=0;
    for(icnt=0;icnt<arr.length;icnt++)
    {
        isum+=arr[icnt];
    }
    return isum;
}

function iteration2() : number
{
    console.log("Demostration of iteration:")
    var arr : number[] =[10,20,30,40,50];
    var ivalue : number=0;
    var isum : number=0;
    //for each loop
    for( ivalue of arr)
    {
        isum=isum+ivalue;
    }
    return isum;
}

function iteration3() : number
{
    console.log("Demostration of iteration:")
    var arr : number[] =[10,20,30,40,50];
    var iIndex : number=0;
    var isum : number=0;
    //for index loop
    for(let iIndex in arr)
    {
        isum+=arr[iIndex]

    }
    return isum;
}

function iteration4() : number
{
    console.log("Demostration of iteration:")
    var arr : number[] =[10,20,30,40,50];
    var icnt : number=0;//1
    var isum : number=0;
    /*
    for(icnt=0;icnt<arr.length;icnt++)
    {
        isum+=arr[icnt];
    }
    */

   while(icnt<arr.length)//2
   {
    isum+=arr[icnt]; //4 loop body
    icnt++; //3 increment decrement
   }
    return isum;
}

function iteration5() : number
{
    console.log("Demostration of iteration using do-while loop:")
    var arr : number[] =[10,20,30,40,50];
    var icnt : number=0;//1
    var isum : number=0;
    /*
    for(icnt=0;icnt<arr.length;icnt++)
    {
        isum+=arr[icnt];
    }
    */
    do
   {
    isum+=arr[icnt]; //4 loop body
    icnt++; //3 increment decrement
   }while(icnt<arr.length)//2
    
   return isum;
}


function compare(ino1: number, ino2: number)
{
    if(ino1>ino2)
    {
        console.log("First no is greater than second")

    }
    else if(ino1<ino2)
    {
        console.log("First no is less than second")
    }
    else if(ino1==ino2)
    {
        console.log("Both numbers are equal")
    }
    else
    {
        console.log("Invalid Arguments passed")
    }
}

function displayDay(iNo: number)
{
    if(iNo==1){console.log("Monday")}
    else if(iNo==2){console.log("Tuesday")}
    else if(iNo==3){console.log("Wednesday")}
    else if(iNo==4){console.log("Thursday")}
    else if(iNo==5){console.log("Friday")}
    else if(iNo==6){console.log("Saturday")}
    else if(iNo==7){console.log("Sunday")}
    else {console.log("Invalid output!!")}
}
displayDay(6)
//sequence();//function call
//console.log(iteration5())