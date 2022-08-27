import data from './data.json' assert { type : 'json' };
// assign the json in effort variable 
let effort = data;

// 2.  employees with lowest efficiency 
// Filter by hour base
let lowest_mean_effort = effort.sort(
    (a,b) => a.Hours - b.Hours).filter((item,index,array) => item.Hours === array[0].Hours);
// then just create a empty array
      let unique_name = [];
// Again i filter the name vise      
      let unique = lowest_mean_effort.filter(element => {
        const filter_name = unique_name.includes(element.Owner);
        if (!filter_name) {
          unique_name.push(element.Owner);
          return true;
        }
        return false;
      });
console.log(unique)


