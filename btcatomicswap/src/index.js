import {initiate} from './initiate';
// export * from './initiate';

console.log('-------------------------------------------------------');
/**
 * INITIATE
 */
// ubuntu@ip-172-31-31-226:~$ bitcoin-cli -testnet -rpcuser=bedrock -rpcpassword=bedrock getnewaddress
// mxTRJVKSPjjrFeDBkzNZFTy4cur83WQk5R
initiate("n31og5QGuS28dmHpDH6PQD5wmVQ2K2spAG", "0.01");


import {auditContract} from './audit-contract';

/**
 * AUDIT CONTRACT
 */
// auditContract("63a6141c43aad028199ba9a06c88cc350ef068f50808c68876a914a22a841f0212b3bb1d51691a3b1a9a9d5dee180d67051509448849b17576a91461aa0fff7c9ffecd01a2f2d969271378c030aa366888ac",
//   "01000000019a529f2e22b7dd6aba86d7e864c955197969d5037a6bb47f880e5010897b17b8010000006b483045022100993dd7d10120feee0d5b458d54e25acdd9659883b9a35a54321dcfaf3be9c332022041ddf9e0ac21df94a7aca684f104e044dc85b1e2d7281a7c1cb161450c8aef21012103eb3fce004b800dff453bd32ab80d436c0f3ce89df657722cc127e90cf7fb3c03feffffff0240420f000000000017a91428eb6c2c7f38dedd9761eb9a7c56961ee93dd9d487aeff0f05000000001976a914225c1a683e295aeef9d0b2f05a71fb2e3ad5131e88ac00000000");
// contract
// 63a61464687e4d92afd1761ecb22d3aae42c609d5e2a368876a914a22a841f0212b3bb1d51691a3b1a9a9d5dee180d67051509379577b17576a914fd3c3fa09a1db2a3ef7a8be039325c924130c8df6888ac

// tx
// 01000000012547d15fa7eb699fc384fe7ca364453db8cbc07099fd610090b5a4b79f2949d1010000006b483045022100ee8596cdd246b934c4f9c5573c065568be45d457e73053d2d9b11ea56ecc1d1d02204a1470e0ad4710f1dda32252d162f6f4fb2882e8bc64845dd73b5033b16a5f130121039df726f88a9cd11ed00ea32ea8e6f3dda1ee90602ee406c210c966a97ce73cc9feffffff0240420f000000000017a9145490886592e5cf3110d38e3da09449aca38d89e1875f173105000000001976a91443707c19148f5beef8fd0a4e354f01fe927f64b488ac00000000






// ANTO AND ADMIR !! GENERATE address from hash
const Base58Check = require('bitcore').encoding.Base58Check;
const Base58 = require('bitcore').encoding.Base58;
const Address = require('bitcore').Address;


const recipientHash = "ebcf822c4a2cdb5f6a6b9c4a59b74d66461da581";

const testnetBuffer = Buffer.from([0x6F]);
const recipientBuffer = Buffer.from(recipientHash, "hex");

const buffer21 = Buffer.concat([testnetBuffer, recipientBuffer], 21);

const encoded = Base58Check.encode(buffer21);

console.log(Address.fromString(encoded));

//HELL YEAH!!!