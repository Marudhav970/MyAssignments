function launchBrowser(browsername)
{
    if(browsername=="chrome")
    {
        console.log("launching chrome browser")
    }
    else
    {
        console.log("Launching other browser")
    }
}

function runTests(testType)
{
    switch(testType)
    {
    case "Smoke":
    console.log("Run Smoke Test");
    break;

    case "Sanity":
     console.log("Run Sanity Test");
     break;

    case "Regressiom":
     console.log("Run Regression Test");
     break;

     default:
        console.log("Default smoke test")
      break;
    }

  
}
  launchBrowser("chrome");
    runTests("Smoke");
