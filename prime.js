n=7
let count=0
 for(let i=2;i<=n;i++)
{
  if(n%i==0)
  {
  count++;
  } 
}
 if(count==1)
 {
  console.log("it is a prime no");
  }
  else
   {
    console.log("it is not a prime no");
   }