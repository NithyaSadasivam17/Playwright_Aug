function launchBrowser(browserName)
{
    if(browserName=="chrome"){
        console.log(`browser namee is chrome`)
    }else{
        if(browserName=="edge"){
            console.log(`browser name is edge`)

        }else{
            if(browserName=="firefox"){
                console.log(`browser name is firefox`)
            }else{
                if(browserName=="safari"){
                    console.log(`browser name is safari`)
                }else{
                    console.log(`No browser matched`)
                }
            
            }
        }
    }
}
launchBrowser("chrome")


function runtest(testType){
switch(testType)
{
case "sanity":
    console.log("runtest:sanity")
    break
case "regression":
    console.log("runtest:regression")
    break
default :
    console.log("runtest:smoke")
    break
}
}

runtest()

function studentScore(gradeCalculation){

switch(true)
{
case gradeCalculation >= 90 && gradeCalculation >= 100:
    console.log("Grade: A+")
    break
case gradeCalculation >= 70 && gradeCalculation <= 89:
    console.log("Grade: A")
    break
case gradeCalculation >= 60 && gradeCalculation <= 79:
    console.log("Grade: B")
    break
case gradeCalculation >= 50 && gradeCalculation <=59 :
    console.log("Grade: C")
    break
case gradeCalculation >= 35 && gradeCalculation <= 49:
    console.log("Grade: D")
    break
default :
    console.log("Fail")
    break
}
}

studentScore(70)


