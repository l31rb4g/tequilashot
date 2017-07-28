import React from 'react';
import fetchJsonp from 'fetch-jsonp';
import Config from './config';
import Shot from './Shot';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.selected = null;
        this.state = {
            shots: [],
            shotSelected: ''
        };
    }

    render() {
        return (
            <div className="App">
                <h1>Tequila Shot</h1>
                { this.state.shots.length === 0 ? <div id="loader">Aguarde, carregando...</div> : null }
                { this.state.shotSelected ? <a id="back" onClick={this.goBack.bind(this)}>&lt;</a> : null }
                <ul className={"shotList " + this.state.shotSelected}>
                    {this.state.shots.map(data => (
                        <Shot key={data.id} data={data} select={this.select.bind(this)} />
                    ))}
                </ul>
            </div>
        );
    }

    componentDidMount() {
        let url = 'https://api.dribbble.com/v1/shots?access_token=' + Config.access_token;
        fetchJsonp(url)
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    shots: json.data
                });
            }).catch((ex) => {
            console.error('parsing failed', ex);
        });
    }

    select(shot) {
        this.setState({shotSelected: 'shotSelected'});
        if (this.selected === shot){
            shot.setState({is_active: false});
            this.selected = null;
            this.setState({shotSelected: ''});
        } else {
            shot.setState({is_active: true});
            this.selected = shot;
        }
    }

    goBack() {
        this.setState({shotSelected: ''});
        this.selected.setState({is_active: false});
        this.selected = null;
    }
}

export default App;
