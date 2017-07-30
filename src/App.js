import React from 'react';
import Shot from './Shot';
import Dribbble from './Dribbble'


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
                        <Shot key={data.id} data={data} img={data.images.normal} select={this.select.bind(this)}/>
                    ))}
                </ul>
            </div>
        );
    }

    componentDidMount() {
        let d = new Dribbble();
        d.load((json) => {
            this.setState({
                shots: json.data
            });
        });
    }

    select(shot) {
        this.setState({shotSelected: 'shotSelected'});
        if (this.selected === shot){
            this.selected = null;
            this.setState({shotSelected: ''});
        } else {
            shot.setState({
                is_active: true,
                img: shot.props.data.images.hidpi ? shot.props.data.images.hidpi : shot.props.data.images.normal
            });
            this.selected = shot;
        }
    }

    goBack() {
        this.setState({shotSelected: ''});
        this.selected.setState({
            is_active: false,
            img: this.selected.props.data.images.normal
        });
        this.selected = null;
    }
}

export default App;
