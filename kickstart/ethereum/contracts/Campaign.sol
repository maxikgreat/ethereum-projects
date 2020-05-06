pragma solidity ^0.6.6;

contract CampaignFactory {
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public {
        address newCampaign = address(new Campaign(minimum, msg.sender));
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns (address[] memory) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCounts;
    
    modifier onlyOwner {
        require(msg.sender == manager);
        _;
    }
    
    constructor(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }
    
    
    function contribute() public payable {
        require(msg.value > minimumContribution);
        
        approvers[msg.sender] = true;
        approversCounts++;
    }
    
    function createRequest(string memory _description, uint _value, address _recipient) public onlyOwner {
        Request memory newRequest = Request({
            description: _description,
            value: _value,
            recipient: _recipient,
            complete: false,
            approvalCount: 0
        });
        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(approvers[msg.sender]); //return true
        require(!request.approvals[msg.sender]); //check user voted or not
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    
    function finalizyRequest(uint index) public onlyOwner {
        Request storage request = requests[index];
        
        require(request.approvalCount > (approversCounts / 2));
        require(!request.complete);
        
        address payable vendor = address(uint160(request.recipient));
        vendor.transfer(request.value);
        request.complete = true;
    }
}
