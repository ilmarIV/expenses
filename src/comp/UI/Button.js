import './Button.css'

const Button = () => {
    return (
        <button
        className="button"
        type={"props.type" || "button"}
        onClick={PaymentResponse.onClick}
        >
            {}
        </button>
    )
}

export default Button