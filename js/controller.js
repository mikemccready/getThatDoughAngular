angular
	.module('app')
    .controller('MainController', MainController);

    function MainController(){
    	var self = this;
    
    	self.boxes = [{text:"", bag:true},{text:"", bag:true},{text:"", bag:true},{text:"", bag:true},{text:"", bag:true},{text:"", bag:true},{text:"", bag:true},{text:"", bag:true},{text:"", bag:true}]
        self.win = false;
        self.board = true;
        self.turn = false;
        self.resetButton = false;
        self.tallyX = "0";
        self.tallyO = "0";

        self.checkWin = function(){
            if( 
                    //check rows for x
                      ((self.boxes[0].text === "x") && (self.boxes[1].text === "x") && (self.boxes[2].text === "x"))
                    ||((self.boxes[3].text === "x") && (self.boxes[4].text === "x") && (self.boxes[5].text === "x"))
                    ||((self.boxes[6].text === "x") && (self.boxes[7].text === "x") && (self.boxes[8].text === "x"))
                      //check cols for x
                    ||((self.boxes[0].text === "x") && (self.boxes[3].text === "x") && (self.boxes[6].text === "x"))
                    ||((self.boxes[1].text === "x") && (self.boxes[4].text === "x") && (self.boxes[7].text === "x"))
                    ||((self.boxes[2].text === "x") && (self.boxes[5].text === "x") && (self.boxes[8].text === "x"))
                      //check diags for x
                    ||((self.boxes[0].text === "x") && (self.boxes[4].text === "x") && (self.boxes[8].text === "x"))
                    ||((self.boxes[2].text === "x") && (self.boxes[4].text === "x") && (self.boxes[6].text === "x"))
            )            
            {
                self.win = true;
                self.board = false;
                document.getElementsByClassName('winScreen')[0].innerHTML = '<iframe height="0" width="0" frameborder="0" src="https://www.youtube.com/embed/iSJv10QN_8g?autoplay=1"></iframe>';
                self.resetButton = true;
                self.tallyX ++;
                console.log('X wins')               
            }  
            else if(   //check rows for x
                      ((self.boxes[0].text === "o") && (self.boxes[1].text === "o") && (self.boxes[2].text === "o"))
                    ||((self.boxes[3].text === "o") && (self.boxes[4].text === "o") && (self.boxes[5].text === "o"))
                    ||((self.boxes[6].text === "o") && (self.boxes[7].text === "o") && (self.boxes[8].text === "o"))
                      //check cols for x
                    ||((self.boxes[0].text === "o") && (self.boxes[3].text === "o") && (self.boxes[6].text === "o"))
                    ||((self.boxes[1].text === "o") && (self.boxes[4].text === "o") && (self.boxes[7].text === "o"))
                    ||((self.boxes[2].text === "o") && (self.boxes[5].text === "o") && (self.boxes[8].text === "o"))
                      //check diags for x
                    ||((self.boxes[0].text === "o") && (self.boxes[4].text === "o") && (self.boxes[8].text === "o"))
                    ||((self.boxes[2].text === "o") && (self.boxes[4].text === "o") && (self.boxes[6].text === "o"))
            )                
            {
                self.win = true;
                self.board = false;
                self.resetButton = true;
                self.tallyO ++;
                console.log('O wins')                
            }
        }                   


    	self.playerMove = function(i){
            if (self.boxes[i].text !== ""){
                console.log("taken")
            }else if (self.turn === false){
                self.boxes[i].text="x";
                self.boxes[i].bag=false;
                console.log("X");
                self.turn = true;
            }else {
                self.boxes[i].text= "o"; 
                self.boxes[i].bag=false;                               
                console.log("O"); 
                self.turn = false;
            }
            self.checkWin();
        };

        self.reset = function(){
          self.boxes = [{text:"", bag:true},{text:"", bag:true},{text:"", bag:true},{text:"", bag:true},{text:"", bag:true},{text:"", bag:true},{text:"", bag:true},{text:"", bag:true},{text:"", bag:true}]
          self.win = false;
          self.board = true; 
          self.resetButton = false;
          document.getElementsByClassName('winScreen')[0].innerHTML = ''; 
        }




    };      












     //        if(
     //            ( 
     //             ((boxes[0].innerHTML === "x") && (boxes[1].innerHTML === "x") && (boxes[2].innerHTML === "x")) 
     //             ||((boxes[3].innerHTML === "x") && (boxes[4].innerHTML === "x") && (boxes[5].innerHTML === "x"))
     //             ||((boxes[6].innerHTML === "x") && (boxes[7].innerHTML === "x") && (boxes[8].innerHTML === "x"))
     //             ||((boxes[0].innerHTML === "x") && (boxes[3].innerHTML === "x") && (boxes[6].innerHTML === "x"))
     //             ||((boxes[1].innerHTML === "x") && (boxes[4].innerHTML === "x") && (boxes[7].innerHTML === "x"))
     //             ||((boxes[2].innerHTML === "x") && (boxes[5].innerHTML === "x") && (boxes[8].innerHTML === "x"))
     //             ||((boxes[0].innerHTML === "x") && (boxes[4].innerHTML === "x") && (boxes[8].innerHTML === "x"))
     //             ||((boxes[2].innerHTML === "x") && (boxes[4].innerHTML === "x") && (boxes[6].innerHTML === "x"))
     //            ) 
        
     //            ||
        
     //            (  
     //             ((boxes[0].innerHTML === "o") && (boxes[1].innerHTML === "o") && (boxes[2].innerHTML === "o")) 
     //             ||((boxes[3].innerHTML === "o") && (boxes[4].innerHTML === "o") && (boxes[5].innerHTML === "o"))
     //             ||((boxes[6].innerHTML === "o") && (boxes[7].innerHTML === "o") && (boxes[8].innerHTML === "o"))
     //             ||((boxes[0].innerHTML === "o") && (boxes[3].innerHTML === "o") && (boxes[6].innerHTML === "o"))
     //             ||((boxes[1].innerHTML === "o") && (boxes[4].innerHTML === "o") && (boxes[7].innerHTML === "o"))
     //             ||((boxes[2].innerHTML === "o") && (boxes[5].innerHTML === "o") && (boxes[8].innerHTML === "o"))
     //             ||((boxes[0].innerHTML === "o") && (boxes[4].innerHTML === "o") && (boxes[8].innerHTML === "o"))
     //             ||((boxes[2].innerHTML === "o") && (boxes[4].innerHTML === "o") && (boxes[6].innerHTML === "o"))
     //            )
     //        )
    
     //        {
     //            document.getElementById('announce').style.backgroundImage = 'url(work.gif)';    
     //            document.getElementById('board').style.display = 'none';
     //            document.getElementById('ban').style.fontSize = '30vw';
     //            document.getElementById('ban').style.marginTop = '.5em';
     //            document.getElementById('ban').style.lineHeight = '1em';
     //                // clearBoard()         
     //        }else ( if (self.boxes[i].text !== ""){
     //                    console.log("taken")
     //                }else if (self.turn === false){
     //        			self.boxes[i].text="x";
     //        			console.log("x");
     //                    self.showX = true;
        
     //        			self.turn = true;
     //        		}else {
     //        			self.boxes[i].text= "o";    			
     //        			console.log("o");    			
     //        			self.turn = false;
     //        		}
     //        )

    	// };
