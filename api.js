var base_url = "http://127.0.0.1:5000/api/"

function display_response(response) {
    if (response['success']) {
        var code = response['code'];

        document.getElementById("result_url").value = code;
        document.getElementById('result').style.visibility = 'visible';
    } else {
        alert('error: ' + response['message']);
    }
}

function shorten_url() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.response)
            display_response(response);
        }
    };
    xhttp.open("GET", "http://127.0.0.1:5000/api/shorten_link?url=https://www.youtube.com/watch?v=Q4_42Zm-DrI", true);
    xhttp.send();
}