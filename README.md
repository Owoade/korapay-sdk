# Korapay SDK

#### The Korapay NodeJS SDK

### How to use

```bash 
# NPM
npm install korapay-node

# YARN
yarn add korapay-node
```

ESM,

```javascript
import { Korapay } from "korapay-node";

const korapay = new Korapay(secret_key, public_key);
```

CommonJs

```javascript
const { Korapay } = require("korapay-node");

const korapay = new Korapay(secret_key, public_key);
```

All methods use promise meaning you can either use the `async...await` or `then`. However, you do not have to clutter your code with blocks of `try..catch` as the SDK intuitively handles error already. For instance:

```javascript
 const charge = await korapay.charge.initialize( payload );

 if( !charge.status ) return charge.message; // this might be different depending on your use case

 redirect( charge.data.checkout_url ); // this might be different depending on your use case

```

### Modules

- [x] Charge(Payin)
- [x] Payout
- [x] Verification
- [x] Balances
- [x] Miscellaneous



### Contributing

Please feel free to fork this package and contribute by submitting a pull request to enhance the functionalities.


Created with 🧡 by [Owoade](https://my-portfolio-owoade.vercel.app/)








