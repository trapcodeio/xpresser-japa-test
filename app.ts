// Import Xpresser
import xpresser = require("xpresser");
/**
 * Boot Xpresser with your config
 *
 * Get config from config.ts
 * See https://xpresserjs.com/configuration/
 */
import config = require("./config");

// Initialize Xpresser
const $ = xpresser.init(config, {
    exposeDollarSign: false,
});

// Initialize Typescript
$.initializeTypescript(__filename);


// Expose $
export { $ };
