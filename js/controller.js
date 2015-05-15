angular
	.module('app')
    .controller('MainController', MainController);

    function MainController(){

        //Ties self to MainController
    	var self = this;
        
        //Sets board index
    	self.boxes = [{text:"", bag:true},
                      {text:"", bag:true},
                      {text:"", bag:true},
                      {text:"", bag:true},
                      {text:"", bag:true},
                      {text:"", bag:true},
                      {text:"", bag:true},
                      {text:"", bag:true},
                      {text:"", bag:true}]
        //Boolean to switch turn
        self.turn = false;
       
        //Initializes win tally
        self.tallyX = "0";
        self.tallyO = "0";
        
        //Booleans switch between gameboard and win screen
        self.win = false;
        self.board = true;
        self.resetButton = false;

        // Check the clicked square for existing move 
        // record move if selected square is empty
        // switch player turn with Boolean
    	self.playerMove = function(i){

            if (self.boxes[i].text !== ""){
                console.log("taken");    
            }else if (self.turn === false){
                self.boxes[i].text = "x";
                self.boxes[i].bag = false;
                console.log("X");
                self.turn = true;    
            }else {
                self.boxes[i].text = "o"; 
                self.boxes[i].bag = false;                               
                console.log("O"); 
                self.turn = false;
            }

            //Once the player has made a move, check to see if win condition is satisfied
            self.checkWin();

        };

        self.checkWin = function(){
            if( 
                //check rows for 3 x's
                   ((self.boxes[0].text === "x") && (self.boxes[1].text === "x") && (self.boxes[2].text === "x"))
                || ((self.boxes[3].text === "x") && (self.boxes[4].text === "x") && (self.boxes[5].text === "x"))
                || ((self.boxes[6].text === "x") && (self.boxes[7].text === "x") && (self.boxes[8].text === "x"))
                //check cols for 3 x's
                ||  ((self.boxes[0].text === "x") && (self.boxes[3].text === "x") && (self.boxes[6].text === "x"))
                ||  ((self.boxes[1].text === "x") && (self.boxes[4].text === "x") && (self.boxes[7].text === "x"))
                ||  ((self.boxes[2].text === "x") && (self.boxes[5].text === "x") && (self.boxes[8].text === "x"))
                //check diags for 3 x's
                ||  ((self.boxes[0].text === "x") && (self.boxes[4].text === "x") && (self.boxes[8].text === "x"))
                ||  ((self.boxes[2].text === "x") && (self.boxes[4].text === "x") && (self.boxes[6].text === "x"))
            ){  
                //a win condition is satisfied, run win events big party
                self.win = true;
                document.getElementsByClassName('winScreen')[0].innerHTML = '<iframe height="0" width="0" src="https://www.youtube.com/embed/iSJv10QN_8g?autoplay=1" frameborder="0"></iframe>';
                //board hidden
                self.board = false;
                //reset button appears                
                self.resetButton = true;
                //win x tally increments
                self.tallyX ++;
                console.log('X wins')               
            }else if( 
                //check rows for 3 o's
                    ((self.boxes[0].text === "o") && (self.boxes[1].text === "o") && (self.boxes[2].text === "o"))
                ||  ((self.boxes[3].text === "o") && (self.boxes[4].text === "o") && (self.boxes[5].text === "o"))
                ||  ((self.boxes[6].text === "o") && (self.boxes[7].text === "o") && (self.boxes[8].text === "o"))
                //check cols for 3 o's
                ||  ((self.boxes[0].text === "o") && (self.boxes[3].text === "o") && (self.boxes[6].text === "o"))
                ||  ((self.boxes[1].text === "o") && (self.boxes[4].text === "o") && (self.boxes[7].text === "o"))
                ||  ((self.boxes[2].text === "o") && (self.boxes[5].text === "o") && (self.boxes[8].text === "o"))
                //check diags for 3 o's
                ||  ((self.boxes[0].text === "o") && (self.boxes[4].text === "o") && (self.boxes[8].text === "o"))
                ||  ((self.boxes[2].text === "o") && (self.boxes[4].text === "o") && (self.boxes[6].text === "o"))
            ){  
                //a win condition is satisfied, run win events big party
                self.win = true;
                //board hidden
                self.board = false;
                //reset button appears
                self.resetButton = true;
                //win o tally increments
                self.tallyO ++;
                console.log('O wins')                
            }

        }           
        //game reset on reset button click
        self.reset = function(){
            //board reappears, boxes cleared
            //win scren is removed
            self.boxes = [{text:"", bag:true},{text:"", bag:true},{text:"", bag:true},{text:"", bag:true},{text:"", bag:true},{text:"", bag:true},{text:"", bag:true},{text:"", bag:true},{text:"", bag:true}]
            self.win = false;
            self.board = true; 
            self.resetButton = false;
            document.getElementsByClassName('winScreen')[0].innerHTML = ''; 

        }

    };   














