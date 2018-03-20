// Has to be invoked via Truffle

const yargs = require("yargs");

const Registry = artifacts.require("Registry");

const clearTruffle = () => {
  process.stdout.write("\r\x1b[A\x1b[A\x1b[2K");
};

const handleContract = async argv => {
  if (argv.quiet) {
    clearTruffle();
  }

  switch (argv.action) {
    case "getaddress":
      console.log(await Registry.address); // eslint-disable-line
      break;
    default:
      break;
  }
};

const handleAccount = async argv => {
  if (argv.quiet) {
    clearTruffle();
  }

  switch (argv.action) {
    case "getaccount":
      web3.eth.getAccounts((_, accounts) => { console.log(accounts[0]) }); // eslint-disable-line
      break;
    default:
      break;
  }
};
module.exports = async function generateGenesis(cb) {
  try {
    yargs
      .usage(
        "Utility scripts to interact with contracts and the Ethereum network"
      )
      .version("0.0.1")
      .command({
        command: "contract <action>",
        describe: "contract getaddress: get address of deployed contract",
        builder: _yargs => {
          _yargs.choices("action", ["getaddress"]);
        },
        handler: handleContract
      })
      .command({
        command: "account <action>",
        describe: "account getaccount: get first account",
        builder: _yargs => {
          _yargs.choices("action", ["getaccount"]);
        },
        handler: handleAccount
      })
      .option("quiet", {
        type: "boolean",
        describe: "clears Truffle console output",
        default: false
      })
      .string("_")
      .parse(process.argv.slice(4)); // slice out truffle nonsense;
  } catch (e) {
    cb(e);
    return;
  }
  cb();
};
