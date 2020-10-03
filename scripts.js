let typeDraw = 'm'
let drawing = false

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let drawCanvasPositionLine = {
  x: 0,
  y: 0
}

let drawCanvasFinalPositionLine = {
  x: 0,
  y: 0
}

canvas.addEventListener('mousemove', e => {
  console.log(e.x, e.y)
})

canvas.addEventListener('mousedown', mouseDown)
canvas.addEventListener('mouseup', mouseUp)


function mouseDown(event) {
  console.log(typeDraw)
  if (typeDraw == 'f') {
    if (!drawing) {
      drawCanvasPositionLine.x = event.x - 135
      drawCanvasPositionLine.y = event.y - 10

      ctx.moveTo(drawCanvasPositionLine.x, drawCanvasPositionLine.y)
      drawing = !drawing
    } else {
      drawCanvasFinalPositionLine.x = event.x - 135
      drawCanvasFinalPositionLine.y = event.y - 10

      ctx.lineTo(drawCanvasFinalPositionLine.x, drawCanvasFinalPositionLine.y)
      ctx.stroke()
      drawing = !drawing
    }
  }       
}

function mouseUp(event) {
  
}

function update() {
  let type = document.getElementById('type')
  typeDraw = type.options[type.selectedIndex].value
}

// let drawing = false

// let mousePosition = {
//   x: 0,
//   y: 0
// }

// let drawCanvasPosition = {
//   x: 0,
//   y: 0
// }

// let drawCanvasFinalPosition = {
//   x: 0,
//   y: 0
// }

// let mousLocationBox = document.getElementById('mouse-location')

// let tipoInsercao = null
// const tipos = ['modulo', 'fileira']

// let canvas = document.getElementById('canvas')

// let ctx = canvas.getContext('2d')

// // ctx.moveTo(0, 0)
// // ctx.lineTo(150, 150)

// canvas.addEventListener('mousemove', e => {
//   mousePosition.x = e.x
//   mousePosition.y = e.y
//   mousLocationBox.style.top = mousePosition.y + 10 + 'px'
//   mousLocationBox.style.left = mousePosition.x + 10 + 'px'
//   mousLocationBox.innerHTML = `<p style="font-size: 20px">X: ${mousePosition.x}, Y: ${mousePosition.y}</p>`
// })

// canvas.addEventListener('mousedown', mouseDown)
// canvas.addEventListener('mouseup', mouseUp)

// function mouseDown(event) {
//   drawing = true
//   drawCanvasInitialPosition.x = event.x
//   drawCanvasInitialPosition.y = event.y

//   ctx.moveTo(drawCanvasInitialPosition.x, drawCanvasInitialPosition.y)
//   // mousePosition.x = 0
//   // mousePosition.y = 0
//   console.log('mouse down', drawCanvasInitialPosition);
// }

// function mouseUp(event) {
//   drawCanvasFinalPosition.x = event.x
//   drawCanvasFinalPosition.y = event.y
//   if (
//     drawCanvasInitialPosition.x != drawCanvasFinalPosition.x ||
//     drawCanvasInitialPosition.y != drawCanvasFinalPosition.y
//   ) {
//     ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
//     ctx.fillRect(
//       drawCanvasInitialPosition.x,
//       drawCanvasInitialPosition.y,
//       Math.abs(drawCanvasFinalPosition.x - drawCanvasInitialPosition.x),
//       Math.abs(drawCanvasFinalPosition.y - drawCanvasInitialPosition.y)
//     )

//     ctx.stroke()
//     console.log('mouse up', drawCanvasFinalPosition);
//   }
// }

// // window.addEventListener('mousedown')
// // window.addEventListener('mouseup')