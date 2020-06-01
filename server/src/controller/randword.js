const Db = require('../models/db')
const fs = require('fs')
randnum = () => {
    result = {
        'code': 0,
        'data': ''
    }
    try {
        result.data = Math.round(Math.random() * 10);
    } catch (error) {
        console.error(error);
        result.code = -1;
        result.data = 'internal error';
    }

    return result
}
module.exports = {
    randword: async () => {
            result = {
                'code': 0,
                'data': '123'
            }
            try {
                let idx = randnum().data
                console.log(idx)
                rst = await Db.getDataById(idx);
                result.data = rst.data

            } catch(err){ 
                console.error(err);
                result.code = -1;
                result.data = 'internal error';
            }
            return result
    },
    randword_text: function(){
        result = {
            'code': 0,
            'data': ''
        }
        try {
            data =  Db.fakeData(randnum().data)
            result.data = data
        } catch(err){ 
            console.error(err);
            result.code = -1;
            result.data = 'internal error';
        }
            
        return result
    }
} 