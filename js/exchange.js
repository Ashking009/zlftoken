async function get_TRX_ZLF(){
    const response =await fetch('https://nolexserver.com/api/v1/tickers?ticker_id=ZLF_TRX');
    const data = await response.json();
    const price_ZLF = data.ask;
    // const input = document.getElementById('TRX_inp').value;
    document.getElementById('ZLX_rate').textContent = parseFloat(price_ZLF).toFixed(6);
};

async function get_ZLF_INR(){
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://api.wazirx.com/api/v2/tickers'
    const response =await fetch(proxyUrl + targetUrl);
    const data = await response.json();
    const input = document.getElementById('ZLX_rate').textContent;
    const price_INR = parseFloat(data.trxinr.open) * parseFloat(input);
    document.getElementById('INR_rate').textContent = parseFloat(price_INR).toFixed(6);
    };

    get_TRX_ZLF();
    get_ZLF_INR();

