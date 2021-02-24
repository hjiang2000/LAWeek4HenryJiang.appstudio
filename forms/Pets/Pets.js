let petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]
let withSal =petNames
withSal.push("Sal")
console.log(withSal)
console.log(`The third pet is named ${petNames[2]}.` )

numberPets=petNames.length
console.log(`The array has ${petNames.length} names in it.`)

petNames.pop()
console.log(petNames)
console.log("New repository")