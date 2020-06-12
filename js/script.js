let inputs = document.getElementsByTagName("input");
let url = new URL(document.URL);
let completed;
let count;

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("click", function () {
        let radios = document.querySelectorAll('[type="radio"]');
        let runningTotal = 0;
        count = radios.length / 6;
        completed = 0;

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
    document.getElementById("sid").value = url.searchParams.get("sid");
}

if (url.searchParams.get("rid")) {
    document.getElementById("record_id").innerText = url.searchParams.get(
        "rid"
    );
    document.getElementById("rid").value = url.searchParams.get("rid");
}

if (url.searchParams.get("gh")) {
    document.getElementById("github_url").innerText = url.searchParams.get(
        "gh"
    );
    document.getElementById("gh").value = url.searchParams.get("gh");
}

if (url.searchParams.get("ll")) {
    document.getElementById("live_url").innerText = url.searchParams.get("ll");
    document.getElementById("ll").value = url.searchParams.get("ll");
}

document.getElementById("sendForm").addEventListener("click", function () {
    document.getElementById("timestamp").value = new Date(Date.now());

    req1 = document.getElementById("data1");
    req2 = document.getElementById("data2");

    fail1 = document.getElementById("fail1");
    fail2 = document.getElementById("fail2");
    fail3 = document.getElementById("fail3");
    fail4 = document.getElementById("fail4");
    fail5 = document.getElementById("fail5");
    fail5text = document.getElementById("fail5text");

    failText = "";

    if (fail1.checked)
        failText += "The README.md is absent or is missing basic information\n";
    if (fail2.checked)
        failText +=
            "The project plagiarises others' work without any attribution\n";
    if (fail3.checked)
        failText +=
            "The deployed version is markedly different from the source code that was submitted\n";
    if (fail4.checked)
        failText +=
            "The project doesn't use one of the main technologies taught in the stream.\n";
    if (fail5.checked) failText += fail5text.value;

    document.getElementById("failreasons").value = failText;

    if (count == completed && req1.checked && req2.checked) {
        score = document.getElementById("score").innerText;
        if (
            confirm(
                `You are about to submit this assessment, giving an overall grade of ${score}\nAre you sure?`
            )
        ) {
            document.getElementById("assessmentForm").submit();
            window.location("thanks.html");
        }
    } else {
        alert("You have not completed all of the required questions");
    }
});
