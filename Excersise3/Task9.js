function dictionary(arr) {
    let trackerArr = [];
  
    arr.forEach((element) => {
      let wordObj = trackerArr.find((item) => {
        const parsedObj = JSON.parse(element);
        return item.hasOwnProperty(Object.keys(parsedObj)[0]);
      });
  
      if (wordObj === undefined) {
        wordObj = JSON.parse(element);
        trackerArr.push(wordObj);
      }
    });
  
    trackerArr = trackerArr.sort((a, b) => {
        const keyA = Object.keys(a)[0];
        const keyB = Object.keys(b)[0];
    
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });
  
    trackerArr.forEach((element) => {
      Object.entries(element).forEach(([key, value]) => {
        console.log(`Term: ${key} => Definition: ${value}`);
      })
    });
  }

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]) ;

