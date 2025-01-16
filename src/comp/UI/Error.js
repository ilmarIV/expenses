import ReactDOM from "react-dom"
import './Error.css'

const Backdrop = () => {
    return (
        <div className="backdrop"></div>
    )
}

const Error = () => {
    <>
    {
        ReactDOM.createPortal(
            <Backdrop/>,
            document.getElementById('backdrop-root')
        )
    }
    </>
}

export default Error