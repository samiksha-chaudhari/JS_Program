let low= 1;
let up= 100;
let flag=1;
for (let i=low+1; i <= up-1; i++ )
{
    let flag=0;
      for ( let j=2; j <= i-1; j++ )
        {
          if ( i % j == 0 )
            {
               flag=1;
               break;
            }
        }
                if  (flag == 0 )
                console.log( "The  prime  numbers are :" + i);
                
    }
    if(flag == 1)
    console.log("No prime numbers in the range");