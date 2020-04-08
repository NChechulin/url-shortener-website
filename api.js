var base_url = "http://127.0.0.1:5000/api/"
const url = 'http://127.0.0.1:5000/api/get_url?code=test';

function display_response(url) {
    var response_input = document.getElementById("result_url");
    response_input.style.visibility = 'visible';
}

function help() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.response)
            console.log(response['url'])
            document.getElementById("result_url").value = response['url'];
        }
    };
    xhttp.open("GET", "http://127.0.0.1:5000/api/get_url?code=test", true);
    xhttp.send();
}