$(document).ready(function () {
  $('#searchUser').on('keyup', function (e) {
    var username = e.target.value;

    //Making Fetch Request
    fetch("https://api.github.com/users/"+ username+"?client_id=98501be021148392de94&client_secret=d5b8ca269c822c3d6908f610aa024214aa1fc452")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        $('#profile').html(`
        <div class="card" style="width: 18rem;">
         <img class="card-img-top" src="${data.avatar_url}" alt="Card image cap">
         <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

          `)

        // <div class="panel panel-default">
        //   <div class="panel-heading">
        //     <h3 class="panel-title">${data.name}</h3>
        //   </div>
        //   <div class="panel-body">
        //     <div class='row'>
        //       <div class = "col-md-3">
        //       <img class = 'thumbnail' src="${data.avatar_url}">
        //     </div>

        //     </div>
        //    </div>
        // </div>
        //
      })
  })
});