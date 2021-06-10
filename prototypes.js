
var dog = function(race,height,weight,name) {
            this.race = race;
           this.height = height;
           this.weight = weight;
           this.name = name;
};

dog.prototype.bark = function(){
    console.log(this.name + ' is barking! AUF AUF AUF!');
}



dog1 = new dog('poodle','45cm','30kg','fluffy');
dog1.bark();

dog2 = new dog('chiuaua','25cm','12kg','nick');
dog2.bark();
