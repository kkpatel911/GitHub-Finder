$(document).ready(function () {
  $('#searchUser').on('keyup', function (e) {
    var username = e.target.value;

    //Making Fetch Request
    fetch("https://api.github.com/users/" + username + "?client_id=98501be021148392de94&client_secret=d5b8ca269c822c3d6908f610aa024214aa1fc452")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        $('#profile').html(`
        <div class="card" style="width: 18rem;">
         <img class="card-img-top" src="${data.avatar_url}" alt="Card image cap">
         <div class="card-body">
            <h5 class="card-title">${data.name}</h5>

              <span class="badge badge-primary">Public Repos: ${data.public_repos}</span>
              <span class="badge badge-secondary">Public Gists:${data.public_gists}</span>
              <span class="badge badge-success">Followers: ${data.followers}</span>
              <span class="badge badge-danger"> Following: ${data.following}</span>
            <ul class="list-group pt-2 pb-2">
              <li class="list-group-item">Company: ${data.company}</li>
              <li class="list-group-item">Websites: ${data.blog}</li>
              <li class="list-group-item">location: ${data.location}</li>
              <li class="list-group-item">Email: ${data.email}</li>
              <li class="list-group-item">Member Since: ${data.created_at}</li>
            </ul>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <h3 class='page-header'>Latest Repos</h3>
        <div id='hell'>


        </div>

          `)
      })
  })
});
$(document).ready(function () {
  $('#searchUser').on('keyup', function (e) {
    var username = e.target.value;

    fetch("https://api.github.com/users/" + username + "/repos?client_id=98501be021148392de94&client_secret=d5b8ca269c822c3d6908f610aa024214aa1fc452")
      .then(function (infojson) {
        return infojson.json();
      })
      .then(function (repos) {
        repos.forEach(function (element) {
          console.log(element.name);
          $('#hell').append(`
            <div>${element.name}</div>

          `)



        })
      })

  })

})