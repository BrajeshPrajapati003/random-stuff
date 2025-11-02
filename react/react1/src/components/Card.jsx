import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = () => {

    // let title = "";
    // let description = "";
  return (
    <div className='parent'>

      <div className="card">
        <div className="top">
            <img src="https://tse3.mm.bing.net/th/id/OIP.YKFZjzosPzcUtBNHe9cAdAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" alt="logo" />
            <button>Save <Bookmark size={16}/></button>
        </div>

        <div className="center">
            <h3>Amazon <span>5 days ago</span></h3>
            <h2>Senior UI/UX Designer</h2>
            <div>
                <h4>Part Time</h4>
                <h4>Senior Level</h4>
            </div>
        </div>

        <div className="bottom">
            <div>
                <h3>$120/hr</h3>
                <p>Mumbai, India</p>
            </div>
            <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
