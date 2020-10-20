const express = require('express');
const axios = require('axios');
const config = require('config');
const router = express.Router();


// ALL USERS
router.get('/:postcode', async (req, res) => {
try {

 
    const postcodeRes = await axios.get(
        `https://api.postcodes.io/postcodes/${req.params.postcode}/autocomplete`
      );
      return res.json(postcodeRes.data);
    } catch (err) {

    console.error(err.message);
    return res.status(404).json({ msg: 'No Postcode found' });
    }
  });

//${config.get('clientKey')}${config.get('clientSecret')}

//GET ADDRESS FROM POSTCODE

router.get('/address/:postcode', async (req, res) => {
  try {

 
    const addressRes = await axios.get(
      `https://api.getAddress.io/find/${req.params.postcode}?api-key=${config.get("getAddressIoApiKey")}`
      );
      return res.json(addressRes.data);
    } catch (err) {

    console.error(err.message);
    return res.status(404).json({ msg: 'No Postcode found' });
    }
  });




  module.exports = router;