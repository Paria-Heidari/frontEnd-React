import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component{
    state = {image:[]};
    // callback Func
    onSearchSubmit = async term =>{
    const response = await unsplash.get( '/search/photos',{
        params:{query:term},
    });
    this.setState({image: response.data.results});
    console.log(response);
    }

    

    render(){
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmitTest={this.onSearchSubmit}/>
                Found: {this.state.image.length}
            </div>
        )
    }
}

export default App;