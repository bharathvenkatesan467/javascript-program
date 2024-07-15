// 1.FIZZBUZZ program

let i;
for(i=1;i<=100;i++)
{
    if((i%3==0)&&(i%5==0))
    {
        console.log("FizzBuzz");
    }
    else if(i%3==0)
    {
        console.log("Fizz");
    }
    else if(i%5==0)
    {
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}



//2. palindrome



function palindrome(str){
    let str11="";
    let j;
    for(j=(str.length-1);j>=0;j--)
    {
        str11=str11+str.charAt(j);
    }
    if(str==str11)
    {
        console.log("Its is palindrome");
    }
    else
    {
        console.log("Its is not palindrome");
    }
    
}
let str4="radar";
console.log(palindrome(str4));



// 3.largest number in array

let ar11=[9,3,4,5,7,3,1];
console.log(large(ar11));

function large(arr){
    let s=arr.sort();
    let l=arr.length-1;
    return s[l];
}



// 4.number of occurance

let str12="Hello World";

    let ar1=[];
    let j,k,m,count=0;
    for(j=0;j<str12.length;j++)
        {
            ar1.push(str12.charAt(j));
        }
        for(k=0;k<ar1.length;k++)
        {
            for(m=k;m<ar1.length;m++)
            {
                if(ar1[k]==ar1[m+1])
                {
                    count=count+1;
                }
                if(ar1[k]==ar1[m+1])
                {
                    continue;
                }
            }
            console.log(ar1[k]+":"+count);
            count=0;
        }


// 5. longest word

console.log(long("hello hi"));

function long(str){
        let wc=0;
        let la=0;
        let lw="";
        let str22="";
        for(i=0;i<str.length;i++){
            if(str[i]!=' '){
                wc++;
                str22=str22+str[i];
            }
            else{
                if(wc>la){
                    la=wc;
                    lw=str22;
                    
                }
                str22="";
                wc=0;
            }
        }
        return lw;
    }

    


// 6.Factorial


let num1=5;
console.log(fact(num1));

function fact(num){
    let prod=1;
    for(let h=1;h<=num;h++)
    {
        prod=prod*h;
    }
    return prod;
}

// 7.fahrenheit

let temp=92;
console.log(fahr(temp));


function fahr(num)
{
    let f=(num*(9/5))+32;
    return f;
}


// 8. missing arry

function miss(arr){
        for(i=0;i<=arr.length;i++){
            if (arr[i]==i)
                continue;
            else
                console.log(i+" is missing number.");
                break;
        }
    }
    
    let arra=[0,1,2,3,5];
    console.log(miss(arra));
    