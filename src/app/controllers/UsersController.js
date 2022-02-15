
const User = require('../schemas/Users') 

class UsersController {
  
    async index(req, res) {
        const users = await User.find()

        return res.json({
            data: users
        })
    }

  
    async store(req, res) {
        const body = req.body

        const user = await User.create(body)
        return res.json({data: body})

    }

    async update(req, res){
        const id = req.params.id
        const body = req.body

        try {
            const userExists = await User.findById(id)
            if(!userExists){
                return res.status(404).json({msg: 'User not found', data:{}})
            }
            await userExists.updateOne(body)
            const userUpdate = await User.findById(id)
            return res.status(200).json({data: userUpdate})
        }catch (error){
            return res.status(400).json({msg: 'Bad request'})
        }

    }

    async delete(req, res){
        const id = req.params.id

        try {
            const userExists = await User.findById(id)
            if(!userExists){
                return res.status(404).json({msg: 'User not found', data:{}})
            }
            await userExists.delete()
            return res.status(200).json({msg: 'User deleted successfully'})
        }catch (error){
            return res.status(400).json({msg: 'Bad request'})
        }

    }
}

module.exports =  new UsersController()