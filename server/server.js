let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let mongoose = require('mongoose');
let db_uri = 'mongodb://localhost:27017/test';
mongoose.connect(db_uri, {server: {poolSize: 100}}, function (err) {
    if (err) {
        console.error('Could not connect to MonGoDb!');
        return false;
    }
    console.log('Mongoose default connection open to: ' + db_uri);
    app.listen(5002);
});

let Schema = mongoose.Schema;
let employeeSchema = new Schema({
    employeeName: {type: String},
    employeeCity: {type: String}
}, {
    timeStamp: true
});
let employee = mongoose.model('employee', employeeSchema);

app.get('/employee/getEmployee', function (request, response) {
    employee.find({}, function (error, employees) {
        if (error)throw error;
        response.send(employees);
    });
});

app.post('/employee/addEmployee', function (request, response) {
    let newEmployee = new employee(request.body);
    newEmployee.save(function (error) {
        if (error)throw error;
        response.send(newEmployee);
    });
});


app.put('/employee/updateEmployee/:id', function (request, response) {
    let id = request.params.id;
    let employeeData = request.body;
    employee.findByIdAndUpdate(id, employeeData, function (error, employee) {
        if (error)throw error;
        response.send(employee);
    });
});

app.get('/', function (request, response) {
    response.send("Hello i am learning nodeJs");
});
