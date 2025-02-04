import { useState } from "react"

export default function UserInput ({onChange, userInput}) {

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input 
                    onChange={(event) => onChange('initialInvestment', event.target.value)} 
                    type="number" 
                    required
                    value={userInput.initialInvestment}
                />
            </p>
            <p>
                <label>Anual Investment</label>
                <input 
                    onChange={(event) => onChange('annualInvestment', event.target.value)} 
                    type="number" 
                    required
                    value={userInput.annualInvestment}
                />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input 
                    onChange={(event) => onChange('expectedReturn', event.target.value)} 
                    type="number" 
                    required
                    value={userInput.expectedReturn}
                />
            </p>
            <p>
                <label>Duration</label>
                <input 
                    onChange={(event) => onChange('duration', event.target.value)} 
                    type="number" 
                    required
                    value={userInput.duration}
                />
            </p>
        </div>
    </section>
}