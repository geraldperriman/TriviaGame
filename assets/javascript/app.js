$(document).ready(function(){
  console.log("Ready!");
  //question array starts at zero/beginning
  var currentQuestion = 0;
  //score starts at zero
  var score = 0;
  index = 0
  //hides intro text, leaves 'start' button visible
  $(".intro").hide();
  //reveals intro text on click event, calls function for running game, fill value of button with 'start game'
  $("#startGame").on("click", beginGame); {
    $("#startGame").val("Start Game");
  }
  //function for event listener, shows intro text, starts game
  function beginGame() {
    console.log("do it!");
    $("#trivia .totalScore").remove();
    $(".intro").fadeIn("slow");
    if (currentQuestion < triviaQuestions.length) {
      $("#startGame").val("Next Question")
      $("#questionBox").remove();
      $(".optionsList").remove();
      $("p.questions").append('<p id="questionBox">' + triviaQuestions[currentQuestion].question + '</p>');
      $("p.options").append("<p id='quizBox'>");
      var selections = triviaQuestions[currentQuestion].selection;
      console.log(triviaQuestions[currentQuestion])
      console.log(selections);
      for (var i = 0; i < selections.length; i++) {
        $("#quizBox").append("<label><div class='optionsList'><input class='selectRadio' type='radio' name='" + selections[i] +"'/>" + selections[i] + '<br /></div></label>');
      }
      $("#startGame").prepend("</p>");

      $("div.optionsList").on("click",".selectRadio", function() {
        console.log("optionsList click event");
        console.log($(this).attr("name"));
        console.log(currentQuestion);
        console.log(triviaQuestions[currentQuestion-1])
        console.log(triviaQuestions[currentQuestion-1].correctSelection );
        if ($(this).attr("name") === triviaQuestions[currentQuestion-1].correctSelection) {
          score++;
          console.log(score);
        }
      });
      currentQuestion++;
    }
    else {
      //$("p.questions").remove();
      //$("p.options").remove();
      $("#questionBox").remove();
      $(".optionsList").remove();
      $("#startGame").before('<h2 class="totalScore"> Final score: ' + score + ' / 8 questions correct!</h2>');
      $("#startGame").val("Play Again");
      //$("#startGame").remove();
      //$("#playAgain").show();
      //resets to play again
      currentQuestion = 0;
      score = 0;
    }
  }

  //question/answer array of an array stored in a variable
  var triviaQuestions = [{
	question: " Martin had a crush on a school teacher when he was younger. What was the name of the teacher?",
	selection: ["Ms. Jackson", "Ms. Trindad", "Ms. Thomas", "Ms.Tobago"],
	correctSelection: "Ms. Trindad"
	},
	{
   	question: "When Martin got fired, he picked up a plastic garbage can and threw it against the window screaming what?",
	selection: ["Radio", "Stereo!", "Noooo!", "Damn"],
	correctSelection: "Radio"
    },
    {
    question: "Martin went on a rent strike because his rent was increased and the landlord refused to fix any of the appliances around the apartment. How much was the increase?",
	selection: ["5.00", "50.00", "500.00", "250.00"],
	correctSelection: "5.00"
    },
    {
    question: "Pam had a boyfriend that had his own skybox in Pistons' stadium. What was his name?",
	selection: ["Isiah", "Joe", "Simon", "Bill"],
	correctSelection: "Simon"
    },
    {
    question: " What was Gina's boss name?",
	selection: ["Mr. Walter", "Mr.Walker", "Mr.Whitaker", "Mr.Williams"],
	correctSelection: "Mr.Whitaker"
    },
    {
    question: "Who was Martin's nemesis in high school?",
	selection: ["Pretty Larry", "Pretty Rickey", "Pretty Boy", "Mike-Mike"],
	correctSelection: "Pretty Rickey"
    },
    {
 	question: "Who killed Mama Payne's bird?",
	selection: ["Pam", "Martin", "Gina", "Tommy"],
	correctSelection: "Gina"
    },
    {
    question: "What are the names of Martin and Gina's exes that they invite to dinner?",
	selection: ["Joyce & Devon", "Helen & William", "Vera & Dexter", "Tonya & Derrick"],
	correctSelection: 3
    },
  ];
});




//$(document).ready(function(){
  $(".again").hide();
  $(".questionContainer").hide();
  $(".next").hide();
  $(".scoreDisplay").hide();
//});

//Start function, unhide questions, other buttons
$(".startGame").click(function() {
  $(".questionContainer").show();
  $(".next").show();
  $(".scoreDisplay").show();
});

//Total number of questions
var totalNumQuestions = $('.question').size();