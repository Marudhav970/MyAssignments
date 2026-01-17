function checknumtype(number)
{
  
    if(number > 0)
    {
        return "Positive";
    }
    else if(number < 0)
    {
        return  "Negative";
    }
    else
    {
        return "Neutral";
    }
    }
   let num=0;
 console.log(checknumtype(num));
