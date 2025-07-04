import "./BtnGroup.scss"

export default function BtnGroup(){
    return(
        <>
         <div className="tip-percentage__title">
            <p>Select Tip %</p>
          </div>
          <div className="tip-percentage__btn-group">
            <div className="tip-percentage__btn tip-percentage__btn--fill">5%</div>
            <div className="tip-percentage__btn tip-percentage__btn--fill">10%</div>
            <div className="tip-percentage__btn tip-percentage__btn--fill">15%</div>
            <div className="tip-percentage__btn tip-percentage__btn--fill">25%</div>
            <div className="tip-percentage__btn tip-percentage__btn--fill">50%</div>
            <div className="tip-percentage__btn tip-percentage__btn--custom">Custom</div>
          </div>
        </>
    )
}