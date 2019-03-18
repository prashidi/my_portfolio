import React, {Component} from 'react';
import Projects from './Projects';
import Title from './Title';
import SocialProfiles from './SocialProfile';
import patrick from '../assets/patrick.jpg';


class App extends Component {
    state = { displayBio: false}


    toggleDisplayBio = () => {
        this.setState({displayBio:!this.state.displayBio});
    }

    render () {

        return (
            <div>
                <img src={ patrick } className='profile' alt='profile'/>
                <h1>Hello!</h1>
                <p>My name is Patrick Rashidi.</p>
                <Title />
                <p>I'm always looking forward to working on meaningfull projects.</p>
                { 
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Cape Town, and I love coding and the funny thing with me is I don't realy have friends because I code every day</p>
                            <p>My favourite language is Python, but recently I dived into to JavaScript, and I think React.js is a awesome frontend framework</p>
                            <p>Besides coding, also love music and soccer!</p>
                            <div>
                                <button onClick ={ this.toggleDisplayBio }>Show Less</button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <button onClick ={ this.toggleDisplayBio }>Read More</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}
export default App;