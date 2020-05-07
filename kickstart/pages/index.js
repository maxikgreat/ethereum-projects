import React, {Component} from 'react';
import {factory} from '../ethereum/factory';
import {Card, Button} from 'semantic-ui-react';
import {Layout} from '../components/Layout';

export async function getServerSideProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { props: {campaigns} }
};

export default class CampaignIndex extends Component {
    renderCampaigns() {
        return this.props.campaigns.map((campaign, index) => {
            return(
                <Card
                    key={index}
                    fluid={true}
                    href='#card-example-link-card'
                    header={campaign}
                    meta={index + 1}
                    description='View campaign'
                />
            )
        });
    }

    render() {
        return (
            <Layout>
                <div>
                    <div>
                        <h2 className="ui header floated left">Open Campaigns</h2>
                        <Button 
                            floated="right"
                            content="Create Campaign"
                            icon="add circle"
                            primary
                        />
                    </div>
                    {this.renderCampaigns()}
                </div>
            </Layout>
        )
    }
} 