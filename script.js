
const DATA={"scenes": [{}, {}, {}, {}, {"name": "Works", "w": 1440, "h": 630, "items": [{"kind": "image", "name": "Gallery / Card 01", "key": "room", "x": 761, "y": 38, "w": 175, "h": 98.44, "rotation": 0, "opacity": 1}, {"kind": "image", "name": "Gallery / Card 02", "key": "scared", "x": 480, "y": 103, "w": 175, "h": 98.44, "rotation": 0, "opacity": 1}, {"kind": "image", "name": "Gallery / Card 03", "key": "right-place", "x": 685, "y": 138, "w": 113.14, "h": 160.0, "rotation": 0, "opacity": 1}, {"kind": "image", "name": "Gallery / Card 04", "key": "castle", "x": 792, "y": 245, "w": 175, "h": 75.57, "rotation": 0, "opacity": 1}, {"kind": "image", "name": "Gallery / Card 05", "key": "garden-walls", "x": 374, "y": 286, "w": 175, "h": 123.72, "rotation": 0, "opacity": 1}, {"kind": "image", "name": "Gallery / Card 06", "key": "lamb", "x": 840, "y": 367, "w": 175, "h": 91.27, "rotation": 0, "opacity": 1}, {"kind": "image", "name": "Gallery / Card 07", "key": "ell", "x": 579, "y": 398, "w": 175, "h": 159.88, "rotation": 0, "opacity": 1}, {"kind": "image", "name": "Gallery / Card 08", "key": "vink", "x": 579, "y": 462, "w": 163.54, "h": 160.0, "rotation": 0, "opacity": 1}, {"kind": "text", "name": "Work / Title 1", "text": "Environment", "x": 24, "y": 175, "w": 390, "h": 45, "size": 30, "font": "display", "color": "#000000", "align": "LEFT"}, {"kind": "text", "name": "Work / Title 2", "text": "Character design", "x": 24, "y": 241, "w": 390, "h": 45, "size": 30, "font": "display", "color": "#000000", "align": "LEFT"}, {"kind": "text", "name": "Work / Title 3", "text": "Illustration", "x": 24, "y": 307, "w": 390, "h": 45, "size": 30, "font": "display", "color": "#000000", "align": "LEFT"}, {"kind": "text", "name": "Work / Title 4", "text": "In the Right Place", "x": 24, "y": 373, "w": 390, "h": 45, "size": 30, "font": "display", "color": "#000000", "align": "LEFT"}, {"kind": "text", "name": "Work / Title 5", "text": "Beyond the Garden Walls", "x": 24, "y": 439, "w": 390, "h": 45, "size": 30, "font": "display", "color": "#000000", "align": "LEFT"}]}], "assets": {"room": "assets/room.jpg", "scared": "assets/scared.jpg", "right-place": "assets/right-place.jpg", "castle": "assets/castle.jpg", "garden-walls": "assets/garden-walls.jpg", "lamb": "assets/lamb.jpg", "ell": "assets/ell.jpg", "vink": "assets/vink.jpg", "castle-sketches": "assets/castle-sketches.jpg", "castle-base-form-tone": "assets/castle-base-form-tone.jpg", "castle-orthographics": "assets/castle-orthographics.jpg", "castle-color-keys": "assets/castle-color-keys.jpg", "castle-black-white": "assets/castle-black-white.jpg", "castle-final": "assets/castle-final.jpg"}, "works": {"room": {"title": "Room concept", "type": "CONCEPT ART", "group": 0, "width": 1600, "height": 900}, "scared": {"title": "I’m Scared!", "type": "ILLUSTRATION", "group": 2, "width": 1920, "height": 1080}, "right-place": {"title": "In the Right Place", "type": "2D ANIMATION", "group": 3, "width": 3508, "height": 4961}, "castle": {"title": "The Forgotten Keep", "type": "CONCEPT ART", "group": 0, "width": 2501, "height": 1080, "description": "A visual development piece depicting a hidden citadel bathed in morning light amidst steep rocky cliffs. The goal was to build a captivating setting that evokes storytelling through dramatic scale and soft environmental lighting.", "process": [{"key": "castle-sketches", "title": "Sketches"}, {"key": "castle-base-form-tone", "title": "Base Form & Tone"}, {"key": "castle-orthographics", "title": "Orthographics"}, {"key": "castle-color-keys", "title": "Color Keys"}, {"key": "castle-black-white", "title": "Black & White"}, {"key": "castle-final", "title": "Final"}]}, "garden-walls": {"title": "Beyond the Garden Walls", "type": "PITCH DECK", "group": 4, "width": 3508, "height": 2480}, "lamb": {"title": "Lamb character study", "type": "CHARACTERS", "group": 1, "width": 4755, "height": 2480}, "ell": {"title": "Ell", "type": "CHARACTERS", "group": 1, "width": 2916, "height": 2664}, "vink": {"title": "Vink", "type": "CHARACTERS", "group": 1, "width": 2911, "height": 2848}}, "groups": [{"title": "Environment", "type": "CONCEPT ART"}, {"title": "Character design", "type": "CHARACTERS"}, {"title": "Illustration", "type": "ILLUSTRATION"}, {"title": "In the Right Place", "type": "2D ANIMATION"}, {"title": "Beyond the Garden Walls", "type": "PITCH DECK"}]};
const page=document.querySelector('#page'),sections=[];
const plan=[{i:4,id:'work',cls:'work'}];
for(const p of plan){const section=document.createElement('section');section.id=p.id;section.className='section '+p.cls;section.setAttribute('aria-label',DATA.scenes[p.i].name);const stage=document.createElement('div');stage.className='stage';const canvas=document.createElement('div');canvas.className='canvas';stage.append(canvas);section.append(stage);page.append(section);sections.push({canvas,p});
for(const item of DATA.scenes[p.i].items){if(item.name.startsWith('Background /')||item.name.startsWith('Header /'))continue;const d=document.createElement('div');d.className='item '+(item.kind==='text'?item.font:'');d.dataset.baseY=item.y;Object.assign(d.style,{left:item.x+'px',top:item.y+'px',width:item.w+'px',height:item.h+'px',opacity:item.opacity??1,transform:'rotate('+(-item.rotation||0)+'deg)'});if(item.kind==='text'){d.textContent=item.text;Object.assign(d.style,{fontSize:item.size+'px',color:item.color,textAlign:item.align.toLowerCase()})}else if(item.kind==='image'){const img=new Image;img.src=DATA.assets[item.key];img.alt=DATA.works[item.key].title;d.dataset.group=DATA.works[item.key].group;d.dataset.artwork=item.key;d.append(img)}if(item.name.startsWith('Gallery /')){d.dataset.gallery=1;d.dataset.x=item.x;d.dataset.y=item.y;d.dataset.rotation=item.rotation||0}if(item.name.startsWith('Hero / Preview')){d.dataset.hero=1;d.dataset.rotation=item.rotation||0}canvas.append(d)}}

