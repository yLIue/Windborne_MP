export default{
	read
}

function read(_path){
	let mdData
	uni.request({
		url:_path,
		success: (res) => {
			Resolve(res.data)
		}
	})
}

function Resolve(_data){
	let lines = _data.split('\n')
	
	let dict = {}
	let values = []
	let dictList = []
	
	for (let index in lines){
		//去掉/r
		lines[index] = lines[index].split('\r')[0]
		//忽略#和空行
		let line = lines[index].split(' ')
		if (line[0] == '#' || line == '')
			continue
		if (line[0] == '##'){
			if(dict.hasOwnProperty('title')){
				dict['value'] = dictList
				values.push(dict)
				dictList = []
				dict = {}
			}
			dict['title'] = line[1]
			continue
		}
		let dictValue = {
			"type":"text",
			"value":line
		}
		dictList.push(dictValue)
	}
	dict['value'] = dictList
	values.push(dict)
	// console.log(values)
}