import { ChainId } from '@uniswap/sdk';
import { Configuration } from './basis-cash/config';
import { BankInfo } from './basis-cash';

const configurations: {[env: string]: Configuration} = {
  development: {
    chainId: ChainId.ROPSTEN,
    etherscanUrl: 'https://ropsten.etherscan.io',
    defaultProvider: 'wss://ropsten.infura.io/ws/v3/ad252282d11741ca93da93fe61d63b78',
    deployments: require('./basis-cash/deployments/deployments.ropsten.json'),
    externalTokens: {
      DAI: ['0x8019C042131d11a5e8a400631Db92b7137d9aBe4', 18],
      YFI: ['0xD07f509C60600e4971E3B0dDcB0B0c3eC51E3C0D', 18],
      SUSD: ['0x6192Fb58cd37e240996F266cd1A3c559DE3275ce', 18],
      USDC: ['0xB0252c99C1Be92C2B17607e6518871dFF084441E', 6],
      USDT: ['0xE28Eb10B2AEF8922Bb0E5a5301425F788C76B05C', 6],
      // TODO: replace with real address
      'BAC_DAI-UNI-LPv2': ['0x08964Ff06115A58722EB066971Bca4dBA095fb3a', 18],
      'BAS_DAI-UNI-LPv2': ['0x870AC8B5C3AA902c99D1677698cdee17646e1fb6', 18],
    },
  },
  production: {
    /*chainId: ChainId.MAINNET,
    etherscanUrl: 'https://etherscan.io',
    defaultProvider: 'wss://mainnet.infura.io/ws/v3/d3bcb3c54e8c49a7bd1a9b6773e65bbe',
    deployments: require('./basis-cash/deployments/deployments.local.json'),
    externalTokens: {
      DAI: ['0x6B175474E89094C44Da98b954EedeAC495271d0F', 18],
      YFI: ['0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e', 18],
      SUSD: ['0x57Ab1E02fEE23774580C119740129eAC7081e9D3', 18],
      USDC: ['0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6],
      USDT: ['0xdAC17F958D2ee523a2206206994597C13D831ec7', 6],
      // TODO: replace with real address
      'BAC_DAI-UNI-LPv2': ['0x6B175474E89094C44Da98b954EedeAC495271d0F', 18],
      'BAS_DAI-UNI-LPv2': ['0x6B175474E89094C44Da98b954EedeAC495271d0F', 18], */
      chainId: ChainId.ROPSTEN,
      etherscanUrl: 'https://ropsten.etherscan.io',
      defaultProvider: 'wss://ropsten.infura.io/ws/v3/ad252282d11741ca93da93fe61d63b78',
      deployments: require('./basis-cash/deployments/deployments.ropsten.json'),
      externalTokens: {
        DAI: ['0x8019C042131d11a5e8a400631Db92b7137d9aBe4', 18],
        YFI: ['0xD07f509C60600e4971E3B0dDcB0B0c3eC51E3C0D', 18],
        SUSD: ['0x6192Fb58cd37e240996F266cd1A3c559DE3275ce', 18],
        USDC: ['0xB0252c99C1Be92C2B17607e6518871dFF084441E', 6],
        USDT: ['0xE28Eb10B2AEF8922Bb0E5a5301425F788C76B05C', 6],
        // TODO: replace with real address
        'BAC_DAI-UNI-LPv2': ['0x08964Ff06115A58722EB066971Bca4dBA095fb3a', 18],
        'BAS_DAI-UNI-LPv2': ['0x870AC8B5C3AA902c99D1677698cdee17646e1fb6', 18],
    },
  },
}

export const bankDefinitions: {[contractName: string]: BankInfo} = {
  BACDAIPool: {
    name: 'Earn BAC by DAI',
    contract: 'BACDAIPool',
    depositTokenName: 'DAI',
    earnTokenName: 'BAC',
    sort: 1,
  },
  BACUSDCPool: {
    name: 'Earn BAC by USDC',
    contract: 'BACUSDCPool',
    depositTokenName: 'USDC',
    earnTokenName: 'BAC',
    sort: 2,
  },
  BACSUSDPool: {
    name: 'Earn BAC by sUSD',
    contract: 'BACSUSDPool',
    depositTokenName: 'SUSD',
    earnTokenName: 'BAC',
    sort: 3,
  },
  BACUSDTPool: {
    name: 'Earn BAC by USDT',
    contract: 'BACUSDTPool',
    depositTokenName: 'USDT',
    earnTokenName: 'BAC',
    sort: 4,
  },
  BACyCRVPool: {
    name: 'Earn BAC by yCRV',
    contract: 'BACyCRVPool',
    depositTokenName: 'yCRV',
    earnTokenName: 'BAC',
    sort: 5,
  },
  DAIBACLPTokenSharePool: {
    name: 'Earn BAS by BAC-DAI-LP',
    contract: 'DAIBACLPTokenSharePool',
    depositTokenName: 'BAC_DAI-UNI-LPv2',
    earnTokenName: 'BAS',
    sort: 6,
  },
  DAIBASLPTokenSharePool: {
    name: 'Earn BAS by BAS-DAI-LP',
    contract: 'DAIBASLPTokenSharePool',
    depositTokenName: 'BAS_DAI-UNI-LPv2',
    earnTokenName: 'BAS',
    sort: 7,
  },
};

export default configurations[process.env.NODE_ENV];
