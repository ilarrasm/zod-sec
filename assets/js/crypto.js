$.getJSON("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cethereum-classic%2Cshiba-inu%2Cmonero%2Cergo%2Cravencoin%2Clitecoin%2Czilliqa%2Cthe-open-network&order=market_cap_desc&per_page=100&page=1&sparkline=false", function(datos){
    $.each(datos, (index, item)=>{
        console.log(item.symbol)
       $(`#${item.id}`).append((`${item.current_price} USD`)) 
    })
})
let ws = new WebSocket('wss://stream.binance.com:9443/ws/zilusdt@trade')
ws.onmessage = (event) => {
    console.log(event.data)
    
}
var options = {
    method: 'GET',
    url: 'https://alpha.financeapi.net/market/get-realtime-prices?symbols=AAPL%2CBTC-USD',
    params: {modules: 'defaultKeyStatistics,assetProfile'},
    headers: {
      'X-API-KEY': 'rwkwUIugdB7iJriA6Gwa949YYrhRy0mf4UePa7ms'
    }
  };
  console.log(options)