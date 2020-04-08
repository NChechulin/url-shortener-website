var api_base_url = "http://127.0.0.1:5000/api/"
var website_base_url = "http://127.0.0.1:8000/"

function display_response(response) {
    if (response['success']) {
        var code = response['code'];

        document.getElementById("result_url").value = website_base_url + code;
        document.getElementById('result').style.visibility = 'visible';
    } else {
        alert('error: ' + response['message']);
    }
}

function get_url_to_shorten() {
    var url_input = document.getElementById('full_url_input');
    return url_input.value;
}

function shorten_url() {
    var xhttp = new XMLHttpRequest();
    var url = get_url_to_shorten();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.response)
            display_response(response);
        }
    };

    xhttp.open("GET", api_base_url + 'shorten_link?url=' + url, true);
    xhttp.send();
}