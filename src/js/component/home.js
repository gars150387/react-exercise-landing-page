import React from "react";

export function home() {
	let array = [
		{
			title: "title 1",
			description: "description 1",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFlREHoGYOBZtRNBmSBTKdX-mlnl5rUL3j6A&usqp=CAU",
			goTo: "www.google.com"
		},
		{
			title: "title 2",
			description: "description 2",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFlREHoGYOBZtRNBmSBTKdX-mlnl5rUL3j6A&usqp=CAU",
			goTo: "www.google.com"
		},
		{
			title: "title 3",
			description: "description 3",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFlREHoGYOBZtRNBmSBTKdX-mlnl5rUL3j6A&usqp=CAU",
			goTo: "www.google.com"
		},
		{
			title: "title 4",
			description: "description 4",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFlREHoGYOBZtRNBmSBTKdX-mlnl5rUL3j6A&usqp=CAU",
			goTo: "www.google.com"
		}
	];
	let hello = "Hello World";

	return (
		<div className="text-center mt-">
			<h1>{hello}</h1>
			{array.map((element, index) => {
				return <p key={index}>{element.title}</p>;
			})}
		</div>
	);
}
