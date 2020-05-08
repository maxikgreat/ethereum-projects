import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import Link from 'next/link';
import {Layout} from '../../../../components/Layout';

export async function getServerSideProps(content) {
    const {campaign_id} = content.query;
    return {props: {campaign_id}}
}

export default class RequestIndex extends Component {
    render(){
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
            </Layout>
        )
    }
}