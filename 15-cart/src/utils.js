export const getTotal = (cart) => {
  let totalAmount = 0;
  let totalCost = 0;
  for (let [id, { price, amount }] of cart) {
  console.log(id, price, amount); // 
  totalAmount = totalAmount + amount
  const cost = price * amount
  totalCost = totalCost + cost
  }
  return {totalAmount, totalCost}
  
}
