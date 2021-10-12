import React from "react";


class SearchBar extends React.Component{

    // onInputChange(event){
    //     console.log(event.target.value);
    // }
    state = {term:''};
    onFormSubmit= event =>{
        event.preventDefault();
        // onSubmitTest is property in the parent component
        this.props.onSubmitTest(this.state.term);
    }

    render() {
        return( 
        <div className="ui segment"> 
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className='field'>
                    <lable>Searching Image</lable>
                    {/* <input type='text' onChange={this.onInputChange}/> */}
                    <input 
                        type='text' 
                        value={this.state.term}
                        onChange={(event)=>{this.setState({term:event.target.value})}}/>

                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;