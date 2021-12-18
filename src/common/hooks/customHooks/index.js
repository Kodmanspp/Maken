import { useState } from "react";

export const useFormInput = (initValue) => {
    
    const [value, setValue] = useState(initValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}