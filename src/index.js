/**
 * Compound Integration Test
 *
 * Docs: https://compound.finance/developers/api#compound-api
 *
 * Guide: Implement the functions
 * > getUser
 * and
 * > getBalance
 */

let userEndpoint = "https://api.compound.finance/api/v2/account";
let tokenEndpoint = "https://api.compound.finance/api/v2/ctoken";

/**
 * Returns a object reprosenting a user and there assets in compound
 * @param {string} address
 *
 * {
 *   address: <Users address>,
 *   tokens: [
 *       {
 *         name: <Full Name>
 *         symbol: <Token Symbol>
 *         balance: <Balance>
 *         interestAccrued: <Number>
 *      }
 *   ]
 * }
 */
const getUser = address => {
  return {};
};

/**
 * Returns a object reprosenting a user total balance in compound
 * @param {string} address
 *
 * {
 *	 total: <Combined value of all assets in USD>
 *   interestEarned: <Combined interest earned of all assets>
 * }
 */
const getBalance = address => {
  return {};
};

/**
 * Helper function to generate a URL
 *
 * @param {string} url
 * @param {object} parameters
 */
const buildUrl = (url, parameters) => {
  let qs = "";
  for (const key in parameters) {
    if (parameters.hasOwnProperty(key)) {
      const value = parameters[key];
      qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
    }
  }
  if (qs.length > 0) {
    qs = qs.substring(0, qs.length - 1); //chop off last "&"
    url = url + "?" + qs;
  }

  return url;
};

/**
 * Private function to print results on page
 */
const _init = async () => {
  const address = "0xd5F43Dd5A63eF4E4fAC39e93294A00dfF93B81ae";
  const userElement = document.getElementById("user");
  const balanceElement = document.getElementById("balance");

  let user = getUser(address);

  if (user) {
    userElement.innerHTML = JSON.stringify(user, null, 4);
  }

  let balance = getBalance(address);

  if (balance) {
    balanceElement.innerHTML = JSON.stringify(balance, null, 4);
  }
};

_init();
