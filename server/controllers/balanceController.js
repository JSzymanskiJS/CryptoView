const { Web3 } = require("web3");
const process = require("process");
const dotenv = require("dotenv");

const balanceOfABI = require("../ABIs/balanceOfABI.js");

dotenv.config();

const nodeProviderUrl = process.env.WEB3_PROVIDER_URL;
const web3 = new Web3(new Web3.providers.HttpProvider(nodeProviderUrl));

const getBalance = async (req, res) => {
    try {
      const { tokenAddress, walletAddress } = req.body;
      const erc20CompatibleContract = new web3.eth.Contract(balanceOfABI, tokenAddress);
      
      let balance = await erc20CompatibleContract.methods.balanceOf(walletAddress).call();
      const finalBalance = web3.utils.fromWei(balance, "ether")
      
      res.status(200).json({balance: finalBalance});
    } catch (error) {
      res.status(500).json({
        error:
          "An error occurred while retrieving the balance.", // TODO `An error occurred while retrieving the balance of given wallet: ${walletAddress} on the contract ${tokenAddress}.`
      });
    }
  };


module.exports = getBalance;