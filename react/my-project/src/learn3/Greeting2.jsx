
import PropTypes from 'prop-types'

const Greeting = ({name = "Guest"}) => {
    return (
        <div>
            <h1>Hello, {name}</h1>
        </div>
    )
}


// NOTE: Prop-Types for type checking

Greeting.propTypes = {
    name: PropTypes.string
}

export default Greeting;