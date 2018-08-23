import web3 from "~/plugins/web3";
import EIP20 from "../../build/contracts/EIP20";

const tokenAddress = "0x7230e7efdcc5f797ae237f7ebf54b168ae98f9e4"; // insert deployed EIP20 token address here
const eip20 = new web3.eth.Contract(EIP20.abi, tokenAddress);

let account;
web3.eth.getAccounts().then(res => {
  account = res[0];
});

export const state = () => ({});

export const mutations = {};

export const actions = {
  getName() {
    return eip20.methods.name().call({ from: account });
  },
  async transfer(context, params) {
    const transferMethod = EIP20.abi.find(method => {
      return method.name === "transfer";
    });

    const transferMethodTransactionData = web3.eth.abi.encodeFunctionCall(
      transferMethod,
      [params.to, web3.utils.toBN(params.value)]
    );

    const estimateGas = await web3.eth.estimateGas({
      from: account,
      to: tokenAddress,
      data: transferMethodTransactionData
    });

    const receipt = await web3.eth.sendTransaction({
      from: account,
      to: tokenAddress,
      data: transferMethodTransactionData,
      value: 0,
      gas: estimateGas
    });

    return receipt;
  }
};

export const getters = {};
