import React from "react";
import useForm from "../hooks/useForm";

const App = () => {
    const { formState } = useForm({
        init: {
            name: "shawon",
            email: "",
            password: "",
        },
    });

    console.log(formState);
    return (
        <div>
            <h2>App</h2>
        </div>
    );
};

export default App;
