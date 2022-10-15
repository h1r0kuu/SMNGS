import {ReactElement} from "react";
import FormGroup from "./FormGroup/FormGroup";

const Form = (): ReactElement => {
    return (
        <form>
            <FormGroup type={"text"} placeholder={"Username"}/>
            <FormGroup type={"password"} placeholder={"Password"}/>
            <div className="form-group">
                <button className="btn btn-primary btn-block" type="submit">Login</button>
            </div>
        </form>
    )
}

export default Form;