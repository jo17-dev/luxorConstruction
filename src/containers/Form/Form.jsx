import { Button } from "../../components/Forms/Button/Button";
import Input from "../../components/Forms/Input/Input";
import "./form.css";
const Form = ()=>{
    const handleChange = ()=>{
        console.log("changed !")
    }

    return (
        <form>
            <div className="div">
                <Input name="name" id="name" 
                    placeholder="Entrez votre nom complet" 
                    required 
                    label="Nom:"
                    onChange={handleChange}
                />
            </div>
            <div className="div">
                <Input name="tel" id="tel" 
                    placeholder="Phone number"
                    required label="Phone number"
                />
            </div>
            <div className="div">
                <Input name="email" type="email" id="email" placeholder="example@gmail.com"
                    required 
                    label="Email: " 
                 />
            </div>
            <div className="div">
                <Input name="tel" type="textaera" id="message" placeholder="Message"
                    required 
                    label="Message" 
                 />
            </div>
            <div className="div">
                <Button value="Envoyer" className='form-btn' />
            </div>
        </form>
    )
}

export default Form;