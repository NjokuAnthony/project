import React from 'react'
import './project.css'

const Project = () => {
  return (
    <div>
        <div className="cards">
            <h2><span>Pro</span>jects</h2>
            <p>This is a List of my Favourite Project</p>
        </div>
        <div className="row">
            <div className="col">
                <div class="card">
                    <img src="./images/team work-rafiki.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">WEB DESIGN</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">cHECK</a>
                </div>
        </div>
            </div>
            <div className="col">
                <div class="card">
                    <img src="./images/team-bro.png" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">WEB MANAGMENT</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">CHECK</a>
                </div>
            </div>
            </div>
                <div className="col">
                    <div class="card">
                        <img src="./images/team-pana.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">WEB SECURITY</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">CHECK</a>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Project