var check = document.getElementsByClassName("fa-check");
var trash = document.getElementsByClassName("fa-trash");


Array.from(trash).forEach(function(element) {
    element.addEventListener('click', function(){
      const name = this.parentNode.parentNode.childNodes[1].innerText
      const msg = this.parentNode.parentNode.childNodes[3].innerText
      fetch('messages', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': name,
          'msg': msg
        })
      }).then(function (response) {
        window.location.reload()
      })
    });
});

Array.from(check).forEach(function(element) {
    element.addEventListener('click', function(){
      const name = this.parentNode.parentNode.childNodes[1].innerText
      const msg = this.parentNode.parentNode.childNodes[3].innerText
      const check = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)

        //  //node tool
        //  const parent = this.parentNode.parentNode.childNodes
        //  for(let i=0; i<parent.length; i++){
        //    console.log(parent[i])
        //  }


      fetch('fifo', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          'name': name,
          'msg': msg,
          'check':check
        })
      })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
    });
});