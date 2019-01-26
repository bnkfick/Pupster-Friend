import React, { Component } from "react";
import API from "../utils/API";


class Search extends Component {
    state = {
        breeds: [],
        selectedBreed: "",
        searchedBreed: "",
        breedImages: []
    }

    componentDidMount() {
        API.getAllBreeds()
        .then(res => {
            this.setState({ breeds: res.data.message })
        } )
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({selectedBreed: event.target.value});
    }
    handleFormSubmit = event => {
        console.log("handleFormSubmit");
        event.preventDefault();
        //call api method with breed
        API.getBreedImages(this.state.selectedBreed)
            .then(res => {
                console.log(res);
                this.setState( { breedImages: res.data.message.slice(0,20)} );
            })
            .catch(err => console.log(err));
        //take search results and save into state of breedImages
    }

    render() {

        return (
        <>
        <h1>Search</h1>
        <form>
            <label htmlFor="breed-choice">Breed name:</label>
            <input 
                list="breeds" 
                id="breed-choice" 
                name="breed-choice" 
                className="form-control" 
                placeholder="Choose a Breed" 
                value={this.state.selectedBreed}
                onChange={this.handleInputChange}
            />
            <datalist id="breeds">
                {this.state.breeds.map(breed => {
                    return (
                        <option key={breed} value={breed} />
                    )
                })}
            </datalist>
            <button 
            type="submit" 
            className="btn btn-success btn-block mt-2"
            onClick={this.handleFormSubmit}>Search</button>
        </form>
            {this.state.breedImages.map(breedImage => {
                    return (
                        <img key={breedImage} alt={this.selectedBreed} src={breedImage} />
                    )
            })}

        </>
        )
    }
}

export default Search;