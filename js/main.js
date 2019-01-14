$(document).ready(function () {
  $('#searchUser').on('keyup', function (e) {
    var username = e.target.value;

    //Making Fetch Request
    fetch('https://api.github.com/users/' + username,
      {
        client_id: "aafb44a9a6fd2be7b577",
        client_secret: "24d4a63541c87a76f19d7bd074140b7c51784007"
      })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        $('#profile').html(`
        ${data.name}
        `)
      })
  })
});