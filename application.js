function playVideo() {
  var video = document.querySelector("#myVideo");
  video.muted = true;
  video.play();
}

const sleep = (ms=1000) => new Promise((resolve)=> setTimeout(resolve, ms))


async function run() {
  await sleep(1000)
  const slides = document.querySelectorAll('.slide')
  let slide = slides[0]
  slide.classList.add('on')

  await sleep(1500)
  const video = slides[0].querySelector('#myVideo')
  video.pause()
  video.currentTime = 0
  video.play()

  await sleep(5000)
  slide.classList.remove('on')
  
  slide = slides[1]
  slide.classList.add('on')
  await sleep(1500)
  const acitveDays = document.querySelector('.progress-active-days')
  acitveDays.setAttribute('progress', 100-35)
  document.querySelector('.ring-container.active-days .string').style.setProperty('height', '100px')
  

  await sleep(500)
  const turnover = document.querySelector('.progress-turnover')
  turnover.setAttribute('progress', 100-45)
  document.querySelector('.ring-container.turnover .string').style.setProperty('height', '100px')

  await sleep(500)
  const ggr = document.querySelector('.progress-ggr')
  ggr.setAttribute('progress', 100-20)
  document.querySelector('.ring-container.ggr .string').style.setProperty('height', '100px')

  await sleep(10000)
  video.pause()
  video.currentTime = 0

  slide.classList.remove('on')
  await sleep(1000)
  document.querySelector('.ring-container.ggr .string').style.removeProperty('height', '0px')
  document.querySelector('.ring-container.active-days .string').style.removeProperty('height', '0px')
  document.querySelector('.ring-container.turnover .string').style.removeProperty('height', '0px')
  document.querySelectorAll('progress-ring').forEach(function (el) {
    el.setAttribute('progress', 0)
  })


  slide = slides[2]
  slide.classList.add('on')

  const logos = document.querySelectorAll('.slide.clients img')
  logos.forEach(function(logo, index) {
    setTimeout(function() {
      logo.classList.add('show')
    }, 250 * index)
  })

  await sleep(10000)

  slide.classList.remove('on')
  logos.forEach(function(logo, index) {
    setTimeout(function() {
      logo.classList.remove('show')
    }, 250 * index)
  })

  run()
}


window.addEventListener('click', function() {
  run()
})