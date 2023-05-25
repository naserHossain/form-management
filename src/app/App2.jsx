import React, { useState } from "react";
import InputGroup from "../components/shared/forms/InputGroup";
import Button from "../components/ui/buttons/Button";

const init = {
    title: "",
    bio: "",
    skills: "",
};

const init_2 = {
    title: {
        value: "",
        error: "",
        focus: false,
    },
    bio: {
        value: "",
        error: "",
        focus: false,
    },
    skill: {
        value: "",
        error: "",
        focus: false,
    },
};

const App = () => {
    const [values, setValues] = useState({ ...init });
    const [errors, setErrors] = useState({ ...init });
    const [focuses, setFocuses] = useState({
        title: false,
        bio: false,
        skills: false,
    });

    // control handler
    const handleChange = (e) => {
        setValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));

        const key = e.target.name;
        const { errors } = checkValidity(values);
        if (!errors[key]) {
            setErrors((prev) => ({
                ...prev,
                [key]: "",
            }));
        }
    };

    // handle submit button
    const handleSubmit = (e) => {
        e.preventDefault();
        const { errors, isValid } = checkValidity(values);
        if (isValid) {
            console.log(values);
            setErrors({ ...errors });
        } else {
            setErrors({ ...errors });
        }
    };

    const handleFocus = (e) => {
        setFocuses((prev) => ({
            ...prev,
            [e.target.name]: true,
        }));
    };

    const handleBlur = (e) => {
        const key = e.target.name;
        const { errors } = checkValidity(values);
        if (errors[key] && focuses[key]) {
            setErrors((prev) => ({
                ...prev,
                [key]: errors[key],
            }));
        } else {
            setErrors((prev) => ({
                ...prev,
                [key]: "",
            }));
        }
    };

    const checkValidity = (values) => {
        const { title, bio, skills } = values;
        const errors = {};
        if (!title) {
            errors.title = "Invalid title";
        }
        if (!bio) {
            errors.bio = "Invalid bio";
        }
        if (!skills) {
            errors.skills = "Invalid skills";
        }

        return {
            errors,
            isValid: Object.keys(errors).length === 0,
        };
    };

    return (
        <div className="root">
            <form onSubmit={handleSubmit}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                    }}
                >
                    <InputGroup
                        label={"Title"}
                        name={"title"}
                        value={values.title}
                        placeholder={"Enter your title"}
                        onChange={handleChange}
                        error={errors.title}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <InputGroup
                        label={"Bio"}
                        name={"bio"}
                        value={values.bio}
                        placeholder={"Enter your bio"}
                        onChange={handleChange}
                        error={errors.bio}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <InputGroup
                        label={"Skills"}
                        name={"skills"}
                        value={values.skills}
                        placeholder={"Enter your skill"}
                        onChange={handleChange}
                        error={errors.skills}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <Button type="submit">submit</Button>
                </div>
            </form>
        </div>
    );
};

export default App;
