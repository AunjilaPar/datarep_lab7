//import React
import React from 'react';
import { Movies } from './movies';
import axios from 'axios'; //install axios before using

//start of class for Read component 
export class Read extends React.Component {
    //Binding constructor
    constructor(){
        super();
        this.ReloadDataMethod = this.ReloadDataMethod.bind(this);
        }
        
    //Object
    state = {
        //object Movies
        movies: [ //Array start

        ]//End of array

    };//End of state

    //life cycle
    componentDidMount() {
        //Axios(Movie list resource list link)
        axios.get('http://localhost:4000/api/movies')
            //fullfill state 
            .then((response) => {
                //update arrays
                this.setState({ movies: response.data }) //if everythign is ok it will update
            })//end of .then

            //alternative way
            .catch((error) => { //otherwise try this
                console.log(error)
            });

    }//end of componentdidmount
    //Reload Data
    ReloadDataMethod(){
        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
        this.setState({movies: response.data.movies})
        })
        .catch((error)=>{
        console.log(error);
        });
        }
        
    render() {
        return (
            <div>
                <h1>This is the Read component</h1>
                <Movies movies={this.state.movies} ReloadDataMethod={this.ReloadDataMethod}></Movies>

            </div>
        );
    }//end of render

}//end of class 