const hero=document.createElement('section');hero.id='top';hero.className='az-hero';hero.innerHTML='<h1><span>CONCEPT ARTIST &amp;</span><span>2D ANIMATOR</span></h1>';page.prepend(hero);
const about=document.createElement('section');about.id='about';about.className='az-about';about.innerHTML='<div class="about-layout"><button class="about-flip-card" type="button" aria-label="Flip portrait card" aria-pressed="false"><span class="about-card-inner"><img class="about-photo about-card-front" src="assets/46ff497c2c82.jpg" alt="Azaliya as a child in a green coat" width="413" height="505"><img class="about-card-back" src="assets/1b6b22417950.png" alt="Azaliya’s red character illustration on a white background" width="413" height="505"></span></button><div class="about-info"><h2><img class="about-heading-image" src="assets/b15ed7be858a.png" alt="ABOUT ME"></h2><div class="about-bio"><p class="about-name">Azaliya Yagnyaeva</p><p>22/01/2006<br>Tashkent, Uzbekistan</p></div><section class="about-entry about-education"><h3>Education</h3><div class="about-entry-row"><span>2023–2027</span><p>Multimedia and Game Content,<br>Bucheon University</p></div></section><section class="about-entry about-work"><h3>Work</h3><div class="about-entry-row"><span>2026–now</span><p>frontend developer<br>TSoft</p></div></section><section class="about-skills"><h3>Skills</h3><ul><li>Photoshop</li><li>Figma</li><li>Illustrator</li><li>Blender</li><li>Clip Studio Paint</li></ul></section><div class="about-touch"><a href="mailto:azaliaagnaeva@gmail.com">get in touch</a><a class="social-mark" href="https://www.instagram.com/ywshrt/" target="_blank" rel="noopener" aria-label="Instagram Azaliya"><svg aria-hidden="true" viewBox="0 0 16 16"><rect x="2" y="2" width="12" height="12" rx="3"/><circle cx="8" cy="8" r="3"/><path d="M11.6 4.3h.1"/></svg></a><a class="social-mark" href="https://t.me/ywshrt" target="_blank" rel="noopener" aria-label="Telegram Azaliya"><svg aria-hidden="true" viewBox="0 0 16 16"><path d="m1 7 14-5-3 12-4-4-3 2 1-4 6-4-5 5"/></svg></a><a class="social-mark" href="https://www.linkedin.com/in/%D0%B0%D0%B7%D0%B0%D0%BB%D0%B8%D1%8F-%D1%8F%D0%B3%D0%BD%D1%8F%D0%B5%D0%B2%D0%B0-9ba9a435b/" target="_blank" rel="noopener" aria-label="LinkedIn Azaliya"><svg aria-hidden="true" viewBox="0 0 14 14"><rect x="1.5" y="1.5" width="11" height="11" rx="1"/><path d="M4 6v4M4 3.8v.4M7 10V6m0 1.3c0-1.8 3-1.8 3 0V10"/></svg></a><a class="social-mark" href="mailto:azaliaagnaeva@gmail.com" aria-label="Email Azaliya"><svg viewBox="0 0 16 16"><rect x="1" y="3" width="14" height="10" rx="1.5"/><path d="m2 4 6 5 6-5"/></svg></a></div></div></div>';page.append(about);
const contact=document.createElement('footer');contact.id='contact';contact.className='az-footer';contact.innerHTML='<div class="footer-line"></div><a class="email" href="mailto:azaliaagnaeva@gmail.com">azaliaagnaeva@gmail.com</a><span class="footer-discipline">concept art &nbsp; / &nbsp; 2d animation</span><span class="footer-credit">made with passion and love.</span>';page.append(contact);
const workNames=DATA.groups.map(g=>g.title);
document.querySelectorAll('#work .display').forEach((n,i)=>{n.textContent=workNames[i]||n.textContent;});
document.querySelectorAll('#work .mono').forEach((n,i)=>{n.textContent=DATA.groups[i]?.type||'';});
document.querySelector('#work').setAttribute('aria-label','Works');
const clamp=x=>Math.max(0,Math.min(1,x)),reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;let ticking=false,px=0,py=0,scrollImpulse=0,lastScroll=scrollY;
function update(){ticking=false;updateAboutTone();fluidRender();scrollImpulse*=.88;const y=scrollY,vh=innerHeight,dark=document.body.classList.contains("contact-open")||aboutDarkProgress>.55;document.querySelector('#atmosphere').classList.toggle('dark',dark);document.querySelector('#fixed-nav').classList.toggle('dark',dark);document.querySelectorAll('.light').forEach((n,i)=>{n.style.transform='translate('+Math.sin(y/900+i)*50+'px,'+Math.cos(y/1100+i)*45+'px) rotate('+y/35+'deg)'});const g=document.querySelector('#work'),p=clamp(-g.getBoundingClientRect().top/(g.offsetHeight-vh));updateGallery(p);document.querySelectorAll('[data-hero]').forEach((n,i)=>n.style.transform='translate('+px*(i+1)*3+'px,'+py*(i+1)*2+'px) rotate('+(-Number(n.dataset.rotation)+px*4)+'deg)')}
const smooth=(a,b,x)=>{const t=clamp((x-a)/(b-a));return t*t*(3-2*t)};
const workCanvas=document.querySelector('#work .canvas');
const selectedTitle=document.createElement('div');selectedTitle.textContent='WORKS';selectedTitle.className='display selected-title';
Object.assign(selectedTitle.style,{position:'absolute',left:'0',width:'1440px',top:'0',fontSize:'156px',textAlign:'center',lineHeight:'.94',pointerEvents:'none',whiteSpace:'pre',zIndex:'300'});workCanvas.append(selectedTitle);
const categoryKeys=['p','nordy','abstract-shapes','h','mfh','kadoo'];
// Camera and damping follow the reference's exposed interaction settings.
const ORBIT={radiansPerPixel:.006,inertiaDamping:3.2,orientationDamping:7,velocityEase:24,cameraDistance:18.5,radius:5.1};
const qmul=(a,b)=>[a[3]*b[0]+a[0]*b[3]+a[1]*b[2]-a[2]*b[1],a[3]*b[1]-a[0]*b[2]+a[1]*b[3]+a[2]*b[0],a[3]*b[2]+a[0]*b[1]-a[1]*b[0]+a[2]*b[3],a[3]*b[3]-a[0]*b[0]-a[1]*b[1]-a[2]*b[2]];
const qaxis=(x,y,z,angle)=>{const s=Math.sin(angle/2);return[x*s,y*s,z*s,Math.cos(angle/2)]};
const qnorm=q=>{const n=Math.hypot(...q);return q.map(v=>v/n)};
function qrotate(q,v){const p=qmul(qmul(q,[...v,0]),[-q[0],-q[1],-q[2],q[3]]);return p.slice(0,3)}
function qslerp(a,b,t){let d=a.reduce((s,v,i)=>s+v*b[i],0);if(d<0){b=b.map(v=>-v);d=-d}if(d>.9995)return qnorm(a.map((v,i)=>v+(b[i]-v)*t));const theta=Math.acos(Math.min(1,d)),s=Math.sin(theta);return a.map((v,i)=>(v*Math.sin((1-t)*theta)+b[i]*Math.sin(t*theta))/s)}
let orbitTarget=[0,0,0,1],orbitCurrent=[0,0,0,1],orbitVX=0,orbitVY=0,hoverGroup=-1,pointerDown=false,pointerLast=null,lastFrame=performance.now(),lastPointerTime=0;
let animationProgress=0,lastProgress=0;
function wake(){if(!ticking){ticking=true;requestAnimationFrame(update)}}
function handleGlobePointer(e){
 if(document.body.classList.contains("project-open")||e.target.closest?.("[data-gallery]")){pointerLast=null;orbitVX=0;orbitVY=0;return;}
 const rect=document.querySelector('#work .stage').getBoundingClientRect();
 const active=rect.top<=innerHeight*.3&&rect.bottom>=innerHeight*.7&&animationProgress>.22&&animationProgress<.95;
 if(!active||reduced){pointerLast=null;return}
 const now=performance.now();
 if(pointerLast){
  const dt=Math.max(.008,Math.min(.05,(now-pointerLast.time)/1000));
  const dx=Math.max(-100,Math.min(100,e.clientX-pointerLast.x)),dy=Math.max(-100,Math.min(100,e.clientY-pointerLast.y));
  const impulse=qmul(qaxis(0,1,0,dx*ORBIT.radiansPerPixel),qaxis(1,0,0,dy*ORBIT.radiansPerPixel));
  orbitTarget=qnorm(qmul(impulse,orbitTarget));
  const weight=1-Math.exp(-ORBIT.velocityEase*dt);
  orbitVX+=(dy*ORBIT.radiansPerPixel/dt-orbitVX)*weight;
  orbitVY+=(dx*ORBIT.radiansPerPixel/dt-orbitVY)*weight;
  orbitVX=Math.max(-12,Math.min(12,orbitVX));orbitVY=Math.max(-12,Math.min(12,orbitVY));
 }
 pointerLast={x:e.clientX,y:e.clientY,time:now};lastPointerTime=now;wake();
}
window.addEventListener('pointerdown',()=>{pointerDown=true});window.addEventListener('pointerup',()=>{pointerDown=false});
document.documentElement.addEventListener('pointerleave',()=>{pointerLast=null;wake()});
const titleLabels=[...document.querySelectorAll('#work .display:not(.selected-title)')];
const techLabels=[...document.querySelectorAll('#work .mono')];
function selectGroup(index){hoverGroup=index;wake()}
for(const [i,label] of titleLabels.entries()){
 label.tabIndex=0;label.setAttribute('role','button');label.setAttribute('aria-label','Highlight '+label.textContent);label.style.cursor='pointer';
 label.addEventListener('pointerenter',()=>selectGroup(i));label.addEventListener('pointerleave',()=>selectGroup(-1));
 label.addEventListener('focus',()=>selectGroup(i));label.addEventListener('blur',()=>selectGroup(-1));
 label.addEventListener('keydown',e=>{if(e.key==='Escape')selectGroup(-1);if(e.key==='Enter'||e.key===' '){e.preventDefault();selectGroup(hoverGroup===i?-1:i)}});
 label.addEventListener('click',e=>{if(e.pointerType==='touch')selectGroup(hoverGroup===i?-1:i)});
}
const galleryCards=[...document.querySelectorAll('[data-gallery]')].map((n,i)=>{
 const img=n.querySelector('img'),w=parseFloat(n.style.width),h=parseFloat(n.style.height),surface=document.createElement('canvas');
 surface.width=Math.ceil((w+100)*2);surface.height=Math.ceil((h+100)*2);
 Object.assign(surface.style,{position:'absolute',left:'-50px',top:'-50px',width:(w+100)+'px',height:(h+100)+'px',pointerEvents:'none'});surface.setAttribute('aria-hidden','true');n.append(surface);img.style.opacity='0';img.draggable=false;img.style.pointerEvents='none';
 // Lift the measured 2D pose onto a sphere, retaining the reference's opening arrangement.
 let x=(Number(n.dataset.x)+w/2-720)/310,y=-(Number(n.dataset.y)+h/2-315)/300;
 const r=Math.hypot(x,y);if(r>.96){x*=.96/r;y*=.96/r}
 const z=Math.sqrt(Math.max(.02,1-x*x-y*y))*(i%3===0?-1:1);
 const group=Number(n.dataset.group);
 const c={n,img,w,h,surface,ctx:surface.getContext('2d'),i,point:[x,y,z],group,front:0,filter:1,history:[],lastX:null,lastY:null,motionX:0,motionY:0,needsPaint:true};
 img.onload=()=>{c.needsPaint=true;wake()};return c;
});
function paintCard(c,velocity){
 const {ctx,img,w,h,surface}=c;ctx.setTransform(2,0,0,2,0,0);ctx.clearRect(0,0,surface.width/2,surface.height/2);
 const motion=Math.min(2,Math.hypot(c.motionX,c.motionY)/4+Math.abs(velocity)*.25);
 const bend=Math.max(-18,Math.min(18,c.motionX*1.7+velocity*7));
 const trails=reduced?0:Math.min(5,Math.ceil(motion*3));
 for(let trail=trails;trail>=0;trail--){
  const trailAlpha=trail===0?1:.34*Math.pow(1-trail/7,1.4),steps=24;
  const ox=-c.motionX*trail*.85,oy=-c.motionY*trail*.85;
  for(let j=0;j<steps;j++){
   const u=j/steps,v=(j+.5)/steps,curve=(Math.pow((v-.5)*2,2)-.25)*bend;
   const height=h*(1-Math.abs(bend)/170*(1-Math.pow((v-.5)*2,2)));
   const x=50+u*w+ox,y=50+curve+oy;
   ctx.globalAlpha=trailAlpha*(1-c.front);ctx.fillStyle='#984C62';ctx.fillRect(x,y,w/steps+.65,height);
   if(c.front>0&&img.complete&&img.naturalWidth){ctx.globalAlpha=trailAlpha*c.front;ctx.drawImage(img,u*img.naturalWidth,0,img.naturalWidth/steps,img.naturalHeight,x,y,w/steps+.65,height)}
  }
 }ctx.globalAlpha=1;c.needsPaint=false;
}
function updateGallery(progress){
 animationProgress=progress;const now=performance.now(),dt=Math.max(.001,Math.min(.05,(now-lastFrame)/1000));lastFrame=now;
 const inView=document.querySelector('#work').getBoundingClientRect().top<innerHeight&&document.querySelector('#work').getBoundingClientRect().bottom>0;
 const idle=(now-lastPointerTime)>70;
 if(!reduced&&inView){
  if(idle){orbitTarget=qnorm(qmul(qmul(qaxis(0,1,0,orbitVY*dt),qaxis(1,0,0,orbitVX*dt)),orbitTarget));const decay=Math.exp(-ORBIT.inertiaDamping*dt);orbitVX*=decay;orbitVY*=decay;}
  orbitCurrent=qslerp(orbitCurrent,orbitTarget,1-Math.exp(-ORBIT.orientationDamping*dt));
 }
 const entrance=1-smooth(.02,.28,progress),exit=smooth(.80,1,progress);
 const designHeight=innerHeight/(innerWidth/1440),radiusX=Math.min(310,designHeight*.43),radiusY=designHeight*.43;
 const scrollOrbit=qaxis(0,1,0,smooth(.18,.82,progress)*Math.PI*1.1);
 const orientation=qmul(orbitCurrent,scrollOrbit);
 const titleIn=smooth(.055,.12,progress),titleOut=1-smooth(.25,.32,progress);
 selectedTitle.style.top=(designHeight*.5-145)+'px';selectedTitle.style.opacity=titleIn*titleOut;
 selectedTitle.style.transform='translateY('+((1-titleIn)*400-smooth(.20,.32,progress)*430)+'px)';
 let unsettled=false;
 for(const c of galleryCards){
  const v=qrotate(orientation,c.point),perspective=ORBIT.cameraDistance/(ORBIT.cameraDistance-v[2]*ORBIT.radius);
  const scatter=1+entrance*3+exit*3.4;
  const targetX=720+v[0]*radiusX*perspective*scatter;
  const targetY=designHeight*.5-v[1]*radiusY*perspective*scatter;
  const s=perspective*(.84+smooth(.04,.3,progress)*.16);
  const dx=targetX-c.w/2-Number(c.n.dataset.x),dy=targetY-c.h/2-parseFloat(c.n.style.top);
  const mx=c.lastX===null?0:targetX-c.lastX,my=c.lastY===null?0:targetY-c.lastY;
  c.motionX+=(mx-c.motionX)*(1-Math.exp(-18*dt));c.motionY+=(my-c.motionY)*(1-Math.exp(-18*dt));c.lastX=targetX;c.lastY=targetY;
  const desiredFilter=hoverGroup<0||hoverGroup===c.group?1:0;
  if(reduced)c.filter=desiredFilter;else c.filter+=(desiredFilter-c.filter)*(1-Math.exp(-15*dt));
  const front=smooth(.31,.43,progress)*(1-smooth(.84,.96,progress))*c.filter;
  const changed=Math.abs(c.front-front)>.002;c.front=front;
  c.n.style.transform='translate('+dx+'px,'+dy+'px) scale('+s+')';
  c.n.style.opacity=(.05+.95*smooth(.08,.30,progress))*(1-.96*exit);c.n.style.zIndex=String(Math.round((v[2]+1)*80));
  c.n.dataset.depth=v[2].toFixed(3);c.n.dataset.front=c.front.toFixed(3);
  if(inView&&(c.needsPaint||changed||Math.abs(mx)+Math.abs(my)>.02||Math.abs(c.motionX)+Math.abs(c.motionY)>.02||Math.abs(progress-lastProgress)>.0001))paintCard(c,reduced?0:scrollImpulse);
  if(Math.abs(c.filter-desiredFilter)>.003||Math.abs(c.motionX)+Math.abs(c.motionY)>.03)unsettled=true;
 }
 const labelsOpacity=smooth(.36,.46,progress)*(1-smooth(.76,.84,progress));
 for(const [i,n] of titleLabels.entries()){n.style.opacity=labelsOpacity*(hoverGroup<0||hoverGroup===i?1:.32);n.style.transform='translateY('+((1-smooth(.36,.46,progress))*100-smooth(.76,.84,progress)*100)+'px)';n.style.pointerEvents=labelsOpacity>.4?'auto':'none';n.tabIndex=labelsOpacity>.4?0:-1;}
 for(const [i,n] of techLabels.entries())n.style.opacity=labelsOpacity*(hoverGroup<0||hoverGroup===i?1:.32);
 const distance=1-Math.abs(orbitCurrent.reduce((sum,v,i)=>sum+v*orbitTarget[i],0));
 lastProgress=progress;
 if(inView&&!reduced&&(Math.abs(scrollImpulse)>.006||Math.abs(orbitVX)+Math.abs(orbitVY)>.002||distance>.000001||unsettled))wake();
}

