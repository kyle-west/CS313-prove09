function run(type, weight, callback) {
   var realType = interpretType(type);
   var cost = 0.0;
   console.log("Calulating price for a "+ weight + "lb "+type);

   var data = {
      cost: cost,
      type: realType,
      weight: weight
   };

   if (callback) callback(null, data);
   return cost;
}

function interpretType(type) {
   switch (type) {
      default:
         return type;
   }
}

module.exports = {
   run: run
};
