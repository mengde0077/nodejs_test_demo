function Decodeuint8arr(uint8array){
	return new TextDecoder("utf-8").decode(uint8array);
}


function Encodeuint8arr(myString){
    return new TextEncoder("utf-8").encode(myString);

}


var myuint8Arr = new Encodeuint8arr("cheng");
console.log(myuint8Arr);







