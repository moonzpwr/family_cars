import keys from 'lodash/keys.js';
import get from 'lodash/get.js';

import optionsNamingObj from './optionsNaming.json';
import prices from '../prices.json';

const DEFAULT_LAND_PRICE = 600;
const DEFAULT_SEA_PRICE = 1000;

export const optionsMapper = (requestedItem) => {
    const options = get(requestedItem, 'options', {});
    const uri = get(requestedItem, 'uri');
    const isCopartItem = uri.indexOf('copart') > -1;
    const optionsKeys = keys(options);

    let mappedOptions = {};
    optionsKeys.forEach(optionsKey => {

        const optionNamingItem = optionsNamingObj[optionsKey];
        if (optionNamingItem) {
            console.log('optionNamingItem', optionNamingItem);
            const { field, name} = optionNamingItem;
            const optionValue = get(options, `${optionsKey}.${field}`); // note
            if (optionValue) {
                mappedOptions =  {...mappedOptions, [name]: optionValue };
            }
        }
    });
    const locationName = get(mappedOptions, 'locationName');
    let priceObj;
    prices.forEach((price) => {
        const { from = '', auction } = price;
        const isInLocation = locationName.toLowerCase().indexOf(from.toLowerCase()) > -1;
        const isCopartAuction = auction.indexOf('copart') > -1;
        if ((isCopartAuction && isCopartItem && isInLocation) || (!isCopartAuction && !isCopartItem && isInLocation)) priceObj = price;
    });
    if (priceObj) {
        const { seaprice, destinationport, landprice } = priceObj;
        mappedOptions = {...mappedOptions, seaPrice: +seaprice, destinationPort: destinationport, landPrice: +landprice}
    } else {
        console.error(`no price config for ${locationName}`);
        mappedOptions = {...mappedOptions, seaPrice: DEFAULT_SEA_PRICE, landPrice: DEFAULT_LAND_PRICE, deliveryConfirmationRequired: true}
    }

    return ({ ...requestedItem, options: mappedOptions });
};

export default optionsMapper;