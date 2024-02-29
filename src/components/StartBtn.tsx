import { ReactElement } from "react"



const StartBtn = (props: any) => {

    function initialAction(){
        props.actions.initialAction()
    }

  return (
    <div>
      <button className="start">Start</button>
    </div>
  )
}

export default StartBtn
