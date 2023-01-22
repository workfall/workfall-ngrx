declare module workfall.models {
  type NavItem = {
    label: string,
    url: string,
    active: boolean
  }

  type GetCoinsQueryParams = {
    referenceCurrencyUuid: string,
    timePeriod: string,
    orderBy: string,
    orderDirection: string,
    limit: string,
    offset: string,
  }

  type GetCoinsRes = {
    status: string,
    data: Data,
  }
  type Data = {
    stats: Stats,
    coins: CoinsEntity[],
  }
  type Stats = {
    total: number,
    totalCoins: number,
    totalMarkets: number,
    totalExchanges: number,
    totalMarketCap: string,
    total24hVolume: string,
  }
  type CoinsEntity = {
    uuid: string,
    symbol: string,
    name: string,
    color: string,
    iconUrl: string,
    marketCap: string,
    price: string,
    listedAt: number,
    tier: number,
    change: string,
    rank: number,
    sparkline: string[],
    lowVolume: boolean,
    coinrankingUrl: string,
    '24hVolume': string,
    btcPrice: string,
  }


}