// Silhouette aperture + projected light + radial God Rays, following the reference.
const fluidSurface=document.createElement('canvas');fluidSurface.setAttribute('aria-hidden','true');fluidSurface.className='emblem-rays';
Object.assign(fluidSurface.style,{position:'absolute',inset:'0',width:'100%',height:'100%',pointerEvents:'none'});
document.querySelector('#atmosphere').append(fluidSurface);
let fluidRender=()=>{},fluidTargetAngle=0,fluidAngle=0,fluidPX=0,fluidPY=0;
const fluidGL=fluidSurface.getContext('webgl',{alpha:false,antialias:false,powerPreference:'low-power'});
if(fluidGL){
 const gl=fluidGL,vertex='attribute vec2 position;varying vec2 vUv;void main(){vUv=position*.5+.5;gl_Position=vec4(position,0.,1.);}';
 const aperture=`precision highp float;varying vec2 vUv;uniform sampler2D shape;uniform float aspect;uniform vec3 camera;uniform float turn;
 mat2 rot(float a){return mat2(cos(a),-sin(a),sin(a),cos(a));}
 float emblem(vec2 p,float size){vec2 t=rot(turn)*p/size+.5;if(t.x<0.||t.y<0.||t.x>1.||t.y>1.)return 0.;return texture2D(shape,vec2(t.x,1.-t.y)).a;}
 void main(){vec3 f=normalize(-camera),right=normalize(cross(f,vec3(0.,1.,0.))),up=cross(right,f);vec2 xy=(vUv*2.-1.)*vec2(aspect,1.)*.3152988;vec3 ray=normalize(f+right*xy.x+up*xy.y);
 vec3 hit=camera+ray*((6.-camera.z)/ray.z);float shadow=emblem(hit.xy,1.25);vec3 lightHit=camera+ray*((-100.-camera.z)/ray.z);float lamp=emblem(lightHit.xy,20.);float light=lamp*(1.-shadow)*.267;gl_FragColor=vec4(light,shadow,0.,1.);}`;
 const rays=`precision highp float;varying vec2 vUv;uniform sampler2D source;uniform vec2 lightPosition;uniform vec2 texel;
 void main(){vec2 stepUV=(lightPosition-vUv)/80.;vec2 p=vUv;float sum=texture2D(source,p).r;for(int i=0;i<80;i++){p+=stepUV;float sampleLight=texture2D(source,p).r;sum+=sampleLight*.3;}gl_FragColor=vec4(vec3(clamp(sum*.6,0.,.95)),1.);}`;
 const blur=`precision highp float;varying vec2 vUv;uniform sampler2D source;uniform vec2 texel;void main(){gl_FragColor=(texture2D(source,vUv+texel)+texture2D(source,vUv-texel)+texture2D(source,vUv+vec2(texel.x,-texel.y))+texture2D(source,vUv+vec2(-texel.x,texel.y)))*.25;}`;
 const composite=`precision highp float;varying vec2 vUv;uniform sampler2D source;uniform sampler2D apertureMap;uniform vec2 texel;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 void main(){float light=texture2D(source,vUv).r*.2;
 light+=(texture2D(source,vUv+vec2(texel.x,0.)).r+texture2D(source,vUv-vec2(texel.x,0.)).r+texture2D(source,vUv+vec2(0.,texel.y)).r+texture2D(source,vUv-vec2(0.,texel.y)).r)*.12;
 light+=(texture2D(source,vUv+texel).r+texture2D(source,vUv-texel).r+texture2D(source,vUv+vec2(texel.x,-texel.y)).r+texture2D(source,vUv+vec2(-texel.x,texel.y)).r)*.08;
 float silhouette=texture2D(apertureMap,vUv).g;float opacity=clamp(light*.72+silhouette*.12,0.,.72);
 vec3 base=vec3(.752941,.431373,.517647),emission=vec3(.67,.28,.405);vec3 color=mix(base,emission,opacity);color+=(hash(gl_FragCoord.xy)-.5)*.012;gl_FragColor=vec4(color,1.);}`;
 function compile(type,source){const sh=gl.createShader(type);gl.shaderSource(sh,source);gl.compileShader(sh);if(!gl.getShaderParameter(sh,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(sh));return sh}
 function program(fragment){const p=gl.createProgram();gl.attachShader(p,compile(gl.VERTEX_SHADER,vertex));gl.attachShader(p,compile(gl.FRAGMENT_SHADER,fragment));gl.linkProgram(p);if(!gl.getProgramParameter(p,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(p));return p}
 try{
  const programs=[program(aperture),program(rays),program(composite),program(blur)],buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
  function texture(){const t=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,t);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);return t}
  const mask=texture(),targets=[texture(),texture(),texture(),texture()],frames=[gl.createFramebuffer(),gl.createFramebuffer(),gl.createFramebuffer(),gl.createFramebuffer()];let ready=false,renderW=0,renderH=0,orbitX=0,orbitY=0,angleScroll=0,lastTime=performance.now();
  const maskImage=new Image();maskImage.onload=()=>{gl.activeTexture(gl.TEXTURE0);gl.bindTexture(gl.TEXTURE_2D,mask);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,maskImage);ready=true;wake()};maskImage.src='assets/ee030221d397.png';
  function activate(p){gl.useProgram(p);gl.bindBuffer(gl.ARRAY_BUFFER,buffer);const a=gl.getAttribLocation(p,'position');gl.enableVertexAttribArray(a);gl.vertexAttribPointer(a,2,gl.FLOAT,false,0,0)}
  function bind(p,name,t,unit){gl.activeTexture(gl.TEXTURE0+unit);gl.bindTexture(gl.TEXTURE_2D,t);gl.uniform1i(gl.getUniformLocation(p,name),unit)}
  function two(p,name,x,y){gl.uniform2f(gl.getUniformLocation(p,name),x,y)}
  const dot=(a,b)=>a[0]*b[0]+a[1]*b[1]+a[2]*b[2],cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]],norm=a=>{const n=Math.hypot(...a);return a.map(v=>v/n)};
  fluidRender=()=>{
   if(!ready)return;const now=performance.now(),dt=Math.min(.05,(now-lastTime)/1000);lastTime=now;const damping=1-Math.pow(1-.09,dt*60);
   const tx=reduced?0:px*2*Math.PI*.1*.15,ty=reduced?0:py*2*Math.PI*.1*.15;
   orbitX+=(tx-orbitX)*damping;orbitY+=(ty-orbitY)*damping;fluidPX=px;fluidPY=py;
   const targetTurn=reduced?0:5*scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight);angleScroll+=(targetTurn-angleScroll)*damping;
   const w=Math.max(1,Math.round(innerWidth*Math.min(1,600/innerHeight))),h=Math.max(1,Math.round(innerHeight*Math.min(1,600/innerHeight)));
   if(w!==renderW||h!==renderH){renderW=w;renderH=h;fluidSurface.width=w;fluidSurface.height=h;targets.forEach((t,i)=>{gl.bindTexture(gl.TEXTURE_2D,t);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,w,h,0,gl.RGBA,gl.UNSIGNED_BYTE,null);gl.bindFramebuffer(gl.FRAMEBUFFER,frames[i]);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,t,0)})}
   gl.viewport(0,0,w,h);const cam=[Math.sin(orbitX)*Math.cos(orbitY)*14,-Math.sin(orbitY)*14,Math.cos(orbitX)*Math.cos(orbitY)*14];
   const f=norm(cam.map(v=>-v)),right=norm(cross(f,[0,1,0])),up=cross(right,f),delta=[-cam[0],-cam[1],-100-cam[2]],depth=dot(delta,f);
   const lx=.5+dot(delta,right)/(depth*.3152988*(w/h)*2),ly=.5+dot(delta,up)/(depth*.3152988*2);
   let p=programs[0];activate(p);gl.bindFramebuffer(gl.FRAMEBUFFER,frames[0]);bind(p,'shape',mask,0);gl.uniform1f(gl.getUniformLocation(p,'aspect'),w/h);gl.uniform3f(gl.getUniformLocation(p,'camera'),...cam);gl.uniform1f(gl.getUniformLocation(p,'turn'),angleScroll);gl.drawArrays(gl.TRIANGLES,0,3);
   let previous=0;[0,1,1,2].forEach((kernel,i)=>{const next=i%2===0?2:3;p=programs[3];activate(p);gl.bindFramebuffer(gl.FRAMEBUFFER,frames[next]);bind(p,'source',targets[previous],0);two(p,'texel',(kernel+.5)/w,(kernel+.5)/h);gl.drawArrays(gl.TRIANGLES,0,3);previous=next});
   p=programs[1];activate(p);gl.bindFramebuffer(gl.FRAMEBUFFER,frames[1]);bind(p,'source',targets[3],0);two(p,'lightPosition',lx,ly);two(p,'texel',1.5/w,1.5/h);gl.drawArrays(gl.TRIANGLES,0,3);
   p=programs[2];activate(p);gl.bindFramebuffer(gl.FRAMEBUFFER,null);bind(p,'source',targets[1],0);bind(p,'apertureMap',targets[3],1);two(p,'texel',3/w,3/h);gl.drawArrays(gl.TRIANGLES,0,3);
   if(!reduced&&(Math.abs(tx-orbitX)+Math.abs(ty-orbitY)>.0001||Math.abs(targetTurn-angleScroll)>.0001))wake();
  };
 }catch(error){console.warn('Silhouette rays unavailable:',error.message);fluidSurface.remove()}
}

