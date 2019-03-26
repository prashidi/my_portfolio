import React, { Component } from 'react';

class Search extends Component {
    state = { artistQuery: ''};

    updateArtistQuery = event => {
        //console.log('event', event.target.value);
        this.setState({ artistQuery: event.target.value })
        
    }
    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.searchArtist();
        }
    }

    searchArtist = () => {
        this.props.searchArtist(this.state.artistQuery);
    }

    render() {
        return (
            <div>
                <input
                    onChange={this.updateArtistQuery}
                    onKeyPress={this.handleKeyPress}
                    placeholder='Enter Artist Name' 
                    type='text'
                />
                <button 
                    onClick={this.searchArtist} 
                    className='btn btn-primary'
                    style ={{ 
                        margin: 10
                    }}
                >
                    Search
                </button>
            </div>
        )
    }
}
export default Search;