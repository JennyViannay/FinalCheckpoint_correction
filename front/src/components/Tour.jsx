import React, { Component } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'

export default class Tour extends Component {
    state = {
        data : []
    }

    componentDidMount(){
        this.getTour()
    }

    getTour = () => {
        Axios.get('http://localhost:4000/tour/all')
        .then(response => this.setState({ data : response.data}))
    }

    render () {
        return(
            <div id="tour" className="container text-center">
                {this.state.data ? 
                    this.state.data.map((elem,i) => 
                        <div key={i}>
                            <p>{elem.name}</p>
                            <p>Du {elem.date_start} au {elem.date_end}</p>
                            <p><Link to={`/representation/${elem.name}/${elem.id}`} className="btn btn-primary">Voir plus</Link></p>
                        </div>    
                    ) : 'Erreur lors de la récupération des tournées, réessayez plus tard.'
                }
            </div>
        )
    }
}