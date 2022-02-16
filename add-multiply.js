// wood calculator
/* 
  chairWood = 3cft
  tableWood = 10cft
  bedWodd = 50cft
 */
function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;
  // calculation
  const chairWoodQuantity = chairQuantity * perChairWood;
  const tableWoodQuantity = tableQuantity * perTableWood;
  const bedWoodQuantity = bedQuantity * perBedWood;
  // total
  const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
  return totalWood;
}
const totalWoodResult = woodCalculator(4, 2, 2);
console.log('total wood quantity is :', totalWoodResult);