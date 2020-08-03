const grades = {
    Junior: 'junior',
    Middle: 'middle',
    Senior: 'senior',
};

const fines = {
    quilt1: 50,
    quilt2: 100,
    quilt3: 150,
};

function User(name, language, grade) {
    this.name = name;
    this.grade = grade;
    this.salary = 1000;
    this.language = language;
    this.tasks = 0;

    this.addTask = () => {
        this.tasks++;
    };
    this.upgrade = () => {
        if(this.tasks < 4){
            console.log('Недостаточно задач для повышения уровня')
        }
        if(this.tasks > 4 && this.tasks < 8){
            this.grade = grades.Middle;
            this.salary *= 2;
        }
        if(this.tasks >= 8){
            this.grade = grades.Senior;
            this.salary *= 3;
            console.log('Достигнут максимальный уровень')
        }
    }
    this.fine = (quilt) => {
        this.salary = this.salary - quilt
    }
}

const user = new User('John', 'C++', grades.Junior);
const user2 = new User('Sam', 'C++', grades.Junior);


console.log(user)

user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();

user.upgrade();
console.log(user)

user2.fine(fines.quilt1)
console.log(user2)

user.fine(fines.quilt3)
console.log(user)
