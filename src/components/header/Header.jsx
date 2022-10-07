import './Header.css'

//props === arrLength,arrResult
const Header = (props) => {
    return (
        <div className="wrapper">
            Todo list (<span>{props.arrResult} </span>/ <span>{props.arrLength}</span>)
        </div>
    )
}
export default Header