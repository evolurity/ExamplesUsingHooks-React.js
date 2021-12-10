import React, {useState, useEffect, useRef} from "react";

function App() {
    const renderCount = useRef(1)
    // Если хотим сохранить что-то между рендерами и при этом не перерендеривать компонент
    // Если нужно получить ссылку на DOM элемент
    // Если нужно получить предыдущее значение value
    const [value, setValue] = useState('init')

    const inputRef = useRef(null)

    const prevValue = useRef('')

    useEffect(() => {
        prevValue.current = value
    }, [value])

    useEffect(() => {
        renderCount.current++
        console.log(inputRef.current.value)
    })

    const focus = () => inputRef.current.focus()

    return (
        <div className="App">
            <h1>Render count: {renderCount.current}</h1>
            <h1>Prev value count: {prevValue.current}</h1>

            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
            <button className="btn btn-success" onClick={focus}>focus</button>

        </div>
    );
}

export default App;
