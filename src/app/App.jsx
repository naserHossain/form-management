import React from "react";
import InputGroup from "../components/shared/forms/InputGroup";

const App = () => {
    return (
        <div className="root">
            <InputGroup
                label="Title"
                name="title"
                placeholder="enter your title"
                error="something went wrong"
            />
        </div>
    );
};

export default App;
