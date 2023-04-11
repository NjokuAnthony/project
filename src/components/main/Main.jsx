import React from 'react'
import './main.css'

const Main = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col left">
                    <img src="./images/tonypic.jpg" alt="" />
                </div>
                <div className="col right">
                    <h1>
                        Hello My Name is <span>Anthony Njoku</span>
                    </h1>
                    <h3>
                        I Am a Web Developer
                    </h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main