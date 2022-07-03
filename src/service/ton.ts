import {toNano} from "tonweb/dist/types/utils/common";
import TonWeb from "tonweb";

const BN = TonWeb.utils.BN;
const providerUrl = 'https://testnet.toncenter.com/api/v2/jsonRPC';
const apiKey = '801992d2a35b8606e02185b19786fdc15e9ed73520ddd60a74b37c77a62137d8';
const tonweb = new TonWeb(new TonWeb.HttpProvider(providerUrl, {apiKey})); // Initialize TON SDK

const createWallet = async (login, secretKey) => {
    const TonWeb = require("tonweb");
    const seed = TonWeb.utils.base64ToBytes(secretKey); // A's private (secret) key
    const keyPair = tonweb.utils.keyPairFromSeed(seed); // Obtain key pair (public key and private key)
    localStorage.setItem(`${login}Key`, JSON.stringify(keyPair));
    const wallet = tonweb.wallet.create({
        publicKey: keyPair.publicKey
    });
    const walletAddress = await wallet.getAddress();
    localStorage.setItem(`${login}walletAddress`, JSON.stringify(walletAddress));
    await wallet.deploy(keyPair.secretKey).send();

    return wallet;
}

    export const createReaderWallet = async (login = "Reader1", secretKey = "ReaderGeneratedSecret") => {
    if (localStorage.getItem(`${login}wallet]`) === null) {
        await createWallet(login, secretKey);
    }
}

export const createAuthorWallet = async (login = 'Author1', secretKey = "AuthorGeneratedSecret") => {
    if (localStorage.getItem(`${login}wallet]`) === null) {
        await createWallet(login, secretKey);
    }
}

const getDataFromLocalStorage = (key) => {
    const retrievedData = localStorage.getItem('key');

    return JSON.parse(retrievedData);
}

export const createChannels = async (price, readerId = 'Reader1', authorId = 'Author1') => {

    const TonWeb = require("tonweb");
    const tonweb = new TonWeb(new TonWeb.HttpProvider(providerUrl, {apiKey}));
    const walletAddressReader = getDataFromLocalStorage(`${readerId}walletAddress`);
    const walletAddressAuthor = getDataFromLocalStorage(`${readerId}walletAddress`);

    const readerSecret = getDataFromLocalStorage(`${readerId}Key`);
    const authorSecret = getDataFromLocalStorage(`${readerId}Key`);

    const walletReader = tonweb.wallet.create({address: 'EQCkp-iAlI5laz4nLjvz_IDyye64alXOmb4nYxbeocKu4yWa'});
    const walletAuthor = tonweb.wallet.create({address: 'EQCkp-iAlI5laz4nLjvz_IDyye64alXOmb4nYxbeocKu4yWa'});

    await walletReader.deploy(readerSecret.secretKey).send();
    await walletAuthor.deploy(authorSecret.secretKey).send();


    const channelInitState = {
        readerBalance: toNano(price-0.05),
        authorBalance: toNano('0'),
        seqnoReader: new BN(0),
        seqnoAuthor: new BN(0)
    };

    const channelConfig = {
        channelId: new BN(124),
        addressReader: walletAddressReader,
        addressAuthor: walletAddressAuthor,
        initBalanceReader: channelInitState.readerBalance,
        initBalanceAuthor: channelInitState.authorBalance
    }

    const readerChannel = tonweb.payments.createChannel({
        ...channelConfig,
        isReader: true,
        myKeyPair: readerSecret,
        hisPublicKey: readerSecret.publicKey,
    });

    const channelAddress = await readerChannel.getAddress();

    const authorChannel = tonweb.payments.createChannel({
        ...channelConfig,
        isReader: false,
        myKeyPair: authorSecret,
        hisPublicKey: authorSecret.publicKey,
    });

    if ((await authorChannel.getAddress()).toString() !== channelAddress.toString()) {
        throw new Error('Channels address not same');
    }


    const fromReaderWallet = readerChannel.fromWallet({
        wallet: walletReader,
        secretKey: readerSecret.secretKey
    });

    const fromAuthorWallet = authorChannel.fromWallet({
        wallet: authorSecret,
        secretKey: authorSecret.secretKey
    });

    await fromReaderWallet.deploy().send(toNano('0.05'));

    console.log(await readerChannel.getChannelState());
    const data = await readerChannel.getData();


    await fromReaderWallet
        .topUp({coinsA: channelInitState.readerBalance, coinsB: new BN(0)})
        .send(channelInitState.readerBalance.add(toNano('0.05'))); // +0.05 TON to network fees
}


const transferFromReaderToAuthor = () => {};
const transferFromAuthorToReader = () => {};
const closePaymentChanel = () => {};
