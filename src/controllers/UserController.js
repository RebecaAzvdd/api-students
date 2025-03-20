const User = require('../models/User');

// Criando usuario
exports.createUser = async(request, response) => {
    try {
        const user = new User(request.body);
        await user.save();
        response.status(201).json(user);
    }catch (error) {
        response.status(400).json({ erro: error.message});
    }
};

// listando usuario
exports.listUsers = async(request, response) => {
    try{
        const users = await User.find();
        response.json(users);
    } catch(error) {
        response.status(500).json({ erro: error.message });
    }
};

// buscar por id
exports.findUserById = async(request, response) => {
    try{
        const user = await User.findById(request.params.id);
        
        if(!user) return response.status(404).json({erro: 'usuario nao encontrado' });
        
        response.json(user);
    }catch(error) {
        response.status(500).json({erro: error.message});
    }
};

// update usuario
exports.updateUser = async(request, response) => {
    try{
        const user = await User.findByIdAndUpdate(request.params.id, request.body, 
            {new: true}
        );

        if(!user) return response.status(404).json({erro: 'usuario nao encontrado' });
        response.json(user);
    }catch(error) {
        response.status(500).json({erro: error.message});
    }
};

// deletar user
exports.deleteUser = async (request, response) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return response.status(404).json({ erro: 'aluno não encontrado' });
        response.json({ mensagem: 'aluno deletado com sucesso' });
    } catch (error) {
        response.status(500).json({ erro: error.message });
    }
};
