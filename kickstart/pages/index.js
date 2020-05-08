import React, {Component} from 'react';
import {factory} from '../ethereum/factory';
import {Card, Button} from 'semantic-ui-react';
import {Layout} from '../components/Layout';
import Link from 'next/link';

export async function getServerSideProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { props: {campaigns} }
};

export default class CampaignIndex extends Component {
    renderCampaigns() {
        return this.props.campaigns.map((campaign, index) => {
            return(
                <Link 
                    key={index}
                    href="/campaigns/[campaign_id]" 
                    as={`/campaigns/${campaign}`}
                >
                    <a>
                        <Card
                            fluid={true}
                            header={campaign}
                            meta={index + 1}
                            description='View campaign'
                        />
                    </a>
                </Link>
            )
        });
    }

    render() {
        return (
            <Layout>
                <div>
                    <div>
                        <h2 className="ui header floated left">Open Campaigns</h2>
                        <Link href="/campaigns/new">
                            <a>
                                <Button 
                                    floated="right"
                                    content="Create Campaign"
                                    icon="add circle"
                                    primary
                                />
                            </a>
                        </Link>
                        
                    </div>
                    {this.renderCampaigns()}
                </div>
            </Layout>
        )
    }
} 