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

function User(name, language, grade = grades.Junior) {
    this.name = name;
    this.grade = grade;
    this.salary = 1000;
    this.language = language;
    this.tasks = 0;

    this.addTask = () => {
        this.tasks++;
    };
    this.upgrade = () => {
        if(this.tasks >= 5){
            this.grade = grades.Middle;
        }
        if(this.tasks > 8){
            this.grade = grades.Senior;
        }
    }
    this.fine = () => {

    }
}

const user = new User('John', 'C++');

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
user.fine()
console.log(user)