const aboutSection=document.querySelector('#about');
const aboutDarkLayer=document.createElement('div');
Object.assign(aboutDarkLayer.style,{position:'absolute',inset:'0',pointerEvents:'none',background:'linear-gradient(180deg,#000 0%,#080305 40%,#000 100%)',opacity:'0'});
document.querySelector('#atmosphere').append(aboutDarkLayer);
let aboutDarkProgress=0;
function updateAboutTone(){
 const top=aboutSection.getBoundingClientRect().top;
 aboutDarkProgress=clamp((innerHeight*.95-top)/(innerHeight*.88));
 const eased=aboutDarkProgress*aboutDarkProgress*(3-2*aboutDarkProgress);
 aboutDarkLayer.style.opacity=eased;
 document.querySelector('#contact').style.background='#000';
}
const flipCard=document.querySelector('.about-flip-card');
flipCard.addEventListener('click',()=>{const flipped=flipCard.classList.toggle('is-flipped');flipCard.setAttribute('aria-pressed',String(flipped));flipCard.setAttribute('aria-label',flipped?'Show childhood photo':'Show character illustration');});
const heartCanvas=document.createElement('canvas');heartCanvas.className='about-hearts';heartCanvas.setAttribute('aria-hidden','true');aboutSection.prepend(heartCanvas);
const heartCtx=heartCanvas.getContext('2d');const heartCells=new Map();
let heartFrame=0,heartLast=null,heartRatio=1;
function sizeHearts(){
 const r=aboutSection.getBoundingClientRect();heartRatio=Math.min(devicePixelRatio||1,2);
 heartCanvas.width=Math.round(r.width*heartRatio);heartCanvas.height=Math.round(r.height*heartRatio);
}
function heartPath(ctx,x,y,size){
 ctx.beginPath();ctx.moveTo(x,y+size*.27);ctx.bezierCurveTo(x-size*.8,y-size*.25,x-size*.55,y-size*.75,x,y-size*.37);ctx.bezierCurveTo(x+size*.55,y-size*.75,x+size*.8,y-size*.25,x,y+size*.27);ctx.fill();
}
function renderHearts(now){
 heartFrame=0;heartCtx.setTransform(heartRatio,0,0,heartRatio,0,0);heartCtx.clearRect(0,0,heartCanvas.width/heartRatio,heartCanvas.height/heartRatio);
 for(const [key,c] of heartCells){const age=now-c.time;if(age>4200){heartCells.delete(key);continue}const fade=age<1300?1:Math.max(0,1-(age-1300)/2900);heartCtx.globalAlpha=fade*fade*c.strength;heartCtx.fillStyle='#C06E84';heartPath(heartCtx,c.x,c.y,8.5);}
 heartCtx.globalAlpha=1;if(heartCells.size)heartFrame=requestAnimationFrame(renderHearts);
}
function stampHearts(x,y,now){
 const grid=19,gx=Math.round(x/grid),gy=Math.round(y/grid);
 for(let offset=-1;offset<=1;offset++){
  const key=(gx+offset)+','+gy;heartCells.set(key,{x:(gx+offset)*grid,y:gy*grid,time:now,strength:offset===0?.78:.52});
 }
}
aboutSection.addEventListener('pointermove',event=>{
 if(reduced||event.pointerType==='touch')return;
 const r=aboutSection.getBoundingClientRect(),x=event.clientX-r.left,y=event.clientY-r.top,now=performance.now();
 if(heartLast){const distance=Math.hypot(x-heartLast.x,y-heartLast.y),steps=Math.min(80,Math.ceil(distance/9));for(let i=1;i<=steps;i++)stampHearts(heartLast.x+(x-heartLast.x)*i/steps,heartLast.y+(y-heartLast.y)*i/steps,now);}
 else stampHearts(x,y,now);
 heartLast={x,y};if(!heartFrame)heartFrame=requestAnimationFrame(renderHearts);
});
aboutSection.addEventListener('pointerleave',()=>{heartLast=null});
window.addEventListener('resize',sizeHearts);window.addEventListener('scroll',()=>{heartLast=null},{passive:true});sizeHearts();

