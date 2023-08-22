// Classe abstrata
class Animal {
    constructor(name) {
        if (new.target === Animal) {
            throw new TypeError("Animal não disponivel");
        }
        this.name = name;
    }

    // Método abstrato que deve ser implementado pelas subclasses
    makeSound() {
        throw new Error("Method 'makeSound()' must be implemented.");
    }

    // Método comum a todas as subclasses
    sleep() {
        console.log(`${this.name} está dormindo.`);
    }
}

// Subclasse que herda de Animal
class Cachorro extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        console.log(`${this.name} late.`);
    }
}

// Subclasse que herda de Animal
class Gato extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        console.log(`${this.name} mia.`);
    }
}

// Criando instâncias das subclasses
const cachorro = new Cachorro("Buddy");
const gato = new Gato("Whiskers");

cachorro.makeSound(); // Saída
cachorro.sleep();     // Saída

gato.makeSound(); // Saída
gato.sleep();     // Saída
