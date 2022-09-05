function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

  for(let i = 0; i < cars.length; i++){
    let stopper = cars.length - i - 1
    for(j = 0; j < stopper; j++){
      const x = cars[j]['year']
      const y = cars[j + 1]['year']
      if(x>y){
        const tampung = cars[j]
        cars[j] = cars[j+1]
        cars[j+1] = tampung
      }
    }
  }
  
  console.log(cars)

  // Rubah code ini dengan array hasil sorting secara ascending
  return cars;
}
