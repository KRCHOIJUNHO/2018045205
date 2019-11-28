/* CSE3026 : Web Application Development
 * Lab 09 - Maze
 */

var loser = null;  // whether the user has hit a wall

window.onload = function() {
    $("boundary1").observe("mouseover", function(){
        $("boundary1").addClassName("youlose");    
    });
    
    var boundary = $$("#maze .boundary");
    for(var i=1; i<boundary.length; i++){
        boundary[i].observe("mouseover", overBoundary);    
    };
};

// called when mouse enters the walls; 
// signals the end of the game with a loss
function overBoundary(event) {
	for(var i=1; i<boundary.length; i++){
        boundary[i].observe("mouseover", overBoundary);    
    };
}

// called when mouse is clicked on Start div;
// sets the maze back to its initial playable state
function startClick() {

}

// called when mouse is on top of the End div.
// signals the end of the game with a win
function overEnd() {

}

// test for mouse being over document.body so that the player
// can't cheat by going outside the maze
function overBody(event) {

}



