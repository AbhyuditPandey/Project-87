var canvas = new fabric.Canvas('myCanvas');
// Create canvas variable
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image,function(Img){
        player_object=Img;
        player_object.scaleToWidth(block_image_width);
        player_object.scaleToHeight(block_image_height);
        player_object.set({
            top:block_y,
             left: block_x 
             
        });
    canvas.add(block_object);
    
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{block_x = 10;
      new_image('rr.png');
		// upload red ranger
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image('gr.png');// upload green ranger
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('yr.png');
		// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image('pr.png');
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image('br.png');
	// upload blue ranger
	}
	
}

