/* tslint:disable */
export default {
  "contractName": "Registry",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "admins",
      "outputs": [
        {
          "name": "account",
          "type": "address"
        },
        {
          "name": "adminType",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "registrations",
      "outputs": [
        {
          "name": "owner",
          "type": "string"
        },
        {
          "name": "subject",
          "type": "bytes32"
        },
        {
          "name": "meta",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "initialFee",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "owner",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "subject",
          "type": "bytes32"
        }
      ],
      "name": "Registered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "admin",
          "type": "address"
        }
      ],
      "name": "CreatedAdmin",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "message",
          "type": "string"
        }
      ],
      "name": "Error",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getFee",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "subject",
          "type": "bytes32"
        },
        {
          "name": "owner",
          "type": "string"
        }
      ],
      "name": "register",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        },
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "subject",
          "type": "bytes32"
        }
      ],
      "name": "retrieve",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "subject",
          "type": "bytes32"
        }
      ],
      "name": "getHash",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }
  ],
  "bytecode": "0x60606040526000600255341561001457600080fd5b604051602080610b6b833981016040528080519060200190919050508060028190555060408051908101604052803373ffffffffffffffffffffffffffffffffffffffff16815260200160008081111561006a57fe5b815250600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff0219169083600081111561011757fe5b02179055509050507fa3535673a5d9f78a752310f0a6776c6b18e627974408e452936cb4fd8a70863033604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1506109d9806101926000396000f300606060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633cf5040a1461007d578063429b62e5146100c0578063ced72f871461014e578063cf2d31fb14610177578063d1ed74ad14610207578063da7c6a42146102cb575b600080fd5b341561008857600080fd5b6100a26004808035600019169060200190919050506103a6565b60405180826000191660001916815260200191505060405180910390f35b34156100cb57600080fd5b6100f7600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506103cd565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182600081111561013957fe5b60ff1681526020019250505060405180910390f35b341561015957600080fd5b61016161041e565b6040518082815260200191505060405180910390f35b6101d460048080356000191690602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610428565b604051808360018111156101e457fe5b60ff16815260200182600019166000191681526020019250505060405180910390f35b341561021257600080fd5b61022c60048080356000191690602001909190505061072b565b6040518084600181111561023c57fe5b60ff168152602001806020018360001916600019168152602001828103825284818151815260200191508051906020019080838360005b8381101561028e578082015181840152602081019050610273565b50505050905090810190601f1680156102bb5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b34156102d657600080fd5b6102f0600480803560001916906020019091905050610889565b6040518080602001846000191660001916815260200183600019166000191681526020018281038252858181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156103955780601f1061036a57610100808354040283529160200191610395565b820191906000526020600020905b81548152906001019060200180831161037857829003601f168201915b505094505050505060405180910390f35b60008160405180826000191660001916815260200191505060405180910390209050919050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060000160149054906101000a900460ff16905082565b6000600254905090565b60008060008460006104386108b2565b610441836103a6565b9150600080836000191660001916815260200190815260200160002060606040519081016040529081600082018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105025780601f106104d757610100808354040283529160200191610502565b820191906000526020600020905b8154815290600101906020018083116104e557829003601f168201915b5050505050815260200160018201546000191660001916815260200160028201546000191660001916815250509050600060010281602001516000191614151561054b57600080fd5b3073ffffffffffffffffffffffffffffffffffffffff1663ced72f876000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15156105b757600080fd5b6102c65a03f115156105c857600080fd5b5050506040518051905034101515156105e057600080fd5b6105e9886103a6565b935060606040519081016040528088815260200185600019168152602001600060010260001916815250600080866000191660001916815260200190815260200160002060008201518160000190805190602001906106499291906108e0565b5060208201518160010190600019169055604082015181600201906000191690559050507fcde36335f30cfeeee36616be9814f4795f2a52bee52d1c6ecb4956419769e376878560405180806020018360001916600019168152602001828103825284818151815260200191508051906020019080838360005b838110156106de5780820151818401526020810190506106c3565b50505050905090810190601f16801561070b5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a160008495509550505050509250929050565b6000610735610960565b6000806107406108b2565b610749866103a6565b9150600080836000191660001916815260200190815260200160002060606040519081016040529081600082018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561080a5780601f106107df5761010080835404028352916020019161080a565b820191906000526020600020905b8154815290600101906020018083116107ed57829003601f168201915b50505050508152602001600182015460001916600019168152602001600282015460001916600019168152505090506000816020015160001916141561086a57600182602060405190810160405280600081525090945094509450610880565b6000816000015182602001518191509450945094505b50509193909250565b600060205280600052604060002060009150905080600001908060010154908060020154905083565b6060604051908101604052806108c6610974565b815260200160008019168152602001600080191681525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061092157805160ff191683800117855561094f565b8280016001018555821561094f579182015b8281111561094e578251825591602001919060010190610933565b5b50905061095c9190610988565b5090565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b6109aa91905b808211156109a657600081600090555060010161098e565b5090565b905600a165627a7a72305820caefeb56db8ad69277b0d885cf47a28afbe52951984b0090af19468e39aaadc20029",
  "deployedBytecode": "0x606060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633cf5040a1461007d578063429b62e5146100c0578063ced72f871461014e578063cf2d31fb14610177578063d1ed74ad14610207578063da7c6a42146102cb575b600080fd5b341561008857600080fd5b6100a26004808035600019169060200190919050506103a6565b60405180826000191660001916815260200191505060405180910390f35b34156100cb57600080fd5b6100f7600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506103cd565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182600081111561013957fe5b60ff1681526020019250505060405180910390f35b341561015957600080fd5b61016161041e565b6040518082815260200191505060405180910390f35b6101d460048080356000191690602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610428565b604051808360018111156101e457fe5b60ff16815260200182600019166000191681526020019250505060405180910390f35b341561021257600080fd5b61022c60048080356000191690602001909190505061072b565b6040518084600181111561023c57fe5b60ff168152602001806020018360001916600019168152602001828103825284818151815260200191508051906020019080838360005b8381101561028e578082015181840152602081019050610273565b50505050905090810190601f1680156102bb5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b34156102d657600080fd5b6102f0600480803560001916906020019091905050610889565b6040518080602001846000191660001916815260200183600019166000191681526020018281038252858181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156103955780601f1061036a57610100808354040283529160200191610395565b820191906000526020600020905b81548152906001019060200180831161037857829003601f168201915b505094505050505060405180910390f35b60008160405180826000191660001916815260200191505060405180910390209050919050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060000160149054906101000a900460ff16905082565b6000600254905090565b60008060008460006104386108b2565b610441836103a6565b9150600080836000191660001916815260200190815260200160002060606040519081016040529081600082018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105025780601f106104d757610100808354040283529160200191610502565b820191906000526020600020905b8154815290600101906020018083116104e557829003601f168201915b5050505050815260200160018201546000191660001916815260200160028201546000191660001916815250509050600060010281602001516000191614151561054b57600080fd5b3073ffffffffffffffffffffffffffffffffffffffff1663ced72f876000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15156105b757600080fd5b6102c65a03f115156105c857600080fd5b5050506040518051905034101515156105e057600080fd5b6105e9886103a6565b935060606040519081016040528088815260200185600019168152602001600060010260001916815250600080866000191660001916815260200190815260200160002060008201518160000190805190602001906106499291906108e0565b5060208201518160010190600019169055604082015181600201906000191690559050507fcde36335f30cfeeee36616be9814f4795f2a52bee52d1c6ecb4956419769e376878560405180806020018360001916600019168152602001828103825284818151815260200191508051906020019080838360005b838110156106de5780820151818401526020810190506106c3565b50505050905090810190601f16801561070b5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a160008495509550505050509250929050565b6000610735610960565b6000806107406108b2565b610749866103a6565b9150600080836000191660001916815260200190815260200160002060606040519081016040529081600082018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561080a5780601f106107df5761010080835404028352916020019161080a565b820191906000526020600020905b8154815290600101906020018083116107ed57829003601f168201915b50505050508152602001600182015460001916600019168152602001600282015460001916600019168152505090506000816020015160001916141561086a57600182602060405190810160405280600081525090945094509450610880565b6000816000015182602001518191509450945094505b50509193909250565b600060205280600052604060002060009150905080600001908060010154908060020154905083565b6060604051908101604052806108c6610974565b815260200160008019168152602001600080191681525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061092157805160ff191683800117855561094f565b8280016001018555821561094f579182015b8281111561094e578251825591602001919060010190610933565b5b50905061095c9190610988565b5090565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b6109aa91905b808211156109a657600081600090555060010161098e565b5090565b905600a165627a7a72305820caefeb56db8ad69277b0d885cf47a28afbe52951984b0090af19468e39aaadc20029",
  "sourceMap": "27:2056:0:-;;;507:1;495:13;;515:232;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;574:10;567:4;:17;;;;615:91;;;;;;;;;644:10;615:91;;;;;;679:16;615:91;;;;;;;;;;;594:6;:18;601:10;594:18;;;;;;;;;;;;;;;:112;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;716:24;729:10;716:24;;;;;;;;;;;;;;;;;;;;;;515:232;27:2056;;;;;;",
  "deployedSourceMap": "27:2056:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1635:141;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;449:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;753:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;865:384;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1255:374;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;390:53:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1635:141;1690:7;1761;1751:18;;;;;;;;;;;;;;;;;;;;;;;;1744:25;;1635:141;;;:::o;449:39::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;753:73::-;792:4;815;;808:11;;753:73;:::o;865:384::-;971:8;981:7;1000:14;943:7;1832:14;1875:32;;:::i;:::-;1849:16;1857:7;1849;:16::i;:::-;1832:33;;1910:13;:21;1924:6;1910:21;;;;;;;;;;;;;;;;;1875:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1973:1;1949:25;;:12;:20;;;:25;;;;1941:34;;;;;;;;2049:4;:11;;;:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2036:9;:26;;2028:35;;;;;;;;1017:16;1025:7;1017;:16::i;:::-;1000:33;;1068:100;;;;;;;;;1102:5;1068:100;;;;1130:6;1068:100;;;;;;;1156:1;1068:100;;;;;;;;1044:13;:21;1058:6;1044:21;;;;;;;;;;;;;;;;;:124;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1179:25;1190:5;1197:6;1179:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1222:11:0;1235:6;1214:28;;;;865:384;;;;;;;;;:::o;1255:374::-;1311:8;1321:6;;:::i;:::-;1329:7;1348:14;1391:32;;:::i;:::-;1365:16;1373:7;1365;:16::i;:::-;1348:33;;1426:13;:21;1440:6;1426:21;;;;;;;;;;;;;;;;;1391:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1462:26;:12;:20;;;:26;;;;1458:92;;;1512:14;1532:6;1504:35;;;;;;;;;;;;;;;;;;;;;;1458:92;1568:11;1581:12;:18;;;1601:12;:20;;;1560:62;;;;;;;;;1255:374;;;;;;;;:::o;390:53::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;27:2056::-;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.15;\n\n\ncontract Registry {\n    event Registered(string owner, bytes32 subject);\n    event CreatedAdmin(address admin);\n    event Error(string message);\n\n    struct Registration {\n        string owner;\n        bytes32 subject;\n        bytes32 meta;\n    }\n\n    enum AdminType { System }\n\n    struct Admin {\n        address account;\n        AdminType adminType;\n    }\n\n    mapping(bytes32 => Registration) public registrations;\n    mapping(address => Admin) public admins;\n\n    uint _fee = 0;\n\n    function Registry(uint initialFee) public {\n        _fee = initialFee;\n        admins[msg.sender] = Admin({\n            account: msg.sender,\n            adminType: AdminType.System\n        });\n        CreatedAdmin(msg.sender);\n    }\n\n    function getFee() public view returns (uint) {\n        return _fee;\n    }\n\n    enum Response { Ok, Error }\n\n    function register(bytes32 subject, string owner) public payable notRegistered(subject) enoughFee returns (Response, bytes32) {\n        bytes32 hashed = getHash(subject);\n\n        registrations[hashed] = Registration({\n            owner: owner,\n            subject: hashed,\n            meta: 0\n        });\n\n        Registered(owner, hashed);\n        return (Response.Ok, hashed);\n    }\n\n    function retrieve(bytes32 subject) public view returns (Response, string, bytes32) {\n        bytes32 hashed = getHash(subject);\n        Registration memory registration = registrations[hashed];\n\n        if (registration.subject == \"\") {\n            return (Response.Error, \"\", hashed);\n        }\n\n        return (Response.Ok, registration.owner, registration.subject);\n    }\n\n    function getHash(bytes32 subject) public pure returns (bytes32) {\n        // Can't be easily changed\n        return keccak256(subject);\n    }\n\n    modifier notRegistered(bytes32 subject) {\n        bytes32 hashed = getHash(subject);\n        Registration memory registration = registrations[hashed];\n        require(registration.subject == 0);\n        _;\n    }\n\n    modifier enoughFee {\n        require(msg.value >= this.getFee());\n        _;\n    }\n}\n",
  "sourcePath": "/Users/gyng/w/d/registry-contract/contracts/Registry.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/gyng/w/d/registry-contract/contracts/Registry.sol",
      "exportedSymbols": {
        "Registry": [
          216
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".15"
          ]
        },
        "id": 1,
        "name": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            216
          ],
          "name": "Registry",
          "scope": 217
        },
        "children": [
          {
            "attributes": {
              "anonymous": false,
              "name": "Registered"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "owner",
                      "scope": 7,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 2,
                        "name": "ElementaryTypeName",
                        "src": "68:6:0"
                      }
                    ],
                    "id": 3,
                    "name": "VariableDeclaration",
                    "src": "68:12:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "subject",
                      "scope": 7,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4,
                        "name": "ElementaryTypeName",
                        "src": "82:7:0"
                      }
                    ],
                    "id": 5,
                    "name": "VariableDeclaration",
                    "src": "82:15:0"
                  }
                ],
                "id": 6,
                "name": "ParameterList",
                "src": "67:31:0"
              }
            ],
            "id": 7,
            "name": "EventDefinition",
            "src": "51:48:0"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "CreatedAdmin"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "admin",
                      "scope": 11,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 8,
                        "name": "ElementaryTypeName",
                        "src": "123:7:0"
                      }
                    ],
                    "id": 9,
                    "name": "VariableDeclaration",
                    "src": "123:13:0"
                  }
                ],
                "id": 10,
                "name": "ParameterList",
                "src": "122:15:0"
              }
            ],
            "id": 11,
            "name": "EventDefinition",
            "src": "104:34:0"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Error"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "message",
                      "scope": 15,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 12,
                        "name": "ElementaryTypeName",
                        "src": "155:6:0"
                      }
                    ],
                    "id": 13,
                    "name": "VariableDeclaration",
                    "src": "155:14:0"
                  }
                ],
                "id": 14,
                "name": "ParameterList",
                "src": "154:16:0"
              }
            ],
            "id": 15,
            "name": "EventDefinition",
            "src": "143:28:0"
          },
          {
            "attributes": {
              "canonicalName": "Registry.Registration",
              "name": "Registration",
              "scope": 216,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "owner",
                  "scope": 22,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string storage pointer",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 16,
                    "name": "ElementaryTypeName",
                    "src": "207:6:0"
                  }
                ],
                "id": 17,
                "name": "VariableDeclaration",
                "src": "207:12:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "subject",
                  "scope": 22,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "bytes32",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 18,
                    "name": "ElementaryTypeName",
                    "src": "229:7:0"
                  }
                ],
                "id": 19,
                "name": "VariableDeclaration",
                "src": "229:15:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "meta",
                  "scope": 22,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "bytes32",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 20,
                    "name": "ElementaryTypeName",
                    "src": "254:7:0"
                  }
                ],
                "id": 21,
                "name": "VariableDeclaration",
                "src": "254:12:0"
              }
            ],
            "id": 22,
            "name": "StructDefinition",
            "src": "177:96:0"
          },
          {
            "attributes": {
              "canonicalName": "Registry.AdminType",
              "name": "AdminType"
            },
            "children": [
              {
                "attributes": {
                  "name": "System"
                },
                "id": 23,
                "name": "EnumValue",
                "src": "296:6:0"
              }
            ],
            "id": 24,
            "name": "EnumDefinition",
            "src": "279:25:0"
          },
          {
            "attributes": {
              "canonicalName": "Registry.Admin",
              "name": "Admin",
              "scope": 216,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "account",
                  "scope": 29,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "address",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 25,
                    "name": "ElementaryTypeName",
                    "src": "333:7:0"
                  }
                ],
                "id": 26,
                "name": "VariableDeclaration",
                "src": "333:15:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "adminType",
                  "scope": 29,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "enum Registry.AdminType",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "AdminType",
                      "referencedDeclaration": 24,
                      "type": "enum Registry.AdminType"
                    },
                    "id": 27,
                    "name": "UserDefinedTypeName",
                    "src": "358:9:0"
                  }
                ],
                "id": 28,
                "name": "VariableDeclaration",
                "src": "358:19:0"
              }
            ],
            "id": 29,
            "name": "StructDefinition",
            "src": "310:74:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "registrations",
              "scope": 216,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => struct Registry.Registration storage ref)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => struct Registry.Registration storage ref)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 30,
                    "name": "ElementaryTypeName",
                    "src": "398:7:0"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Registration",
                      "referencedDeclaration": 22,
                      "type": "struct Registry.Registration storage pointer"
                    },
                    "id": 31,
                    "name": "UserDefinedTypeName",
                    "src": "409:12:0"
                  }
                ],
                "id": 32,
                "name": "Mapping",
                "src": "390:32:0"
              }
            ],
            "id": 33,
            "name": "VariableDeclaration",
            "src": "390:53:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "admins",
              "scope": 216,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => struct Registry.Admin storage ref)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => struct Registry.Admin storage ref)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 34,
                    "name": "ElementaryTypeName",
                    "src": "457:7:0"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Admin",
                      "referencedDeclaration": 29,
                      "type": "struct Registry.Admin storage pointer"
                    },
                    "id": 35,
                    "name": "UserDefinedTypeName",
                    "src": "468:5:0"
                  }
                ],
                "id": 36,
                "name": "Mapping",
                "src": "449:25:0"
              }
            ],
            "id": 37,
            "name": "VariableDeclaration",
            "src": "449:39:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "_fee",
              "scope": 216,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 38,
                "name": "ElementaryTypeName",
                "src": "495:4:0"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "30",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 0",
                  "value": "0"
                },
                "id": 39,
                "name": "Literal",
                "src": "507:1:0"
              }
            ],
            "id": 40,
            "name": "VariableDeclaration",
            "src": "495:13:0"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "Registry",
              "payable": false,
              "scope": 216,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "initialFee",
                      "scope": 67,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 41,
                        "name": "ElementaryTypeName",
                        "src": "533:4:0"
                      }
                    ],
                    "id": 42,
                    "name": "VariableDeclaration",
                    "src": "533:15:0"
                  }
                ],
                "id": 43,
                "name": "ParameterList",
                "src": "532:17:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 44,
                "name": "ParameterList",
                "src": "557:0:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 40,
                              "type": "uint256",
                              "value": "_fee"
                            },
                            "id": 45,
                            "name": "Identifier",
                            "src": "567:4:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 42,
                              "type": "uint256",
                              "value": "initialFee"
                            },
                            "id": 46,
                            "name": "Identifier",
                            "src": "574:10:0"
                          }
                        ],
                        "id": 47,
                        "name": "Assignment",
                        "src": "567:17:0"
                      }
                    ],
                    "id": 48,
                    "name": "ExpressionStatement",
                    "src": "567:17:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "struct Registry.Admin storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "struct Registry.Admin storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 37,
                                  "type": "mapping(address => struct Registry.Admin storage ref)",
                                  "value": "admins"
                                },
                                "id": 49,
                                "name": "Identifier",
                                "src": "594:6:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 228,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 50,
                                    "name": "Identifier",
                                    "src": "601:3:0"
                                  }
                                ],
                                "id": 51,
                                "name": "MemberAccess",
                                "src": "601:10:0"
                              }
                            ],
                            "id": 52,
                            "name": "IndexAccess",
                            "src": "594:18:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": true,
                              "lValueRequested": false,
                              "names": [
                                "account",
                                "adminType"
                              ],
                              "type": "struct Registry.Admin memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 29,
                                  "type": "type(struct Registry.Admin storage pointer)",
                                  "value": "Admin"
                                },
                                "id": 53,
                                "name": "Identifier",
                                "src": "615:5:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 228,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 54,
                                    "name": "Identifier",
                                    "src": "644:3:0"
                                  }
                                ],
                                "id": 55,
                                "name": "MemberAccess",
                                "src": "644:10:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "member_name": "System",
                                  "referencedDeclaration": null,
                                  "type": "enum Registry.AdminType"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 24,
                                      "type": "type(enum Registry.AdminType)",
                                      "value": "AdminType"
                                    },
                                    "id": 56,
                                    "name": "Identifier",
                                    "src": "679:9:0"
                                  }
                                ],
                                "id": 57,
                                "name": "MemberAccess",
                                "src": "679:16:0"
                              }
                            ],
                            "id": 58,
                            "name": "FunctionCall",
                            "src": "615:91:0"
                          }
                        ],
                        "id": 59,
                        "name": "Assignment",
                        "src": "594:112:0"
                      }
                    ],
                    "id": 60,
                    "name": "ExpressionStatement",
                    "src": "594:112:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 11,
                              "type": "function (address)",
                              "value": "CreatedAdmin"
                            },
                            "id": 61,
                            "name": "Identifier",
                            "src": "716:12:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 228,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 62,
                                "name": "Identifier",
                                "src": "729:3:0"
                              }
                            ],
                            "id": 63,
                            "name": "MemberAccess",
                            "src": "729:10:0"
                          }
                        ],
                        "id": 64,
                        "name": "FunctionCall",
                        "src": "716:24:0"
                      }
                    ],
                    "id": 65,
                    "name": "ExpressionStatement",
                    "src": "716:24:0"
                  }
                ],
                "id": 66,
                "name": "Block",
                "src": "557:190:0"
              }
            ],
            "id": 67,
            "name": "FunctionDefinition",
            "src": "515:232:0"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getFee",
              "payable": false,
              "scope": 216,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 68,
                "name": "ParameterList",
                "src": "768:2:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 75,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 69,
                        "name": "ElementaryTypeName",
                        "src": "792:4:0"
                      }
                    ],
                    "id": 70,
                    "name": "VariableDeclaration",
                    "src": "792:4:0"
                  }
                ],
                "id": 71,
                "name": "ParameterList",
                "src": "791:6:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 71
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 40,
                          "type": "uint256",
                          "value": "_fee"
                        },
                        "id": 72,
                        "name": "Identifier",
                        "src": "815:4:0"
                      }
                    ],
                    "id": 73,
                    "name": "Return",
                    "src": "808:11:0"
                  }
                ],
                "id": 74,
                "name": "Block",
                "src": "798:28:0"
              }
            ],
            "id": 75,
            "name": "FunctionDefinition",
            "src": "753:73:0"
          },
          {
            "attributes": {
              "canonicalName": "Registry.Response",
              "name": "Response"
            },
            "children": [
              {
                "attributes": {
                  "name": "Ok"
                },
                "id": 76,
                "name": "EnumValue",
                "src": "848:2:0"
              },
              {
                "attributes": {
                  "name": "Error"
                },
                "id": 77,
                "name": "EnumValue",
                "src": "852:5:0"
              }
            ],
            "id": 78,
            "name": "EnumDefinition",
            "src": "832:27:0"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "register",
              "payable": true,
              "scope": 216,
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "subject",
                      "scope": 121,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 79,
                        "name": "ElementaryTypeName",
                        "src": "883:7:0"
                      }
                    ],
                    "id": 80,
                    "name": "VariableDeclaration",
                    "src": "883:15:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "owner",
                      "scope": 121,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 81,
                        "name": "ElementaryTypeName",
                        "src": "900:6:0"
                      }
                    ],
                    "id": 82,
                    "name": "VariableDeclaration",
                    "src": "900:12:0"
                  }
                ],
                "id": 83,
                "name": "ParameterList",
                "src": "882:31:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 121,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "enum Registry.Response",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Response",
                          "referencedDeclaration": 78,
                          "type": "enum Registry.Response"
                        },
                        "id": 89,
                        "name": "UserDefinedTypeName",
                        "src": "971:8:0"
                      }
                    ],
                    "id": 90,
                    "name": "VariableDeclaration",
                    "src": "971:8:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 121,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 91,
                        "name": "ElementaryTypeName",
                        "src": "981:7:0"
                      }
                    ],
                    "id": 92,
                    "name": "VariableDeclaration",
                    "src": "981:7:0"
                  }
                ],
                "id": 93,
                "name": "ParameterList",
                "src": "970:19:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 202,
                      "type": "modifier (bytes32)",
                      "value": "notRegistered"
                    },
                    "id": 84,
                    "name": "Identifier",
                    "src": "929:13:0"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 80,
                      "type": "bytes32",
                      "value": "subject"
                    },
                    "id": 85,
                    "name": "Identifier",
                    "src": "943:7:0"
                  }
                ],
                "id": 86,
                "name": "ModifierInvocation",
                "src": "929:22:0"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 215,
                      "type": "modifier ()",
                      "value": "enoughFee"
                    },
                    "id": 87,
                    "name": "Identifier",
                    "src": "952:9:0"
                  }
                ],
                "id": 88,
                "name": "ModifierInvocation",
                "src": "952:9:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        95
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "hashed",
                          "scope": 121,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 94,
                            "name": "ElementaryTypeName",
                            "src": "1000:7:0"
                          }
                        ],
                        "id": 95,
                        "name": "VariableDeclaration",
                        "src": "1000:14:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 177,
                              "type": "function (bytes32) pure returns (bytes32)",
                              "value": "getHash"
                            },
                            "id": 96,
                            "name": "Identifier",
                            "src": "1017:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 80,
                              "type": "bytes32",
                              "value": "subject"
                            },
                            "id": 97,
                            "name": "Identifier",
                            "src": "1025:7:0"
                          }
                        ],
                        "id": 98,
                        "name": "FunctionCall",
                        "src": "1017:16:0"
                      }
                    ],
                    "id": 99,
                    "name": "VariableDeclarationStatement",
                    "src": "1000:33:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "struct Registry.Registration storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "struct Registry.Registration storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 33,
                                  "type": "mapping(bytes32 => struct Registry.Registration storage ref)",
                                  "value": "registrations"
                                },
                                "id": 100,
                                "name": "Identifier",
                                "src": "1044:13:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 95,
                                  "type": "bytes32",
                                  "value": "hashed"
                                },
                                "id": 101,
                                "name": "Identifier",
                                "src": "1058:6:0"
                              }
                            ],
                            "id": 102,
                            "name": "IndexAccess",
                            "src": "1044:21:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": true,
                              "lValueRequested": false,
                              "names": [
                                "owner",
                                "subject",
                                "meta"
                              ],
                              "type": "struct Registry.Registration memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 22,
                                  "type": "type(struct Registry.Registration storage pointer)",
                                  "value": "Registration"
                                },
                                "id": 103,
                                "name": "Identifier",
                                "src": "1068:12:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 82,
                                  "type": "string memory",
                                  "value": "owner"
                                },
                                "id": 104,
                                "name": "Identifier",
                                "src": "1102:5:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 95,
                                  "type": "bytes32",
                                  "value": "hashed"
                                },
                                "id": 105,
                                "name": "Identifier",
                                "src": "1130:6:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 106,
                                "name": "Literal",
                                "src": "1156:1:0"
                              }
                            ],
                            "id": 107,
                            "name": "FunctionCall",
                            "src": "1068:100:0"
                          }
                        ],
                        "id": 108,
                        "name": "Assignment",
                        "src": "1044:124:0"
                      }
                    ],
                    "id": 109,
                    "name": "ExpressionStatement",
                    "src": "1044:124:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7,
                              "type": "function (string memory,bytes32)",
                              "value": "Registered"
                            },
                            "id": 110,
                            "name": "Identifier",
                            "src": "1179:10:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 82,
                              "type": "string memory",
                              "value": "owner"
                            },
                            "id": 111,
                            "name": "Identifier",
                            "src": "1190:5:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 95,
                              "type": "bytes32",
                              "value": "hashed"
                            },
                            "id": 112,
                            "name": "Identifier",
                            "src": "1197:6:0"
                          }
                        ],
                        "id": 113,
                        "name": "FunctionCall",
                        "src": "1179:25:0"
                      }
                    ],
                    "id": 114,
                    "name": "ExpressionStatement",
                    "src": "1179:25:0"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 93
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "tuple(enum Registry.Response,bytes32)"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "member_name": "Ok",
                              "referencedDeclaration": null,
                              "type": "enum Registry.Response"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 78,
                                  "type": "type(enum Registry.Response)",
                                  "value": "Response"
                                },
                                "id": 115,
                                "name": "Identifier",
                                "src": "1222:8:0"
                              }
                            ],
                            "id": 116,
                            "name": "MemberAccess",
                            "src": "1222:11:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 95,
                              "type": "bytes32",
                              "value": "hashed"
                            },
                            "id": 117,
                            "name": "Identifier",
                            "src": "1235:6:0"
                          }
                        ],
                        "id": 118,
                        "name": "TupleExpression",
                        "src": "1221:21:0"
                      }
                    ],
                    "id": 119,
                    "name": "Return",
                    "src": "1214:28:0"
                  }
                ],
                "id": 120,
                "name": "Block",
                "src": "990:259:0"
              }
            ],
            "id": 121,
            "name": "FunctionDefinition",
            "src": "865:384:0"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "retrieve",
              "payable": false,
              "scope": 216,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "subject",
                      "scope": 165,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 122,
                        "name": "ElementaryTypeName",
                        "src": "1273:7:0"
                      }
                    ],
                    "id": 123,
                    "name": "VariableDeclaration",
                    "src": "1273:15:0"
                  }
                ],
                "id": 124,
                "name": "ParameterList",
                "src": "1272:17:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 165,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "enum Registry.Response",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Response",
                          "referencedDeclaration": 78,
                          "type": "enum Registry.Response"
                        },
                        "id": 125,
                        "name": "UserDefinedTypeName",
                        "src": "1311:8:0"
                      }
                    ],
                    "id": 126,
                    "name": "VariableDeclaration",
                    "src": "1311:8:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 165,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 127,
                        "name": "ElementaryTypeName",
                        "src": "1321:6:0"
                      }
                    ],
                    "id": 128,
                    "name": "VariableDeclaration",
                    "src": "1321:6:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 165,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 129,
                        "name": "ElementaryTypeName",
                        "src": "1329:7:0"
                      }
                    ],
                    "id": 130,
                    "name": "VariableDeclaration",
                    "src": "1329:7:0"
                  }
                ],
                "id": 131,
                "name": "ParameterList",
                "src": "1310:27:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        133
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "hashed",
                          "scope": 165,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 132,
                            "name": "ElementaryTypeName",
                            "src": "1348:7:0"
                          }
                        ],
                        "id": 133,
                        "name": "VariableDeclaration",
                        "src": "1348:14:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 177,
                              "type": "function (bytes32) pure returns (bytes32)",
                              "value": "getHash"
                            },
                            "id": 134,
                            "name": "Identifier",
                            "src": "1365:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 123,
                              "type": "bytes32",
                              "value": "subject"
                            },
                            "id": 135,
                            "name": "Identifier",
                            "src": "1373:7:0"
                          }
                        ],
                        "id": 136,
                        "name": "FunctionCall",
                        "src": "1365:16:0"
                      }
                    ],
                    "id": 137,
                    "name": "VariableDeclarationStatement",
                    "src": "1348:33:0"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        139
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "registration",
                          "scope": 165,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct Registry.Registration memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Registration",
                              "referencedDeclaration": 22,
                              "type": "struct Registry.Registration storage pointer"
                            },
                            "id": 138,
                            "name": "UserDefinedTypeName",
                            "src": "1391:12:0"
                          }
                        ],
                        "id": 139,
                        "name": "VariableDeclaration",
                        "src": "1391:32:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "struct Registry.Registration storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 33,
                              "type": "mapping(bytes32 => struct Registry.Registration storage ref)",
                              "value": "registrations"
                            },
                            "id": 140,
                            "name": "Identifier",
                            "src": "1426:13:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 133,
                              "type": "bytes32",
                              "value": "hashed"
                            },
                            "id": 141,
                            "name": "Identifier",
                            "src": "1440:6:0"
                          }
                        ],
                        "id": 142,
                        "name": "IndexAccess",
                        "src": "1426:21:0"
                      }
                    ],
                    "id": 143,
                    "name": "VariableDeclarationStatement",
                    "src": "1391:56:0"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "subject",
                              "referencedDeclaration": 19,
                              "type": "bytes32"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 139,
                                  "type": "struct Registry.Registration memory",
                                  "value": "registration"
                                },
                                "id": 144,
                                "name": "Identifier",
                                "src": "1462:12:0"
                              }
                            ],
                            "id": 145,
                            "name": "MemberAccess",
                            "src": "1462:20:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"\"",
                              "value": ""
                            },
                            "id": 146,
                            "name": "Literal",
                            "src": "1486:2:0"
                          }
                        ],
                        "id": 147,
                        "name": "BinaryOperation",
                        "src": "1462:26:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 131
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "tuple(enum Registry.Response,literal_string \"\",bytes32)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "member_name": "Error",
                                      "referencedDeclaration": null,
                                      "type": "enum Registry.Response"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 78,
                                          "type": "type(enum Registry.Response)",
                                          "value": "Response"
                                        },
                                        "id": 148,
                                        "name": "Identifier",
                                        "src": "1512:8:0"
                                      }
                                    ],
                                    "id": 149,
                                    "name": "MemberAccess",
                                    "src": "1512:14:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "string",
                                      "type": "literal_string \"\"",
                                      "value": ""
                                    },
                                    "id": 150,
                                    "name": "Literal",
                                    "src": "1528:2:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 133,
                                      "type": "bytes32",
                                      "value": "hashed"
                                    },
                                    "id": 151,
                                    "name": "Identifier",
                                    "src": "1532:6:0"
                                  }
                                ],
                                "id": 152,
                                "name": "TupleExpression",
                                "src": "1511:28:0"
                              }
                            ],
                            "id": 153,
                            "name": "Return",
                            "src": "1504:35:0"
                          }
                        ],
                        "id": 154,
                        "name": "Block",
                        "src": "1490:60:0"
                      }
                    ],
                    "id": 155,
                    "name": "IfStatement",
                    "src": "1458:92:0"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 131
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "tuple(enum Registry.Response,string memory,bytes32)"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "member_name": "Ok",
                              "referencedDeclaration": null,
                              "type": "enum Registry.Response"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 78,
                                  "type": "type(enum Registry.Response)",
                                  "value": "Response"
                                },
                                "id": 156,
                                "name": "Identifier",
                                "src": "1568:8:0"
                              }
                            ],
                            "id": 157,
                            "name": "MemberAccess",
                            "src": "1568:11:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "owner",
                              "referencedDeclaration": 17,
                              "type": "string memory"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 139,
                                  "type": "struct Registry.Registration memory",
                                  "value": "registration"
                                },
                                "id": 158,
                                "name": "Identifier",
                                "src": "1581:12:0"
                              }
                            ],
                            "id": 159,
                            "name": "MemberAccess",
                            "src": "1581:18:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "subject",
                              "referencedDeclaration": 19,
                              "type": "bytes32"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 139,
                                  "type": "struct Registry.Registration memory",
                                  "value": "registration"
                                },
                                "id": 160,
                                "name": "Identifier",
                                "src": "1601:12:0"
                              }
                            ],
                            "id": 161,
                            "name": "MemberAccess",
                            "src": "1601:20:0"
                          }
                        ],
                        "id": 162,
                        "name": "TupleExpression",
                        "src": "1567:55:0"
                      }
                    ],
                    "id": 163,
                    "name": "Return",
                    "src": "1560:62:0"
                  }
                ],
                "id": 164,
                "name": "Block",
                "src": "1338:291:0"
              }
            ],
            "id": 165,
            "name": "FunctionDefinition",
            "src": "1255:374:0"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getHash",
              "payable": false,
              "scope": 216,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "subject",
                      "scope": 177,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 166,
                        "name": "ElementaryTypeName",
                        "src": "1652:7:0"
                      }
                    ],
                    "id": 167,
                    "name": "VariableDeclaration",
                    "src": "1652:15:0"
                  }
                ],
                "id": 168,
                "name": "ParameterList",
                "src": "1651:17:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 177,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 169,
                        "name": "ElementaryTypeName",
                        "src": "1690:7:0"
                      }
                    ],
                    "id": 170,
                    "name": "VariableDeclaration",
                    "src": "1690:7:0"
                  }
                ],
                "id": 171,
                "name": "ParameterList",
                "src": "1689:9:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 171
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 222,
                              "type": "function () pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 172,
                            "name": "Identifier",
                            "src": "1751:9:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 167,
                              "type": "bytes32",
                              "value": "subject"
                            },
                            "id": 173,
                            "name": "Identifier",
                            "src": "1761:7:0"
                          }
                        ],
                        "id": 174,
                        "name": "FunctionCall",
                        "src": "1751:18:0"
                      }
                    ],
                    "id": 175,
                    "name": "Return",
                    "src": "1744:25:0"
                  }
                ],
                "id": 176,
                "name": "Block",
                "src": "1699:77:0"
              }
            ],
            "id": 177,
            "name": "FunctionDefinition",
            "src": "1635:141:0"
          },
          {
            "attributes": {
              "name": "notRegistered",
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "subject",
                      "scope": 202,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 178,
                        "name": "ElementaryTypeName",
                        "src": "1805:7:0"
                      }
                    ],
                    "id": 179,
                    "name": "VariableDeclaration",
                    "src": "1805:15:0"
                  }
                ],
                "id": 180,
                "name": "ParameterList",
                "src": "1804:17:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        182
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "hashed",
                          "scope": 202,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 181,
                            "name": "ElementaryTypeName",
                            "src": "1832:7:0"
                          }
                        ],
                        "id": 182,
                        "name": "VariableDeclaration",
                        "src": "1832:14:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 177,
                              "type": "function (bytes32) pure returns (bytes32)",
                              "value": "getHash"
                            },
                            "id": 183,
                            "name": "Identifier",
                            "src": "1849:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 179,
                              "type": "bytes32",
                              "value": "subject"
                            },
                            "id": 184,
                            "name": "Identifier",
                            "src": "1857:7:0"
                          }
                        ],
                        "id": 185,
                        "name": "FunctionCall",
                        "src": "1849:16:0"
                      }
                    ],
                    "id": 186,
                    "name": "VariableDeclarationStatement",
                    "src": "1832:33:0"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        188
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "registration",
                          "scope": 202,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct Registry.Registration memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Registration",
                              "referencedDeclaration": 22,
                              "type": "struct Registry.Registration storage pointer"
                            },
                            "id": 187,
                            "name": "UserDefinedTypeName",
                            "src": "1875:12:0"
                          }
                        ],
                        "id": 188,
                        "name": "VariableDeclaration",
                        "src": "1875:32:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "struct Registry.Registration storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 33,
                              "type": "mapping(bytes32 => struct Registry.Registration storage ref)",
                              "value": "registrations"
                            },
                            "id": 189,
                            "name": "Identifier",
                            "src": "1910:13:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 182,
                              "type": "bytes32",
                              "value": "hashed"
                            },
                            "id": 190,
                            "name": "Identifier",
                            "src": "1924:6:0"
                          }
                        ],
                        "id": 191,
                        "name": "IndexAccess",
                        "src": "1910:21:0"
                      }
                    ],
                    "id": 192,
                    "name": "VariableDeclarationStatement",
                    "src": "1875:56:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 231,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 193,
                            "name": "Identifier",
                            "src": "1941:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "subject",
                                  "referencedDeclaration": 19,
                                  "type": "bytes32"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 188,
                                      "type": "struct Registry.Registration memory",
                                      "value": "registration"
                                    },
                                    "id": 194,
                                    "name": "Identifier",
                                    "src": "1949:12:0"
                                  }
                                ],
                                "id": 195,
                                "name": "MemberAccess",
                                "src": "1949:20:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 196,
                                "name": "Literal",
                                "src": "1973:1:0"
                              }
                            ],
                            "id": 197,
                            "name": "BinaryOperation",
                            "src": "1949:25:0"
                          }
                        ],
                        "id": 198,
                        "name": "FunctionCall",
                        "src": "1941:34:0"
                      }
                    ],
                    "id": 199,
                    "name": "ExpressionStatement",
                    "src": "1941:34:0"
                  },
                  {
                    "id": 200,
                    "name": "PlaceholderStatement",
                    "src": "1985:1:0"
                  }
                ],
                "id": 201,
                "name": "Block",
                "src": "1822:171:0"
              }
            ],
            "id": 202,
            "name": "ModifierDefinition",
            "src": "1782:211:0"
          },
          {
            "attributes": {
              "name": "enoughFee",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 203,
                "name": "ParameterList",
                "src": "2018:0:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 231,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 204,
                            "name": "Identifier",
                            "src": "2028:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "value",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 228,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 205,
                                    "name": "Identifier",
                                    "src": "2036:3:0"
                                  }
                                ],
                                "id": 206,
                                "name": "MemberAccess",
                                "src": "2036:9:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    null
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        null
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "getFee",
                                      "referencedDeclaration": 75,
                                      "type": "function () view external returns (uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 239,
                                          "type": "contract Registry",
                                          "value": "this"
                                        },
                                        "id": 207,
                                        "name": "Identifier",
                                        "src": "2049:4:0"
                                      }
                                    ],
                                    "id": 208,
                                    "name": "MemberAccess",
                                    "src": "2049:11:0"
                                  }
                                ],
                                "id": 209,
                                "name": "FunctionCall",
                                "src": "2049:13:0"
                              }
                            ],
                            "id": 210,
                            "name": "BinaryOperation",
                            "src": "2036:26:0"
                          }
                        ],
                        "id": 211,
                        "name": "FunctionCall",
                        "src": "2028:35:0"
                      }
                    ],
                    "id": 212,
                    "name": "ExpressionStatement",
                    "src": "2028:35:0"
                  },
                  {
                    "id": 213,
                    "name": "PlaceholderStatement",
                    "src": "2073:1:0"
                  }
                ],
                "id": 214,
                "name": "Block",
                "src": "2018:63:0"
              }
            ],
            "id": 215,
            "name": "ModifierDefinition",
            "src": "1999:82:0"
          }
        ],
        "id": 216,
        "name": "ContractDefinition",
        "src": "27:2056:0"
      }
    ],
    "id": 217,
    "name": "SourceUnit",
    "src": "0:2084:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.19+commit.c4cbbb05.Emscripten.clang"
  },
  "networks": {
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-12T04:24:51.795Z"
}
