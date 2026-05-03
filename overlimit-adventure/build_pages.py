#!/usr/bin/env python3
# -*- coding: utf-8 -*-

with open('pages/amazon-madidi-2d-1n.html', 'r', encoding='utf-8') as f:
    template = f.read()

# ============================================================
# PAGE 1: amazon-pampas-yacuma-2d-1n.html
# ============================================================
page1 = template

page1 = page1.replace(
    '<title>Jungla Madidi 2D/1N | Amazon Bolivia - OverLimitAdventure</title>',
    '<title>Pampas del Yacuma 2D/1N | Amazon Bolivia - OverLimitAdventure</title>'
)

page1 = page1.replace(
    '<meta name="description" content="Jungla Madidi 2 dias y 1 noche. Navegacion por los rios Beni y Tuichi, senderos de selva y ecolodge en el Parque Nacional Madidi.">',
    '<meta name="description" content="Pampas del Yacuma 2 dias y 1 noche. Fauna amazónica, caimanes, capibaras, aves y posibilidad de delfines rosados segun temporada.">'
)

# Hero image
page1 = page1.replace(
    '<img src="../images/jungla_boliviana.jpg" alt="Jungla Madidi">',
    '<img src="../images/pampas.jpg" alt="Pampas del Yacuma">'
)

# Hero kicker
page1 = page1.replace(
    '<span class="amz-hero-kicker">Tours de Jungla | Parque Nacional Madidi</span>',
    '<span class="amz-hero-kicker">Tours de Pampas | Fauna visible</span>'
)

# Hero title
page1 = page1.replace(
    '<h1 class="amz-hero-title">Jungla Madidi <span>2D / 1N</span></h1>',
    '<h1 class="amz-hero-title">Pampas del Yacuma <span>2D / 1N</span></h1>'
)

# Hero subtitle
page1 = page1.replace(
    'Una escapada perfecta para vivir la selva amazónica boliviana en poco tiempo, navegando por los rios Beni y Tuichi y explorando senderos dentro del Parque Nacional Madidi.',
    'La mejor opcion corta para observar fauna amazónica: caimanes, capibaras, aves y, segun temporada, delfines rosados.'
)

# WhatsApp links
page1 = page1.replace(
    'https://wa.me/59162364372?text=Hola%2C%20quiero%20informacion%20del%20tour%20Jungla%20Madidi%202D%2F1N.',
    'https://wa.me/59162364372?text=Hola%2C%20quiero%20informacion%20del%20tour%20Pampas%20del%20Yacuma%202D%2F1N.'
)

# Hero metrics
page1 = page1.replace(
    '<span class="amz-hero-metric"><strong>2 dias</strong> inmersion corta</span>',
    '<span class="amz-hero-metric"><strong>2 dias</strong> fauna intensa</span>'
)
page1 = page1.replace(
    '<span class="amz-hero-metric"><strong>USD 230</strong> precio base</span>',
    '<span class="amz-hero-metric"><strong>USD 245</strong> precio base</span>'
)
page1 = page1.replace(
    '<span class="amz-hero-metric"><strong>Ideal</strong> para primer contacto</span>',
    '<span class="amz-hero-metric"><strong>Ideal</strong> para viaje corto y visual</span>'
)

# Float bar
page1 = page1.replace(
    '<strong>USD 230</strong>\n      </div>\n      <div class="amz-float-bar-divider"></div>\n      <div class="amz-float-bar-item">\n        <small>Destino</small>\n        <strong>Madidi</strong>',
    '<strong>USD 245</strong>\n      </div>\n      <div class="amz-float-bar-divider"></div>\n      <div class="amz-float-bar-item">\n        <small>Destino</small>\n        <strong>Yacuma</strong>'
)

# Resumen title
page1 = page1.replace(
    'La selva como <span class="amz-text-gold">primer gran impacto</span>',
    'La ruta corta para ver mucha <span class="amz-text-gold">fauna</span>'
)

# Resumen lead
page1 = page1.replace(
    'En OverLimitAdventure te invitamos a descubrir la magia del Parque Nacional Madidi en una experiencia corta pero intensa. Este programa de 2 dias y 1 noche es ideal para quienes quieren entrar en contacto con la selva sin disponer de muchos dias.',
    'En OverLimitAdventure, este tour de 2 dias y 1 noche en las Pampas del Yacuma es ideal para quienes quieren maximizar el avistamiento de fauna en poco tiempo. El recorrido parte por carretera hacia Santa Rosa, con posibilidades de ver perezosos, osos hormigueros, aves y otros animales durante el trayecto.'
)

