import * as Web3 from "web3";
import { IAdapter } from "../types";

// tslint:disable-next-line:no-var-requires
const json = require("../../../../build/contracts/Registry.json");

export interface IEthAdapterOptions {
  agent?: string;
  endpoint: string;
  networkId?: string;
  contractAddress?: string;
}

// TODO: get rid of hardcoded agent (where moolah comes from)
// and hardcoded network (taken from abi)
export class EthAdapter implements IAdapter {
  public endpoint: string;
  public web3: Web3.default;
  public agent: string;
  public networkId: string;
  public contractAddress: string;
  public contracts: {
    registry: any;
  };

  constructor(options: IEthAdapterOptions) {
    this.endpoint = options.endpoint;
    const provider =
      Web3.givenProvider || new Web3.providers.HttpProvider(this.endpoint);
    this.web3 = new Web3(provider);
    this.agent = options.agent;
    this.networkId = options.networkId;
    this.contractAddress = options.contractAddress;

    this.contracts = {
      registry: {}
    };
    const networks = Object.keys(json.networks);
    const network = json.networks
      ? json.networks[networks[networks.length - 1]]
      : null;
    const address = this.networkId || (network && network.address);

    this.contracts.registry = new this.web3.eth.Contract(
      json.abi,
      this.contractAddress || address
    );

    this.web3.eth.getAccounts().then(accounts => {
      this.agent = this.agent || accounts[0];
    });
  }

  public register(hash: string, owner: string) {
    return this.contracts.registry.methods
      .register(hash, owner)
      .send({ value: 10, from: this.agent, gas: 300000 });
  }

  public check(hash: string) {
    return this.contracts.registry.methods.retrieve(hash).call();
  }
}

export default EthAdapter;
