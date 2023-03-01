import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

export default function Forms({setUsers , users}){

    const [form , setForm] = useState({
        name : "",
        email : "",
        password : "",
        connected : false,
    });

    // const [users , setUsers ] = useState([]);

    function Data(e){
        let name = "";
        let email = "";
        let password = "";
        let newForm = { ...form };

        switch (e.target.name) {
            case "name":
                name = e.target.value ;
                newForm.name = name;
                setForm(newForm);
            break;
            case "email":
                email = e.target.value ;
                newForm.email = email;
                setForm(newForm);
            break;
            case "password":
                password = e.target.value ;
                newForm.password = password;
                setForm(newForm);
            break;
        
            default:
                break;
        }
    }
    const navigate = useNavigate();

    function Submit(e){
        e.preventDefault();
        let newForm = { ...form };
        setUsers([...users , newForm]);
        setForm({ name :"" , email : "" , password : "" , connected : false});
        navigate("/home/news");
    }
    return (
        <>
            <h1>Inscription</h1>
            <Form onSubmit={Submit}>
                <div>
                    <label htmlFor="name">Nom :</label>
                    <input type="text" name="name" id="name" onChange={Data}/>
                </div>
                <div>
                    <label htmlFor="email">Email :</label>
                    <input type="email" name="email" id="email" onChange={Data}/>
                </div>
                <div>
                    <label htmlFor="password">Mot de passe :</label>
                    <input type="password" name="password" id="password" onChange={Data}/>
                </div>
                <button type="submit">Envoyez</button>
            </Form>

        </>
    )
}