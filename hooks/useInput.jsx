import { useState } from "react"

/* userid userpw 한번에 통제 - custum hook - 이제부터 많이 쓸거임*/
const useInput = (defaultValue) => {
    const [value, setValue] = useState(defaultValue)
    const onChange = e => {
        const { value } = { ...e.target }
        setValue(value)
    }

    return {
        value,
        onChange
    }
}

export default useInput