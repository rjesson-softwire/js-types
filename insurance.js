let items = [
  { name: "alice", age: 53, hasInsurance: false, insuranceExpiresIn: -3 },
  { name: "bob", age: "35", hasInsurance: undefined, insuranceExpiresIn: 7 },
  { name: "charlie", age: 22, hasInsurance: "0", insuranceExpiresIn: undefined },
  { name: null, age: 19, hasInsurance: true, insuranceExpiresIn: 3 }
];

items.forEach(item => {
  item.name = item.name ? item.name.charAt(0).toUpperCase() + item.name.slice(1) : "Unknown"
  let ageWhenInsuranceExpires = Number(item.age) + Number(item.insuranceExpiresIn);
  hasInsurance = Number(item.hasInsurance) || (!isNaN(item.insuranceExpiresIn) && item.insuranceExpiresIn > 0);
  let text = hasInsurance ? 
    `insurance expires when this person is ${ageWhenInsuranceExpires} years old` : 
    `doesn't have insurance, will be ${item.age + 1} next year`;
  console.log(`${item.name}: ${text}`);
});

