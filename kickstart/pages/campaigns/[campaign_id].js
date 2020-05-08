import React, {Component} from 'react';
import {campaignCreate} from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import {Card, Grid} from 'semantic-ui-react';
import {withRouter} from 'next/router';
import {Layout} from '../../components/Layout';
import ContributeForm from '../../components/ContributeForm';

export async function getServerSideProps(content) {
    const {campaign_id} = content.query;
    const campaign = campaignCreate(campaign_id); // address
    
    const summary = await campaign.methods.getSummary().call();

    return {props: {
        address: campaign_id,
        minimumContribution: summary[0],
        balance: summary[1],
        requestsCount: summary[2],
        approversCount: summary[3],
        manager: summary[4]
    }}
}

class CampaignShow extends Component {
    renderCards() {
        const {
            minimumContribution, 
            balance,
            requestsCount,
            approversCount,
            manager
        } = this.props;

        const items = [
            {
                header: manager,
                meta: 'Address of manager',
                description: 'The manager created this campaign and can create requests to withdraw money',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute at least this much wei to become an approver'
            },
            {
                header: requestsCount,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money from the contract. Request must be approved by approvers'
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people you have already donated to this Campaign'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campaign has left to spend'
            }
        ]

        return <Card.Group items={items} />
    }

    render(){
        return(
            <Layout>
                <h2 className="ui header">Campaign details</h2>
                <Grid>
                    <Grid.Column width={10}>
                        {this.renderCards()}
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <ContributeForm 
                            address={this.props.address}
                        />
                    </Grid.Column>
                </Grid>
            </Layout>   
        )
    }
};

export default withRouter(CampaignShow);