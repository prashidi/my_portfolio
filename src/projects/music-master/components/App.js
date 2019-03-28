import React, {Component} from 'react';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';
class App extends Component {
    state = { artist: null, tracks: [] };

    componentDidMount() {
        this.searchArtist('fally');
    }

    searchArtist = artistQuery => {
        //console.log('this.state', this.state);
        fetch(`${API_ADDRESS}/artist/${artistQuery}`)
        .then(response => response.json())
        .then(json => {
            //console.log('json', json);
            if (json.artists.total > 0) {
                const artist = json.artists.items[0];

                //console.log('artist', artist);
                this.setState({ artist })

                fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                .then(response => response.json())
                .then(json => 
                    //console.log('top-tracks', json)
                    this.setState({ tracks: json.tracks }))
                .catch(error => alert(error.message));
            }
        })
        .catch(error => alert(error.message));


    }

    render () {
        //console.log('this.state', this.state)
        return (
            <div>
                <h2>Kingopaty Music</h2>
                <Search searchArtist={this.searchArtist}/>
                <Artist artist={ this.state.artist }/>
                <Tracks tracks={ this.state.tracks }/>
                <hr />
                <div style={{marginTop: 40}}>
                    Copyrigth: Patrick Rashidi, 2019
                </div>
            </div>
            
        );
    }
}
export default App;