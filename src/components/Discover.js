import React from "react";
import API from "../utils/API";

const styles = {
    image: {
        height: 300
    }
}

class Discover extends React.Component {

    state = {
        image: "",
        count: 0,
        matched: false
    };

    componentDidMount() {
        this.getDogImage();
    }

    getDogImage = () => {
        API.getRandomDog()
            .then(res => this.setState({
                image: res.data.message
            }))
            .catch(err => console.log(err));

    }

    handleButtonClick = (event) => {
        const type = event.target.attributes.getNamedItem('data-type').value; //like or dislike
        const newState = {
            ...this.state
        }
        if (type === "like") {
            //if the random number is equal to 3.  Just picked 3, could be 1,2,4 or 5 instead
            newState.matched = (3 === Math.floor(Math.random() * 4) + 1); //returns true or false
            newState.count = (newState.matched ? newState.count + 1 : newState.count);
        } else {
            newState.matched = false;
        }
        //setState is asynchronous and takes a callback which will execute after setState is called
        this.setState(newState, () => {
            this.getDogImage();
        })
    }

    render() {
        return (
            <>
                <h1>Make New Puppy Friends</h1>
                <h2>My pupper friends: {this.state.count}</h2>
                <img alt="Puppy Friend?" src={this.state.image} style={styles.image}/>
                <p>
                    <button
                        type="button"
                        className="btn btn-primary mr-2"
                        onClick={this.handleButtonClick}
                        data-type="like">
                        Like
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={this.handleButtonClick}
                        data-type="dislike">
                        Dislike
                    </button>
                </p>
                {/*}use double curlies in jsx when code boils down to inline style*/}
                <div className="alert alert-success" role="alert" style={{ opacity: this.state.matched === true ? 1: 0 }}>
                    Yay! That Pup is my new friend!
                </div>
            </>
        )
    }
}


export default Discover;