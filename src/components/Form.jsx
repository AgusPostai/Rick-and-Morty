import { useState } from 'react';
import validation from './validation';


const Forms = ({ login }) => {
    const { userData, setUserData } = useState({
        email: '',
        password: ''
    });


    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setErrors(validation({ ...userData, [event.target.name]: event.target.value }))
        setUserData({ ...userData, [event.target.name]: event.target.value, })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    };


    return (
        <div>
            <form>
                <label htmlFor="email">Email: </label>
                <input
                    onChange={handleChange}
                    value={userData.email}
                    type="email"
                    name="email"
                />
                {errors.e1 ? (<p>{errors.e1}</p>)  // aca decimos si hay un error1, mostras un p con el e1
                    : errors.e2 ? (<p>{errors.e2}</p>) // si hay un error 2 mostras un p cin el e2
                        : (<p>{errors.e3}</p>)             // y sino por defecto va e3
                }
                <hr />

                <label htmlFor="password">Password: </label>
                <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                />
                {
                    errors.p1 ? (<p>{errors.p1}</p>) : (<p>{errors.p2}</p>)
                }
                <hr />
                <button onClick={handleSubmit} type="submit">SUBMIT</button>
            </form>
        </div>
    );
};

export default Forms;

