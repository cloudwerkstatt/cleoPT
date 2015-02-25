function SaveTravel() {
	var stYear = document.getElementById("stYear").value;
	var stMonth = document.getElementById("stMonth").value;
	var stDay = document.getElementById("stDay").value;
	
	console.log(stYear, stMonth, stDay);
	
	/*dpd.reise.post({"startyear":stYear,"startmonth":"Oktober","startday":03,"starthour":10,"startminute":10,
			"endyear":2015,"endmonth":"November","endday":01,"endhour":15,"endminute":00,"location":"Salzburg",
			"purpose":"Programming Session","name":"Hansi","expenses":0}, function(result, err) {
		if(err) return console.log(err);
		console.log(result, result.id);
	});*/
}

function AllTravel() {
	getAllTravel();
	
	
	function getAllTravel() {
		dpd.reise.get(function (reise, err) {
			if(err) return console.log(err);
		
		reise.forEach(function(travel) {
			renderTravel(travel);
		});
		
		console.log(reise);
	});
	}
}

function renderTravel(travel) {
	
}