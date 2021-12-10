var fs = require('fs')

/* Connect to ethereum node */
const etherUrl = "https://evm.wasp.sc.iota.org";
const abi = require("./iotabots_abi.json")
var Contract = require('web3-eth-contract');

Contract.setProvider(etherUrl);


var contract = new Contract(abi, "0x3a3c0D4BDAB6d0e9715Fa2eAA852af3038Bec342");

async function main() {
    for (var i = 1; i <= 500; i++) {
        await contract.methods.ownerOf(i).call({ from: '0x8863ae48646c493efF8cd54f9Ffb8Be89669E62A' }, function (error, result) {
            var line = i + ":" + result + "\n"
            fs.appendFile('drop0.txt', line, function (err) {
                if (err) {
                  // append failed
                } else {
                  // done
                }
              })
        });
    }

}

main()
