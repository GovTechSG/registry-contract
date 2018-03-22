import * as Web3 from "web3";
import { IAdapter } from "../types";
import abi from "./abi/Registry";

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
  // @ts-ignore https://github.com/ethereum/web3.js/pull/1184
  public web3: Web3;
  public agent: string;
  public networkId: string;
  public contractAddress: string;
  public contracts: {
    registry: any;
  };

  constructor(options: IEthAdapterOptions) {
    this.endpoint = options.endpoint;
    // @ts-ignore
    const provider = new Web3.providers.HttpProvider(this.endpoint);
    // @ts-ignore
    this.web3 = new Web3(provider);
    this.agent = options.agent;
    this.networkId = options.networkId;
    this.contractAddress = options.contractAddress;

    this.contracts = {
      registry: {}
    };
    const networks = Object.keys(abi.networks);
    const network = abi.networks
      ? abi.networks[networks[networks.length - 1]]
      : null;
    const address = this.contractAddress || (network && network.address);

    this.contracts.registry = new this.web3.eth.Contract(abi.abi, address);

    if (!this.agent) {
      this.web3.eth.getAccounts().then(accounts => {
        this.agent = this.agent || accounts[0];
      });
    }
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
