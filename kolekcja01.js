let ComputerSetup = new Set()
ComputerSetup.add("monitor")
ComputerSetup.add("mouse")
ComputerSetup.add("keyboard")
ComputerSetup.add("mousepad")
ComputerSetup.add("PC")

ComputerSetup.delete("mousepad")
console.log(ComputerSetup.has("mousepad"))
console.log(ComputerSetup.size)