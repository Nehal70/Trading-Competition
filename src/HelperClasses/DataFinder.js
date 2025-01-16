import sampleStockWidgetData from "../SampleData/sampleStockWidgetData.json";

export default class DataHelper {
    /**
     * Retrieves matched data from a JSON file based on input criteria. Only returns first found object.
     * @param {Object[]} dataFile - The imported JSON file (parsed as an array of objects).
     * @param {string} inputField - The field in the JSON data to search.
     * @param {any} matchValue - The value to match against the inputField.
     * @returns {Object|null} - The matched data or undefined if not found.
     */
    static getDataMatch(dataFile, inputField, matchValue) {
        if (!Array.isArray(dataFile)) {
            console.error("Error with JSON file");
            return null;
        }

        return dataFile.find(item => item[inputField] === matchValue);
    }

    /**
     * Retrieves Filtered data from a JSON file based on input criteria. Returns all found objects.
     * @param {Object[]} dataFile - The imported JSON file (parsed as an array of objects).
     * @param {string} filterField - The field in the JSON data to search.
     * @param {any} filterValue - The value to match against the filterField.
     * @returns {Object[]|null} - The filter data or undefined if not found.
     */
    static getDataFilter(dataFile, filterField, filterValue) {
        if (!Array.isArray(dataFile)) {
            console.error("Error with JSON file");
            return null;
        }
        return dataFile.filter(item => item[filterField] === filterValue);
    }

    /**
     * Takes in a ticker string, and returns the complete stock information
     * @param {string} ticker - ticker name of wanted stock
     * @returns {Object[]|null} - The filter data or undefined if not found.
     */
    static getStockInfo(ticker) {
        //Input API Logic here, hardcoded for now
        //Stock should be unpacked into format (Ticker, price, change, percentageChange)
        return sampleStockWidgetData.find(stock => stock.ticker === ticker);
    }

    /**
     * Takes in a ticker string and timeFrame, and returns the stock candlestick information
     * @param {string} ticker - ticker name of wanted stock
     * @param {int} timeFrame - time duration of each candlestick in minutes
     * @returns {Object[][]|null} - Returns array of all candlestick information
     */
    static getCandleStickInfo(ticker, timeFrame) {
        //Candlestick Formation (x: [date object] y: [open high low close])
    }

    static postOrderInfo() {
        //not done yet
    }

    /**
     * Takes in API key, and establishes API connection
     * @param {string} APIKey - inputted key of user
     * @returns {String & boolean} - Returns string with team/name information, and a boolean if login was successful
     */
    static initializeKey(APIkey) {
        if (APIkey === "12345") {
            return ["John Doe | GATech | #001", true];
        } else {
            return ["Sorry, that's not the correct number.", false];
        }
    }
}