# Resumen body
page1 = page1.replace(
    'La aventura comienza desde Rurrenabaque, navegando por los rios Beni y Tuichi hasta ingresar al parque. Ya en el ecolodge, el recorrido continua con caminatas interpretativas por senderos de bosque, donde podras conocer plantas, arboles y usos tradicionales de la selva. Es una opcion breve, comoda y muy completa para una primera inmersion amazónica.',
    'Luego, un corto paseo en bote lleva hasta el lodge, desde donde comienzan las excursiones por el rio Yacuma para observar caimanes, capibaras, tortugas y gran variedad de aves. En determinadas epocas del año tambien existe posibilidad de nadar con delfines rosados.'
)

# Timeline Day 1
page1 = page1.replace(
    '<h4 class="amz-timeline-title">Navegacion y primer contacto con la selva</h4>',
    '<h4 class="amz-timeline-title">Traslado a Santa Rosa y navegacion</h4>'
)
page1 = page1.replace(
    'Salida desde Rurrenabaque en lancha por los rios Beni y Tuichi. Durante el trayecto podras observar la transicion de paisajes hasta llegar al corazon del Parque Nacional Madidi. Al llegar al ecolodge, almuerzo y caminata interpretativa por senderos cercanos para conocer flora, fauna y usos tradicionales del bosque.',
    'Salida desde Rurrenabaque por carretera hacia Santa Rosa. Durante el trayecto, posibilidad de observar perezosos, osos hormigueros y aves. Paseo en bote por el rio Yacuma hasta el lodge. Por la tarde, primera excursion de observacion de fauna.'
)
page1 = page1.replace(
    '<span class="amz-tag">Navegacion fluvial</span>\n                    <span class="amz-tag">Caminata interpretativa</span>\n                    <span class="amz-tag">Ecolodge</span>',
    '<span class="amz-tag">Traslado carretera</span>\n                    <span class="amz-tag">Rio Yacuma</span>\n                    <span class="amz-tag">Primera excursion</span>'
)

# Timeline Day 2
page1 = page1.replace(
    '<h4 class="amz-timeline-title">Ultima caminata y regreso</h4>',
    '<h4 class="amz-timeline-title">Fauna matutina y retorno</h4>'
)
page1 = page1.replace(
    'Madrugada opcional para observacion de aves. Desayuno y ultima caminata por los alrededores del ecolodge antes de emprender el regreso por el rio hacia Rurrenabaque, llegando a medio dia.',
    'Excursion matutina para observar fauna activa al amanecer. Desayuno en el lodge y retorno en bote hacia Santa Rosa, luego traslado a Rurrenabaque.'
)
page1 = page1.replace(
    '<span class="amz-tag">Observacion de aves</span>\n                    <span class="amz-tag">Caminata matutina</span>\n                    <span class="amz-tag">Retorno a Rurrenabaque</span>',
    '<span class="amz-tag">Fauna al amanecer</span>\n                    <span class="amz-tag">Retorno</span>\n                    <span class="amz-tag">Ultima navegacion</span>'
)

# Highlights
page1 = page1.replace(
    '<h4 class="amz-highlight-title">Navegacion escenica</h4>\n                <p class="amz-highlight-text">Beni y Tuichi abren la entrada a Madidi desde el primer tramo del viaje.</p>',
    '<h4 class="amz-highlight-title">Santa Rosa</h4>\n                <p class="amz-highlight-text">El traslado ya empieza a mostrar fauna en el camino.</p>'
)
page1 = page1.replace(
    '<h4 class="amz-highlight-title">Ingreso al parque</h4>\n                <p class="amz-highlight-text">Una manera corta de conocer uno de los territorios con mayor biodiversidad del planeta.</p>',
    '<h4 class="amz-highlight-title">Rio Yacuma</h4>\n                <p class="amz-highlight-text">Navegacion corta y muy productiva para observar animales.</p>'
)
page1 = page1.replace(
    '<h4 class="amz-highlight-title">Senderos interpretativos</h4>\n                <p class="amz-highlight-text">Caminatas accesibles para leer la selva con mas contexto y menos prisa.</p>',
    '<h4 class="amz-highlight-title">Delfines rosados</h4>\n                <p class="amz-highlight-text">Segun temporada, la experiencia gana un momento memorable y muy fotografiable.</p>'
)
page1 = page1.replace(
    '<h4 class="amz-highlight-title">Ecolodge amazónico</h4>\n                <p class="amz-highlight-text">Comodidad suficiente para vivir la selva sin perder el ritmo del viaje.</p>',
    '<h4 class="amz-highlight-title">Lodge en pampas</h4>\n                <p class="amz-highlight-text">Base simple y funcional para maximizar salidas de observacion.</p>'
)

