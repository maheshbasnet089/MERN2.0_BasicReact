
import PropTypes from 'prop-types'

const Button = ({buttonVitrakoContent,arkoContent})=>{
    // const {buttonVitrakoContent} = props
    const array  = ["Manish"]
    return (
        <>
        <button>{buttonVitrakoContent}</button>
        <button>{arkoContent}</button>
       
        </>
    )
}
// Button.defaultProps = {
//     buttonVitrakoContent  : "yodefaultpropsbataaakoho",
//     arkoContent : 99
// }

// Button.propTypes = {
//     arkoContent : PropTypes.string.isRequired
// }

export default Button