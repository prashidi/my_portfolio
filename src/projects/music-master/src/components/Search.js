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
                    placeholder='Search for an Artist' 
                />
                <button 
                    onClick={this.searchArtist} 
                    className='btn btn-large btn-primary'
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