
let cards = document.getElementsByClassName("carta");
let addToOrderBtn = document.getElementById('addToOrder')
let submitOrderBtn = document.getElementById('submitOrder')
let cancelBtn = document.getElementById('cancelOrder')
let orders = []


function addToOrder( ){
  orders.push(document.querySelector('#order').value)
  document.querySelector('#order').value = ''
}


addToOrderBtn.addEventListener('click', function(){
  if(!document.querySelector('#name').value){
    return 
  }
  let yourTotalOrderDetails = document.querySelector('#order').value
  console.log(yourTotalOrderDetails)
  addToOrder()
  console.log(orders)
  document.querySelector('#totalOrderDetail').value += yourTotalOrderDetails + ', '
  
})

cancelBtn.addEventListener('click', function(){
  window.location.reload(true)
})


submitOrderBtn.addEventListener('click', function(){

  if(!document.querySelector('#name').value){
    return 
  }

  addToOrder()  

  document.querySelector('#totalOrderDetail').value = ''

  let name = document.querySelector('#name').value

  fetch('messages', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'orders': orders,
      'name'  : name
    })
  })
  .then(response => {
    if (response.ok){
      alert(`your order is being prepared, ${name}`)
    }
  })
  document.querySelector('#name').value = ''
});



Array.from(cards).forEach(function(element) {
  element.addEventListener('click', function(){
    cardContent = element.firstElementChild.innerText
    console.log(element)
    console.log(element.firstElementChild.innerText)
    document.querySelector('#order').value += cardContent + ' '
    //window.location.reload(true)
  })
})

