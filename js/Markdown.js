export default{
	read
}

function read(_path,_callback){
	let mdData
	uni.request({
		url:_path,
		success: (res) => {
			let temp = Resolve(res.data)
			// console.log(temp)
			_callback(temp)
		}
	})
}

function Resolve(_data){
	let infos = _data.split('\n')
	let lines = []
	let layer = 0
	for(let index in infos){
		//去掉\r
		let info = infos[index].split('\r')[0]
		let dict = {
			'type':'line',
			'layer':layer,
			'values':[]
		}
		
		//忽略#和空行
		if(info.split(' ')[0] == '#' || info == '')
			continue
			
		//title
		if(info[0] == '#'){
			let list
			[list,layer] = getTitle(info)
			dict['values'] = list
			dict['layer'] = layer - 1
		}
			
		//表格
		else if(info[0] == '|')
			continue
		
		//文本
		else
			dict.values.push(getText(info))
			
		lines.push(dict)
	}
	return lines
	// console.log(lines)
}

function getTitle(_info){
	let infos = _info.split(' ')
	let layer = infos[0].split('#').length - 2
	let dict = {
		'type':'title'
	}
	dict['values'] = infos[1]
	return [[dict],layer]
}

function getText(_text){
	let dict = {
		'type':'text'
	}
	dict['values'] = _text
	return dict
}