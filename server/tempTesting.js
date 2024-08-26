const {Web3} = require("web3");
const process = require("process");

const balanceOfABI = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
];

const nodeProviderUrl = "https://sepolia.infura.io/v3/91c7e33bf263468b9dce92ee529fd870";
const web3 = new Web3(new Web3.providers.HttpProvider(nodeProviderUrl));

const getBalance = async (req, res) => {
    const { tokenAddress, walletAddress } = req.body;
    const erc20CompatibleContract = new web3.eth.Contract(balanceOfABI, tokenAddress);
    
    let balance = await erc20CompatibleContract.methods.balanceOf(walletAddress).call();
    console.log(balance)
    console.log(web3.utils.fromWei(balance, "ether"))
    console.log(`An error occurred while retrieving the balance of given wallet: ${walletAddress} on the contract ${tokenAddress}.`)
    return balance;
};

const testBalance = getBalance({body: {tokenAddress: "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14", walletAddress: "0x3C56cB0828fa6604965CC41981FC903874e000ba"}})

// console.log(testBalance)