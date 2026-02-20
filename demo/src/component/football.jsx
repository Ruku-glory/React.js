
import Goal from'./goal';
import Missedgoal from'./missedgoal';
function Football(){
    const isGoal = Props.isGoal;
    return(
        <div>
            <h1>Football Tournament </h1>
            {isGoal ? <Goal/> : <Missedgoal/>}

        </div>
    )
}
export default Football;