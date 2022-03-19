var ConnectionService = require('./ConnectionService')
class DataService{
    
    login(userName,password){
        return new Promise((resolve,reject)=>{
            var connectionService = new ConnectionService();
            connectionService.query(`select * from users where userName='${userName}' and password = ${password}`,(result)=>{
                console.log(result);
                if(!result || result.length == 0){
                    reject("user not founed");
                }
                resolve();
            });

        });
    }
    
}

module.exports = DataService;