const projectDialog=document.createElement('dialog');
projectDialog.className='project-dialog';projectDialog.setAttribute('aria-labelledby','project-title');
projectDialog.innerHTML=`<button class="project-close" aria-label="Close project">×</button><div class="project-scroll"><section class="project-main" id="project-main"><div class="project-image-wrap"><img class="project-image" alt=""></div><div class="project-copy"><h2 id="project-title"></h2><p class="project-description"></p></div></section><section class="project-process" id="project-process" aria-label="Work process"><div class="project-process-images"></div></section></div><nav class="project-tabs" aria-label="Project sections"><button data-section="main">main</button><button data-section="process">process</button></nav>`;
document.body.append(projectDialog);
const projectScroll=projectDialog.querySelector('.project-scroll');let projectClosing=false,projectTrigger=null;
function closeProject(){if(projectClosing||!projectDialog.open)return;projectClosing=true;projectDialog.classList.remove('is-open');setTimeout(()=>{projectDialog.close();document.body.style.overflow='';document.body.style.paddingRight='';document.body.classList.remove('project-open');projectClosing=false;projectTrigger?.focus({preventScroll:true});},matchMedia('(prefers-reduced-motion: reduce)').matches?0:460);}
function openProject(key,trigger){const work=DATA.works[key];if(!work||projectDialog.open)return;projectTrigger=trigger;
projectDialog.querySelector('.project-image').src=DATA.assets[key];projectDialog.querySelector('.project-image').alt=work.title;
projectDialog.querySelector('#project-title').textContent=work.title;
projectDialog.querySelector('.project-description').textContent=work.description||work.type;
const process=work.process||[];projectDialog.querySelector('.project-process').hidden=!process.length;projectDialog.querySelector('[data-section="process"]').hidden=!process.length;
const holder=projectDialog.querySelector('.project-process-images');holder.replaceChildren();process.forEach((asset,index)=>{const info=typeof asset==='string'?{key:asset,title:'Process'}:asset;const step=document.createElement('section');step.className='project-step';step.id='project-step-'+index;const heading=document.createElement('h2');heading.textContent=info.title;const img=new Image();img.src=DATA.assets[info.key];img.alt=work.title+' — '+info.title;img.decoding='async';step.append(heading,img);holder.append(step)});
document.body.style.paddingRight=(innerWidth-document.documentElement.clientWidth)+'px';document.body.style.overflow='hidden';document.body.classList.add('project-open');projectDialog.showModal();projectScroll.scrollTop=0;requestAnimationFrame(()=>projectDialog.classList.add('is-open'));}
projectDialog.querySelector('.project-close').addEventListener('click',closeProject);projectDialog.addEventListener('cancel',e=>{e.preventDefault();closeProject()});projectDialog.addEventListener('click',e=>{if(e.target===projectDialog)closeProject()});
projectDialog.querySelectorAll('[data-section]').forEach(button=>button.addEventListener('click',()=>{const section=projectDialog.querySelector('#project-'+button.dataset.section);projectScroll.scrollTo({top:section.offsetTop-36,behavior:'smooth'})}));
projectScroll.addEventListener('scroll',()=>{const process=projectDialog.querySelector('.project-process');const inProcess=!process.hidden&&process.getBoundingClientRect().top<innerHeight*.65;projectDialog.querySelectorAll('[data-section]').forEach(b=>b.setAttribute('aria-current',String((b.dataset.section==='process')===inProcess)))});
document.querySelectorAll('[data-gallery]').forEach(card=>{card.tabIndex=0;card.setAttribute('role','button');card.setAttribute('aria-haspopup','dialog');card.setAttribute('aria-label','Open '+DATA.works[card.dataset.artwork].title);let start=null;card.addEventListener('pointerdown',e=>{start={x:e.clientX,y:e.clientY}});card.addEventListener('click',e=>{if(start&&Math.hypot(e.clientX-start.x,e.clientY-start.y)>9)return;openProject(card.dataset.artwork,card)});card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openProject(card.dataset.artwork,card)}})});

