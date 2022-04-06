// $(document).ready(function () {
//   $("#submit").on("click", function (e) {
//     let name = $("#name").val();
//     let email = $("#email").val();
//     let phone = $("#phone").val();
//     let message = $("#message").val();
//     let required = [name, email, phone];
//     for (i = 0; i > required.length; i++) {
//         if (name == "") {
//             $(".name").innerHTML("Please Fill Out Required Fields");
//         } else {
//             console.log("sussy")
//         }
//     });
// });

$(document).ready(function () {
  $("#submit").on("click", (e) => {
    let name = $("#name").val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    let required = [name, email, phone];

    const labelList = $("label");
    const nameLabel = labelList[0];
    const emailLabel = labelList[1];
    const numbLabel = labelList[2];

    for (i = 0; i < required.length; i++) {
      if (required[i] == "") {
        $("#message").text("Please Fill Out Required Fields");
        $("#message").addClass("warning");
        if (i == 0) {
          nameLabel.classList.add("warning");
        } else if (i == 1) {
          emailLabel.classList.add("warning");
        } else if (i == 2) {
          numbLabel.classList.add("warning");
        }
        console.log("baka");
      } else {
        if (i == 0) {
          nameLabel.classList.remove("warning");
        } else if (i == 1) {
          emailLabel.classList.remove("warning");
        } else if (i == 2) {
          numbLabel.classList.remove("warning");
        }
        console.log("sussy");
      }
    }

    if ($("label.warning").length == 0) {
        $("div#pre-form > h2").text("Thanks for filling it out!");
        $("#form").remove();
        console.log("sanic");
    } else {
        console.log('bakabakabaka');
    }

    // let anyWarnings = false;
    // for (let label of labelList){
    //     if(label.classList.contains('warning')) {
    //         anyWarnings = true;
    //     }
    // }

    // if(anyWarnings) {
    //     console.log('bakabakabakabkabakk');
    // } else {
    //     $("div.pre-form > h2").text("Thanks for filling it out!");
    // }

  });
});

// console.log($('label'));
