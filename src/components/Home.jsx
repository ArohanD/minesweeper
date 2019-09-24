import React, {Component} from 'react';
import { connect } from 'react-redux';

class Home extends Component {

    render() {
        return (
            <div id='game_container'>
                <h1>Minesweeper</h1>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        board: state.board
    }
}

export default connect(mapStateToProps)(Home);