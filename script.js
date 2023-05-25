const getAdvices = async () => {
	const response = await fetch('https://api.adviceslip.com/advice');
	const data = await response.json();
	return data;
};

const advice = getAdvices().then((data) => {
	document.getElementById('adviceId').textContent = data.slip.id;
	document.getElementById('advice').textContent = data.slip.advice;
});
