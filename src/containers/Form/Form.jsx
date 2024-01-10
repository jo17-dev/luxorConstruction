import { useState } from "react";
import { Button } from "../../components/Forms/Button/Button";
import "./form.css";

const Form = ()=>{
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    
    const handleEmail = (e)=>{
        setEmail(e.target.value);
    }

    const handleMessage = (e)=>{
        setMessage(e.target.value);
    }

    return (
        <form>
            <div className="div">
                <label htmlFor="name">Nom:</label>
                <input name="name" id="name" 
                    placeholder="Entrez votre nom complet" 
                    required
                />
            </div>
            <div className="div">
                <label htmlFor="tel">Numéro de téléphone:</label>
                <input name="tel" id="tel" 
                    placeholder="+1 514 XXX XXXX"
                    required
                />
            </div>
            <div className="div">
                <label htmlFor="email">Email: </label>
                <input name="email" type="email" id="email" placeholder="example@gmail.com"
                    // required 
                    label="Email: "
                    onChange={handleEmail}
                    value={email}
                 />
            </div>
            <div className="div">
                <label htmlFor="message">Message: </label>
                <input name="tel" type="textaera" id="message" placeholder="Message"
                    // required 
                    label="Message"
                    onChange={handleMessage}
                    value={message}
                 />
            </div>
            <div className="div">
                <Button value="Envoyer" className='form-btn' disabled={false} />
            </div>
        </form>
    )
}

export default Form;