const contactScreen=document.getElementById('contact');
contactScreen.className='contact-screen';contactScreen.hidden=true;contactScreen.setAttribute('aria-label','Contacts');
const contactIcons={telegram:'<path d="m2 7 10-4-3 10-3-4-4-2Zm4 2 6-6M6 9v3l2-2"/>',instagram:'<rect x="2" y="2" width="10" height="10" rx="2"/><circle cx="7" cy="7" r="2.3"/><path d="M10 4h.1"/>',email:'<rect x="1.5" y="3" width="11" height="8" rx="1"/><path d="m2 4 5 4 5-4"/>',resume:'<path d="M3 1.5h8v11H3zM5 5h4M5 7h4M5 9h3"/>'};
contactIcons.linkedin='<rect x="1.5" y="1.5" width="11" height="11" rx="1"/><path d="M4 6v4M4 3.8v.4M7 10V6m0 1.3c0-1.8 3-1.8 3 0V10"/>';
const contactIcon=name=>'<svg viewBox="0 0 14 14" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.1">'+contactIcons[name]+'</svg>';
contactScreen.innerHTML='<div class="contact-list"><a href="https://t.me/ywshrt" target="_blank" rel="noopener">'+contactIcon('telegram')+'<strong>telegram</strong><span>@ywshrt</span></a><a href="https://www.instagram.com/ywshrt/" target="_blank" rel="noopener">'+contactIcon('instagram')+'<strong>instagram</strong><span>ywshrt</span></a><button type="button" class="contact-email" aria-label="Copy email address">'+contactIcon('email')+'<strong>email</strong><span>azaliaagnaeva@gmail.com<small class="copy-status" role="status" aria-live="polite"></small></span></button><a href="https://www.linkedin.com/in/%D0%B0%D0%B7%D0%B0%D0%BB%D0%B8%D1%8F-%D1%8F%D0%B3%D0%BD%D1%8F%D0%B5%D0%B2%D0%B0-9ba9a435b/" target="_blank" rel="noopener">'+contactIcon('linkedin')+'<strong>linkedin</strong><span>Azaliya Yagnyaeva</span></a><a class="contact-resume" href="resume/Azaliya-Yagnyaeva-Resume.docx" download="Azaliya-Yagnyaeva-Resume.docx">'+contactIcon('resume')+'<strong>resume</strong><span>download</span></a></div>';
let contactReturnHash='#top',contactReturnFocus=null;
function openContacts(trigger){if(!contactScreen.hidden)return;contactReturnHash=location.hash==='#contact'?'#top':location.hash||'#top';contactReturnFocus=trigger;contactScreen.hidden=false;document.body.classList.add('contact-open');document.body.style.overflow='hidden';document.getElementById('fixed-nav').classList.add('dark');document.querySelector('.contact-list a').focus({preventScroll:true});history.pushState(null,'','#contact');}
function closeContacts(restore=false){if(contactScreen.hidden)return;contactScreen.hidden=true;document.body.classList.remove('contact-open');document.body.style.overflow='';if(restore){history.replaceState(null,'',contactReturnHash);contactReturnFocus?.focus({preventScroll:true})}update();}
document.querySelector('#fixed-nav nav a[href="#contact"]').addEventListener('click',event=>{event.preventDefault();openContacts(event.currentTarget)});
document.querySelector('.about-touch a').addEventListener('click',event=>{event.preventDefault();openContacts(event.currentTarget)});
document.getElementById('fixed-nav').addEventListener('click',event=>{const link=event.target.closest('a');if(link&&link.getAttribute('href')!=='#contact')closeContacts();},true);
window.addEventListener('keydown',event=>{if(event.key==='Escape'&&!contactScreen.hidden){event.preventDefault();closeContacts(true)}});
window.addEventListener('popstate',()=>{if(location.hash==='#contact')openContacts();else closeContacts()});

