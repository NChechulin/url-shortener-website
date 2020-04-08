var base_url = "http://127.0.0.1:5000/api/"
const url = 'http://127.0.0.1:5000/api/get_url?code=test';

function display_response(response) {
    if (response['success']) {
        var url = response['url'];

        document.getElementById("result_url").value = url;
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
    xhttp.open("GET", "http://127.0.0.1:5000/api/get_url?code=test", true);
    xhttp.send();
}