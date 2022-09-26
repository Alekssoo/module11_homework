const myObj = {}

myObj.propertyTest = 'first';
myObj.propertyNum = 457;
myObj.propertyBool = true;
myObj.propertyList = [3,"78",false];
myObj.toDel = "NeedToDelete";
myObj[""] = "";
myObj.propertyFunc = (x, degree) => {
                        return x**degree};

delete myObj.toDel;

console.log(myObj);

console.log(myObj.propertyFunc(3,2));
