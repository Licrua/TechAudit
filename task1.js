
// task 1

const transformData = (data) => {
	console.log('data', data);
	
	return data.map((entry) => {
	  let result = { label: "", value: null };
	  console.log('entry', entry);
	  
  
	  for (const [key, value] of entry) {
		if (key === "id") result.value = value;
		if (key === "name") result.label = value;
		if (key === "age") result.label += `, ${value}`;
	  }
  
	  return result;
	});
  };
  

  const data = [
	[["id", 1], ["name", "Ivan"], ["age", 23]],
	[["id", 2], ["name", "Marina"], ["age", 30]],
	[["id", 3], ["name", "Anna"], ["age", 28]],
  ];
  
  console.log(transformData(data));
  
