//We are using jquery in this js file

$(document).ready(function() {
	$('#pickSize').submit(function makem_grid(m_grid)
	{
		$('table tr').remove();//removing row from the table $(selector).action()
		var gridHeight = $('#inputHeight').val();//saving the value of height of table
		var gridWidth = $('#inputWidth').val();//saving the value of width of table 

		for (var i = 1; i <= gridHeight; i++)//loop till girdheight value is reached
		{
			$('table').append('<tr></tr>');//append to table $(selector).action()
			for (var j = 1; j <= gridWidth; j++)//loop til girdwidth is reached
			 {
				$('tr:last').append('<td></td>');//append to last table row $(selector).action()
				$('td').attr("class", 'cells');//adding attribute to td of table 
			}
		}
		// adding color to cells of table
		m_grid.preventDefault();
		$('.cells').click(function(event)//$(selector).action()
		 {
			var paint = $('#pickColor').val();//adding value of pickcolor to variable paint
			$(event.target).css('background-color', paint);//adding background color $(selector).action() 
		});
	});
});