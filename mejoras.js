'use strict';
/* Datos derivados y práctica local. Sin cuentas, peticiones de red ni seguimiento. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CaribeMejoras = api;
})(typeof window === 'undefined' ? globalThis : window, function () {
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const sizes = [17, 19, 21], storageKey = 'caribe.lectura.tamano.v1';
  let size = 17, index = 0, answers = [];
  function getArticle(data, id) {
    const article = data.articles.find(a => a.id === id);
    if (!article) throw new Error('No se encontró la regla de práctica: ' + id);
    return article;
  }
  function robberyRows(data) {
    const rows = (data.robos || []).map(r => ({id:r.id,name:r.name,detail:r.detail,maximum:r.max,police:r.police,cuenta:r.cuenta,pdi:r.pdi,enfriamiento:r.enfriamiento,cargo:r.cargo}));
    if (rows.length !== 7 || rows.some(r => !(r.maximum >= 1) || !(r.police >= 1))) throw new Error('Revisar la tabla de robos: faltan datos.');
    return rows;
  }
  // Tabla genérica: en celular cada fila se vuelve una tarjeta con sus etiquetas (data-label).
  function dataTable(caption, head, rows, opts = {}) {
    return '<div class="data-table'+(opts.compact?' is-compact':'')+'" role="region" aria-label="'+esc(caption)+'" tabindex="0"><table><caption>'+esc(caption)+'</caption><thead><tr>'+head.map(h=>'<th scope="col">'+esc(h)+'</th>').join('')+'</tr></thead><tbody>'+
      rows.map(r => '<tr>'+r.map((c,i)=>i===0?'<th scope="row">'+c+'</th>':'<td data-label="'+esc(head[i])+'">'+c+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
  }
  function tableHTML(data, linkBase = '#articulo/') {
    const rows = robberyRows(data);
    return '<section class="robos-tabla" aria-label="Límites de robos">'+dataTable('Delincuentes y funcionarios por robo',['Robo','Máx. delincuentes','Mín. funcionarios','Quién cuenta','Enfriamiento personal'],
      rows.map(r => ['<span class="cell-title">'+esc(r.name)+'</span><small>'+esc(r.detail)+'</small>','<b class="num">'+r.maximum+'</b>','<b class="num">'+r.police+'</b>',(r.pdi?'':'<span class="pill warn">Sin PDI</span> ')+esc(r.cuenta),r.enfriamiento+' min'])) +
      '<p class="table-note">El máximo cuenta a todo el grupo: quienes entran, conductor, vigías y apoyo exterior. El mínimo se exige para empezar; no limita cuántos funcionarios responden.</p><a class="table-rule" href="'+esc(linkBase)+'limites-robos">Leer la regla completa →</a></section>';
  }
  // Comprobador: ¿se puede iniciar este robo con estas personas?
  function checkRobbery(data, id, criminals, carab, pdi) {
    const r = robberyRows(data).find(x => x.id === id); if (!r) return null;
    const counted = carab + (r.pdi ? pdi : 0), problems = [];
    if (criminals > r.maximum) problems.push('Son '+criminals+' delincuentes y el máximo es '+r.maximum+'. Cuentan también conductor, vigías y apoyos.');
    if (counted < r.police) problems.push('Cuentan '+counted+' funcionario'+(counted===1?'':'s')+' y el mínimo es '+r.police+'.'+(!r.pdi&&pdi>0?' En '+r.name+' la PDI no cuenta.':''));
    return { ok: problems.length === 0, robbery: r, counted, problems };
  }
  function checkerHTML(data, state) {
    const rows = robberyRows(data), s = state || {}, sel = s.id || rows[0].id;
    const res = checkRobbery(data, sel, s.criminals ?? 2, s.carab ?? 2, s.pdi ?? 0);
    const num = (name, label, value) => '<label class="field"><span>'+label+'</span><input type="number" inputmode="numeric" min="0" max="20" name="'+name+'" value="'+value+'"></label>';
    return '<form class="checker" id="comprobador" aria-labelledby="checker-title"><h2 id="checker-title">¿Podemos empezar?</h2><p>Elige el robo y cuenta a las personas. Es una ayuda: el juego y la regla deciden.</p><div class="checker-grid"><label class="field field-wide"><span>Robo</span><select name="id">'+rows.map(r=>'<option value="'+r.id+'"'+(r.id===sel?' selected':'')+'>'+esc(r.name)+'</option>').join('')+'</select></label>'+num('criminals','Delincuentes (todos)',s.criminals ?? 2)+num('carab','Carabineros en turno',s.carab ?? 2)+num('pdi','PDI en servicio',s.pdi ?? 0)+'</div>'+
      '<div class="checker-result '+(res.ok?'is-ok':'is-no')+'" role="status" aria-live="polite"><strong>'+(res.ok?'✓ Cumple los límites':'✕ Todavía no')+'</strong>'+(res.ok?'<p>'+esc(res.robbery.name)+': máximo '+res.robbery.maximum+' delincuentes y '+res.counted+' de '+res.robbery.police+' funcionarios necesarios.</p>':'<ul>'+res.problems.map(p=>'<li>'+esc(p)+'</li>').join('')+'</ul>')+'</div></form>';
  }
  // Texto con **negrita** y [[id|enlace]] (id de artículo o ruta).
  function inline(data, text) {
    return esc(text).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\[\[([\w-]+)\|([^\]]+)\]\]/g,(m,id,label)=>'<a href="'+(data.articles.some(a=>a.id===id)?'#articulo/':'#')+id+'">'+label+'</a>');
  }
  function clp(n) { return '$' + Number(n).toLocaleString('es-CL'); }
  function penalHTML(data) {
    return '<div class="penal">'+data.penal.map(c=>dataTable(c.categoria,['Cargo','Multa','Cárcel','Cuándo aplica'],c.cargos.map(([id,label,multa,min,crit])=>['<span class="cell-title">'+esc(label)+'</span>','<span class="num">'+clp(multa)+'</span>','<span class="num">'+(min?min+' min':'—')+'</span>',esc(crit)]))).join('')+'</div>';
  }
  function storesHTML(data) {
    return dataTable('Las 13 tiendas con caja fuerte',['Tienda','Ubicación','Máx.','Mín. funcionarios'],data.tiendas.map(([n,u])=>[esc(n),esc(u),'2','2']),{compact:true});
  }
  function blocksHTML(data, a, linkBase) {
    const t = s => inline(data, s);
    let h2 = 0;
    return a.blocks.map(b => {
      if (b.t === 'p') return '<p>'+t(b.text)+'</p>';
      if (b.t === 'h') return '<h2 id="s'+(++h2)+'" class="block-h">'+esc(b.text)+'</h2>';
      if (b.t === 'list') return '<ul class="rule-list">'+b.items.map(i=>'<li>'+t(i)+'</li>').join('')+'</ul>';
      if (b.t === 'steps') return '<ol class="rule-steps">'+b.items.map(i=>'<li>'+t(i)+'</li>').join('')+'</ol>';
      if (b.t === 'dont' || b.t === 'do') return '<div class="rule-box '+(b.t==='dont'?'is-dont':'is-do')+'"><h3>'+(b.title||(b.t==='dont'?'✕ No está permitido':'✓ Está permitido'))+'</h3><ul>'+b.items.map(i=>'<li>'+t(i)+'</li>').join('')+'</ul></div>';
      if (b.t === 'note') return '<aside class="callout is-'+esc(b.kind)+'"><strong>'+({mecanica:'En el juego · ',ojo:'Ojo · '}[b.kind]||'')+esc(b.title)+'</strong><p>'+t(b.text)+'</p></aside>';
      if (b.t === 'table') return dataTable(b.caption, b.head, b.rows.map(r => r.map((c,i)=>i===0?'<span class="cell-title">'+t(c)+'</span>':t(c))));
      if (b.t === 'robos') return tableHTML(data, linkBase);
      if (b.t === 'tiendas') return storesHTML(data);
      if (b.t === 'penal') return penalHTML(data);
      throw new Error('Bloque desconocido: ' + b.t);
    }).join('');
  }
  function blockText(a) {
    return (a.blocks||[]).map(b => [b.text, b.title, b.caption, ...(b.items||[]), ...(b.head||[]), ...((b.rows||[]).flat())].filter(Boolean).join(' ')).join(' ').replace(/\[\[[\w-]+\|([^\]]+)\]\]/g,'$1').replace(/\*\*/g,'');
  }
  function questions(data) {
    const jewelry = robberyRows(data).find(r => r.name === 'Joyería');
    const list = [
      {id:'informacion',article:'metagaming',prompt:'Ves en un stream dónde se esconde otro personaje. ¿Puedes usar ese dato dentro del juego?',options:['Sí, porque la transmisión es pública.','No. Tu personaje no obtuvo esa información dentro del rol.','Sí, si el streamer no se da cuenta.'],correct:1,explanation:'Usar información externa dentro del rol es metagaming. Lo que sabes como jugador no lo sabe automáticamente tu personaje.'},
      {id:'respuesta',article:'powergaming',prompt:'Quieres amarrar a otro personaje. ¿Cómo describes la acción?',options:['Describes un intento y le permites responder.','Decides que ya quedó amarrado y lo llevas sin respuesta.','Le obligas a aceptar la acción por un mensaje OOC.'],correct:0,explanation:'La otra persona debe tener una posibilidad de respuesta. Decidir sus acciones sin dejarle responder es powergaming.'},
      {id:'vida',article:'valorar-vida',prompt:'Te apuntan con un arma y estás en clara desventaja. ¿Qué corresponde?',options:['Actuar como si no hubiera peligro.','Ignorar el arma porque llevas poco dinero.','Cooperar y actuar con miedo coherente a perder la vida.'],correct:2,explanation:'Valorar la vida significa que el peligro influye en las decisiones de tu personaje.'},
      {id:'memoria',article:'pk-ck',prompt:'Reapareces después de que tu personaje fue derribado. ¿Puedes volver por venganza?',options:['Sí, si cambias de ropa.','No. Termina tu participación en esa escena.','Sí, si un amigo te espera cerca.'],correct:1,explanation:'Al reaparecer termina la participación en la escena. No puedes regresar para vengarte ni usar los recuerdos que la regla excluye.'},
      {id:'rehen',article:'rehenes',prompt:'Se cumple una hora desde que capturaste a un rehén. ¿Puedes alargar la retención por un acuerdo OOC?',options:['No. El máximo es absoluto y no permite esa extensión.','Sí, si ambas partes están de acuerdo.','Sí, si lo liberas y recapturas inmediatamente.'],correct:0,explanation:'El máximo es una hora desde cada captura. No se extiende por acuerdo OOC ni se reinicia mediante una recaptura inmediata.'},
      {id:'grupo',article:'limites-robos',prompt:'Tu grupo ya completó el máximo de participantes de un robo. ¿Puede sumarse un vigía extra porque no retirará botín?',options:['Sí, porque queda fuera del local.','Sí, porque no recibe dinero.','No. Los vigías y apoyos también cuentan.'],correct:2,explanation:'El límite abarca toda la escena: ejecutores, conductor, vigías y apoyo exterior. El cupo de quienes retiran botín es una restricción distinta.'},
      {id:'policias',article:'limites-robos',prompt:'Según la normativa, ¿cuál es el mínimo policial para una joyería?',options:[String(jewelry.police)+' policías.','No hay mínimo policial.','Basta con que el juego deje comenzar.'],correct:0,explanation:'La tabla aprobada exige '+jewelry.police+' policías para joyería. Que una interacción esté disponible no elimina los requisitos de la norma.'},
      {id:'megavision',article:'limites-robos',prompt:'Hay 3 Carabineros en turno y 1 PDI en servicio. ¿Se puede iniciar el robo a Megavisión?',options:['Sí, son 4 funcionarios.','No. Megavisión cuenta solo Carabineros y necesita 4.','Sí, si el juego deja empezar.'],correct:1,explanation:'Megavisión exige 4 Carabineros en turno; la PDI no cuenta en ese robo. En los otros seis robos sí cuentan juntos.'},
      {id:'orden',article:'allanamiento',prompt:'Eres Teniente e investigas un laboratorio. El juego aprueba tu orden directo por tu rango. ¿Qué haces?',options:['Entras de inmediato: la orden ya está aprobada.','Consigues el visto bueno de otro oficial; si no hay, no allanas.','Le pides a un admin que abra la puerta.'],correct:1,explanation:'La orden la autoriza un oficial distinto de quien investiga. La aprobación automática por rango no reemplaza esa revisión.'},
      {id:'zona',article:'zona-segura',prompt:'Una persecución llega a una zona segura. ¿Qué regla corresponde?',options:['Puedes continuar el delito porque empezó afuera.','No continuar delitos dentro; entrar no borra las consecuencias previas.','Todo lo ocurrido queda automáticamente anulado.'],correct:1,explanation:'No se continúan delitos en una zona segura. Tampoco se usa su entrada para cancelar consecuencias o reiniciar la participación.'}
    ];
    list.forEach(q => { getArticle(data, q.article); });
    if (!getArticle(data,'rehenes').paragraphs.some(p => p.includes('máximo 1 hora'))) throw new Error('Revisar pregunta de rehenes: la regla cambió.');
    return list;
  }
  function loadPreference(storage) {
    try { const value = Number(storage.getItem(storageKey)); size = sizes.includes(value) ? value : 17; } catch { size = 17; }
    return size;
  }
  function changeSize(action, storage) {
    if (!['font-down','font-reset','font-up'].includes(action)) return size;
    const position = sizes.indexOf(size);
    size = action === 'font-reset' ? 17 : sizes[Math.max(0, Math.min(sizes.length-1, position + (action === 'font-up' ? 1 : -1)))];
    try { storage.setItem(storageKey, String(size)); } catch { /* La sesión sigue funcionando sin almacenamiento. */ }
    return size;
  }
  function readerHTML() {
    return '<div class="reader-tools" role="group" aria-label="Tamaño del texto"><span>Tamaño de lectura</span><button type="button" class="reader-size" data-action="font-down" aria-label="Disminuir tamaño del texto"'+(size===17?' disabled':'')+'>A−</button><button type="button" class="reader-size" data-action="font-reset" aria-label="Restablecer tamaño del texto">Normal</button><button type="button" class="reader-size" data-action="font-up" aria-label="Aumentar tamaño del texto"'+(size===21?' disabled':'')+'>A+</button><output id="reading-size" aria-live="polite">'+size+' px</output></div>';
  }
  function answer(data, option) {
    const list = questions(data);
    if (!Number.isInteger(option) || option < 0 || option > 2 || index >= list.length || answers[index] !== undefined) return false;
    answers[index] = option; return true;
  }
  function next(data) { if (index >= questions(data).length || answers[index] === undefined) return false; index++; return true; }
  function restart() { index = 0; answers = []; }
  function quizHTML(data) {
    const list = questions(data), total = list.length;
    if (index >= total) {
      const correct = list.filter((q,i) => q.correct === answers[i]).length;
      return '<section class="quiz-sheet" aria-labelledby="quiz-result"><div class="eyebrow">Práctica terminada</div><h2 id="quiz-result" tabindex="-1">'+correct+' de '+total+' respuestas correctas</h2><p>Revisa las situaciones y vuelve a intentarlo cuando quieras. Este resultado es solo de práctica.</p><ol class="quiz-review">'+list.map((q,i) => '<li><strong>'+(q.correct===answers[i]?'✓ Correcta':'Revisar')+' · '+esc(q.prompt)+'</strong><p>'+esc(q.explanation)+'</p><a href="#articulo/'+q.article+'">Leer '+esc(getArticle(data,q.article).title)+' →</a></li>').join('')+'</ol><button class="primary" data-action="quiz-restart">Volver a practicar</button></section>';
    }
    const q = list[index], selected = answers[index], answered = selected !== undefined;
    return '<section class="quiz-sheet"><div class="quiz-progress"><span>Situación '+(index+1)+' de '+total+'</span><progress value="'+index+'" max="'+total+'" aria-label="Situaciones completadas">'+index+' de '+total+'</progress></div><fieldset class="quiz-question"><legend id="quiz-current" tabindex="-1">'+esc(q.prompt)+'</legend><div class="quiz-options">'+q.options.map((text,i) => '<button type="button" data-quiz-answer="'+i+'" class="quiz-option'+(answered?(i===q.correct?' is-correct':i===selected?' is-wrong':''):'')+'"'+(answered?' disabled':'')+'><span class="option-letter" aria-hidden="true">'+String.fromCharCode(65+i)+'</span><span>'+esc(text)+(answered&&i===selected?'<small>Tu respuesta</small>':'')+(answered&&i===q.correct?'<small>Respuesta correcta</small>':'')+'</span></button>').join('')+'</div></fieldset>'+
      (answered?'<div class="quiz-feedback" id="quiz-feedback" role="status" tabindex="-1"><strong>'+(selected===q.correct?'Bien, esa es la idea.':'Revisemos esta situación.')+'</strong><p>'+esc(q.explanation)+'</p><a href="#articulo/'+q.article+'">Leer la regla completa →</a></div><button class="primary" data-action="quiz-next">'+(index===total-1?'Ver resultado':'Siguiente situación →')+'</button>':'<p class="quiz-hint">Elige una respuesta para ver la explicación.</p>')+'</section>';
  }
  function practiceReadingHTML(data) {
    return questions(data).map(q => '<section class="practice-reading"><h2>'+esc(q.prompt)+'</h2><ol type="A">'+q.options.map(o=>'<li>'+esc(o)+'</li>').join('')+'</ol><details><summary>Ver respuesta y explicación</summary><p><strong>'+esc(q.options[q.correct])+'</strong></p><p>'+esc(q.explanation)+'</p><a href="lectura.html#'+q.article+'">Leer la regla completa →</a></details></section>').join('');
  }
  return {robberyRows,tableHTML,checkRobbery,checkerHTML,blocksHTML,blockText,inline,dataTable,questions,loadPreference,changeSize,readerHTML,answer,next,restart,quizHTML,practiceReadingHTML,getSize:()=>size,storageKey};
});
