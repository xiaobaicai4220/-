async function f(){
	throw new Error('hello world');
}
f().then(v=>console.log(v),e=>console.log(e));