let copyFeedbackTimer;
contactScreen.querySelector('.contact-email').addEventListener('click',async()=>{
 const button=contactScreen.querySelector('.contact-email'),status=button.querySelector('.copy-status');
 try{
  if(navigator.clipboard?.writeText){await navigator.clipboard.writeText('azaliaagnaeva@gmail.com')}
  else{const field=document.createElement('textarea');field.value='azaliaagnaeva@gmail.com';field.style.cssText='position:fixed;opacity:0';document.body.append(field);field.select();const success=document.execCommand('copy');field.remove();button.focus({preventScroll:true});if(!success)throw new Error('Copy unavailable');}
  status.innerHTML='<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M4 2h6v7H4zM2 4v7h6" fill="none" stroke="currentColor" stroke-width=".8"/></svg>copied';button.classList.add('is-copied');
  clearTimeout(copyFeedbackTimer);copyFeedbackTimer=setTimeout(()=>{status.textContent='';button.classList.remove('is-copied')},3000);
 }catch{status.textContent=' — select to copy';}
});


let cursorReleaseTimer=0,cursorPressedAt=0;
function clearCursorPress(){clearTimeout(cursorReleaseTimer);document.documentElement.classList.remove('cursor-pressed')}
window.addEventListener('pointerdown',event=>{if(event.pointerType==='touch'||event.button!==0)return;clearTimeout(cursorReleaseTimer);cursorPressedAt=performance.now();document.documentElement.classList.add('cursor-pressed')},{capture:true,passive:true});
window.addEventListener('pointerup',()=>{cursorReleaseTimer=setTimeout(clearCursorPress,Math.max(0,130-(performance.now()-cursorPressedAt)))},{capture:true,passive:true});
window.addEventListener('pointercancel',clearCursorPress);window.addEventListener('blur',clearCursorPress);document.addEventListener('visibilitychange',()=>{if(document.hidden)clearCursorPress()});

