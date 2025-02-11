import {useRef, useImperativeHandle} from "react"; 

export default function ResultModal({ ref, targetTime, remainingTime, onReset }) {
    const dialog = useRef();
    const userLost = remainingTime <= 0;
    const formatRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    // this function will define properties and methods
    // that accessible on this component here from outside
    // if this ref.open() is called, it will run showModal()
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })

    return 
    <dialog ref={dialog} className="result-modal" open>
        {userLost && <h2>You lost</h2>}
        {!userLost && <h2>Your score {score}</h2>}
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>{formatRemainingTime * 1000} seconds left.</strong></p>
        <form action="" method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>
}