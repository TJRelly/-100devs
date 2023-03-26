//Create a stopwatch object that has four properties and three methods
stopwatch = {}
stopwatch.color = 'blue'
stopwatch.time = 3
stopwatch.material = 'plastic'
stopwatch.size = 'medium'

stopwatch.start = () => console.log('starting...')
stopwatch.stop = () => console.log('timer stopped')
stopwatch.changeColor = () => stopwatch.color = 'red'
stopwatch.changeMaterial = () => stopwatch.material = 'metal'

console.table(stopwatch)
console.log(stopwatch.changeMaterial())
stopwatch.start()
stopwatch.stop()