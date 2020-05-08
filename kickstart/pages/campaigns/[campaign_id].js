import React, {Component} from 'react';
import {Form, Button, Input, Message} from 'semantic-ui-react';
import {withRouter} from 'next/router';
import {Layout} from '../../components/Layout';


class Campaign extends Component {
    render(){
        let campaign_id = this.props.router.query.campaign_id;
        return(
            <Layout>
                <h2 className="ui header">Existing campaign</h2>
                <h2>{campaign_id}</h2>
            </Layout>   
        )
    }
};

export default withRouter(Campaign);