# Sidebar
page1 = page1.replace(
    '<span class="amz-ficha-stat-value">Rurrenabaque</span>',
    '<span class="amz-ficha-stat-value">Santa Rosa - Beni</span>'
)
page1 = page1.replace(
    '<span class="amz-ficha-stat-value">Breve pero intenso</span>',
    '<span class="amz-ficha-stat-value">Intenso y visual</span>'
)
page1 = page1.replace(
    '<span class="amz-ficha-stat-value">Desde USD 230</span>',
    '<span class="amz-ficha-stat-value">Desde USD 245</span>'
)
page1 = page1.replace(
    '<div class="amz-ficha-price-value">USD 230</div>',
    '<div class="amz-ficha-price-value">USD 245</div>'
)

# Checklist
page1 = page1.replace(
    '<span class="amz-check-text">Navegacion por rios Beni y Tuichi</span>',
    '<span class="amz-check-text">Traslado Rurrenabaque-Santa Rosa</span>'
)
page1 = page1.replace(
    '<span class="amz-check-text">Caminatas por senderos de selva</span>',
    '<span class="amz-check-text">Navegacion Yacuma</span>'
)
page1 = page1.replace(
    '<span class="amz-check-text">Ecolodge en entorno amazónico</span>',
    '<span class="amz-check-text">1 noche en lodge</span>'
)
page1 = page1.replace(
    '<span class="amz-check-text">Guia local especializado</span>',
    '<span class="amz-check-text">Guia especializado</span>'
)

# Add extra checklist item for excursions
page1 = page1.replace(
    '<span class="amz-check-text">Guia especializado</span>\n              </div>\n            </div>',
    '<span class="amz-check-text">Guia especializado</span>\n              </div>\n              <div class="amz-check">\n                <div class="amz-check-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg></div>\n                <span class="amz-check-text">Excursiones de fauna</span>\n              </div>\n            </div>'
)

# Gallery images and captions
page1 = page1.replace(
    '<img src="../images/jungla_boliviana.jpg" alt="Selva amazónica boliviana">',
    '<img src="../images/pampas.jpg" alt="Pampas del Yacuma">'
)
page1 = page1.replace(
    '<img src="../images/pampas.jpg" alt="Paisaje amazónico">',
    '<img src="../images/pampas.jpg" alt="Navegacion Yacuma">'
)
page1 = page1.replace(
    '<img src="../images/jungla_boliviana.jpg" alt="Senderos de selva">',
    '<img src="../images/pampas.jpg" alt="Fauna de pampas">'
)
page1 = page1.replace(
    '<img src="../images/pampas.jpg" alt="Fauna amazónica">',
    '<img src="../images/pampas.jpg" alt="Vida silvestre de pampas">'
)

page1 = page1.replace(
    '<span class="amz-gallery-caption">Selva del Parque Nacional Madidi</span>',
    '<span class="amz-gallery-caption">Paisaje de las Pampas del Yacuma</span>'
)
page1 = page1.replace(
    '<span class="amz-gallery-caption">Navegacion por rios amazónicos</span>',
    '<span class="amz-gallery-caption">Navegacion por el rio Yacuma</span>'
)
page1 = page1.replace(
    '<span class="amz-gallery-caption">Senderos interpretativos</span>',
    '<span class="amz-gallery-caption">Observacion de fauna</span>'
)
page1 = page1.replace(
    '<span class="amz-gallery-caption">Vida silvestre del bosque</span>',
    '<span class="amz-gallery-caption">Vida silvestre de las pampas</span>'
)

