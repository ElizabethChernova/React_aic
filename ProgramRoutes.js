
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {UsersRouter} = require("./routes/EmployeeService");

exports.runProgram = function (port) {

    const app = express();
    const router = new UsersRouter()

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(cors())

    app.get('/users', router.getUsers)

    app.post('/users',router.addUser)

    app.put('/users', router.updateUser)

    app.delete('/users/:id_employee', router.deleteUser)

    app.post('/checkuser', router.credentialsAreValid)

    app.get('/allkasirs', router.gET_ALL_KASIRS)

    app.post('/findphoneaddbysurname', router.gET_ALL_KASIRS)


    app.get('/categories', router.getUsers)


    app.listen(port, () => {
        console.log("Server is listening on port " + port)
    });

}