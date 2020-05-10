import React, {Component} from 'react';
import web3 from '../../../../ethereum/web3';
import {Form, Button, Message, Input} from 'semantic-ui-react';
import Router from 'next/router';
import { Layout } from '../../../../components/Layout';
import { campaignCreate } from '../../../../ethereum/campaign';

export async function getServerSideProps(content) {
    const {campaign_id} = content.query;
    return {props: {campaign_id}}
}

export default class RequestNew extends Component {
    state = {
        description: '',
        value: '',
        recipient: '',
        loading: false,
        errorMessage: ''
    }

    onCreateRequest = async (e) => {
        e.preventDefault();

        const campaign = campaignCreate(this.props.campaign_id);

        const {description, value, recipient} = this.state;

        this.setState({
            loading: true,
            errorMessage: ''
        })

        try{
            const accoutns = await web3.eth.getAccounts();

            await campaign.methods.createRequest(
                description,
                web3.utils.toWei(value, 'ether'),
                recipient
            ).send({from: accoutns[0]});

            Router.back();
        } catch(e) {
            this.setState({
                errorMessage: e.message
            })
        }

        this.setState({
            loading: false
        })
    }

    render() {
        return(
            <Layout>
                <Button primary onClick={() => Router.back()}>Back</Button>
                <h3>Create a Request</h3>
                <Form onSubmit={this.onCreateRequest} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Description</label>
                        <Input 
                            value={this.state.description}
                            onChange={e => this.setState({
                                description: e.target.value
                            })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Value in Ether</label>
                        <Input 
                            value={this.state.value}
                            onChange={e => this.setState({
                                value: e.target.value
                            })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Recipient</label>
                        <Input 
                            value={this.state.recipient}
                            onChange={e => this.setState({
                                recipient: e.target.value
                            })}
                        />
                    </Form.Field>
                    <Message error header="Ooops!" content={this.state.errorMessage} />
                    <Button 
                        primary
                        loading={this.state.loading}
                        disabled={this.state.loading}
                    >Create!</Button>
                </Form>
            </Layout>
        )
    }
}