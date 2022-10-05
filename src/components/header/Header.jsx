import './Header.css'

//props === arrLength,arrResult
const Header = (props) => {
    return (
        <div className="wrapper">
            Todo list ({props.arrResult} / {props.arrLength})
        </div>
    )
}
export default Header