/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MoraswapV2Pair } from "../MoraswapV2Pair";

export class MoraswapV2Pair__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MoraswapV2Pair> {
    return super.deploy(overrides || {}) as Promise<MoraswapV2Pair>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MoraswapV2Pair {
    return super.attach(address) as MoraswapV2Pair;
  }
  connect(signer: Signer): MoraswapV2Pair__factory {
    return super.connect(signer) as MoraswapV2Pair__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MoraswapV2Pair {
    return new Contract(address, _abi, signerOrProvider) as MoraswapV2Pair;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve0",
        type: "uint112",
      },
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve1",
        type: "uint112",
      },
    ],
    name: "Sync",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINIMUM_LIQUIDITY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint112",
        name: "_reserve0",
        type: "uint112",
      },
      {
        internalType: "uint112",
        name: "_reserve1",
        type: "uint112",
      },
      {
        internalType: "uint32",
        name: "_blockTimestampLast",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "kLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "price0CumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price1CumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "skim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sync",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526001600c5534801561001557600080fd5b50604080518082018252601181527026b7b930b9bbb0b8102628102a37b5b2b760791b6020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527fb7c8b1a2596028b9bec9664bb89d0329805d8c7bbeb19efe940bfe084486b9d9818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c09091019092528151910120600355600580546001600160a01b031916331790556124928061010f6000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a71461040c578063d505accf1461041f578063dd62ed3e14610432578063fff6cae91461045d57600080fd5b8063ba9a7a56146103dd578063bc25cf77146103e6578063c45a0155146103f957600080fd5b80637ecebe00116100d35780637ecebe001461036057806389afcb441461038057806395d89b41146103a8578063a9059cbb146103ca57600080fd5b80636a6278421461032457806370a08231146103375780637464fc3d1461035757600080fd5b806323b872dd116101665780633644e515116101405780633644e515146102f6578063485cc955146102ff5780635909c0d5146103125780635a3d54931461031b57600080fd5b806323b872dd146102a257806330adf81f146102b5578063313ce567146102dc57600080fd5b8063022c0d9f146101ae57806306fdde03146101c35780630902f1ac14610209578063095ea7b31461023d5780630dfe16811461026057806318160ddd1461028b575b600080fd5b6101c16101bc366004612182565b610465565b005b6101f36040518060400160405280601181526020017026b7b930b9bbb0b8102628102a37b5b2b760791b81525081565b6040516102009190612280565b60405180910390f35b61021161097b565b604080516001600160701b03948516815293909216602084015263ffffffff1690820152606001610200565b61025061024b36600461211b565b6109a5565b6040519015158152602001610200565b600654610273906001600160a01b031681565b6040516001600160a01b039091168152602001610200565b61029460005481565b604051908152602001610200565b6102506102b0366004612063565b6109bc565b6102947f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b6102e4601281565b60405160ff9091168152602001610200565b61029460035481565b6101c161030d36600461202a565b610a50565b61029460095481565b610294600a5481565b610294610332366004611ff0565b610ace565b610294610345366004611ff0565b60016020526000908152604090205481565b610294600b5481565b61029461036e366004611ff0565b60046020526000908152604090205481565b61039361038e366004611ff0565b610f5f565b60408051928352602083019190915201610200565b6101f36040518060400160405280600381526020016204d4c560ec1b81525081565b6102506103d836600461211b565b611300565b6102946103e881565b6101c16103f4366004611ff0565b61130d565b600554610273906001600160a01b031681565b600754610273906001600160a01b031681565b6101c161042d3660046120a4565b611430565b61029461044036600461202a565b600260209081526000928352604080842090915290825290205481565b6101c1611643565b600c546001146104905760405162461bcd60e51b8152600401610487906122b3565b60405180910390fd5b6000600c55841515806104a35750600084115b6104fb5760405162461bcd60e51b8152602060048201526024808201527f4d6f7261737761703a20494e53554646494349454e545f4f55545055545f414d60448201526313d5539560e21b6064820152608401610487565b60008061050661097b565b5091509150816001600160701b03168710801561052b5750806001600160701b031686105b6105775760405162461bcd60e51b815260206004820181905260248201527f4d6f7261737761703a20494e53554646494349454e545f4c49515549444954596044820152606401610487565b60065460075460009182916001600160a01b039182169190811690891682148015906105b55750806001600160a01b0316896001600160a01b031614155b6105f85760405162461bcd60e51b81526020600482015260146024820152734d6f7261737761703a20494e56414c49445f544f60601b6044820152606401610487565b8a1561060957610609828a8d611785565b891561061a5761061a818a8c611785565b86156106875760405163c46298cd60e01b81526001600160a01b038a169063c46298cd906106549033908f908f908e908e90600401612234565b600060405180830381600087803b15801561066e57600080fd5b505af1158015610682573d6000803e3d6000fd5b505050505b6040516370a0823160e01b81523060048201526001600160a01b038316906370a082319060240160206040518083038186803b1580156106c657600080fd5b505afa1580156106da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106fe9190612169565b6040516370a0823160e01b81523060048201529094506001600160a01b038216906370a082319060240160206040518083038186803b15801561074057600080fd5b505afa158015610754573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107789190612169565b92505050600089856001600160701b0316610793919061237d565b83116107a05760006107bd565b6107b38a6001600160701b03871661237d565b6107bd908461237d565b905060006107d48a6001600160701b03871661237d565b83116107e15760006107fe565b6107f48a6001600160701b03871661237d565b6107fe908461237d565b9050600082118061080f5750600081115b6108675760405162461bcd60e51b815260206004820152602360248201527f4d6f7261737761703a20494e53554646494349454e545f494e5055545f414d4f60448201526215539560ea1b6064820152608401610487565b60006108896108778460036118d0565b610883876103e86118d0565b90611937565b9050600061089b6108778460036118d0565b90506108c0620f42406108ba6001600160701b038b8116908b166118d0565b906118d0565b6108ca83836118d0565b10156109065760405162461bcd60e51b815260206004820152600b60248201526a4d6f7261737761703a204b60a81b6044820152606401610487565b50506109148484888861198d565b60408051838152602081018390529081018c9052606081018b90526001600160a01b038a169033907fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229060800160405180910390a350506001600c55505050505050505050565b6008546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b60006109b2338484611b78565b5060015b92915050565b6001600160a01b038316600090815260026020908152604080832033845290915281205460001914610a3b576001600160a01b0384166000908152600260209081526040808320338452909152902054610a169083611937565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b610a46848484611bda565b5060019392505050565b6005546001600160a01b03163314610aa05760405162461bcd60e51b815260206004820152601360248201527226b7b930b9bbb0b81d102327a92124a22222a760691b6044820152606401610487565b600680546001600160a01b039384166001600160a01b03199182161790915560078054929093169116179055565b6000600c54600114610af25760405162461bcd60e51b8152600401610487906122b3565b6000600c81905580610b0261097b565b506006546040516370a0823160e01b81523060048201529294509092506000916001600160a01b03909116906370a082319060240160206040518083038186803b158015610b4f57600080fd5b505afa158015610b63573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b879190612169565b6007546040516370a0823160e01b81523060048201529192506000916001600160a01b03909116906370a082319060240160206040518083038186803b158015610bd057600080fd5b505afa158015610be4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c089190612169565b90506000610c1f836001600160701b038716611937565b90506000610c36836001600160701b038716611937565b90506000610c448787611c80565b60005490915080610e2a5760055460408051637cd07e4760e01b815290516000926001600160a01b031691637cd07e47916004808301926020929190829003018186803b158015610c9457600080fd5b505afa158015610ca8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ccc919061200d565b9050336001600160a01b0382161415610dad57806001600160a01b03166340dc0e376040518163ffffffff1660e01b815260040160206040518083038186803b158015610d1857600080fd5b505afa158015610d2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d509190612169565b995060008a118015610d6457506000198a14155b610da85760405162461bcd60e51b81526020600482015260156024820152744261642064657369726564206c697175696469747960581b6044820152606401610487565b610e24565b6001600160a01b03811615610dfd5760405162461bcd60e51b815260206004820152601660248201527526bab9ba103737ba103430bb329036b4b3b930ba37b960511b6044820152606401610487565b610e156103e8610883610e1088886118d0565b611dcc565b9950610e2460006103e8611e3c565b50610e71565b610e6e6001600160701b038916610e4186846118d0565b610e4b919061231b565b6001600160701b038916610e5f86856118d0565b610e69919061231b565b611ecb565b98505b60008911610ed15760405162461bcd60e51b815260206004820152602760248201527f4d6f7261737761703a20494e53554646494349454e545f4c495155494449545960448201526617d3525395115160ca1b6064820152608401610487565b610edb8a8a611e3c565b610ee786868a8a61198d565b8115610f1157600854610f0d906001600160701b0380821691600160701b9004166118d0565b600b555b604080518581526020810185905233917f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f910160405180910390a250506001600c5550949695505050505050565b600080600c54600114610f845760405162461bcd60e51b8152600401610487906122b3565b6000600c81905580610f9461097b565b506006546007546040516370a0823160e01b81523060048201529395509193506001600160a01b039081169291169060009083906370a082319060240160206040518083038186803b158015610fe957600080fd5b505afa158015610ffd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110219190612169565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038416906370a082319060240160206040518083038186803b15801561106657600080fd5b505afa15801561107a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061109e9190612169565b306000908152600160205260408120549192506110bb8888611c80565b600054909150806110cc84876118d0565b6110d6919061231b565b9a50806110e384866118d0565b6110ed919061231b565b995060008b1180156110ff575060008a115b61115b5760405162461bcd60e51b815260206004820152602760248201527f4d6f7261737761703a20494e53554646494349454e545f4c495155494449545960448201526617d0955493915160ca1b6064820152608401610487565b6111653084611ee3565b611170878d8d611785565b61117b868d8c611785565b6040516370a0823160e01b81523060048201526001600160a01b038816906370a082319060240160206040518083038186803b1580156111ba57600080fd5b505afa1580156111ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f29190612169565b6040516370a0823160e01b81523060048201529095506001600160a01b038716906370a082319060240160206040518083038186803b15801561123457600080fd5b505afa158015611248573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061126c9190612169565b935061127a85858b8b61198d565b81156112a4576008546112a0906001600160701b0380821691600160701b9004166118d0565b600b555b604080518c8152602081018c90526001600160a01b038e169133917fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496910160405180910390a35050505050505050506001600c81905550915091565b60006109b2338484611bda565b600c5460011461132f5760405162461bcd60e51b8152600401610487906122b3565b6000600c556006546007546008546040516370a0823160e01b81523060048201526001600160a01b0393841693909216916113d991849186916113d4916001600160701b039091169084906370a08231906024015b60206040518083038186803b15801561139c57600080fd5b505afa1580156113b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108839190612169565b611785565b6008546040516370a0823160e01b815230600482015261142691839186916113d491600160701b9091046001600160701b0316906001600160a01b038516906370a0823190602401611384565b50506001600c5550565b428410156114745760405162461bcd60e51b8152602060048201526011602482015270135bdc985cddd85c0e8811561412549151607a1b6044820152606401610487565b6003546001600160a01b038816600090815260046020526040812080549192917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9918b918b918b9190876114c7836123e9565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810187905260e0016040516020818303038152906040528051906020012060405160200161154092919061190160f01b81526002810192909252602282015260420190565b60408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156115ab573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906115e15750886001600160a01b0316816001600160a01b0316145b61162d5760405162461bcd60e51b815260206004820152601b60248201527f4d6f7261737761703a20494e56414c49445f5349474e415455524500000000006044820152606401610487565b611638898989611b78565b505050505050505050565b600c546001146116655760405162461bcd60e51b8152600401610487906122b3565b6000600c556006546040516370a0823160e01b815230600482015261177e916001600160a01b0316906370a082319060240160206040518083038186803b1580156116af57600080fd5b505afa1580156116c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116e79190612169565b6007546040516370a0823160e01b81523060048201526001600160a01b03909116906370a082319060240160206040518083038186803b15801561172a57600080fd5b505afa15801561173e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117629190612169565b6008546001600160701b0380821691600160701b90041661198d565b6001600c55565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b179052915160009283928716916118119190612218565b6000604051808303816000865af19150503d806000811461184e576040519150601f19603f3d011682016040523d82523d6000602084013e611853565b606091505b509150915081801561187d57508051158061187d57508080602001905181019061187d9190612147565b6118c95760405162461bcd60e51b815260206004820152601960248201527f4d6f7261737761703a205452414e534645525f4641494c4544000000000000006044820152606401610487565b5050505050565b60008115806118f4575082826118e6818361235e565b92506118f2908361231b565b145b6109b65760405162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b6044820152606401610487565b600082611944838261237d565b91508111156109b65760405162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b6044820152606401610487565b6001600160701b0384118015906119ab57506001600160701b038311155b6119ec5760405162461bcd60e51b81526020600482015260126024820152714d6f7261737761703a204f564552464c4f5760701b6044820152606401610487565b60006119fd64010000000042612404565b600854909150600090611a1d90600160e01b900463ffffffff1683612394565b905060008163ffffffff16118015611a3d57506001600160701b03841615155b8015611a5157506001600160701b03831615155b15611ae0578063ffffffff16611a7985611a6a86611f6d565b6001600160e01b031690611f86565b6001600160e01b0316611a8c919061235e565b60096000828254611a9d91906122dd565b909155505063ffffffff8116611ab684611a6a87611f6d565b6001600160e01b0316611ac9919061235e565b600a6000828254611ada91906122dd565b90915550505b6008805463ffffffff8416600160e01b026001600160e01b036001600160701b03898116600160701b9081026001600160e01b03199095168c83161794909417918216831794859055604080519382169282169290921783529290930490911660208201527f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1910160405180910390a1505050505050565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038316600090815260016020526040902054611bfd9082611937565b6001600160a01b038085166000908152600160205260408082209390935590841681522054611c2c9082611f9b565b6001600160a01b0380841660008181526001602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90611bcd9085815260200190565b600080600560009054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015611cd157600080fd5b505afa158015611ce5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d09919061200d565b600b546001600160a01b038216158015945091925090611db8578015611db3576000611d44610e106001600160701b038881169088166118d0565b90506000611d5183611dcc565b905080821115611db0576000611d73611d6a8484611937565b600054906118d0565b90506000611d8c83611d868660026118d0565b90611f9b565b90506000611d9a828461231b565b90508015611dac57611dac8782611e3c565b5050505b50505b611dc4565b8015611dc4576000600b555b505092915050565b60006003821115611e2d5750806000611de660028361231b565b611df19060016122dd565b90505b81811015611e2757905080600281611e0c818661231b565b611e1691906122dd565b611e20919061231b565b9050611df4565b50919050565b8115611e37575060015b919050565b600054611e499082611f9b565b60009081556001600160a01b038316815260016020526040902054611e6e9082611f9b565b6001600160a01b0383166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90611ebf9085815260200190565b60405180910390a35050565b6000818310611eda5781611edc565b825b9392505050565b6001600160a01b038216600090815260016020526040902054611f069082611937565b6001600160a01b03831660009081526001602052604081209190915554611f2d9082611937565b60009081556040518281526001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001611ebf565b60006109b6600160701b6001600160701b03841661232f565b6000611edc6001600160701b038316846122f5565b600082611fa883826122dd565b91508110156109b65760405162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b6044820152606401610487565b60006020828403121561200257600080fd5b8135611edc81612444565b60006020828403121561201f57600080fd5b8151611edc81612444565b6000806040838503121561203d57600080fd5b823561204881612444565b9150602083013561205881612444565b809150509250929050565b60008060006060848603121561207857600080fd5b833561208381612444565b9250602084013561209381612444565b929592945050506040919091013590565b600080600080600080600060e0888a0312156120bf57600080fd5b87356120ca81612444565b965060208801356120da81612444565b95506040880135945060608801359350608088013560ff811681146120fe57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561212e57600080fd5b823561213981612444565b946020939093013593505050565b60006020828403121561215957600080fd5b81518015158114611edc57600080fd5b60006020828403121561217b57600080fd5b5051919050565b60008060008060006080868803121561219a57600080fd5b853594506020860135935060408601356121b381612444565b9250606086013567ffffffffffffffff808211156121d057600080fd5b818801915088601f8301126121e457600080fd5b8135818111156121f357600080fd5b89602082850101111561220557600080fd5b9699959850939650602001949392505050565b6000825161222a8184602087016123b9565b9190910192915050565b60018060a01b038616815284602082015283604082015260806060820152816080820152818360a0830137600081830160a090810191909152601f909201601f19160101949350505050565b602081526000825180602084015261229f8160408501602087016123b9565b601f01601f19169190910160400192915050565b60208082526010908201526f135bdc985cddd85c0e881313d0d2d15160821b604082015260600190565b600082198211156122f0576122f0612418565b500190565b60006001600160e01b038381168061230f5761230f61242e565b92169190910492915050565b60008261232a5761232a61242e565b500490565b60006001600160e01b038281168482168115158284048211161561235557612355612418565b02949350505050565b600081600019048311821515161561237857612378612418565b500290565b60008282101561238f5761238f612418565b500390565b600063ffffffff838116908316818110156123b1576123b1612418565b039392505050565b60005b838110156123d45781810151838201526020016123bc565b838111156123e3576000848401525b50505050565b60006000198214156123fd576123fd612418565b5060010190565b6000826124135761241361242e565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b6001600160a01b038116811461245957600080fd5b5056fea2646970667358221220f926f3cb58fcfbccf20b8b0f11bebc273e19c566f439ad00373164cf5d6a95b864736f6c63430008070033";