# Related tours
page1 = page1.replace(
    '<h3 class="amz-related-title">Cultura de la Jungla 3D / 2N</h3>\n            <p class="amz-related-text">Si quieres sumar comunidad local y una mirada mas cultural al bosque, esta es la progresion natural.</p>\n            <a href="amazon-cultura-jungla-3d-2n.html" class="amz-btn amz-btn-outline" style="padding:12px 24px;font-size:12px;">Ver tour</a>',
    '<h3 class="amz-related-title">Pampas del Yacuma 3D / 2N</h3>\n            <p class="amz-related-text">Mas tiempo de observacion y actividades fluviales si no quieres que la salida se quede corta.</p>\n            <a href="amazon-pampas-yacuma-3d-2n.html" class="amz-btn amz-btn-outline" style="padding:12px 24px;font-size:12px;">Ver tour</a>'
)
page1 = page1.replace(
    '<h3 class="amz-related-title">Madidi Magico 4D / 3N</h3>\n            <p class="amz-related-text">Mas dias para caminar con calma, observar y sentir la selva sin formato express.</p>\n            <a href="amazon-madidi-magico-4d-3n.html" class="amz-btn amz-btn-outline" style="padding:12px 24px;font-size:12px;">Ver tour</a>',
    '<h3 class="amz-related-title">Jungla Madidi 2D / 1N</h3>\n            <p class="amz-related-text">Si quieres cambiar fauna abierta por senderos, rios y bosque, esta es la puerta de entrada.</p>\n            <a href="amazon-madidi-2d-1n.html" class="amz-btn amz-btn-outline" style="padding:12px 24px;font-size:12px;">Ver tour</a>'
)
page1 = page1.replace(
    '<h3 class="amz-related-title">Hub Amazon</h3>\n            <p class="amz-related-text">Vuelve a la vista general para comparar jungla y pampas dentro de la nueva arquitectura.</p>\n            <a href="amazon.html" class="amz-btn amz-btn-outline" style="padding:12px 24px;font-size:12px;">Volver</a>',
    '<h3 class="amz-related-title">Hub Amazon</h3>\n            <p class="amz-related-text">Regresa a la categoria general para comparar Pampas y Madidi en una sola vista.</p>\n            <a href="amazon.html" class="amz-btn amz-btn-outline" style="padding:12px 24px;font-size:12px;">Volver</a>'
)

# Final CTA
page1 = page1.replace(
    '<h2 class="amz-cta-title">¿Listo para vivir la <span>selva?</span></h2>',
    '<h2 class="amz-cta-title">¿Listo para vivir las <span>pampas?</span></h2>'
)
page1 = page1.replace(
    'Reserva tu lugar ahora y comienza tu aventura en el corazon de la Amazonia boliviana. Nuestro equipo te acompanara en cada paso.',
    'Reserva tu lugar ahora y comienza tu aventura en las Pampas del Yacuma. Nuestro equipo te acompanara en cada paso.'
)

with open('pages/amazon-pampas-yacuma-2d-1n.html', 'w', encoding='utf-8') as f:
    f.write(page1)

print('Page 1 written: pages/amazon-pampas-yacuma-2d-1n.html')


# ============================================================
# PAGE 2: amazon-pampas-yacuma-3d-2n.html
# ============================================================
page2 = template

page2 = page2.replace(
    '<title>Jungla Madidi 2D/1N | Amazon Bolivia - OverLimitAdventure</title>',
    '<title>Pampas del Yacuma 3D/2N | Amazon Bolivia - OverLimitAdventure</title>'
)

page2 = page2.replace(
    '<meta name="description" content="Jungla Madidi 2 dias y 1 noche. Navegacion por los rios Beni y Tuichi, senderos de selva y ecolodge en el Parque Nacional Madidi.">',
    '<meta name="description" content="Pampas del Yacuma 3 dias y 2 noches. Navegacion, vida silvestre, excursion nocturna, pesca deportiva de pirañas y delfines rosados segun temporada.">'
)

# Hero image
page2 = page2.replace(
    '<img src="../images/jungla_boliviana.jpg" alt="Jungla Madidi">',
    '<img src="../images/pampas.jpg" alt="Pampas del Yacuma">'
)

