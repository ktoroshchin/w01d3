var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax() {
  var objBombardier ={};
  var objTelus ={};
  var objContainer = {};
  var totalSalesTelus = 0;//1300
  var totalTelusTax = 0;//144
  var totalSalesBombardier = 0;//800
  var totalBombardierTax = 0;//400



    function telusTotalSales() {
    for(var keys in companySalesData){
      if(companySalesData[keys].name == "Telus"){
        totalSalesTelus += companySalesData[keys].sales.reduce(function (a, b) {
        return a + b;
        });
      }
    }
    return totalSalesTelus;
  }

    function bombardierTotalSales() {
    for(var keys in companySalesData){
      if(companySalesData[keys].name == "Bombardier"){
        totalSalesBombardier += companySalesData[keys].sales.reduce(function (a, b) {
        return a + b;
        });
      }
    }
    return totalSalesBombardier;
  }

  function bombardierTotalTaxes(){
      for(var keys in companySalesData){
        if(companySalesData[keys].name == "Bombardier"){
          totalBombardierTax += companySalesData[keys].sales.reduce(function (a, b) {
          return a + b}) * 0.05;
        }
      }
    return totalBombardierTax;
  }

  function telusTotalTaxes(){
      var skTax = 0;
      var bcTax = 0;
      for(var keys in companySalesData){
        if(companySalesData[keys].name == "Telus" && companySalesData[keys].province
        == "SK"){
          skTax += companySalesData[keys].sales.reduce(function (a, b) {
          return a + b})*0.10;
        }
      }
      for(var keys in companySalesData){
        if(companySalesData[keys].name == "Telus" && companySalesData[keys].province
        == "BC"){
          bcTax += companySalesData[keys].sales.reduce(function (a, b) {
          return a + b})*0.12;
        }
      }
      totalTelusTax = skTax + bcTax;
    return totalTelusTax;
  }


  objContainer.Bombardier = objBombardier;
  objContainer.Telus = objTelus;
  objBombardier.totalSales = bombardierTotalSales();
  objBombardier.totalTax = bombardierTotalTaxes();
  objTelus.totalSales = telusTotalSales();
  objTelus.totalTaxes = telusTotalTaxes();


  return objContainer;
}
console.log(calculateSalesTax());
