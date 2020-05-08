import React, {Component} from 'react';
import {Form, Input, Message, Button} from 'semantic-ui-react';
import {campaignCreate} from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import Router from 'next/router';

export default class ContributeForm extends Component {

    state = {
        value: '',
        loading: false,
        errorMessage: ''
    };

    onContribute = async (e) => {
        e.preventDefault();

        const campaign = campaignCreate(this.props.address);

        this.setState({
            loading: true,
            errorMessage: ''
        });

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            })
            Router.replace(`/campaigns/${this.props.address}`)
        } catch(e) {
            this.setState({
                errorMessage: e.message
            })
        }

        this.setState({
            loading: false,
            value: ''
        })
    };

    render() {
        return(
            <Form onSubmit={this.onContribute} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input 
                        value={this.state.value}
                        onChange={e => this.setState({
                            value: e.target.value
                        })}
                        label="ether"
                        labelPosition="right"
                    />
                </Form.Field>
                <Message error header="Ooops!" content={this.state.errorMessage} />
                <Button 
                    primary
                    disabled={this.state.loading}
                    loading={this.state.loading}
                >
                    Contribute!
                </Button>
            </Form>
        )
    }
};