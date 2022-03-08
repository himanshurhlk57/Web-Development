import {FaTimes} from 'react-icons/fa'
import Card from "./shared/Card"
import PropTypes from 'prop-types'

function FeedbackItem({item, handleDelete}) {

  // const[rating, setRating] = useState(2)
  // const[text, setText] = useState('This is an feedback item')

  // const buttonClicked = () => {
  //   setRating((prev) => {
  //     return prev + 1;
  //   });
  // }



  return (
      <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={buttonClicked}>Click Me</button>  */}
      </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem