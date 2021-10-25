//implementați următoarea structură de tipuri.
// Software este un tip care are metoda 'run'.
//Browser moștenește Software și poate adăuga și instala Plugin.
//Un Browser poate avea multiple Plugin.

class Software {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(`${this.name} is running...`);
  }
}

class Plugin {
  constructor(description) {
    this.description = description;
  }

  install() {
    console.log(`${this.description} has been installed!`);
  }
}

class Browser extends Software {
  constructor(name) {
    super(name);
    this.plugins = [];
  }

  addPlugin(p) {
    this.plugins.push(p);
    console.log(`Plugin ${p.description} has been added!`);
  }

  installPlugins() {
    console.log("Installing all plugins...");
    for (const p of this.plugins) {
      p.install();
    }
  }
}

const b1 = new Browser("Browser1");
const p1 = new Plugin("plugin1");
const p2 = new Plugin("plugin2");

b1.run();

b1.addPlugin(p1);
b1.addPlugin(p2);

b1.installPlugins();
