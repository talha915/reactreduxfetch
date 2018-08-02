import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

class Main extends Component {
    componentDidMount() {
        const {fetchData} = this.props;
        // fetchData();
        // console.log("Fetched Data", {fetchData});
        fetchData('javaScript', true);
    }
    render() {
        console.log("Props", this.props);
        return(
            <div>
                Main
            </div>
        );
    }
}



export default connect(null, {fetchData: actions.fetchData})(Main);