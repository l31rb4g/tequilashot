import React from 'react';

class Shot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_active: false,
            img: null
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            img: this.props.data.images.normal
        });
    }

    render() {
        let details = null;
        if (this.state.is_active){
            details = (
                <div className="details">
                    <div className="author">
                        <img src={this.props.data.user.avatar_url} alt={this.props.data.user.name} />
                        <span>{this.props.data.user.name}</span>
                    </div>
                    <div className="description" dangerouslySetInnerHTML={{__html: this.props.data.description}}></div>
                </div>
            )
        }
        return (
            <li onClick={this.handleClick} className={this.state.is_active ? 'selected' : ''}>
                <div className="img">
                    <img src={this.state.img} alt={this.props.data.title} />
                    <div className="bar">
                        {this.props.data.title}
                        <div className="views">{this.props.data.views_count}</div>
                    </div>
                </div>
                {details}
            </li>
        )
    }

    handleClick() {
        this.props.select(this);
    }

}

export default Shot
