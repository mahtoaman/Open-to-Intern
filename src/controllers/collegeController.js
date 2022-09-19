const collegeModel = require("../models/collegeModel")

const createCollege = async function (req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    try{
        let data = req.body 
        let savedData = await collegeModel.create(data)
        return res.status(201).send({ status : true, data : savedData})
    }
    catch(error){
        return res.status(500).send({error : error.message})
    }
}

module.exports.createCollege =createCollege