const heroHeading=document.querySelector('.az-hero h1');
const scrambleMedia=matchMedia('(hover:hover) and (pointer:fine)');
const scrambleMotion=matchMedia('(prefers-reduced-motion:reduce)');
heroHeading.setAttribute('aria-label','CONCEPT ARTIST & 2D ANIMATOR');
heroHeading.querySelectorAll('span').forEach(line=>{
 const original=line.textContent;line.setAttribute('aria-hidden','true');
 const button=document.createElement('button');button.type='button';button.className='hero-scramble';button.setAttribute('aria-label',original);button.textContent=original;line.replaceChildren(button);line.removeAttribute('aria-hidden');
 const visual=document.createElement('span');visual.setAttribute('aria-hidden','true');visual.textContent=original;button.replaceChildren(visual);
 let frame=0,start=0,lastStep=-1;const symbols='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>/[]{}—_';
 function reset(){cancelAnimationFrame(frame);frame=0;visual.textContent=original;lastStep=-1;button.classList.remove('is-scrambling')}
 function animate(now){const elapsed=now-start,step=Math.floor(elapsed/38);if(elapsed>=850){reset();return}if(step!==lastStep){lastStep=step;const resolved=Math.max(0,(elapsed-180)/650)*original.length;visual.textContent=Array.from(original,(char,i)=>char===' '||char==='&'?char:i<resolved?char:symbols[Math.floor(Math.random()*symbols.length)]).join('')}frame=requestAnimationFrame(animate)}
 function run(){if(scrambleMotion.matches)return;reset();start=performance.now();button.classList.add('is-scrambling');frame=requestAnimationFrame(animate)}
 button.addEventListener('pointerenter',event=>{if(event.pointerType!=='touch'&&scrambleMedia.matches)run()});button.addEventListener('pointerleave',reset);button.addEventListener('focus',run);button.addEventListener('blur',reset);button.addEventListener('click',()=>{if(scrambleMedia.matches)run()});scrambleMotion.addEventListener('change',reset);scrambleMedia.addEventListener('change',reset);
});

function fit(){const scale=innerWidth/1440;for(const {canvas,p} of sections){canvas.style.transform='translateX(-50%) '+(p.cls==='hero'?'':'translateY(-50%) ')+'scale('+scale+')';if(p.cls==='work'){const designHeight=innerHeight/scale;canvas.style.height=designHeight+'px';canvas.querySelectorAll('.item').forEach(n=>n.style.top=(Number(n.dataset.baseY)*designHeight/630)+'px');}}update()}
onscroll=()=>{scrollImpulse=Math.max(-1.5,Math.min(1.5,scrollImpulse+(scrollY-lastScroll)/110));lastScroll=scrollY;if(!ticking){ticking=true;requestAnimationFrame(update)}};onresize=fit;onpointermove=e=>{const oldX=px,oldY=py;px=e.clientX/innerWidth-.5;py=e.clientY/innerHeight-.5;fluidTargetAngle+=(px-oldX)*3+(py-oldY)*2;handleGlobePointer(e);if(!ticking){ticking=true;requestAnimationFrame(update)}};fit();
function goToRevealedWorks(behavior='instant'){
 const work=document.getElementById('work');
 window.scrollTo({top:scrollY+work.getBoundingClientRect().top+(work.offsetHeight-innerHeight)*.5,behavior});
}
document.querySelector('#fixed-nav nav a[href="#work"]').addEventListener('click',event=>{
 event.preventDefault();history.pushState(null,'','#work');goToRevealedWorks();
});
if(location.hash){requestAnimationFrame(()=>{if(location.hash==='#work')goToRevealedWorks();else if(location.hash==='#contact')openContacts();else{const target=document.getElementById(location.hash.slice(1));if(target)target.scrollIntoView({behavior:'instant'});}});}
