let inputs = document.getElementsByTagName("input");
let url = new URL(document.URL);

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("click", function () {
        let radios = document.querySelectorAll('[type="radio"]');
        let runningTotal = 0;
        let count = radios.length / 6;
        let completed = 0;

        for (let s = 0; s < radios.length; s++) {
            if (radios[s].checked) {
                runningTotal += (parseInt(radios[s].value) / count) * 20;
                completed += 1;
            }
        }
        document.getElementById("completed").innerText =
            completed + "/" + count;
        document.getElementById("score").innerText =
            runningTotal.toFixed(2) + "%";
    });
}

if (url.searchParams.get("sid")) {
    document.getElementById("student_id").innerText = url.searchParams.get(
        "sid"
    );
}

if (url.searchParams.get("rid")) {
    document.getElementById("record_id").innerText = url.searchParams.get(
        "rid"
    );
}

if (url.searchParams.get("gh")) {
    document.getElementById("github_url").innerText = url.searchParams.get(
        "gh"
    );
}

if (url.searchParams.get("ll")) {
    document.getElementById("live_url").innerText = url.searchParams.get("ll");
}

document.getElementById("sendForm").addEventListener("click", function() {
    score = document.getElementById("score").innerText
    confirm("You are about to submit this assessment, giving an overall grade of " + score);
})
