var canvas=new fabric.Canvas("myCanvas");
// Create canvas variable
 block_y=1;
 block_x=1;

block_width = 350;
block_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
	fabric.Image.fromURL(get_image,function(Img){
        blockobject=Img;
        blockobject.scaleToWidth(block_width);
        blockobject.scaleToHeight(block_height);
        blockobject.set({
            top:block_y,
            left:block_x
        });
        canvas.add(blockobject);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		// upload red ranger
		new_image("rr1.png");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		// upload green ranger
		new_image("gr.png");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellow ranger
		new_image("yr.png");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
		new_image("pr.png");
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	// upload blue ranger
	new_image("br.png");
	}
	
}

