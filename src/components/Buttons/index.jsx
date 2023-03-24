import { Link } from "react-router-dom"

export const Button = (props) => {
    return <button {...props} className={` ${props.className} bg-three text-primary font-bold `}>{props.children}</button>
}

export const LinkButton = (props) => {
    return <Link to={props.page}>
        <span className={`px-4   ${props.className} font-bold inline-block  `}>{props.children}</span>
    </Link>
}