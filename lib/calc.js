/*************************************************************
* Orchestrates the Calculation and Translation of data base on
* information given by the user.
*************************************************************/
function run(type, weight, callback) {
   var data = {
      cost: getCost(type, weight),
      type: interpretType(type),
      weight: weight
   };

   if (callback) callback(null, data);

   console.log("CALC: "+ data.type +" at " + weight + "oz = $" + data.cost);

   return data;
}

/*************************************************************
* Translates our package type codes to acutal words.
*************************************************************/
function interpretType(type) {
   switch (type) {
      case "s": return "Stamped Letter";
      case "m": return "Metered Letter";
      case "f": return "Large Envelope";
      case "p": return "Parcel";
      default:
         return type;
   }
}

/*************************************************************
* Calls the appropriate function to find price based on type
*************************************************************/
function getCost(type, weight) {
   switch (type) {
      case "s": return stampedMatrix(weight);
      case "m": return meteredMatrix(weight);
      case "f": return flatMatrix(weight);
      case "p": return parcelMatrix(weight);
   }
   return NaN; // error flag
}

/*************************************************************
* Returns the postage pricing for the stamped letters
*************************************************************/
function stampedMatrix(w) {
   if (w <= 1.0) { return 0.49; }
   if (w <= 2.0) { return 0.70; }
   if (w <= 3.0) { return 0.91; }
   if (w <= 3.5) { return 1.12; }
   return NaN; // error flag
}

/*************************************************************
* Returns the postage pricing for the metered letters
*************************************************************/
function meteredMatrix(w) {
   if (w <= 1.0) { return 0.46; }
   if (w <= 2.0) { return 0.67; }
   if (w <= 3.0) { return 0.88; }
   if (w <= 3.5) { return 1.09; }
   return NaN; // error flag
}

/*************************************************************
* Returns the postage pricing for the large envelopes
*************************************************************/
function flatMatrix(w) {
   if (w <= 1.0)  { return 0.98; }
   if (w <= 2.0)  { return 1.19; }
   if (w <= 3.0)  { return 1.40; }
   if (w <= 4.0)  { return 1.61; }
   if (w <= 5.0)  { return 1.82; }
   if (w <= 6.0)  { return 2.03; }
   if (w <= 7.0)  { return 2.24; }
   if (w <= 8.0)  { return 2.45; }
   if (w <= 9.0)  { return 2.66; }
   if (w <= 10.0) { return 2.87; }
   if (w <= 11.0) { return 3.08; }
   if (w <= 12.0) { return 3.29; }
   if (w <= 13.0) { return 3.50; }
   return NaN; // error flag
}

/*************************************************************
* Returns the postage pricing for the paracels
*************************************************************/
function parcelMatrix(w) {
   if (w <= 4.0)  { return 2.67; }
   if (w <= 5.0)  { return 2.85; }
   if (w <= 6.0)  { return 3.03; }
   if (w <= 7.0)  { return 3.21; }
   if (w <= 8.0)  { return 3.39; }
   if (w <= 9.0)  { return 3.57; }
   if (w <= 10.0) { return 3.75; }
   if (w <= 11.0) { return 3.93; }
   if (w <= 12.0) { return 4.11; }
   if (w <= 13.0) { return 4.29; }
   return NaN; // error flag
}

/*************************************************************
* Prepare for importing into Node.js
*************************************************************/
module.exports = {
   run: run
};
