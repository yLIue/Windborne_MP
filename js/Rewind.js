export default{
	read
}

import Data from '../data/Rewind.json'

function read(){
	let len = Data.length
	let reIndex
	do{
		reIndex = String(Math.random()).substr(3,1)
	}
	while(reIndex>=len)
	return Data[reIndex]
}