import React, {Component} from 'react';
import {Form, Button, Input, Message} from 'semantic-ui-react';
import {Layout} from '../../components/Layout';
import {factory} from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

export default class CampaignNew extends Component {
    state = {
        minimumContribution: '',
        errorMessage: '',
        loading: false
    }

    onCreateCampaign = async (e) => {
        e.preventDefault();

        this.setState({
            errorMessage: '',
            loading: true
        });

        try{
            const accounts = await web3.eth.getAccounts();
            await factory.methods.createCampaign(this.state.minimumContribution)
                .send({
                    from: accounts[0]
                })
        } catch(e) {
            this.setState({
                errorMessage: e.message
            })
        }

        this.setState({loading: false});
    }

    render(){
        return(
            <Layout>
                <h2 className="ui header">Create a Campaign</h2>
                <Form onSubmit={this.onCreateCampaign} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input 
                            label="wei" 
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={e => this.setState({
                                minimumContribution: e.target.value
                            })}
                        />
                    </Form.Field>
                    <Message 
                        error
                        header="Ooops!"
                        content={this.state.errorMessage}
                    />
                    <Button 
                        disabled={this.state.loading} 
                        loading={this.state.loading} 
                        primary
                    >Create!</Button>
                </Form>
            </Layout>   
        )
    }
};