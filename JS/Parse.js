
// number -> string
// 14.0090009 -> '14,01'
function formatToFrString(_val) {
  
  if(typeof _val !== "number") {
    console.log("not a number");
    return null;
  }
  
  try { // On force pour les navigateurs compatibles 
    return _val.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  catch (e) {
    return _val.toLocaleString();
  }
}
