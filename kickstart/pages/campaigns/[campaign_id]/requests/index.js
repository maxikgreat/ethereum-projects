import React, {Component} from 'react';
import {Button, Table} from 'semantic-ui-react';
import Link from 'next/link';
import {Layout} from '../../../../components/Layout';
import RequestRow from '../../../../components/RequestRow';
import {campaignCreate} from '../../../../ethereum/campaign';

export async function getServerSideProps(content) {
    const {campaign_id} = content.query;
    const campaign = campaignCreate(campaign_id);
    const requestCount = await campaign.methods.getRequestsCount().call();

    const requests = await Promise.all(
        Array(requestCount)
        .fill().map((element, index) => {
            return campaign.methods.requests(index).call()
        })
    );

    return {props: {
        campaign_id,
        requests: JSON.parse(JSON.stringify(requests))
    }}
}

export default class RequestIndex extends Component {

    renderRows() {
        return this.props.requests.map((request, index) => {
            return <RequestRow 
                key={index}
                request={request}
                address={this.props.campaign_id}
            />;
        })
    }

    render() {
        const {Header, Row, HeaderCell, Body} = Table;

        return(
            <Layout>
                <h3>Requests</h3>
                <Link
                    href="/campaigns/[campaign_id]/requests/new"
                    as={`/campaigns/${this.props.campaign_id}/requests/new`}
                >
                    <a>
                        <Button primary>New Request</Button>
                    </a>
                </Link>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount</HeaderCell>
                            <HeaderCell>Recipient </HeaderCell>
                            <HeaderCell>Approval Count</HeaderCell>
                            <HeaderCell>Approve</HeaderCell>
                            <HeaderCell>Finalize</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderRows()}
                    </Body>
                </Table>
            </Layout>
        )
    }
}