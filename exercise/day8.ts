class Employee {
  name: string;
  gender: "male" | "female";
  workingHours: number;

  constructor(name: string, gender: "male" | "female") {
    this.name = name;
    this.gender = gender;
    this.workingHours = 0;
  }

  formatPrice(price: number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  }
}

class FulltimeEmployee extends Employee {
  hourlyRate: number;
  extraHourlyRate: number;

  constructor(name: string, gender: "male" | "female") {
    super(name, gender);
    this.hourlyRate = 100_000;
    this.extraHourlyRate = 75_000;
  }

  addWorkingHours(hours: number) {
    this.workingHours += hours;
    return "Add working hours success";
  }

  calculateSalary() {
    if (this.workingHours <= 6) {
      return {
        name: this.name,
        gender: this.gender,
        hours: this.workingHours,
        totalSalary: this.formatPrice(this.workingHours * this.hourlyRate),
      };
    } else {
      const regularHours: number = 6; // jam kerja <= 6 jam
      const extraHours = this.workingHours - regularHours; // jam lemburnya

      return {
        name: this.name,
        gender: this.gender,
        hours: this.workingHours,
        totalSalaryRegular: this.formatPrice(this.hourlyRate * regularHours),
        totalSalaryExtra: this.formatPrice(this.extraHourlyRate * extraHours),
        total: this.formatPrice(
          this.hourlyRate * regularHours + this.extraHourlyRate * extraHours
        ),
      };
    }
  }
}

class ParttimeEmployee extends Employee {
  hourlyRate: number;
  extraHourlyRate: number;

  constructor(name: string, gender: "male" | "female") {
    super(name, gender);
    this.hourlyRate = 50_000;
    this.extraHourlyRate = 30_000;
  }

  addWorkingHours(hours: number) {
    this.workingHours += hours;
    return "Add working hours success";
  }

  calculateSalary() {
    if (this.workingHours <= 6) {
      return {
        name: this.name,
        gender: this.gender,
        hours: this.workingHours,
        totalSalary: this.formatPrice(this.workingHours * this.hourlyRate),
      };
    } else {
      const regularHours: number = 6; // jam kerja <= 6 jam
      const extraHours = this.workingHours - regularHours; // jam lemburnya

      return {
        name: this.name,
        gender: this.gender,
        hours: this.workingHours,
        totalSalaryRegular: this.formatPrice(this.hourlyRate * regularHours),
        totalSalaryExtra: this.formatPrice(this.extraHourlyRate * extraHours),
        total: this.formatPrice(
          this.hourlyRate * regularHours + this.extraHourlyRate * extraHours
        ),
      };
    }
  }
}

const employee1 = new FulltimeEmployee("Budi", "male");
const employee2 = new ParttimeEmployee("Siti", "female");

console.log(employee1.addWorkingHours(3));
console.log(employee1.addWorkingHours(5));
console.log(employee1.calculateSalary());

console.log(employee2.addWorkingHours(5));
console.log(employee2.addWorkingHours(3));
console.log(employee2.calculateSalary());

// ==========================================================================================

class Player {
  name: string;
  health: number;
  power: number;

  constructor(name: string) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }

  damage(power: number) {
    this.health -= power;
  }

  useItem(item: { health: number; power: number }) {
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    return `${this.name} -> health: ${this.health} | power: ${this.power}`;
  }
}

class ShootingGame {
  player1: Player;
  player2: Player;

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    /* 
        power = 10, health = 0
        power = 0, health = 10
        power = 10, health = 10
        power = 0, health = 0
    */
    const health = Math.random() < 0.5 ? 0 : 10;
    const power = Math.random() < 0.5 ? 0 : 10;
    return { health, power };
  }

  start() {
    while (this.player1.health > 0 && this.player2.health > 0) {
      // show status
      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());

      // get random item
      const item1 = this.getRandomItem();
      const item2 = this.getRandomItem();

      // use random item
      this.player1.useItem(item1);
      this.player2.useItem(item2);

      // hit other player
      this.player1.damage(this.player2.power);
      this.player2.damage(this.player1.power);

      // show status
      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());
    }

    if (this.player1.health <= 0) {
      return `${this.player2.name} WIN`;
    } else {
      return `${this.player1.name} WIN`;
    }
  }
}

const player1 = new Player("Budi");
const player2 = new Player("Joko");

const shootingGame = new ShootingGame(player1, player2);

console.log(shootingGame.start());
