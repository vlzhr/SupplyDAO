const s = new signer.Signer({
    // Specify URL of the node on Testnet
    NODE_URL: 'https://nodes-testnet.wavesnodes.com'
});
s.setProvider(new providerWeb.ProviderWeb());

function donate(amount) {
    const data = {
        dApp: '3N69G8EDDEcxUmYNRYF87HjSSg4EWdjLkga',
        fee: 1000000,
        payment: [{
            assetId: '4bkoaxapG6mutKXCwEFKJP1xfh4EbNMBzX4vKAjnJphi',
            amount: amount*100,
        }],
        call: {
            function: 'sendTips',
            args: [
                { type: 'string', value: item["_id"] },
                { type: 'string', value: item["attributes"]["g1Id"] },
                { type: 'string', value: item["attributes"]["g2Id"] },
                { type: 'string', value: item["attributes"]["g3Id"] }
            ],
        },
    };

    const [tx] = s
        .invoke(data)
        .broadcast();
}