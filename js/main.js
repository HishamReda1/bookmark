var siteNameInput = document.getElementById('siteName')
var siteUrlInput = document.getElementById('siteUrl')

bookContainer = []

if (localStorage.getItem('bookmarks') != null) {
  bookContainer = JSON.parse(localStorage.getItem('bookmarks'))


}

function addsite() {
    var x = siteobj = {
      name: siteNameInput.value,
      url: siteUrlInput.value,

    }
    bookContainer.push(x)
    console.log(x);
    displaysites()
    localStorage.setItem('bookmarks', JSON.stringify(bookContainer))
  }
  function displaysites() {
    var cartona = ``
    for (let i = 0; i < bookContainer.length; i++) {
      cartona += `
      <tr>
     
      <td><h2>${bookContainer[i].name}</h2></td>
      <td> <a href="${bookContainer[i].url}" target="_blank" rel="noopener noreferrer"> <button  class="btn btn-primary my-4">visit</button></a></td> 
      <td> <button onclick="deletesite()" class="btn btn-danger my-4">delete</button></td> 
   
    </tr>
      
      `;

    }
    document.getElementById('tbody').innerHTML = cartona



  }


function deletesite(Index) {
  bookContainer.splice(Index, 1)
displaysites()
  localStorage.setItem('bookmarks', JSON.stringify(bookContainer))

}

// var copaya = ``
// function errors() {


//   copaya += `  <p class="alert alert-danger" role="alert"id="nameError">Name is required</p>

//   `;

// }
// document.getElementById('err1').innerHTML = copaya

// if ((siteNameInput&&siteUrlInput)!=null){
//   addsite()
// } else{
//   errors()

//   }


