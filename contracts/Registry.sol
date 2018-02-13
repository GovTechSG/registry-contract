pragma solidity ^0.4.15;

contract Registry {
    event Registered(address owner, bytes32 subject);
    event CreatedAdmin(address admin);
    event CreatedUser(address user);
    event Error(string message);

    struct Registration {
        address owner;
        bytes32 subject;
        uint256 blockNumber;
        uint256 blockTimestamp;
        bytes32 meta;
    }

    struct User {
        address account;
        bytes32[] ownedRegistrations;
    }

    enum AdminType { System }

    struct Admin {
        address account;
        AdminType adminType;
    }

    mapping(bytes32 => Registration) public registrations;
    mapping(address => User) public users;
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

    function signup() public payable userExistsNot returns (Response, string) {
        users[msg.sender] = User({
            account: msg.sender,
            ownedRegistrations: new bytes32[](0)
        });
        CreatedUser(msg.sender);
    }

    function register(bytes32 subject) public payable userExists enoughFee returns (Response, bytes32) {
        bytes32 hashed = keccak256(subject);

        registrations[hashed] = Registration({
            owner: msg.sender,
            subject: hashed,
            blockNumber: block.number,
            blockTimestamp: block.timestamp,
            meta: 0
        });

        User storage owner = users[msg.sender];
        owner.ownedRegistrations.push(hashed);

        Registered(msg.sender, hashed);
        return (Response.Ok, hashed);
    }

    function retrieve(bytes32 subject) public view returns (Response, address, bytes32) {
        bytes32 hashed = keccak256(subject);
        Registration memory registration = registrations[hashed];
        // require(registration.owner != 0);

        if (registration.owner == 0x0) {
            return (Response.Error, 0x0, hashed);
        }

        return (Response.Ok, registration.owner, registration.subject);
    }

    modifier enoughFee {
        require(msg.value >= this.getFee());
        _;
    }

    modifier userExistsNot {
        require(users[msg.sender].account == 0);
        _;
    }

    modifier userExists {
        require(users[msg.sender].account != 0);
        _;
    }
}