# Hero kicker
page2 = page2.replace(
    '<span class="amz-hero-kicker">Tours de Jungla | Parque Nacional Madidi</span>',
    '<span class="amz-hero-kicker">Tours de Pampas | Version extendida</span>'
)

# Hero title
page2 = page2.replace(
    '<h1 class="amz-hero-title">Jungla Madidi <span>2D / 1N</span></h1>',
    '<h1 class="amz-hero-title">Pampas del Yacuma <span>3D / 2N</span></h1>'
)

# Hero subtitle
page2 = page2.replace(
    'Una escapada perfecta para vivir la selva amazónica boliviana en poco tiempo, navegando por los rios Beni y Tuichi y explorando senderos dentro del Parque Nacional Madidi.',
    'Mas tiempo para explorar las pampas bolivianas, con navegacion, vida silvestre, pesca deportiva y experiencias amazónicas inolvidables.'
)

# WhatsApp links
page2 = page2.replace(
    'https://wa.me/59162364372?text=Hola%2C%20quiero%20informacion%20del%20tour%20Jungla%20Madidi%202D%2F1N.',
    'https://wa.me/59162364372?text=Hola%2C%20quiero%20informacion%20del%20tour%20Pampas%20del%20Yacuma%203D%2F2N.'
)

# Hero metrics
page2 = page2.replace(
    '<span class="amz-hero-metric"><strong>2 dias</strong> inmersion corta</span>',
    '<span class="amz-hero-metric"><strong>3 dias</strong> pampas completas</span>'
)
page2 = page2.replace(
    '<span class="amz-hero-metric"><strong>USD 230</strong> precio base</span>',
    '<span class="amz-hero-metric"><strong>USD 345</strong> precio base</span>'
)
page2 = page2.replace(
    '<span class="amz-hero-metric"><strong>Ideal</strong> para primer contacto</span>',
    '<span class="amz-hero-metric"><strong>Ideal</strong> para amantes de fauna</span>'
)

# Float bar
page2 = page2.replace(
    '<strong>2D / 1N</strong>',
    '<strong>3D / 2N</strong>'
)
page2 = page2.replace(
    '<strong>USD 230</strong>\n      </div>\n      <div class="amz-float-bar-divider"></div>\n      <div class="amz-float-bar-item">\n        <small>Destino</small>\n        <strong>Madidi</strong>',
    '<strong>USD 345</strong>\n      </div>\n      <div class="amz-float-bar-divider"></div>\n      <div class="amz-float-bar-item">\n        <small>Destino</small>\n        <strong>Yacuma</strong>'
)

# Resumen title
page2 = page2.replace(
    'La selva como <span class="amz-text-gold">primer gran impacto</span>',
    'Cuando Yacuma gana mas <span class="amz-text-gold">tiempo de rio</span>'
)

# Resumen lead
page2 = page2.replace(
    'En OverLimitAdventure te invitamos a descubrir la magia del Parque Nacional Madidi en una experiencia corta pero intensa. Este programa de 2 dias y 1 noche es ideal para quienes quieren entrar en contacto con la selva sin disponer de muchos dias.',
    'Este programa de OverLimitAdventure amplia la experiencia clasica de pampas con 3 dias y 2 noches en Yacuma / Santa Rosa - Beni. La propuesta esta pensada para quienes quieren dedicar mas tiempo al avistamiento de fauna y a las actividades de rio.'
)

# Resumen body
page2 = page2.replace(
    'La aventura comienza desde Rurrenabaque, navegando por los rios Beni y Tuichi hasta ingresar al parque. Ya en el ecolodge, el recorrido continua con caminatas interpretativas por senderos de bosque, donde podras conocer plantas, arboles y usos tradicionales de la selva. Es una opcion breve, comoda y muy completa para una primera inmersion amazónica.',
    'Segun la informacion publica del operador, el itinerario contempla navegacion por el rio Yacuma, observacion de animales, posibilidad de pesca deportiva de pirañas, excursion nocturna y opcion de nado con delfines rosados de acuerdo con la temporada. Es una excelente alternativa para quienes quieren una experiencia mas completa en pampas sin entrar a la selva profunda.'
)

