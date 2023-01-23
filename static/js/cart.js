var updateButtons = document.getElementsByClassName('update-cart')


for(var i=0; i< updateButtons.length; i++){
    updateButtons[i].addEventListener('click',function(){
        var productID = this.dataset.product
        var action = this.dataset.action
        console.log('productID:',productID,'action:',action)

        // user is defined in main.html line no 17
        console.log('USER:', user)
        if(user==='AnonymousUser'){
            console.log('User not logged in')
        }
        else{
            updateUserOrder(productID,action)
        }
    })
}

function updateUserOrder(productID,action){
    console.log('User is logged in, sending data ;)')

    var url = '/update_item/'

    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken':csrftoken,
        },
        body:JSON.stringify({'productID':productID,'action':action})

    })

    .then((response) => {
        return response.json()
    })


    .then((data) => {
        location.reload()
        // return console.log('data:',data)
    })
}