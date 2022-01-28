const txtAnim = document.querySelector('h4');

new Typewriter(txtAnim,{
   deleteSpeed: 30
})

.changeDelay(20)
.typeString('I Am \ El Mehdi Arejdal')
.pauseFor(300)
.typeString('<strong>, Dev Web Front End</strong> !')
.pauseFor(1000)
.deleteChars(15)
.typeString('<span style="color:#27ae60;"> CSS</span> !')
.deleteChars(5)
.typeString('<span style="color:orange;"> Python </span> !')
.pauseFor(1000)
.deleteChars(9)
.typeString('<span style="color:red;"> Html</span> !')
.pauseFor(1000)
.deleteChars(6)
.typeString('<span style="color:#1186f5;"> Javascript</span> !')
.start()