# Timeline - need to rebuild for 3 days
# First replace Day 1 title and text
timeline_old_day1 = """<div class="amz-timeline-item">
                <div class="amz-timeline-node"><span>1</span></div>
                <div class="amz-timeline-card">
                  <span class="amz-timeline-day">Dia 1</span>
                  <h4 class="amz-timeline-title">Navegacion y primer contacto con la selva</h4>
                  <p class="amz-timeline-text">
                    Salida desde Rurrenabaque en lancha por los rios Beni y Tuichi. Durante el trayecto podras observar la transicion de paisajes hasta llegar al corazon del Parque Nacional Madidi. Al llegar al ecolodge, almuerzo y caminata interpretativa por senderos cercanos para conocer flora, fauna y usos tradicionales del bosque.
                  </p>
                  <div class="amz-timeline-activities">
                    <span class="amz-tag">Navegacion fluvial</span>
                    <span class="amz-tag">Caminata interpretativa</span>
                    <span class="amz-tag">Ecolodge</span>
                  </div>
                </div>
              </div>
              <div class="amz-timeline-item">
                <div class="amz-timeline-node"><span>2</span></div>
                <div class="amz-timeline-card">
                  <span class="amz-timeline-day">Dia 2</span>
                  <h4 class="amz-timeline-title">Ultima caminata y regreso</h4>
                  <p class="amz-timeline-text">
                    Madrugada opcional para observacion de aves. Desayuno y ultima caminata por los alrededores del ecolodge antes de emprender el regreso por el rio hacia Rurrenabaque, llegando a medio dia.
                  </p>
                  <div class="amz-timeline-activities">
                    <span class="amz-tag">Observacion de aves</span>
                    <span class="amz-tag">Caminata matutina</span>
                    <span class="amz-tag">Retorno a Rurrenabaque</span>
                  </div>
                </div>
              </div>"""

timeline_new = """<div class="amz-timeline-item">
                <div class="amz-timeline-node"><span>1</span></div>
                <div class="amz-timeline-card">
                  <span class="amz-timeline-day">Dia 1</span>
                  <h4 class="amz-timeline-title">Traslado y primera navegacion</h4>
                  <p class="amz-timeline-text">
                    Salida desde Rurrenabaque hacia Santa Rosa por carretera. Paseo en bote por el rio Yacuma hasta el lodge. Primera excursion de observacion de fauna: caimanes, capibaras y aves.
                  </p>
                  <div class="amz-timeline-activities">
                    <span class="amz-tag">Traslado</span>
                    <span class="amz-tag">Rio Yacuma</span>
                    <span class="amz-tag">Observacion fauna</span>
                  </div>
                </div>
              </div>
              <div class="amz-timeline-item">
                <div class="amz-timeline-node"><span>2</span></div>
                <div class="amz-timeline-card">
                  <span class="amz-timeline-day">Dia 2</span>
                  <h4 class="amz-timeline-title">Dia completo de actividades</h4>
                  <p class="amz-timeline-text">
                    Excursion matutina para observacion de fauna al amanecer. Pesca deportiva de pirañas. Tarde libre o excursión adicional. Despues de la cena, excursion nocturna para observar caimanes y otros animales nocturnos.
                  </p>
                  <div class="amz-timeline-activities">
                    <span class="amz-tag">Pesca de pirañas</span>
                    <span class="amz-tag">Excursion nocturna</span>
                    <span class="amz-tag">Fauna diurna y nocturna</span>
                  </div>
                </div>
              </div>
              <div class="amz-timeline-item">
                <div class="amz-timeline-node"><span>3</span></div>
                <div class="amz-timeline-card">
                  <span class="amz-timeline-day">Dia 3</span>
                  <h4 class="amz-timeline-title">Nado con delfines y retorno</h4>
                  <p class="amz-timeline-text">
                    Segun temporada, oportunidad de nado con delfines rosados en el rio Yacuma. Ultima excursion matutina y retorno a Rurrenabaque.
                  </p>
                  <div class="amz-timeline-activities">
                    <span class="amz-tag">Delfines rosados</span>
                    <span class="amz-tag">Ultima excursion</span>
                    <span class="amz-tag">Retorno</span>
                  </div>
                </div>
              </div>"""

page2 = page2.replace(timeline_old_day1, timeline_new)

