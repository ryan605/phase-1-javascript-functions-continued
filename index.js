function saturdayFun(activity)
{
    if(activity==undefined){
        return `This Saturday, I want to roller-skate!`
    }else
      return `This Saturday, I want to ${activity}!`
}
const mondayWork= function(task=`go to the office`)
{
    return `This Monday, I will ${task}.`
}
let wrapAdjective=function(style=`*`){
    return function(adjective=`hardworker`){
        return `You are ${style}${adjective}${style}!`
    }

}


    
