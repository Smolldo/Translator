import $ from "jquery";

const easyLevel = {
      ans:["father", "bribe", "pet", "fireman", "teacher", "witness", "shooter", "pleasure", "bully", "monster"],
      equivs:["батько", "хабар", "трварина", "пожежник", "вчитель", "свідок", "стрілець", "задоволення", "хуліган", "Створіння"],
      img:[
            "https://files.fm/thumb_show.php?i=u8xb3d98r",
            "https://files.fm/thumb_show.php?i=y3ex7ykqz",
            "https://files.fm/thumb_show.php?i=88hqyf8be",
            "https://files.fm/thumb_show.php?i=jhuetxj8v",
            "https://files.fm/thumb_show.php?i=v8jpg5s98",
            "https://files.fm/thumb_show.php?i=vtrfx9zhd",
            "https://files.fm/thumb_show.php?i=8dvydqbst",
            "https://files.fm/thumb_show.php?i=z8h8v8srt",
            "https://files.fm/thumb_show.php?i=kfrck76cv",
            "https://files.fm/thumb_show.php?i=hepuf852n"
      ]
};

const mediumLevel = {
      ans:["birch", "priest", "addiction", "salary", "cage", "snare", "beacon", "doom", "slave", "glory"],
      equivs:["береза", "жрець", "залежність", "зарплата", "клітка", "малий", "маяк", "приреченість", "раб", "слава"],
      img:[
            "https://files.fm/thumb_show.php?i=e5dxpshfx",
            "https://files.fm/thumb_show.php?i=4epn6tp3g",
            "https://files.fm/thumb_show.php?i=gzqasas6p",
            "https://files.fm/thumb_show.php?i=4ka67taqv",
            "https://files.fm/thumb_show.php?i=e8pgnfjfp",
            "https://files.fm/thumb_show.php?i=7m3hgdwrx",
            "https://files.fm/thumb_show.php?i=ccnhs2fgs",
            "https://files.fm/thumb_show.php?i=9n724a3tu",
            "https://files.fm/thumb_show.php?i=k73gnywcy",
            "https://files.fm/thumb_show.php?i=uz4h4bd7z",
      ]
};

const medicLevel = {
      ans:["sternum", "duodeum", "inflamation", "liver", "rectum", "suppositorium", "femur", "vessel", "cartilage", "stomach"],
      equivs:["грудина", "дванадцятипала", "запалення", "печінка", "пряма", "свічка", "стегнова", "судина", "хрящ", "шлунок"],
      img:[
            "https://files.fm/thumb_show.php?i=4bqnvdjnw",
            "https://files.fm/thumb_show.php?i=tvwns9jss",
            "https://files.fm/thumb_show.php?i=yg2vb29b9",
            "https://files.fm/thumb_show.php?i=h6gng5fvd",
            "https://files.fm/thumb_show.php?i=jsbgf835s",
            "https://files.fm/thumb_show.php?i=4s9q8vnhu",
            "https://files.fm/thumb_show.php?i=4wehm6xcv",
            "https://files.fm/thumb_show.php?i=bzvr6kxcq",
            "https://files.fm/thumb_show.php?i=6s2se8jcu",
            "https://files.fm/thumb_show.php?i=m3bvv9zfs",
      ]
};
 


const results ={
      correct:0,
      incorrect:0
}

const startGame = () => {
    
      let rad = $('input[name = "level"]')
  
      if (rad[0].checked) {
          $("nav").toggleClass("is-none");
          $(".game").toggleClass("is-none");
          Test(easyLevel, "EzPz")
      } else if (rad[1].checked) {
          $("nav").toggleClass("is-none");
          $(".game").toggleClass("is-none");
          Test(mediumLevel, "Enjoyer")
      } else if (rad[2].checked) {
          $("nav").toggleClass("is-none");
          $(".game").toggleClass("is-none");
          Test(medicLevel, "Medic-worker")
      } else {
          $(".pop-up>h2").text("Выберете сложность")
          $(".pop-up>p").text("Вы не выбрали сложность")
      }
  
} 

const Test = (data) =>{
      var counter =0;

      results.correct = 0;
      results.incorrect = 0;

      Screen(data, counter);

      $("#check").click({d: data, counter : counter}, Reviev)
}

const Reviev = (e) => {
      Answer(e.data.d, e.data.counter);

      e.data.counter++;


      if(e.data.counter === 10){
            $("#check").unbind();

            ShowResult();

            $("nav").toggleClass("hidden");
      }
      else{
            Screen(e.data.d, e.data.counter);
      }
}

const AnswersCount = (value) =>{
      if(value > 0){
            results.correct++;
        } else {
            results.incorrect++;
        }
}

const Answer = (data, counter) => {
      if ($("#inpt").val().toLowerCase() == data.ans[counter]) {
            AnswersCount(1);
        } else {
            AnswersCount(-1);
        }
        $("#inpt").val('');
}

const Screen = (data, counter) => {
      console.log(results.correct);
      $("#rusWord").text(data.equivs[counter]);
      $("#correct").text(`Correct answers: ${results.correct}`);
      $("#incorrect").text(`Incorrect answers: ${results.incorrect}`);
      $(".pic_wrapper").css('background-image', `url(${data.img[counter]})`);
}


const ShowResult = () => {
      switch (results.correct) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4: 
              alert("Newbee");
              location.reload();
              break;
          case 5:
          case 6:
          case 7:
          case 8:
              alert("Not Bad)");
              location.reload();
              break;
          case 9:
          case 10:
              alert("Godlike");
              location.reload();
              break;
  
          default:
              console.log("irracial action")
              break;
      }
  }

$(".start").bind("click", startGame);