# Highlights
page2 = page2.replace(
    '<h4 class="amz-highlight-title">Navegacion escenica</h4>\n                <p class="amz-highlight-text">Beni y Tuichi abren la entrada a Madidi desde el primer tramo del viaje.</p>',
    '<h4 class="amz-highlight-title">Navegacion extendida</h4>\n                <p class="amz-highlight-text">Mas tiempo en Yacuma significa mas oportunidades de observacion.</p>'
)
page2 = page2.replace(
    '<h4 class="amz-highlight-title">Ingreso al parque</h4>\n                <p class="amz-highlight-text">Una manera corta de conocer uno de los territorios con mayor biodiversidad del planeta.</p>',
    '<h4 class="amz-highlight-title">Excursion nocturna</h4>\n                <p class="amz-highlight-text">El paisaje cambia por completo cuando cae la luz.</p>'
)
page2 = page2.replace(
    '<h4 class="amz-highlight-title">Senderos interpretativos</h4>\n                <p class="amz-highlight-text">Caminatas accesibles para leer la selva con mas contexto y menos prisa.</p>',
    '<h4 class="amz-highlight-title">Pesca de pirañas</h4>\n                <p class="amz-highlight-text">Una actividad clasica de pampas que suma dinamica al viaje.</p>'
)
page2 = page2.replace(
    '<h4 class="amz-highlight-title">Ecolodge amazónico</h4>\n                <p class="amz-highlight-text">Comodidad suficiente para vivir la selva sin perder el ritmo del viaje.</p>',
    '<h4 class="amz-highlight-title">Delfines rosados</h4>\n                <p class="amz-highlight-text">Segun temporada, la experiencia fluvial gana un momento iconico.</p>'
)

# Sidebar
page2 = page2.replace(
    '<span class="amz-ficha-stat-value">Rurrenabaque</span>',
    '<span class="amz-ficha-stat-value">Santa Rosa - Beni</span>'
)
page2 = page2.replace(
    '<span class="amz-ficha-stat-value">2 dias / 1 noche</span>',
    '<span class="amz-ficha-stat-value">3 dias / 2 noches</span>'
)
page2 = page2.replace(
    '<span class="amz-ficha-stat-value">Breve pero intenso</span>',
    '<span class="amz-ficha-stat-value">Completo y variado</span>'
)
page2 = page2.replace(
    '<span class="amz-ficha-stat-value">Desde USD 230</span>',
    '<span class="amz-ficha-stat-value">Desde USD 345</span>'
)
page2 = page2.replace(
    '<div class="amz-ficha-price-value">USD 230</div>',
    '<div class="amz-ficha-price-value">USD 345</div>'
)

# Checklist
page2 = page2.replace(
    '<span class="amz-check-text">Navegacion por rios Beni y Tuichi</span>',
    '<span class="amz-check-text">Traslado Rurrenabaque-Santa Rosa</span>'
)
page2 = page2.replace(
    '<span class="amz-check-text">Caminatas por senderos de selva</span>',
    '<span class="amz-check-text">Navegacion Yacuma</span>'
)
page2 = page2.replace(
    '<span class="amz-check-text">Ecolodge en entorno amazónico</span>',
    '<span class="amz-check-text">2 noches en lodge</span>'
)
page2 = page2.replace(
    '<span class="amz-check-text">Guia local especializado</span>',
    '<span class="amz-check-text">Guia especializado</span>'
)

# Add extra checklist items for 3D tour
page2 = page2.replace(
    '<span class="amz-check-text">Guia especializado</span>\n              </div>\n            </div>',
    '<span class="amz-check-text">Guia especializado</span>\n              </div>\n              <div class="amz-check">\n                <div class="amz-check-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg></div>\n                <span class="amz-check-text">Pesca deportiva</span>\n              </div>\n              <div class="amz-check">\n                <div class="amz-check-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg></div>\n                <span class="amz-check-text">Excursion nocturna</span>\n              </div>\n            </div>'
)

# Gallery images and captions
page2 = page2.replace(
    '<img src="../images/jungla_boliviana.jpg" alt="Selva amazónica boliviana">',
    '<img src="../images/pampas.jpg" alt="Pampas del Yacuma">'
)
page2 = page2.replace(
    '<img src="../images/pampas.jpg" alt="Paisaje amazónico">',
    '<img src="../images/pampas.jpg" alt="Navegacion Yacuma">'
)
page2 = page2.replace(
    '<img src="../images/jungla_boliviana.jpg" alt="Senderos de selva">',
    '<img src="../images/pampas.jpg" alt="Fauna de pampas">'
)
page2 = page2.replace(
    '<img src="../images/pampas.jpg" alt="Fauna amazónica">',
    '<img src="../images/pampas.jpg" alt="Vida silvestre de pampas">'
)

