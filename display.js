$(document).ready(function() {
  var game = new Game();

  $("left1").on("click", function() {
    game.left1();
    game.print()
    display();
  });

  $("#right1").on("click", function() {
    game.right1();
    game.print()
    display();
  });

  $("#neither1").on("click", function() {
    game.neither1();
    game.print()
    display();
  });

  $("#right2").on("click", function() {});

//   $("#print").on("click", function() {
//     game.print();
//   });

  $("#print").on("click", function() {
    game.left1()
    game.print();
    display()
  });



  function print() {
    $("#river").text(game.river);
  }

  function display() {
    $("#display").text(game.display);
  }
  //   function right() {
  //     $("left").text(game.river);
  //   }

  //   function left() {
  //     $("left").text(game.river);
  //   }

  //   function left() {
  //     $("left").text(game.river);
  //   }
});
