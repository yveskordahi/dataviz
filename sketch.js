let data = []

function setup() {
  createCanvas(1300, 400)
  // array data filled with objects
  // Objects are variables too. But objects can contain many values.
  // The values are written as name:value pairs 
  // (name and value separated by a colon)
  data = [
    {size:53, label:"Allemagne"},
    {size:53, label:"France"},
    {size:29, label:"Italie"},
    {size:18, label:"Espagne"},
    {size:99, label:"Piano Pratice"},
    {size:99, label:"Piano Pratice"},
    {size:99, label:"Piano Pratice"},
    {size:99, label:"Piano Pratice"},
    {size:98, label:"MRT Cabin"},
    {size:97, label:"Wedding Event"},
    {size:92, label:"Road Junction"},
    {size:90, label:"Kopitiam"},
    {size:88, label:"Swimming Pool"},
    {size:86, label:"Ion Orchard"},
    {size:85, label:"Rain"},
    {size:83, label:"Hair Salon"},
    {size:80, label:"Supermarket"},
    {size:75, label:"Chinese Restaurant"},
    {size:75, label:"Gym"},
    {size:74, label:"Bedok Reservoir Park"},
    {size:73, label:"National Design Centre"},
    {size:71, label:"InterContinental Hotel Lobby"},
    {size:70, label:"Changi Airport Terminal 2"},
    {size:56, label:"National Library"},
    {size:56, label:"Office"},
    {size:53, label:"Lasalle Lecture Theatre"},
    {size:23, label:"Empty Room"}
    ]
  
  colors = [color(100,149,217),
          color(204, 255, 0),
          color(238, 255, 0),
          color(255, 212, 0),
          color(255, 182, 0),
          color(255, 157, 0),
          color(255, 123, 0),
          color(255, 97, 0),
          color(255, 63, 0),
          color(100,149,217)]

  noStroke()
}
function draw() {
  background(44,44,44)
  textSize(20)
  fill(255)
  textStyle(BOLD)
  text('Average Noise Level (dB)',185,40)
  textSize(12)
  push()
  translate(55,210)
  // 
  data.forEach((el,i) => {
      push()
  		translate(i * 50, 0)
      let c = floor(map(el.size,23,99,0,9))
    	fill(colors[c])
      rect(0,0,20,-el.size*2.5)
      fill(28, 110, 127)
    	push()
      translate(0,10)
      text(el.size,3.5,-18)
      rotate(HALF_PI)
      fill(255)
      textStyle(ITALIC)
      text(el.label,0,-6)
    	pop()
  		pop()
	})
  pop()
}