page2 = page2.replace(
    '<span class="amz-gallery-caption">Selva del Parque Nacional Madidi</span>',
    '<span class="amz-gallery-caption">Paisaje de las Pampas del Yacuma</span>'
)
page2 = page2.replace(
    '<span class="amz-gallery-caption">Navegacion por rios amazónicos</span>',
    '<span class="amz-gallery-caption">Navegacion por el rio Yacuma</span>'
)
page2 = page2.replace(
    '<span class="amz-gallery-caption">Senderos interpretativos</span>',
    '<span class="amz-gallery-caption">Observacion de fauna</span>'
)
page2 = page2.replace(
    '<span class="amz-gallery-caption">Vida silvestre del bosque</span>',
    '<span class="amz-gallery-caption">Vida silvestre de las pampas</span>'
)

# Related tours
page2 = page2.replace(
    '<h3 class="amz-related-title">Cultura de la Jungla 3D / 2N</h3>\n            <p class="amz-related-text">Si quieres sumar comunidad local y una mirada mas cultural al bosque, esta es la progresion natural.</p>\n            <a href="amazon-cultura-jungla-3d-2n.html" class="amz-btn amz-btn-outline" style="padding:12px 24px;font-size:12px;">Ver tour</a>',
    '<h3 class="amz-related-title">Pampas del Yacuma 2D / 1N</h3>\n            <p class="amz-related-text">La version corta si quieres mantener el foco en fauna pero condensar el viaje.</p>\n            <a href="amazon-pampas-yacuma-2d-1n.html" class="amz-btn amz-btn-outline" style="padding:12px 24px;font-size:12px;">Ver tour</a>'
)
page2 = page2.replace(
    '<h3 class="amz-related-title">Madidi Magico 4D / 3N</h3>\n            <p class="amz-related-text">Mas dias para caminar con calma, observar y sentir la selva sin formato express.</p>\n            <a href="amazon-madidi-magico-4d-3n.html" class="amz-btn amz-btn-outline" style="padding:12px 24px;font-size:12px;">Ver tour</a>',
    '<h3 class="amz-related-title">Madidi Magico 4D / 3N</h3>\n            <p class="amz-related-text">Si despues de las pampas quieres una selva mas pausada y profunda, este es un gran salto.</p>\n            <a href="amazon-madidi-magico-4d-3n.html" class="amz-btn amz-btn-outline" style="padding:12px 24px;font-size:12px;">Ver tour</a>'
)
page2 = page2.replace(
    '<h3 class="amz-related-title">Hub Amazon</h3>\n            <p class="amz-related-text">Vuelve a la vista general para comparar jungla y pampas dentro de la nueva arquitectura.</p>\n            <a href="amazon.html" class="amz-btn amz-btn-outline" style="padding:12px 24px;font-size:12px;">Volver</a>',
    '<h3 class="amz-related-title">Hub Amazon</h3>\n            <p class="amz-related-text">Regresa a la categoria principal y compara todas las subpaginas dentro de la nueva estructura.</p>\n            <a href="amazon.html" class="amz-btn amz-btn-outline" style="padding:12px 24px;font-size:12px;">Volver</a>'
)

# Final CTA
page2 = page2.replace(
    '<h2 class="amz-cta-title">¿Listo para vivir la <span>selva?</span></h2>',
    '<h2 class="amz-cta-title">¿Listo para vivir las <span>pampas?</span></h2>'
)
page2 = page2.replace(
    'Reserva tu lugar ahora y comienza tu aventura en el corazon de la Amazonia boliviana. Nuestro equipo te acompanara en cada paso.',
    'Reserva tu lugar ahora y comienza tu aventura en las Pampas del Yacuma. Nuestro equipo te acompanara en cada paso.'
)

with open('pages/amazon-pampas-yacuma-3d-2n.html', 'w', encoding='utf-8') as f:
    f.write(page2)

print('Page 2 written: pages/amazon-pampas-yacuma-3d-2n.html')
