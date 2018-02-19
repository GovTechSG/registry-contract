pragma solidity ^0.4.15;


contract Registry {
    event Registered(string owner, bytes32 subject);
    event CreatedAdmin(address admin);
    event Error(string message);

    struct Registration {
        string owner;
        bytes32 subject;
        bytes32 meta;
    }

    enum AdminType { System }

    struct Admin {
        address account;
        AdminType adminType;
    }

    mapping(bytes32 => Registration) public registrations;
    mapping(address => Admin) public admins;

    uint _fee = 0;

    function Registry(uint initialFee) public {
        _fee = initialFee;
        admins[msg.sender] = Admin({
            account: msg.sender,
            adminType: AdminType.System
        });
        CreatedAdmin(msg.sender);
    }

    function getFee() public view returns (uint) {
        return _fee;
    }

    enum Response { Ok, Error }

    // function transfer(bytes32 subject, address account) public returns (Response, string) {
    //     throw;
    // }

    function register(bytes32 subject, string owner) public payable notRegistered(subject) enoughFee returns (Response, bytes32) {
        bytes32 hashed = getHash(subject);

        registrations[hashed] = Registration({
            owner: owner,
            subject: hashed,
            meta: 0
        });

        Registered(owner, hashed);
        return (Response.Ok, hashed);
    }

    function retrieve(bytes32 subject) public view returns (Response, string, bytes32) {
        bytes32 hashed = getHash(subject);
        Registration memory registration = registrations[hashed];
        // require(registration.owner != 0);

        if (registration.subject == "") {
            return (Response.Error, "", hashed);
        }

        return (Response.Ok, registration.owner, registration.subject);
    }

    function getHash(bytes32 subject) public pure returns (bytes32) {
        // Can't be easily changed
        return keccak256(subject);
    }

    modifier notRegistered(bytes32 subject) {
        bytes32 hashed = getHash(subject);
        Registration memory registration = registrations[hashed];
        require(registration.subject == 0);
        _;
    }

    modifier enoughFee {
        require(msg.value >= this.getFee());
        _;
    }
}
