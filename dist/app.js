"use strict";
var App = (() => {
  // src/loadMustache.ts
  async function loadMustache() {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/mustache@4.2.0";
      script.onload = () => resolve();
      document.head.appendChild(script);
    });
  }

  // src/products.json
  var products_default = [
    {
      name: "\xD3leo de Girassol",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/215577/olive-oil-oil.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/oleo-de-girassol-puro-fula-4403919.html"
        }
      ]
    },
    {
      name: "A\xE7ucar Branco 1kg",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/482072/sugar-cube-1.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/acucar-branco-continente-5038799.html"
        },
        {
          link: "https://www.continente.pt/produto/acucar-branco-rar-7996599.html"
        }
      ]
    },
    {
      name: "A\xE7ucar Mascavo 1kg",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/482072/sugar-cube-1.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/acucar-mascavado-continente-7352655.html"
        }
      ]
    },
    {
      name: "Abrasivo Sanit\xE1rio Gel Extra Power com Lix\xEDvia Marinho",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/490641/cleaning-spray.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/abrasivo-sanitario-gel-extra-power-com-lixivia-marinho-pato-6057871.html"
        },
        {
          link: "https://www.continente.pt/produto/abrasivo-sanitario-gel-desinfetante-com-lixivia-harpic-2176176.html"
        },
        {
          link: "https://www.continente.pt/produto/higienizante-wc-gel-com-lixivia-perfumada-neoblanc-7417790.html"
        }
      ]
    },
    {
      name: "Abrilhantador M\xE1quina Loi\xE7a",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/490698/dishwasher.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/abrilhantador-maquina-loica-finish-7684648.html"
        },
        {
          link: "https://www.continente.pt/produto/abrilhantador-maquina-loica-brilho-e-secagem-finish-5709110.html"
        }
      ]
    },
    {
      name: "A\xE7afr\xE3o da \xCDndia",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/482131/salt-and-pepper.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/acafrao-da-india-em-saqueta-continente-6046659.html"
        },
        {
          link: "https://www.continente.pt/produto/acafrao-das-indias-saqueta-margao-7576974.html"
        },
        {
          link: "https://www.continente.pt/produto/acafrao-das-indias-em-frasco-margao-2834249.html"
        }
      ]
    },
    {
      name: "A\xE7a\xED",
      category: "Congelados & Conveni\xEAncia",
      icon: "https://www.svgrepo.com/show/454393/fruit-fruits-grape.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/acai-organico-com-guarana-native-acai-5965614.html"
        },
        {
          link: "https://www.continente.pt/produto/acai-biologico-oakberry-8021790.html"
        }
      ]
    },
    {
      name: "\xC1gua com G\xE1s 500ml",
      category: "Bebidas",
      icon: "https://www.svgrepo.com/show/323618/water-bottle.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/agua-com-gas-vimeiro-3661956.html"
        }
      ]
    },
    {
      name: "\xC1gua com G\xE1s 750ml",
      category: "Bebidas",
      icon: "https://www.svgrepo.com/show/323618/water-bottle.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/agua-com-gas-frize-4019960.html"
        },
        {
          link: "https://www.continente.pt/produto/agua-com-gas-continente-8109558.html"
        }
      ]
    },
    {
      name: "\xC1gua com G\xE1s 1L",
      category: "Bebidas",
      icon: "https://www.svgrepo.com/show/323618/water-bottle.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/agua-com-gas-continente-7943947.html"
        }
      ]
    },
    {
      name: "\xC1gua sem G\xE1s 500ml",
      category: "Bebidas",
      icon: "https://www.svgrepo.com/show/323618/water-bottle.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/agua-sem-gas-caldas-de-penacova-4019938.html"
        },
        {
          link: "https://www.continente.pt/produto/agua-sem-gas-vitalis-2373254.html"
        },
        {
          link: "https://www.continente.pt/produto/agua-sem-gas-luso-3035609.html"
        }
      ]
    },
    {
      name: "\xC1gua sem G\xE1s 1.5L",
      category: "Bebidas",
      icon: "https://www.svgrepo.com/show/323618/water-bottle.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/agua-sem-gas-caldas-de-penacova-5891212.html"
        },
        {
          link: "https://www.continente.pt/produto/agua-sem-gas-luso-4466419.html"
        }
      ]
    },
    {
      name: "\xC1gua sem G\xE1s Garraf\xE3o",
      category: "Bebidas",
      icon: "https://www.svgrepo.com/show/323618/water-bottle.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/agua-sem-gas-garrafao-luso-5096262.html"
        },
        {
          link: "https://www.continente.pt/produto/agua-sem-gas-garrafao-caldas-de-penacova-4028645.html"
        },
        {
          link: "https://www.continente.pt/produto/agua-sem-gas-garrafao-vitalis-6082987.html"
        }
      ]
    },
    {
      name: "Alface Lisa",
      category: "Frutas & Verduras",
      icon: "https://www.svgrepo.com/show/454401/lettuce-vegetable-vegetables.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/alface-lisa-continente-6579810.html"
        }
      ]
    },
    {
      name: "Alho Mo\xEDdo",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/482131/salt-and-pepper.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/alho-moido-em-saqueta-continente-6046632.html"
        },
        {
          link: "https://www.continente.pt/produto/alho-moido-em-frasco-continente-6046630.html"
        },
        {
          link: "https://www.continente.pt/produto/alho-moido-em-saqueta-margao-7626369.html"
        },
        {
          link: "https://www.continente.pt/produto/alho-moido-margao-6646028.html"
        },
        {
          link: "https://www.continente.pt/produto/alho-moido-em-frasco-margao-4785437.html"
        },
        {
          link: "https://www.continente.pt/produto/alho-moido-saqueta-margao-7576992.html"
        }
      ]
    },
    {
      name: "Amaciador Roupa Concentrado",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/161684/water-gallon.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/amaciador-roupa-concentrado-essencia-pure-comfort-7835108.html"
        },
        {
          link: "https://www.continente.pt/produto/amaciador-roupa-concentrado-coco-vernel-8137611.html"
        },
        {
          link: "https://www.continente.pt/produto/amaciador-roupa-concentrado-essencia-pure-comfort-7772490.html"
        }
      ]
    },
    {
      name: "Am\xEAijoa Vietnamita",
      category: "Congelados & Conveni\xEAncia",
      icon: "https://www.svgrepo.com/show/521140/fish.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/ameijoa-vietnamita-com-casca-congelada-2879958.html"
        }
      ]
    },
    {
      name: "Amendoim Torrado",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/281671/nuts-nut.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/amendoim-no-forno-matutano-4297831.html"
        },
        {
          link: "https://www.continente.pt/produto/miolo-de-amendoim-torrado-continente-8112461.html"
        },
        {
          link: "https://www.continente.pt/produto/miolo-de-amendoim-com-sal-continente-8112460.html"
        }
      ]
    },
    {
      name: "Arroz Basmati",
      category: "Cereais & Gr\xE3os",
      icon: "https://www.svgrepo.com/show/281671/nuts-nut.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/arroz-basmati-continente-4949515.html"
        },
        {
          link: "https://www.continente.pt/produto/arroz-basmati-cacarola-2735673.html"
        },
        {
          link: "https://www.continente.pt/produto/arroz-basmati-cacarola-3040677.html"
        },
        {
          link: "https://www.continente.pt/produto/arroz-basmati-premium-cacarola-8186669.html"
        }
      ]
    },
    {
      name: "Arroz Basmati Integral",
      category: "Cereais & Gr\xE3os",
      icon: "https://www.svgrepo.com/show/281671/nuts-nut.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/arroz-basmati-integral-continente-equilibrio-6368465.html"
        }
      ]
    },
    {
      name: "Azeite Virgem Extra",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/215577/olive-oil-oil.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/azeite-virgem-extra-selecionado-pet-oliveira-da-serra-7099734.html"
        },
        {
          link: "https://www.continente.pt/produto/azeite-virgem-extra-sublime-gallo-5409202.html"
        },
        {
          link: "https://www.continente.pt/produto/azeite-virgem-extra-classico-oliveira-da-serra-2014566.html"
        },
        {
          link: "https://www.continente.pt/produto/azeite-virgem-extra-oliveira-da-serra-6661060.html"
        },
        {
          link: "https://www.continente.pt/produto/azeite-virgem-extra-reserva-gallo-2893617.html"
        },
        {
          link: "https://www.continente.pt/produto/azeite-virgem-extra-ouro-oliveira-da-serra-3901216.html"
        },
        {
          link: "https://www.continente.pt/produto/azeite-virgem-extra-cooperativa-continente-7259028.html"
        },
        {
          link: "https://www.continente.pt/produto/azeite-virgem-extra-superior-cinco-soldos-6869202.html"
        },
        {
          link: "https://www.continente.pt/produto/azeite-virgem-extra-herdade-do-esporao-2422496.html"
        },
        {
          link: "https://www.continente.pt/produto/azeite-virgem-extra-essencial-cinco-soldos-6869201.html"
        },
        {
          link: "https://www.continente.pt/produto/azeite-virgem-extra-classico-gallo-2893558.html"
        },
        {
          link: "https://www.continente.pt/produto/azeite-virgem-extra-classico-gallo-3039612.html"
        },
        {
          link: "https://www.continente.pt/produto/azeite-virgem-extra-suave-gallo-2893607.html"
        },
        {
          link: "https://www.continente.pt/produto/azeite-virgem-extra-herdade-do-esporao-7743101.html"
        },
        {
          link: "https://www.continente.pt/produto/azeite-virgem-extra-sublime-gallo-7512148.html"
        },
        {
          link: "https://www.continente.pt/produto/azeite-virgem-extra-classico-oliveira-da-serra-2798149.html"
        },
        {
          link: "https://www.continente.pt/produto/azeite-virgem-extra-selecao-verde-oliveira-da-serra-2212830.html"
        }
      ]
    },
    {
      name: "Azeitona Preta",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/317279/olives.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/azeitona-preta-descarocada-oxidada-continente-7571617.html"
        },
        {
          link: "https://www.continente.pt/produto/azeitona-preta-descarocada-oxidada-qampo-7639808.html"
        }
      ]
    },
    {
      name: "Azeitona Verde",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/317279/olives.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/azeitona-verde-descarocada-continente-7571658.html"
        },
        {
          link: "https://www.continente.pt/produto/azeitona-verde-descarocada-qampo-7639811.html"
        },
        {
          link: "https://www.continente.pt/produto/azeitona-verde-descarocada-pere-olive-7408271.html"
        }
      ]
    },
    {
      name: "Bacon Fumado Tiras",
      category: "Carne & Peixe",
      icon: "https://www.svgrepo.com/show/432092/bacon.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/bacon-fumado-tiras-continente-5243280.html"
        },
        {
          link: "https://www.continente.pt/produto/bacon-fumado-tiras-continente-5242937.html"
        },
        {
          link: "https://www.continente.pt/produto/bacon-fumado-tiras-marion-2770143.html"
        },
        {
          link: "https://www.continente.pt/produto/bacon-fumado-tiras-marion-5181660.html"
        }
      ]
    },
    {
      name: "Banana",
      category: "Frutas & Verduras",
      icon: "https://www.svgrepo.com/show/482166/banana-bunch-illustration.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/banana-continente-2597619.html"
        },
        {
          link: "https://www.continente.pt/produto/banana-da-madeira-continente-2076480.html"
        }
      ]
    },
    {
      name: "Batata Cubos",
      category: "Congelados & Conveni\xEAncia",
      icon: "https://www.svgrepo.com/show/490886/oven.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/batata-aos-cubos-continente-8172821.html"
        }
      ]
    },
    {
      name: "Batata Doce",
      category: "Frutas & Verduras",
      icon: "https://www.svgrepo.com/show/447075/potato.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/batata-doce-continente-2076703.html"
        }
      ]
    },
    {
      name: "Batata Frita Lisa",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/95483/chips-bag.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/batata-frita-lisa-classica-continente-7078329.html"
        },
        {
          link: "https://www.continente.pt/produto/batata-frita-lisa-original-lays-7379467.html"
        },
        {
          link: "https://www.continente.pt/produto/batata-frita-lisa-mediterraneas-lays-7379481.html"
        },
        {
          link: "https://www.continente.pt/produto/batata-frita-lisa-original-light-sem-gluten-lays-7824239.html"
        }
      ]
    },
    {
      name: "Batata Frita Lisa Gourmet",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/95483/chips-bag.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/batata-frita-lisa-gourmet-continente-7413101.html"
        },
        {
          link: "https://www.continente.pt/produto/batata-frita-gourmet-lisa-corte-fino-lays-gourmet-7785331.html"
        }
      ]
    },
    {
      name: "Batata Frita Ondulada",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/95483/chips-bag.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/batata-frita-ondulada-com-sal-sem-gluten-ruffles-3907325.html"
        },
        {
          link: "https://www.continente.pt/produto/batata-frita-ondulada-com-sal-sem-gluten-ruffles-7379477.html"
        },
        {
          link: "https://www.continente.pt/produto/batata-frita-ondulada-com-sal-sem-gluten-ruffles-8249195.html"
        },
        {
          link: "https://www.continente.pt/produto/batata-frita-ondulada-continente-2005830.html"
        }
      ]
    },
    {
      name: "Batata Frita Ondulada Gourmet",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/95483/chips-bag.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/batata-frita-gourmet-corte-ondulado-lays-gourmet-8120598.html"
        },
        {
          link: "https://www.continente.pt/produto/batata-frita-gourmet-azeitona-corte-ondulado-lays-gourmet-8164646.html"
        }
      ]
    },
    {
      name: "Batata Palha",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/95483/chips-bag.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/batata-frita-palha-finissima-continente-7414639.html"
        },
        {
          link: "https://www.continente.pt/produto/batata-frita-palha-fina-receita-caseira-continente-5097178.html"
        },
        {
          link: "https://www.continente.pt/produto/batata-frita-palha-saloinha-4863899.html"
        }
      ]
    },
    {
      name: "Batata Noisette",
      category: "Congelados & Conveni\xEAncia",
      icon: "https://www.svgrepo.com/show/490886/oven.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/batata-noisette-continente-8172848.html"
        }
      ]
    },
    {
      name: "Batata Vermelha",
      category: "Frutas & Verduras",
      icon: "https://www.svgrepo.com/show/447075/potato.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/batata-vermelha-continente-7577954.html"
        },
        {
          link: "https://www.continente.pt/produto/batata-vermelha-continente-5454736.html"
        }
      ]
    },
    {
      name: "Bebida Energ\xE9tica Monster",
      category: "Bebidas",
      icon: "https://www.svgrepo.com/show/19316/energy-drink.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/bebida-energetica-mango-loco-monster-6924813.html"
        },
        {
          link: "https://www.continente.pt/produto/bebida-energetica-mango-loco-monster-7788037.html"
        }
      ]
    },
    {
      name: "Bebida Vegetal de Soja Barista",
      category: "Latic\xEDnios",
      icon: "https://www.svgrepo.com/show/490858/milk-bottle.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/bebida-vegetal-de-soja-barista-alpro-7491342.html"
        },
        {
          link: "https://www.continente.pt/produto/bebida-vegetal-de-soja-barista-joya-7100536.html"
        }
      ]
    },
    {
      name: "Bebida Vegetal de Soja Chocolate",
      category: "Latic\xEDnios",
      icon: "https://www.svgrepo.com/show/490858/milk-bottle.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/bebida-vegetal-de-soja-chocolate-alpro-2673216.html"
        }
      ]
    },
    {
      name: "Beterraba Rodelas",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/503513/potato.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/beterraba-rodelas-sem-gluten-continente-7383380.html"
        }
      ]
    },
    {
      name: "Biscoitos de Canela Continente",
      category: "Panifica\xE7\xE3o & Confeitaria",
      icon: "https://www.svgrepo.com/show/309479/cookies.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/biscoitos-de-canela-da-nossa-pastelaria-7630217.html"
        }
      ]
    },
    {
      name: "Bolachas \xD3reo Original",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/309479/cookies.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/bolachas-mini-recheadas-com-creme-oreo-3884674.html"
        },
        {
          link: "https://www.continente.pt/produto/bolachas-de-chocolate-com-recheio-de-creme-oreo-4288821.html"
        },
        {
          link: "https://www.continente.pt/produto/bolachas-de-chocolate-com-recheio-de-creme-oreo-5247119.html"
        },
        {
          link: "https://www.continente.pt/produto/bolachas-de-chocolate-com-recheio-de-creme-oreo-5592652.html"
        }
      ]
    },
    {
      name: "Bolachas Pequeno Almo\xE7o Chocolate Continente",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/309479/cookies.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/bolachas-pequeno-almoco-chocolate-continente-7360174.html"
        }
      ]
    },
    {
      name: "Bolachas Wafers com Recheio de Cacau",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/309479/cookies.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/bolachas-wafers-com-recheio-de-cacau-cuetara-2003389.html"
        },
        {
          link: "https://www.continente.pt/produto/bolachas-wafers-com-recheio-de-cacau-loacker-2800079.html"
        },
        {
          link: "https://www.continente.pt/produto/bolachas-wafers-com-recheio-de-cacau-loacker-8070083.html"
        },
        {
          link: "https://www.continente.pt/produto/bolachas-wafers-quadratini-com-recheio-de-chocolate-loacker-2202897.html"
        },
        {
          link: "https://www.continente.pt/produto/bolachas-wafers-quadratini-com-recheio-de-chocolate-negro-loacker-3750102.html"
        }
      ]
    },
    {
      name: "Bolachas Wafers com Recheio de Coco",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/309479/cookies.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/bolachas-wafers-com-recheio-de-coco-cuetara-2003386.html"
        },
        {
          link: "https://www.continente.pt/produto/bolachas-wafers-coco-cem-porcento-7422362.html"
        }
      ]
    },
    {
      name: "Bolachas Wafers com Recheio de Morango",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/309479/cookies.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/bolachas-wafers-com-recheio-de-morango-cuetara-7422923.html"
        }
      ]
    },
    {
      name: "Cacau Magro em P\xF3",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/321311/salt-shaker.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/cacau-magro-em-po-continente-equilibrio-2536010.html"
        },
        {
          link: "https://www.continente.pt/produto/cacau-magro-em-po-sem-gluten-jeronimos-7251807.html"
        }
      ]
    },
    {
      name: "Carv\xE3o Vegetal Especial",
      category: "Congelados & Conveni\xEAncia",
      icon: "https://www.svgrepo.com/show/43415/charcoal.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/carvao-vegetal-especial-continente-7600952.html"
        }
      ]
    },
    {
      name: "Cebola",
      category: "Frutas & Verduras",
      icon: "https://www.svgrepo.com/show/447182/onion-organic.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/cebola-continente-4618134.html"
        },
        {
          link: "https://www.continente.pt/produto/cebola-biologica-continente-bio-7382396.html"
        },
        {
          link: "https://www.continente.pt/produto/cebola-zero-desperdicio-continente-3618608.html"
        }
      ]
    },
    {
      name: "Cebola Roxa",
      category: "Frutas & Verduras",
      icon: "https://www.svgrepo.com/show/447182/onion-organic.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/cebola-roxa-continente-5394157.html"
        },
        {
          link: "https://www.continente.pt/produto/cebola-roxa-continente-3800767.html"
        },
        {
          link: "https://www.continente.pt/produto/cebola-roxa-continente-7625471.html"
        },
        {
          link: "https://www.continente.pt/produto/cebola-roxa-biologica-continente-bio-7382494.html"
        }
      ]
    },
    {
      name: "Cenoura",
      category: "Frutas & Verduras",
      icon: "https://www.svgrepo.com/show/481998/carrot.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/cenoura-continente-5063155.html"
        },
        {
          link: "https://www.continente.pt/produto/cenoura-continente-2885107.html"
        },
        {
          link: "https://www.continente.pt/produto/cenoura-biologica-continente-bio-7382406.html"
        }
      ]
    },
    {
      name: "Cereais Corn Flakes",
      category: "Cereais & Gr\xE3os",
      icon: "https://www.svgrepo.com/show/201458/cereal.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/cereais-corn-flakes-sem-gluten-verival-5779336.html"
        }
      ]
    },
    {
      name: "Cereais Nesquik",
      category: "Cereais & Gr\xE3os",
      icon: "https://www.svgrepo.com/show/201458/cereal.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/cereais-trigo-com-chocolate-nesquik-nesquik-7393888.html"
        },
        {
          link: "https://www.continente.pt/produto/cereais-nesquik-nesquik-7393889.html"
        },
        {
          link: "https://www.continente.pt/produto/cereais-nesquik-nesquik-3799402.html"
        },
        {
          link: "https://www.continente.pt/produto/cereais-trigo-com-chocolate-nesquik-minis-nesquik-7994142.html"
        }
      ]
    },
    {
      name: "Cereja",
      category: "Frutas & Verduras",
      icon: "https://www.svgrepo.com/show/384648/cherry-fruit-healthy-juice-vegan-vegetarian.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/cereja-continente-5326031.html"
        },
        {
          link: "https://www.continente.pt/produto/cereja-continente-6922984.html"
        },
        {
          link: "https://www.continente.pt/produto/cereja-premium-continente-7612676.html"
        }
      ]
    },
    {
      name: "Cerveja Heineken",
      category: "Bebidas",
      icon: "https://www.svgrepo.com/show/321838/beer-bottle.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/cerveja-com-alcool-heineken-6113720.html"
        },
        {
          link: "https://www.continente.pt/produto/cerveja-com-alcool-heineken-5472693.html"
        },
        {
          link: "https://www.continente.pt/produto/cerveja-com-alcool-heineken-7405691.html"
        },
        {
          link: "https://www.continente.pt/produto/cerveja-com-alcool-heineken-6936782.html"
        }
      ]
    },
    {
      name: "Cerveja Superbock Stout",
      category: "Bebidas",
      icon: "https://www.svgrepo.com/show/321838/beer-bottle.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/cerveja-com-alcool-stout-mini-super-bock-7095704.html"
        },
        {
          link: "https://www.continente.pt/produto/cerveja-com-alcool-stout-super-bock-3036104.html"
        },
        {
          link: "https://www.continente.pt/produto/cerveja-com-alcool-stout-mini-super-bock-5946237.html"
        }
      ]
    },
    {
      name: "Cerveja Wei\xDFbier",
      category: "Bebidas",
      icon: "https://www.svgrepo.com/show/321838/beer-bottle.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/cerveja-com-alcool-weibbier-erdinger-2422596.html"
        },
        {
          link: "https://www.continente.pt/produto/cerveja-com-alcool-benediktiner-4869891.html"
        },
        {
          link: "https://www.continente.pt/produto/cerveja-com-alcool-weissbier-franziskaner-2308998.html"
        }
      ]
    },
    {
      name: "Ch\xE1 Verde",
      category: "Congelados & Conveni\xEAncia",
      icon: "https://www.svgrepo.com/show/524178/tea-cup.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/cha-verde-saquetas-tetley-3646810.html"
        },
        {
          link: "https://www.continente.pt/produto/cha-verde-saquetas-lipton-2712654.html"
        },
        {
          link: "https://www.continente.pt/produto/infusao-cha-verde-n25-saquetas-raizes-da-natureza-2474440.html"
        },
        {
          link: "https://www.continente.pt/produto/cha-verde-matcha-saquetas-tetley-6333125.html"
        },
        {
          link: "https://www.continente.pt/produto/cha-verde-saquetas-tetley-3646809.html"
        },
        {
          link: "https://www.continente.pt/produto/cha-verde-saquetas-continente-bio-7232493.html"
        },
        {
          link: "https://www.continente.pt/produto/cha-verde-saquetas-cem-porcento-6581829.html"
        }
      ]
    },
    {
      name: "Champ\xF4 Anticaspa Classic 2 em 1",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/477672/shampoo-free-illustration-4.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/champo-anticaspa-maca-2-em-1-plus-h-s-8263664.html"
        },
        {
          link: "https://www.continente.pt/produto/champo-anticaspa-classic-2-em-1-h-s-7984493.html"
        },
        {
          link: "https://www.continente.pt/produto/champo-anticaspa-classic-2-em-1-h-s-7984495.html"
        },
        {
          link: "https://www.continente.pt/produto/champo-anticaspa-classic-2-em-1-h-s-7984531.html"
        },
        {
          link: "https://www.continente.pt/produto/champo-anticaspa-classic-2-em-1-h-s-7984572.html"
        }
      ]
    },
    {
      name: "Champ\xF4 Suave Bons Sonhos Beb\xE9",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/477672/shampoo-free-illustration-4.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/champo-suave-bons-sonhos-bebe-johnsons-baby-6862645.html"
        },
        {
          link: "https://www.continente.pt/produto/champo-suave-bons-sonhos-bebe-johnsons-baby-6840657.html"
        }
      ]
    },
    {
      name: "Champ\xF4 Suave Camomila para Beb\xE9",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/477672/shampoo-free-illustration-4.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/champo-suave-camomila-para-bebe-johnsons-baby-6862554.html"
        },
        {
          link: "https://www.continente.pt/produto/champo-suave-camomila-para-bebe-johnsons-baby-6840656.html"
        },
        {
          link: "https://www.continente.pt/produto/champo-suave-camomila-bebe-johnsons-baby-6862569.html"
        },
        {
          link: "https://www.continente.pt/produto/champo-suave-camomila-para-bebe-johnsons-baby-6862554.html"
        }
      ]
    },
    {
      name: "Champ\xF4 Suave para Beb\xE9",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/477672/shampoo-free-illustration-4.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/champo-suave-bebe-johnsons-baby-6862752.html"
        },
        {
          link: "https://www.continente.pt/produto/champo-suave-para-bebe-johnsons-baby-6900212.html"
        },
        {
          link: "https://www.continente.pt/produto/champo-suave-bebe-johnsons-baby-6862562.html"
        },
        {
          link: "https://www.continente.pt/produto/champo-suave-bebe-johnsons-baby-6840655.html"
        }
      ]
    },
    {
      name: "Chocolate em P\xF3",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/307636/powder-soft-sugar-sand.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/chocolate-em-po-continente-2535999.html"
        }
      ]
    },
    {
      name: "Chocolate em P\xF3 50% Cacau",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/307636/powder-soft-sugar-sand.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/chocolate-em-po-50--cacau-jeronimos-7251796.html"
        }
      ]
    },
    {
      name: "Chocolate em P\xF3",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/307636/powder-soft-sugar-sand.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/chocolate-em-po-sem-gluten-pantagruel-2005271.html"
        }
      ]
    },
    {
      name: "Clara de Ovo Pasteurizada",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/487320/egg.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/clara-de-ovo-pasteurizada-dovo-5536817.html"
        }
      ]
    },
    {
      name: "Cominho Mo\xEDdo",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/482131/salt-and-pepper.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/cominhos-moidos-em-saqueta-margao-2003335.html"
        },
        {
          link: "https://www.continente.pt/produto/cominhos-moidos-em-frasco-continente-6046564.html"
        },
        {
          link: "https://www.continente.pt/produto/cominhos-moidos-margao-7203228.html"
        }
      ]
    },
    {
      name: "Cora\xE7\xF5es de Alcachofra",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/119244/can-of-food-with-barcode.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/coracoes-de-alcachofra-sem-gluten-continente-7383381.html"
        }
      ]
    },
    {
      name: "Couve Br\xF3colo",
      category: "Frutas & Verduras",
      icon: "https://www.svgrepo.com/show/136444/big-brocoli.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/couve-brocolo-continente-2076764.html"
        }
      ]
    },
    {
      name: "Creme Vegetal Culin\xE1rio",
      category: "Latic\xEDnios",
      icon: "https://www.svgrepo.com/show/29916/knife-and-butter.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/creme-vegetal-culinario-becel-5761643.html"
        }
      ]
    },
    {
      name: "Creme Vegetal para Barrar Sabor Manteiga",
      category: "Latic\xEDnios",
      icon: "https://www.svgrepo.com/show/29916/knife-and-butter.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/creme-vegetal-para-barrar-sabor-a-manteiga-becel-7855605.html"
        }
      ]
    },
    {
      name: "Curgete Verde (ab\xF3brinha)",
      category: "Frutas & Verduras",
      icon: "https://www.svgrepo.com/show/142810/aubergine.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/curgete-verde-continente-2076759.html"
        }
      ]
    },
    {
      name: "Desincrustante",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/424960/spray-hair-salon.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/desincrustante-siril-7406328.html"
        }
      ]
    },
    {
      name: "Detergente Loi\xE7a",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/453851/soap.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/detergente-manual-loica-plus-frutos-silvestres-super-pop-6665947.html"
        },
        {
          link: "https://www.continente.pt/produto/detergente-manual-loica-poder-frutos-vermelhos-cif-7779531.html"
        },
        {
          link: "https://www.continente.pt/produto/detergente-manual-loica-ultra-jasmim-rosa-fairy-8370734.html"
        },
        {
          link: "https://www.continente.pt/produto/detergente-manual-loica-ultra-jasmim-rosa-fairy-8370723.html"
        },
        {
          link: "https://www.continente.pt/produto/detergente-manual-loica-expert-3d-maca-super-pop-8209318.html"
        },
        {
          link: "https://www.continente.pt/produto/detergente-manual-loica-maca-super-pop-5511735.html"
        },
        {
          link: "https://www.continente.pt/produto/detergente-manual-loica-maca-super-pop-7477238.html"
        }
      ]
    },
    {
      name: "Detergente M\xE1quina Loi\xE7a Pastilhas",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/490698/dishwasher.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/detergente-maquina-loica-pastilhas-quantum-limao-finish-8090094.html"
        },
        {
          link: "https://www.continente.pt/produto/detergente-maquina-loica-pastilhas-ultimate-plus-finish-8224982.html"
        },
        {
          link: "https://www.continente.pt/produto/detergente-maquina-loica-pastilhas-ultimate-plus-limao-finish-7683726.html"
        },
        {
          link: "https://www.continente.pt/produto/detergente-maquina-loica-pastilhas-original-tudo-em-1-limao-fairy-7995296.html"
        },
        {
          link: "https://www.continente.pt/produto/detergente-maquina-loica-pastilhas-original-tudo-em-1-limao-fairy-7995298.html"
        },
        {
          link: "https://www.continente.pt/produto/detergente-maquina-loica-pastilhas-platinum-plus-tudo-em-1-limao-fairy-8461276.html"
        }
      ]
    },
    {
      name: "Detergente M\xE1quina Loi\xE7a Gel",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/490698/dishwasher.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/detergente-maquina-loica-power-gel-all-in-1-limao-finish-7496223.html"
        },
        {
          link: "https://www.continente.pt/produto/detergente-maquina-loica-power-gel-all-in-1-limao-finish-5785619.html"
        },
        {
          link: "https://www.continente.pt/produto/detergente-maquina-loica-power-gel-0--finish-7074059.html"
        },
        {
          link: "https://www.continente.pt/produto/detergente-maquina-loica-power-gel-all-in-1-frescura-anti-odores-finish-6595562.html"
        }
      ]
    },
    {
      name: "Detergente M\xE1quina Roupa L\xEDquido",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/490698/dishwasher.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/detergente-maquina-roupa-liquido-sabao-azul-e-branco-persil-7706714.html"
        },
        {
          link: "https://www.continente.pt/produto/detergente-maquina-roupa-liquido-sabao-azul-e-branco-persil-7684441.html"
        },
        {
          link: "https://www.continente.pt/produto/detergente-maquina-roupa-liquido-active-clean-skip-7784982.html"
        },
        {
          link: "https://www.continente.pt/produto/detergente-maquina-roupa-liquido-sensitive-skip-7827166.html"
        },
        {
          link: "https://www.continente.pt/produto/detergente-maquina-roupa-liquido-active-clean-skip-8488771.html"
        },
        {
          link: "https://www.continente.pt/produto/detergente-maquina-roupa-liquido-sabao-azul-e-branco-persil-7684656.html"
        },
        {
          link: "https://www.continente.pt/produto/detergente-maquina-roupa-liquido-active-clean-skip-7778803.html"
        },
        {
          link: "https://www.continente.pt/produto/detergente-maquina-roupa-liquido-expert-lavanda-persil-8115278.html"
        },
        {
          link: "https://www.continente.pt/produto/detergente-maquina-roupa-liquido-cores-skip-7807541.html"
        },
        {
          link: "https://www.continente.pt/produto/detergente-maquina-roupa-liquido-color-persil-7760972.html"
        },
        {
          link: "https://www.continente.pt/produto/detergente-maquina-roupa-liquido-color-gel-persil-8075949.html"
        }
      ]
    },
    {
      name: "Doce de Leite",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/456101/jam-jar.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/doce-de-leite-san-ignacio-7944189.html"
        },
        {
          link: "https://www.continente.pt/produto/doce-de-leite-continente-selecao-7681726.html"
        }
      ]
    },
    {
      name: "Doce St. Dalfour",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/456101/jam-jar.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/doce-morango-st.-dalfour-2410868.html"
        },
        {
          link: "https://www.continente.pt/produto/doce-framboesa-st.-dalfour-2410880.html"
        },
        {
          link: "https://www.continente.pt/produto/doce-cereja-st.-dalfour-2411882.html"
        },
        {
          link: "https://www.continente.pt/produto/doce-amoras-st.-dalfour-5934461.html"
        }
      ]
    },
    {
      name: "Douradinhos de Peixe",
      category: "Carne & Peixe",
      icon: "https://www.svgrepo.com/show/521140/fish.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/douradinhos-de-peixe-omega-3-capitao-iglo-7227707.html"
        },
        {
          link: "https://www.continente.pt/produto/douradinhos-de-peixe-fornissimo-capitao-iglo-5446605.html"
        },
        {
          link: "https://www.continente.pt/produto/douradinhos-de-peixe-capitao-iglo-5729030.html"
        },
        {
          link: "https://www.continente.pt/produto/douradinhos-de-peixe-capitao-iglo-5730946.html"
        },
        {
          link: "https://www.continente.pt/produto/douradinhos-de-peixe-continente-7949171.html"
        }
      ]
    },
    {
      name: "Drageias de Chocolate",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/71794/inclined-chocolate-bar.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/drageias-de-chocolate-m-ms-7504705.html"
        },
        {
          link: "https://www.continente.pt/produto/drageias-de-chocolate-m-ms-8155426.html"
        },
        {
          link: "https://www.continente.pt/produto/drageias-de-chocolate-m-ms-8284595.html"
        }
      ]
    },
    {
      name: "Ervilhas",
      category: "Congelados & Conveni\xEAncia",
      icon: "https://www.svgrepo.com/show/342635/grain.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/ervilhas-baby-continente-5249069.html"
        }
      ]
    },
    {
      name: "Esfreg\xE3o Esponja Vegetal",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/479780/sponge-2.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/esfregao-esponja-vegetal-continente-6194768.html"
        }
      ]
    },
    {
      name: "Farinha de Aveia Integral",
      category: "Cereais & Gr\xE3os",
      icon: "https://www.svgrepo.com/show/152846/flour.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/farinha-de-aveia-integral-continente-equilibrio-7117587.html"
        },
        {
          link: "https://www.continente.pt/produto/farinha-de-aveia-integral-nacional-7637103.html"
        }
      ]
    },
    {
      name: "Farinha de Mandioca",
      category: "Cereais & Gr\xE3os",
      icon: "https://www.svgrepo.com/show/152846/flour.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/farinha-de-mandioca-continente-7756713.html"
        },
        {
          link: "https://www.continente.pt/produto/farinha-de-mandioca-sem-gluten-ferbar-2003439.html"
        }
      ]
    },
    {
      name: "Farinha de Milho",
      category: "Cereais & Gr\xE3os",
      icon: "https://raw.githubusercontent.com/iconic/open-iconic/master/svg/basket.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/farinha-de-milho-sem-gluten-continente-5342071.html"
        },
        {
          link: "https://www.continente.pt/produto/farinha-de-milho-sem-gluten-harina-pan-2340420.html"
        }
      ]
    },
    {
      name: "Farinha de Trigo Fina com Fermento",
      category: "Cereais & Gr\xE3os",
      icon: "https://www.svgrepo.com/show/152846/flour.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/farinha-de-trigo-fina-com-fermento-continente-2388596.html"
        },
        {
          link: "https://www.continente.pt/produto/farinha-de-trigo-fina-com-fermento-branca-de-neve-2004428.html"
        }
      ]
    },
    {
      name: "Farinha de Trigo T65",
      category: "Cereais & Gr\xE3os",
      icon: "https://www.svgrepo.com/show/152846/flour.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/farinha-de-trigo-t65-continente-7579107.html"
        },
        {
          link: "https://www.continente.pt/produto/farinha-de-trigo-t65-nacional-2003929.html"
        }
      ]
    },
    {
      name: "Favaios Moscatel do Douro",
      category: "Bebidas",
      icon: "https://www.svgrepo.com/show/474305/wine.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/favaios-moscatel-do-douro-favaios-2050527.html"
        }
      ]
    },
    {
      name: "Feij\xE3o Preto",
      category: "Cereais & Gr\xE3os",
      icon: "https://www.svgrepo.com/show/128569/beans.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/feijao-preto-cozido-continente-2859762.html"
        },
        {
          link: "https://www.continente.pt/produto/feijao-preto-cozido-continente-2859833.html"
        },
        {
          link: "https://www.continente.pt/produto/feijao-preto-cozido-compal-da-horta-2395874.html"
        },
        {
          link: "https://www.continente.pt/produto/feijao-preto-cozido-compal-da-horta-2395877.html"
        },
        {
          link: "https://www.continente.pt/produto/feijao-preto-cozido-ferbar-2965846.html"
        },
        {
          link: "https://www.continente.pt/produto/feijao-preto-cozido-ferbar-2965896.html"
        }
      ]
    },
    {
      name: "Fiambre da Perna Extra Fatias Fin\xEDssimas",
      category: "Carne & Peixe",
      icon: "https://www.svgrepo.com/show/168526/ham-leg.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/fiambre-da-perna-extra-fatias-finissimas-continente-7102483.html"
        }
      ]
    },
    {
      name: "Fiambre de Peito de Frango",
      category: "Carne & Peixe",
      icon: "https://www.svgrepo.com/show/168526/ham-leg.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/fiambre-de-peito-de-frango-continente-7310431.html"
        },
        {
          link: "https://www.continente.pt/produto/fiambre-de-peito-de-frango-forno-de-lenha-fatiado-continente-7274434.html"
        }
      ]
    },
    {
      name: "Filtros Maxtra Pro All-In-1",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/393270/drinking-water.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/filtros-para-jarro-de-filtrar-maxtra-pro-all-in-1-brita-7727020.html"
        },
        {
          link: "https://www.continente.pt/produto/filtros-para-jarro-de-filtrar-maxtra-pro-all-in-1-brita-7727022.html"
        },
        {
          link: "https://www.continente.pt/produto/conjunto-2-filtros-para-jarro-de-filtrar-maxtra-pro-all-in-1-brita-7727017.html"
        }
      ]
    },
    {
      name: "Fita Cola de Embalar 50mmx66mts Transparente",
      category: "Congelados & Conveni\xEAncia",
      icon: "https://www.svgrepo.com/show/314761/tape-solid.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/fita-cola-de-embalar-50mmx66mts-transparente-tesa-4964238.html"
        }
      ]
    },
    {
      name: "Folha de Arroz",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/423083/fast-food-sushi.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/folha-de-arroz-blue-dragon-6123575.html"
        }
      ]
    },
    {
      name: "Folhas Algas Sushi Nori",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/423083/fast-food-sushi.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/folhas-algas-sushi-nori-blue-dragon-5615873.html"
        }
      ]
    },
    {
      name: "Galetes de Arroz sem Sal Fin\xEDssimas",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/309479/cookies.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/galetes-de-arroz-sem-sal-finissimas-sem-gluten-salutem-4876374.html"
        }
      ]
    },
    {
      name: "Gel de Banho Aroma Essence Delight",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/477672/shampoo-free-illustration-4.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/gel-de-banho-aroma-essence-delight-palmolive-7772322.html"
        },
        {
          link: "https://www.continente.pt/produto/gel-de-banho-aroma-essence-restful-sleep-palmolive-8442635.html"
        },
        {
          link: "https://www.continente.pt/produto/gel-de-banho-aroma-essence-relax-palmolive-7772323.html"
        },
        {
          link: "https://www.continente.pt/produto/gel-de-banho-wellness-massage-palmolive-7416081.html"
        },
        {
          link: "https://www.continente.pt/produto/gel-de-banho-memories-summer-dream-palmolive-7416089.html"
        }
      ]
    },
    {
      name: "Cornetto 6 unidades",
      category: "Congelados & Conveni\xEAncia",
      icon: "https://www.svgrepo.com/show/387818/icecream-one.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/gelado-cone-morango-6-unidades-cornetto-5564190.html"
        },
        {
          link: "https://www.continente.pt/produto/gelado-cone-classico-cornetto-7371928.html"
        }
      ]
    },
    {
      name: "Gelado Morango Calippo",
      category: "Congelados & Conveni\xEAncia",
      icon: "https://www.svgrepo.com/show/387818/icecream-one.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/gelado-morango-calippo-5553145.html"
        }
      ]
    },
    {
      name: "Gnocchi Batata",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/122932/pasta.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/gnocchi-batata-garofalo-4850079.html"
        },
        {
          link: "https://www.continente.pt/produto/gnocchi-di-patate-la-molisana-5523888.html"
        },
        {
          link: "https://www.continente.pt/produto/gnocchi-fresco-rana-7707857.html"
        }
      ]
    },
    {
      name: "Gomas Amoras",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/298644/candies-sugar.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/gomas-amoras-vidal-7646467.html"
        },
        {
          link: "https://www.continente.pt/produto/gomas-amoras-sem-gluten-continente-infantil-7327120.html"
        }
      ]
    },
    {
      name: "Gomas Favoritos",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/298644/candies-sugar.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/gomas-favoritos-haribo-4452987.html"
        }
      ]
    },
    {
      name: "Gomas Ursinhos",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/298644/candies-sugar.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/gomas-ositos-de-oro-haribo-7520374.html"
        },
        {
          link: "https://www.continente.pt/produto/gomas-ositos-de-oro-haribo-4113537.html"
        }
      ]
    },
    {
      name: "Gomas Funky Mix Formato Familiar",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/298644/candies-sugar.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/gomas-funky-mix-formato-familiar-haribo-7520375.html"
        }
      ]
    },
    {
      name: "Gomas Melancia",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/298644/candies-sugar.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/gomas-melancia-vidal-7646468.html"
        }
      ]
    },
    {
      name: "Gomas Regaliz Pica Sortido",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/298644/candies-sugar.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/gomas-regaliz-pica-sortido-vidal-7660296.html"
        }
      ]
    },
    {
      name: "Gressinos com Azeite",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/145274/corn-snacks.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/gressinos-com-azeite-continente-5566313.html"
        },
        {
          link: "https://www.continente.pt/produto/mini-gressinos-com-azeite-continente-4644452.html"
        }
      ]
    },
    {
      name: "Gressinos Naturais",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/145274/corn-snacks.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/gressinos-naturais-continente-6217948.html"
        }
      ]
    },
    {
      name: "Ch\xE1 Camomila",
      category: "Congelados & Conveni\xEAncia",
      icon: "https://www.svgrepo.com/show/524178/tea-cup.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/infusao-camomila-saquetas-tetley-5070838.html"
        },
        {
          link: "https://www.continente.pt/produto/infusao-camomila-pyramid-saquetas-lipton-3740106.html"
        },
        {
          link: "https://www.continente.pt/produto/infusao-camomila-saquetas-tetley-3646768.html"
        },
        {
          link: "https://www.continente.pt/produto/infusao-de-camomila-saquetas-lipton-2003965.html"
        },
        {
          link: "https://www.continente.pt/produto/infusao-n19-camomila-saquetas-raizes-da-natureza-2629238.html"
        },
        {
          link: "https://www.continente.pt/produto/infusao-camomila-saquetas-cem-porcento-6581744.html"
        }
      ]
    },
    {
      name: "Iogurte Grego Maracuj\xE1",
      category: "Latic\xEDnios",
      icon: "https://www.svgrepo.com/show/482301/pudding-2.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/iogurte-grego-maracuja-oikos-danone-7214148.html"
        },
        {
          link: "https://www.continente.pt/produto/iogurte-grego-mythos-maracuja-continente-5697239.html"
        }
      ]
    },
    {
      name: "Iogurte L\xEDquido Magro Defesas Natural",
      category: "Latic\xEDnios",
      icon: "https://www.svgrepo.com/show/482301/pudding-2.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/iogurte-liquido-magro-defesas-natural-actimel-danone-7497341.html"
        },
        {
          link: "https://www.continente.pt/produto/iogurte-liquido-magro-defesas-natural-actimel-danone-4951998.html"
        }
      ]
    },
    {
      name: "Leite Condensado",
      category: "Latic\xEDnios",
      icon: "https://www.svgrepo.com/show/68202/can-of-food-with-barcode.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/leite-condensado-continente-4312757.html"
        },
        {
          link: "https://www.continente.pt/produto/leite-condensado-mimosa-2443821.html"
        },
        {
          link: "https://www.continente.pt/produto/leite-condensado-tradicional-nestle-2004882.html"
        },
        {
          link: "https://www.continente.pt/produto/leite-condensado-magro-nestle-5214166.html"
        }
      ]
    },
    {
      name: "Leite Condensado Cozido",
      category: "Latic\xEDnios",
      icon: "https://www.svgrepo.com/show/68202/can-of-food-with-barcode.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/leite-condensado-cozido-continente-5558107.html"
        },
        {
          link: "https://www.continente.pt/produto/leite-condensado-cozido-nestle-5096698.html"
        },
        {
          link: "https://www.continente.pt/produto/leite-condensado-cozido-mimosa-6906685.html"
        }
      ]
    },
    {
      name: "Leite Condensado Magro",
      category: "Latic\xEDnios",
      icon: "https://www.svgrepo.com/show/68202/can-of-food-with-barcode.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/leite-condensado-magro-continente-4312748.html"
        },
        {
          link: "https://www.continente.pt/produto/leite-condensado-magro-nestle-5214166.html"
        }
      ]
    },
    {
      name: "Leite de Coco",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/68202/can-of-food-with-barcode.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/leite-de-coco-continente-7146725.html"
        },
        {
          link: "https://www.continente.pt/produto/leite-de-coco-tai-4721024.html"
        },
        {
          link: "https://www.continente.pt/produto/leite-de-coco-koala-2223649.html"
        },
        {
          link: "https://www.continente.pt/produto/leite-de-coco-origens-bio-5870516.html"
        }
      ]
    },
    {
      name: "Leite UHT Meio Gordo sem Lactose",
      category: "Latic\xEDnios",
      icon: "https://www.svgrepo.com/show/490858/milk-bottle.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/leite-uht-meio-gordo-sem-lactose-mimosa-4064882.html"
        }
      ]
    },
    {
      name: "Len\xE7os Faciais",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/212378/napkin.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/lencos-faciais-continente-7744824.html"
        },
        {
          link: "https://www.continente.pt/produto/lencos-faciais-scottex-5978959.html"
        },
        {
          link: "https://www.continente.pt/produto/lencos-faciais-2-folhas-essencial-renova-7393082.html"
        },
        {
          link: "https://www.continente.pt/produto/lencos-faciais-family-kleenex-7476556.html"
        },
        {
          link: "https://www.continente.pt/produto/lencos-faciais-2-folhas-essencial-soft-renova-8200645.html"
        }
      ]
    },
    {
      name: "Limpa Vidros Recarga Tripla A\xE7\xE3o",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/490641/cleaning-spray.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/limpa-vidros-recarga-tripla-acao-ajax-2217393.html"
        },
        {
          link: "https://www.continente.pt/produto/limpa-vidros-spray-tripla-acao-ajax-2217391.html"
        }
      ]
    },
    {
      name: "Lombinhos de Frango",
      category: "Carne & Peixe",
      icon: "https://www.svgrepo.com/show/118464/plate-and-utensils-top-view.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/lombinhos-de-frango-continente-7069746.html"
        }
      ]
    },
    {
      name: "Lombos de Pescada do Cabo Ultracongelada",
      category: "Carne & Peixe",
      icon: "https://www.svgrepo.com/show/521140/fish.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/lombos-de-pescada-do-cabo-ultracongelada-continente-4952133.html"
        },
        {
          link: "https://www.continente.pt/produto/lombos-de-pescada-do-cabo-ultracongelada-iglo-7630222.html"
        },
        {
          link: "https://www.continente.pt/produto/lombos-de-pescada-do-cabo-congelada-pescanova-7367887.html"
        }
      ]
    },
    {
      name: "Lombos de Salm\xE3o ASC Ultracongelado",
      category: "Carne & Peixe",
      icon: "https://www.svgrepo.com/show/521140/fish.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/lombos-de-salmao-asc-ultracongelado-continente-6635820.html"
        },
        {
          link: "https://www.continente.pt/produto/lombos-de-salmao-ultracongelado-pescanova-7156302.html"
        },
        {
          link: "https://www.continente.pt/produto/lombos-de-salmao-asc-ultracongelado-continente-6635822.html"
        }
      ]
    },
    {
      name: "Ma\xE7\xE3 Gala",
      category: "Frutas & Verduras",
      icon: "https://www.svgrepo.com/show/447085/apple.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/maca-gala-continente-7174689.html"
        }
      ]
    },
    {
      name: "Ma\xE7\xE3 Pink Lady",
      category: "Frutas & Verduras",
      icon: "https://www.svgrepo.com/show/447085/apple.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/maca-pink-lady-continente-7303767.html"
        }
      ]
    },
    {
      name: "Ma\xE7\xE3 Vermelha Desidratada",
      category: "Frutas & Verduras",
      icon: "https://www.svgrepo.com/show/447085/apple.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/maca-vermelha-desidratada-fruut-5129567.html"
        }
      ]
    },
    {
      name: "Manteiga de Amendoim com Peda\xE7os",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/81472/butter.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/manteiga-de-amendoim-com-pedacos-continente-equilibrio-8163576.html"
        },
        {
          link: "https://www.continente.pt/produto/manteiga-de-amendoim-crocante-prozis-6211747.html"
        },
        {
          link: "https://www.continente.pt/produto/manteiga-de-amendoim-com-pedacos-sem-gluten-continente-8252129.html"
        },
        {
          link: "https://www.continente.pt/produto/manteiga-de-amendoim-com-pedacos-calve-7399733.html"
        }
      ]
    },
    {
      name: "Manteiga sem Lactose",
      category: "Latic\xEDnios",
      icon: "https://www.svgrepo.com/show/29916/knife-and-butter.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/manteiga-sem-lactose-mimosa-7465056.html"
        },
        {
          link: "https://www.continente.pt/produto/manteiga-light-com-sal-sem-lactose-primor-6280307.html"
        },
        {
          link: "https://www.continente.pt/produto/manteiga-sem-lactose-montanari-7538014.html"
        },
        {
          link: "https://www.continente.pt/produto/manteiga-magra-sem-lactose-matinal-7843136.html"
        }
      ]
    },
    {
      name: "Manteiga sem Sal",
      category: "Latic\xEDnios",
      icon: "https://www.svgrepo.com/show/29916/knife-and-butter.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/manteiga-sem-sal-primor-2211085.html"
        },
        {
          link: "https://www.continente.pt/produto/manteiga-sem-sal-mimosa-4090087.html"
        },
        {
          link: "https://www.continente.pt/produto/manteiga-sem-sal-terra-nostra-7010820.html"
        },
        {
          link: "https://www.continente.pt/produto/manteiga-magra-baixo-teor-sal-president-2807598.html"
        }
      ]
    },
    {
      name: "Massa Esparguete",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/122932/pasta.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/massa-esparguete-n5-barilla-2062765.html"
        },
        {
          link: "https://www.continente.pt/produto/massa-esparguete-quadri-milaneza-5125048.html"
        },
        {
          link: "https://www.continente.pt/produto/massa-esparguete-quadri-la-molisana-5332697.html"
        }
      ]
    },
    {
      name: "Massa Farfalle",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/122932/pasta.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/massa-lacos-farfalle-milaneza-2665123.html"
        },
        {
          link: "https://www.continente.pt/produto/massa-farfalle-garofalo-3731492.html"
        }
      ]
    },
    {
      name: "Massa Folhada",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/322210/dough-roller.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/massa-folhada-continente-8188137.html"
        }
      ]
    },
    {
      name: "Massa Fresca para Pizza",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/490285/pizza.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/massa-fresca-para-pizza-xxl-continente-5683899.html"
        },
        {
          link: "https://www.continente.pt/produto/massa-fresca-para-pizza-100--farinha-de-espelta-continente-7246187.html"
        }
      ]
    },
    {
      name: "Massa Fusilli",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/122932/pasta.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/massa-fusilli-barilla-2417163.html"
        },
        {
          link: "https://www.continente.pt/produto/massa-espirais-fusilli-milaneza-2003323.html"
        },
        {
          link: "https://www.continente.pt/produto/massa-fusilli-la-molisana-5523825.html"
        },
        {
          link: "https://www.continente.pt/produto/massa-fusilli-rummo-6284511.html"
        },
        {
          link: "https://www.continente.pt/produto/massa-fusilli-sem-gluten-rummo-5884021.html"
        },
        {
          link: "https://www.continente.pt/produto/massa-helices-milaneza-4552627.html"
        }
      ]
    },
    {
      name: "Massa Penne Rigate",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/122932/pasta.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/massa-penne-rigate-barilla-2417128.html"
        },
        {
          link: "https://www.continente.pt/produto/massa-penne-rigate-rummo-6284510.html"
        },
        {
          link: "https://www.continente.pt/produto/massa-penne-rigate-la-molisana-5523828.html"
        },
        {
          link: "https://www.continente.pt/produto/massa-penne-rigate-sem-gluten-rummo-5884008.html"
        },
        {
          link: "https://www.continente.pt/produto/massa-penne-rigate-sem-gluten-garofalo-7227666.html"
        }
      ]
    },
    {
      name: "Massa Tenra Fresca",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/322210/dough-roller.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/massa-tenra-fresca-pasta-do-dia-6899834.html"
        }
      ]
    },
    {
      name: "Mel de Flores",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/482008/honey-illustration-3.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/mel-flores-continente-4728172.html"
        },
        {
          link: "https://www.continente.pt/produto/mel-de-flores-origens-bio-7375862.html"
        },
        {
          link: "https://www.continente.pt/produto/mel-de-flores-100--portugues-top-down-continente-selecao-7447291.html"
        }
      ]
    },
    {
      name: "Mexilh\xE3o Fresco",
      category: "Carne & Peixe",
      icon: "https://www.svgrepo.com/show/521140/fish.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/mexilhao-fresco-2148380.html"
        }
      ]
    },
    {
      name: "Milho Doce",
      category: "Congelados & Conveni\xEAncia",
      icon: "https://www.svgrepo.com/show/211949/corn.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/milho-doce-continente-8183107.html"
        },
        {
          link: "https://www.continente.pt/produto/milho-doce-continente-5292575.html"
        }
      ]
    },
    {
      name: "Milho para Pipocas",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/296867/popcorn.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/milho-para-pipocas-continente-2149368.html"
        }
      ]
    },
    {
      name: "Miolo de Caju",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/281671/nuts-nut.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/miolo-de-caju-frumesa-7625587.html"
        },
        {
          link: "https://www.continente.pt/produto/miolo-de-caju-cru-frusel-7589563.html"
        }
      ]
    },
    {
      name: "Miolo de Camar\xE3o Selvagem 60/80 Congelado",
      category: "Carne & Peixe",
      icon: "https://www.svgrepo.com/show/481620/shrimp-illustration-2.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/miolo-de-camarao-selvagem-60-80-congelado-continente-7258371.html"
        }
      ]
    },
    {
      name: "Miolo de Camar\xE3o 80/100 Ultracongelado",
      category: "Carne & Peixe",
      icon: "https://www.svgrepo.com/show/481620/shrimp-illustration-2.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/miolo-de-camarao-80-100-ultracongelado-continente-4750959.html"
        }
      ]
    },
    {
      name: "Miolo de Camar\xE3o 80/100 Ultracongelado",
      category: "Carne & Peixe",
      icon: "https://www.svgrepo.com/show/481620/shrimp-illustration-2.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/miolo-de-camarao-80-100-ultracongelado-pescanova-4563382.html"
        },
        {
          link: "https://www.continente.pt/produto/miolo-de-camarao-80-100-ultracongelado-continente-4750959.html"
        },
        {
          link: "https://www.continente.pt/produto/miolo-de-camarao-selvagem-80-100-congelado-pack-poupanca-continente-7788025.html"
        }
      ]
    },
    {
      name: "Miolo de Camar\xE3o Selvagem 20/40 Congelado",
      category: "Carne & Peixe",
      icon: "https://www.svgrepo.com/show/481620/shrimp-illustration-2.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/miolo-de-camarao-selvagem-20-40-congelado-continente-7147180.html"
        }
      ]
    },
    {
      name: "Miolo de Castanha do Maranh\xE3o",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/281671/nuts-nut.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/miolo-de-castanha-do-maranhao-continente-7029189.html"
        }
      ]
    },
    {
      name: "Miolo de Gamba Rosa Selvagem 30/40 Congelado",
      category: "Carne & Peixe",
      icon: "https://www.svgrepo.com/show/481620/shrimp-illustration-2.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/miolo-de-gamba-rosa-selvagem-de-mocambique-30-40-congelado-continente-selecao-7071705.html"
        }
      ]
    },
    {
      name: "Molho Picante Jalapenho",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/281636/sauce.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/molho-picante-jalapenho-sem-gluten-tabasco-2175307.html"
        }
      ]
    },
    {
      name: "Molho Sweet Chili",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/281636/sauce.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/molho-sweet-chili-blue-dragon-2293622.html"
        }
      ]
    },
    {
      name: "Moscatel Bacalh\xF4a de Set\xFAbal",
      category: "Bebidas",
      icon: "https://www.svgrepo.com/show/474305/wine.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/moscatel-bacalhoa-de-setubal-bacalhoa-2813629.html"
        }
      ]
    },
    {
      name: "Mula Velha Reserva Regional Lisboa Vinho Branco",
      category: "Bebidas",
      icon: "https://www.svgrepo.com/show/474305/wine.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/mula-velha-reserva-regional-lisboa-vinho-branco-mula-velha-5400426.html"
        }
      ]
    },
    {
      name: "Mula Velha Reserva Regional Lisboa Vinho Tinto",
      category: "Bebidas",
      icon: "https://www.svgrepo.com/show/474305/wine.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/mula-velha-reserva-regional-lisboa-vinho-tinto-mula-velha-5400380.html"
        }
      ]
    },
    {
      name: "Mula Velha Syrah Regional Lisboa Vinho Tinto",
      category: "Bebidas",
      icon: "https://www.svgrepo.com/show/474305/wine.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/mula-velha-syrah-regional-lisboa-vinho-tinto-mula-velha-6956611.html"
        }
      ]
    },
    {
      name: "Nachos de Milho com Sal",
      category: "Lanches & Doces",
      icon: "https://raw.githubusercontent.com/iconic/open-iconic/master/svg/basket.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/nachos-de-milho-com-sal-pack-poupanca-continente-7753137.html"
        }
      ]
    },
    {
      name: "Natas UHT para Bater sem Lactose",
      category: "Latic\xEDnios",
      icon: "https://www.svgrepo.com/show/167255/bottle.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/natas-uht-para-bater-sem-lactose-parmalat-6119254.html"
        }
      ]
    },
    {
      name: "Or\xE9g\xE3os Folha",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/482131/salt-and-pepper.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/oregaos-folha-em-saqueta-margao-2003405.html"
        },
        {
          link: "https://www.continente.pt/produto/oregaos-folha-em-saqueta-margao-7636122.html"
        },
        {
          link: "https://www.continente.pt/produto/oregaos-folha-em-frasco-margao-2003408.html"
        },
        {
          link: "https://www.continente.pt/produto/oregaos-folha-em-frasco-margao-7436770.html"
        }
      ]
    },
    {
      name: "Ovos Classe M/L",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/487320/egg.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/ovos-classe-m-l-ruby-zezerovo-7696303.html"
        },
        {
          link: "https://www.continente.pt/produto/ovos-de-ar-livre-classe-m-l-continente-7411429.html"
        },
        {
          link: "https://www.continente.pt/produto/ovos-de-ar-livre-classe-m-l-matinados-6664918.html"
        },
        {
          link: "https://www.continente.pt/produto/ovos-de-solo-classe-m-l-continente-7725153.html"
        }
      ]
    },
    {
      name: "P\xE3o de Forma com C\xF3dea Familiar",
      category: "Panifica\xE7\xE3o & Confeitaria",
      icon: "https://www.svgrepo.com/show/521091/bread-slice.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/pao-de-forma-com-codea-familiar-bimbo-5571005.html"
        }
      ]
    },
    {
      name: "P\xE3o de Ab\xF3bora e Nozes",
      category: "Panifica\xE7\xE3o & Confeitaria",
      icon: "https://www.svgrepo.com/show/521091/bread-slice.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/pao-de-abobora-e-nozes-7371652.html"
        }
      ]
    },
    {
      name: "P\xE3o de Forma sem C\xF4dea",
      category: "Panifica\xE7\xE3o & Confeitaria",
      icon: "https://www.svgrepo.com/show/521091/bread-slice.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/pao-de-forma-sem-codea-bimbo-6246547.html"
        }
      ]
    },
    {
      name: "P\xE3o de Queijo",
      category: "Panifica\xE7\xE3o & Confeitaria",
      icon: "https://www.svgrepo.com/show/482180/cheese.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/pao-de-queijo-continente-selecao-7055967.html"
        }
      ]
    },
    {
      name: "P\xE3o R\xFAstico Massa M\xE3e Fatiado",
      category: "Panifica\xE7\xE3o & Confeitaria",
      icon: "https://www.svgrepo.com/show/521091/bread-slice.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/pao-rustico-massa-mae-fatiado-the-rustik-bakery-5726428.html"
        }
      ]
    },
    {
      name: "Papa Figos Vinho Branco",
      category: "Bebidas",
      icon: "https://www.svgrepo.com/show/474305/wine.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/papa-figos-doc-douro-vinho-branco-papa-figos-6274693.html"
        }
      ]
    },
    {
      name: "Papa Figos Vinho Tinto",
      category: "Bebidas",
      icon: "https://www.svgrepo.com/show/474305/wine.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/papa-figos-doc-douro-vinho-tinto-papa-figos-4952282.html"
        }
      ]
    },
    {
      name: "Papel Higi\xE9nico H\xFAmido J\xFAnior",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/479837/toilet-paper-4.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/papel-higienico-humido-junior-scottex-4758757.html"
        }
      ]
    },
    {
      name: "Papel Higi\xE9nico",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/479837/toilet-paper-4.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/papel-higienico-ultra-suave-xxl-compacto-colhogar-6021279.html"
        },
        {
          link: "https://www.continente.pt/produto/papel-higienico-ultra-suave-xxl-compacto-colhogar-6646118.html"
        },
        {
          link: "https://www.continente.pt/produto/papel-higienico-3-folhas-ultra-suave-talco-continente-5879135.html"
        }
      ]
    },
    {
      name: "Papel Vegetal 30 Folhas",
      category: "Congelados & Conveni\xEAncia",
      icon: "https://www.svgrepo.com/show/311588/oven.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/papel-vegetal-30-folhas-continente-7520083.html"
        }
      ]
    },
    {
      name: "Pasta de Dentes 7 a 12 Anos",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/300766/cream.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/pasta-de-dentes-junior-protecao-total-7-a-12-anos-colgate-7432943.html"
        }
      ]
    },
    {
      name: "Pasta de Dentes",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/300766/cream.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/pasta-de-dentes-total-pro-gengivas-saudaveis-colgate-4866338.html"
        }
      ]
    },
    {
      name: "Pepino",
      category: "Frutas & Verduras",
      icon: "https://raw.githubusercontent.com/iconic/open-iconic/master/svg/cart.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/pepino-continente-2076815.html"
        }
      ]
    },
    {
      name: "Pepperoni em Rodelas",
      category: "Carne & Peixe",
      icon: "https://www.svgrepo.com/show/149317/salami.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/pepperoni-em-rodelas-continente-8284433.html"
        }
      ]
    },
    {
      name: "Pimenta Branca em Gr\xE3o",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/482131/salt-and-pepper.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/pimenta-branca-em-grao-em-saqueta-continente-7209860.html"
        }
      ]
    },
    {
      name: "Pimenta Preta em Gr\xE3o",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/482131/salt-and-pepper.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/pimenta-preta-em-grao-em-saqueta-continente-7209850.html"
        },
        {
          link: "https://www.continente.pt/produto/pimenta-preta-em-grao-saqueta-margao-7576908.html"
        }
      ]
    },
    {
      name: "Pimenta Preta Mo\xEDda",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/482131/salt-and-pepper.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/pimenta-preta-moida-em-saqueta-continente-6046661.html"
        },
        {
          link: "https://www.continente.pt/produto/pimenta-preta-moida-saqueta-margao-7599927.html"
        },
        {
          link: "https://www.continente.pt/produto/pimenta-preta-moida-margao-6618833.html"
        },
        {
          link: "https://www.continente.pt/produto/pimenta-preta-moida-do-brasil-em-frasco-margao-6255370.html"
        }
      ]
    },
    {
      name: "Pimenta Rosa em Gr\xE3o",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/482131/salt-and-pepper.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/pimenta-rosa-em-grao-em-saqueta-margao-7626282.html"
        }
      ]
    },
    {
      name: "Piment\xE3o Doce Mo\xEDdo",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/482131/salt-and-pepper.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/pimentao-doce-em-saqueta-continente-6046677.html"
        },
        {
          link: "https://www.continente.pt/produto/pimentao-doce-colorau-em-saqueta-margao-7626281.html"
        },
        {
          link: "https://www.continente.pt/produto/pimentao-doce-colorau-em-saqueta-margao-7588178.html"
        }
      ]
    },
    {
      name: "Pimento Vermelho",
      category: "Frutas & Verduras",
      icon: "https://www.svgrepo.com/show/205352/paprika.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/pimento-vermelho-continente-2076826.html"
        }
      ]
    },
    {
      name: "Pipocas Manteiga Micro-ondas",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/296867/popcorn.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/pipocas-manteiga-micro-ondas-continente-8023008.html"
        }
      ]
    },
    {
      name: "Polpa de Tomate",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/459170/bottle.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/polpa-de-tomate-guloso-4092713.html"
        }
      ]
    },
    {
      name: "Preparado para Chantilly",
      category: "Latic\xEDnios",
      icon: "https://www.svgrepo.com/show/167255/bottle.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/preparado-para-chantilly-royal-2004307.html"
        }
      ]
    },
    {
      name: "Preservativos Fin\xEDssimo XL",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/526830/box.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/preservativos-finissimo-xl-control-5576130.html"
        }
      ]
    },
    {
      name: "Protetor Solar Corpo",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/300766/cream.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/protetor-solar-leite-ambre-solaire-sensitive-advanced-fps-50-garnier-6092169.html"
        }
      ]
    },
    {
      name: "Protetor Solar Rosto",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/300766/cream.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/protetor-solar-locao-ambre-solaire-rosto-sensitive-advanced-fps-50-garnier-7727040.html"
        }
      ]
    },
    {
      name: "Queijinho Polpa Morango Infantil",
      category: "Latic\xEDnios",
      icon: "https://www.svgrepo.com/show/154167/yogurt.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/queijinho-polpa-morango-infantil-danonino-danone-4377808.html"
        }
      ]
    },
    {
      name: "Queijo Camembert",
      category: "Latic\xEDnios",
      icon: "https://www.svgrepo.com/show/482180/cheese.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/queijo-camembert-continente-7244462.html"
        },
        {
          link: "https://www.continente.pt/produto/queijo-camembert-president-2163814.html"
        }
      ]
    },
    {
      name: "Queijo Emmental",
      category: "Latic\xEDnios",
      icon: "https://www.svgrepo.com/show/482180/cheese.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/queijo-emmental-president-2163844.html"
        }
      ]
    },
    {
      name: "Queijo Flamengo Fatiado",
      category: "Latic\xEDnios",
      icon: "https://www.svgrepo.com/show/482180/cheese.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/queijo-flamengo-fatiado-continente-2888438.html"
        },
        {
          link: "https://www.continente.pt/produto/queijo-flamengo-fatiado-continente-6184775.html"
        },
        {
          link: "https://www.continente.pt/produto/queijo-flamengo-fatiado-campainha-6419166.html"
        },
        {
          link: "https://www.continente.pt/produto/queijo-flamengo-fatiado-mr.-cheese-8008937.html"
        },
        {
          link: "https://www.continente.pt/produto/queijo-flamengo-fatiado-continente-2888438.html"
        }
      ]
    },
    {
      name: "Queijo Flamengo sem Lactose Fatiado",
      category: "Latic\xEDnios",
      icon: "https://www.svgrepo.com/show/482180/cheese.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/queijo-flamengo-sem-lactose-fatiado-limiano-4863936.html"
        },
        {
          link: "https://www.continente.pt/produto/queijo-flamengo-sem-lactose-fatiado-terra-nostra-5125010.html"
        },
        {
          link: "https://www.continente.pt/produto/queijo-flamengo-sem-lactose-light-fatiado-limiano-4863937.html"
        },
        {
          link: "https://www.continente.pt/produto/queijo-flamengo-sem-lactose-light-fatiado-terra-nostra-4863925.html"
        },
        {
          link: "https://www.continente.pt/produto/queijo-flamengo-sem-lactose-fatiado-limiano-2543571.html"
        },
        {
          link: "https://www.continente.pt/produto/queijo-flamengo-sem-lactose-light-fatiado-limiano-2987708.html"
        },
        {
          link: "https://www.continente.pt/produto/queijo-flamengo-sem-lactose-fatiado-continente-7490244.html"
        },
        {
          link: "https://www.continente.pt/produto/queijo-flamengo-sem-lactose-fatiado-terra-nostra-5100486.html"
        },
        {
          link: "https://www.continente.pt/produto/queijo-flamengo-sem-lactose-light-fatiado-terra-nostra-2918187.html"
        },
        {
          link: "https://www.continente.pt/produto/queijo-flamengo-sem-lactose-biologico-fatiado-terra-nostra-7384221.html"
        }
      ]
    },
    {
      name: "Queijo Fresco Cottage Magro",
      category: "Latic\xEDnios",
      icon: "https://www.svgrepo.com/show/482180/cheese.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/queijo-fresco-cottage-magro-danone-6869131.html"
        },
        {
          link: "https://www.continente.pt/produto/queijo-fresco-cottage-magro-matinal-7621913.html"
        }
      ]
    },
    {
      name: "Queijo Grana Padano",
      category: "Latic\xEDnios",
      icon: "https://www.svgrepo.com/show/482180/cheese.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/queijo-grana-padano-continente-6015576.html"
        }
      ]
    },
    {
      name: "Queijo Mozzarella Ralado para Pizza",
      category: "Latic\xEDnios",
      icon: "https://www.svgrepo.com/show/482180/cheese.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/queijo-mozzarella-ralado-para-pizza-continente-8036907.html"
        },
        {
          link: "https://www.continente.pt/produto/queijo-mozzarella-ralado-para-pizza--30--gordura-continente-equilibrio-7739428.html"
        },
        {
          link: "https://www.continente.pt/produto/queijo-mozzarella-ralado-para-pizza-continente-8094510.html"
        }
      ]
    },
    {
      name: "Queijo para Barrar",
      category: "Latic\xEDnios",
      icon: "https://www.svgrepo.com/show/482180/cheese.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/queijo-para-barrar-com-ervas-finas-philadelphia-4446849.html"
        },
        {
          link: "https://www.continente.pt/produto/queijo-para-barrar-com-alho-e-ervas-quescrem-7732070.html"
        }
      ]
    },
    {
      name: "Queijo para Barrar sem Lactose",
      category: "Latic\xEDnios",
      icon: "https://www.svgrepo.com/show/482180/cheese.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/queijo-para-barrar-sem-lactose-philadelphia-5760375.html"
        },
        {
          link: "https://www.continente.pt/produto/queijo-fresco-para-barrar-sem-lactose-santiago-8068516.html"
        }
      ]
    },
    {
      name: "Ravioli Fresco de Fiambre e Queijo",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/122932/pasta.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/ravioli-fresco-de-fiambre-e-queijo-rana-5060891.html"
        }
      ]
    },
    {
      name: "Coca-Cola Lata",
      category: "Bebidas",
      icon: "https://www.svgrepo.com/show/482137/beer-poured-into-glass.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/refrigerante-com-gas-cola-coca-cola-7748929.html"
        }
      ]
    },
    {
      name: "Coca-Cola Garrafa",
      category: "Bebidas",
      icon: "https://www.svgrepo.com/show/482137/beer-poured-into-glass.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/refrigerante-com-gas-cola-coca-cola-7199034.html"
        },
        {
          link: "https://www.continente.pt/produto/refrigerante-com-gas-cola-coca-cola-2391674.html"
        },
        {
          link: "https://www.continente.pt/produto/refrigerante-com-gas-cola-coca-cola-6184772.html"
        }
      ]
    },
    {
      name: "Resma de Papel de Impress\xE3o A4 500 Folhas",
      category: "Congelados & Conveni\xEAncia",
      icon: "https://www.svgrepo.com/show/284407/paper-sheet.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/resma-de-papel-de-impressao-a4-500-folhas-90g-m2-navigator-2242350.html"
        }
      ]
    },
    {
      name: "Roboredo Premium Vinho Tinto",
      category: "Bebidas",
      icon: "https://www.svgrepo.com/show/474305/wine.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/roboredo-premium-doc-douro-vinho-tinto-roboredo-7316584.html"
        }
      ]
    },
    {
      name: "Rolo de Cozinha Design XXL",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/493123/toilet-paper.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/rolo-de-cozinha-design-xxl-renova-5182883.html"
        }
      ]
    },
    {
      name: "Sabonete L\xEDquido Cremoso",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/453851/soap.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/sabonete-liquido-cremoso-mylabel-8110536.html"
        }
      ]
    },
    {
      name: "Sacos Lixo Anti Pingos 50 lt",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/456310/recycle-bag.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/sacos-lixo-anti-pingos-50-lt-handy-bag-8437976.html"
        }
      ]
    },
    {
      name: "Sal Fino",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/482131/salt-and-pepper.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/sal-fino-continente-5621157.html"
        }
      ]
    },
    {
      name: "Sal Fino Iodado",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/482131/salt-and-pepper.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/sal-fino-iodado-vatel-7301764.html"
        }
      ]
    },
    {
      name: "Sal M\xE1quina Loi\xE7a",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/490698/dishwasher.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/sal-maquina-loica-sun-2388486.html"
        },
        {
          link: "https://www.continente.pt/produto/sal-maquina-loica-finish-8398528.html"
        },
        {
          link: "https://www.continente.pt/produto/sal-maquina-loica-continente-4757898.html"
        }
      ]
    },
    {
      name: "Salame N\xE1poles Fatiado",
      category: "Carne & Peixe",
      icon: "https://www.svgrepo.com/show/149317/salami.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/salame-napoles-fatiado-corte-del-gusto-6490620.html"
        }
      ]
    },
    {
      name: "Salame Spianata Fatiado",
      category: "Carne & Peixe",
      icon: "https://www.svgrepo.com/show/149317/salami.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/salame-spianata-fatiado-galbani-7656234.html"
        }
      ]
    },
    {
      name: "Salm\xE3o Pequeno Fresco",
      category: "Carne & Peixe",
      icon: "https://www.svgrepo.com/show/521140/fish.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/salmao-pequeno-fresco-2566219.html"
        }
      ]
    },
    {
      name: "Sardinha em Tomate",
      category: "Carne & Peixe",
      icon: "https://raw.githubusercontent.com/iconic/open-iconic/master/svg/cart.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/sardinha-em-tomate-ramirez-2005224.html"
        },
        {
          link: "https://www.continente.pt/produto/sardinha-portuguesa-em-tomate-e-azeite-virgem-extra-gallo-7745434.html"
        },
        {
          link: "https://www.continente.pt/produto/sardinha-em-tomate-bom-petisco-7170394.html"
        }
      ]
    },
    {
      name: "Sardinha em Azeite",
      category: "Carne & Peixe",
      icon: "https://raw.githubusercontent.com/iconic/open-iconic/master/svg/cart.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/sardinha-portuguesa-em-tomate-e-azeite-virgem-extra-gallo-7745434.html"
        },
        {
          link: "https://www.continente.pt/produto/sardinha-em-azeite-continente-7368483.html"
        },
        {
          link: "https://www.continente.pt/produto/sardinha-em-azeite-ramirez-4022670.html"
        },
        {
          link: "https://www.continente.pt/produto/sardinha-em-azeite-bom-petisco-6629409.html"
        },
        {
          link: "https://www.continente.pt/produto/sardinha-em-azeite-lider-6605903.html"
        },
        {
          link: "https://www.continente.pt/produto/sardinha-em-azeite-bom-petisco-7175514.html"
        }
      ]
    },
    {
      name: "Sidra Blackberry",
      category: "Bebidas",
      icon: "https://www.svgrepo.com/show/485706/drink3.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/sidra-com-alcool-blackberry-somersby-7610907.html"
        },
        {
          link: "https://www.continente.pt/produto/sidra-com-alcool-blackberry-somersby-5484340.html"
        }
      ]
    },
    {
      name: "Sidra Ma\xE7\xE3",
      category: "Bebidas",
      icon: "https://www.svgrepo.com/show/485706/drink3.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/sidra-com-alcool-maca-somersby-7779421.html"
        },
        {
          link: "https://www.continente.pt/produto/sidra-com-alcool-maca-somersby-7171493.html"
        },
        {
          link: "https://www.continente.pt/produto/sidra-com-alcool-maca-somersby-6929963.html"
        },
        {
          link: "https://www.continente.pt/produto/sidra-com-alcool-maca-somersby-5130983.html"
        },
        {
          link: "https://www.continente.pt/produto/sidra-com-alcool-maca-somersby-7785229.html"
        },
        {
          link: "https://www.continente.pt/produto/sidra-com-alcool-maca-somersby-7732058.html"
        }
      ]
    },
    {
      name: "Snacks Milho Futebolas Sabor Queijo",
      category: "Lanches & Doces",
      icon: "https://raw.githubusercontent.com/iconic/open-iconic/master/svg/basket.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/snacks-milho-futebolas-sabor-queijo-cheetos-2727977.html"
        }
      ]
    },
    {
      name: "Spray WC Ultra Higiene L\xEDxivia",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/490641/cleaning-spray.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/spray-wc-ultra-higiene-lixivia-cif-7626169.html"
        },
        {
          link: "https://www.continente.pt/produto/spray-wc-super-limpeza-cillit-bang-7022887.html"
        }
      ]
    },
    {
      name: "Sumo 100% Ma\xE7\xE3 200 ml",
      category: "Bebidas",
      icon: "https://www.svgrepo.com/show/454606/bottle-drink-water.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/sumo-100--maca-compal-100--fruta-7546797.html"
        }
      ]
    },
    {
      name: "Sumo 100% Ma\xE7\xE3 1L",
      category: "Bebidas",
      icon: "https://www.svgrepo.com/show/454606/bottle-drink-water.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/sumo-100--maca-compal-100--fruta-2143900.html"
        }
      ]
    },
    {
      name: "Tapioca Hidratada",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/152846/flour.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/tapioca-hidratada-sem-gluten-mani-6928244.html"
        },
        {
          link: "https://www.continente.pt/produto/tapioca-hidratada-sem-gluten-da-terrinha-6207593.html"
        },
        {
          link: "https://www.continente.pt/produto/tapioca-hidratada-sem-gluten-ferbar-7431636.html"
        }
      ]
    },
    {
      name: "Tiras de Coco Biol\xF3gicas",
      category: "Frutas & Verduras",
      icon: "https://www.svgrepo.com/show/454396/coconut-fruit-fruits.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/tiras-de-coco-biologicas-continente-bio-7181882.html"
        }
      ]
    },
    {
      name: "Tortitas de Milho (Bolhachas)",
      category: "Lanches & Doces",
      icon: "https://www.svgrepo.com/show/482135/pizza-illustration.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/tortitas-de-milho-salutem-4876371.html"
        },
        {
          link: "https://www.continente.pt/produto/tortitas-de-milho-com-sal-sem-gluten-continente-equilibrio-5968600.html"
        }
      ]
    },
    {
      name: "Uva Passa",
      category: "Frutas & Verduras",
      icon: "https://www.svgrepo.com/show/447174/grape-organic.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/uva-passa-sem-grainha-continente-8112327.html"
        }
      ]
    },
    {
      name: "Vinagre Limpeza",
      category: "Higiene & Sa\xFAde",
      icon: "https://www.svgrepo.com/show/490641/cleaning-spray.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/vinagre-limpeza-gel-concentrado-boost-8163358.html"
        }
      ]
    },
    {
      name: "Wrap de Trigo",
      category: "Ingredientes & Temperos",
      icon: "https://www.svgrepo.com/show/390534/food-meat-sausage-slice.svg",
      possibleProducts: [
        {
          link: "https://www.continente.pt/produto/wrap-de-trigo-continente-7730894.html"
        },
        {
          link: "https://www.continente.pt/produto/wraps-de-trigo-mexifoods-6218476.html"
        },
        {
          link: "https://www.continente.pt/produto/tortilhas-de-trigo-old-el-paso-5181117.html"
        },
        {
          link: "https://www.continente.pt/produto/wrap-de-trigo-koala-6750401.html"
        },
        {
          link: "https://www.continente.pt/produto/wrap-de-trigo-koala-6718372.html"
        },
        {
          link: "https://www.continente.pt/produto/tortilhas-mexicanas-de-trigo-old-el-paso-6043520.html"
        },
        {
          link: "https://www.continente.pt/produto/tortilhas-milho-e-trigo-old-el-paso-2859140.html"
        }
      ]
    }
  ];

  // src/products.ts
  function fetchProducts() {
    return products_default;
  }

  // src/constants.ts
  var ICONS = {
    MINIMIZE: "\u2013",
    RESTORE: "\u{1F5D6}",
    MAXIMIZE: "\u2922"
  };
  var WIDGET_STATE = {
    MIN: "min",
    NORMAL: "normal",
    FULL: "full"
  };
  var LS_KEYS = {
    CART: "shoppingListCart",
    WIDGET: "slWidgetMode"
  };
  var URLS = {
    MINI_CART: "https://www.continente.pt/on/demandware.store/Sites-continente-Site/default/Cart-MiniCartShow",
    CART_PAGE: "https://www.continente.pt/checkout/carrinho/"
  };
  var SELECTORS = {
    PRICE_VALUE: ".product-detail .price .ct-price-value",
    ADD_BUTTON: ".product-detail .add-to-cart",
    CART_SUBTOT: "#cart-summary .ct-cart--summary-value"
  };
  var PHONE_WIDTH_PX = 431;
  var WIDGET_HTML_TEMPLATE = `
  <div id="sl-window">
    <div id="sl-header">
      <span class="sl-title">{{title}}</span>
      <div class="sl-search-wrap">
        <input id="sl-search" placeholder="Search ..." value="{{searchVal}}" />
        <button id="sl-clear">\xD7</button>
      </div>
      <div id="sl-progress"></div>
      <div class="sl-buttons">
        <button id="sl-min">${ICONS.MINIMIZE}</button>
        <button id="sl-max">${ICONS.MAXIMIZE}</button>
      </div>
    </div>
    <div id="sl-body">
      {{#categories}}
        <div class="sl-accordion">
          <div class="sl-acc-header {{#open}}open{{/open}}" data-cat="{{name}}">
            <span>{{name}}</span>
            <span class="sl-arrow">{{#open}}\u25BE{{/open}}{{^open}}\u25B8{{/open}}</span>
          </div>
          {{#open}}
            <div class="sl-acc-body open">
              {{#items}}
                <div class="sl-tile {{#added}}added{{/added}}" data-name="{{name}}">
                  <div
                    class="sl-icon"
                    style="{{#icon}}background-image:url('{{icon}}'){{/icon}}"
                  ></div>
                  <div class="sl-label">{{name}}</div>
                </div>
              {{/items}}
            </div>
          {{/open}}
        </div>
      {{/categories}}
      {{^categories}}<div class="sl-empty">No products</div>{{/categories}}
    </div>
    <button id="sl-sync" class="sl-sync-btn">Sync with Cart</button>
  </div>
`.trim();

  // src/fetchSubtotal.ts
  async function fetchSubtotal() {
    try {
      const resp = await fetch(URLS.CART_PAGE, { credentials: "include" });
      const html = await resp.text();
      const doc = new DOMParser().parseFromString(html, "text/html");
      const el = doc.querySelector(SELECTORS.CART_SUBTOT);
      return el?.textContent?.trim() ?? "";
    } catch {
      return "";
    }
  }

  // src/scrape.ts
  function scrape(link) {
    return new Promise((res, rej) => {
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = link;
      document.body.appendChild(iframe);
      iframe.onload = () => {
        try {
          const d = iframe.contentDocument || iframe.contentWindow?.document;
          if (!d) throw new Error("No document");
          const p = d.querySelector(SELECTORS.PRICE_VALUE);
          if (!p) throw new Error("Price not found");
          const price = parseFloat(
            p.textContent.trim().replace(/[€\s]/g, "").replace(",", ".")
          );
          res({ link, price, doc: d, iframe });
        } catch (err) {
          rej(err);
        }
      };
      iframe.onerror = () => {
        rej(new Error("Iframe load error"));
      };
    });
  }

  // src/initShoppingList.ts
  function initShoppingList(items, initialSubtotal) {
    let cart = JSON.parse(
      localStorage.getItem(LS_KEYS.CART) ?? "{}"
    );
    let winState = localStorage.getItem(LS_KEYS.WIDGET) || WIDGET_STATE.NORMAL;
    let openCats = /* @__PURE__ */ new Set();
    let subtotalStr = initialSubtotal;
    let searchTerm = "";
    let debounceTmr;
    let firstRender = true;
    let host;
    let win;
    let memoRect = {
      w: 0,
      h: 0,
      l: "0px",
      t: "0px"
    };
    let dragState = {
      active: false,
      x: 0,
      y: 0,
      ox: 0,
      oy: 0
    };
    host = document.createElement("div");
    host.id = "sl-host";
    document.body.appendChild(host);
    render();
    function buildView() {
      const grouped = {};
      const term = searchTerm.toLowerCase();
      items.forEach((p) => {
        if (term && !p.name.toLowerCase().includes(term)) return;
        if (!grouped[p.category]) grouped[p.category] = [];
        grouped[p.category].push({
          name: p.name,
          added: !!cart[p.name],
          icon: p.icon
        });
      });
      const categories = Object.keys(grouped).sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" })).map((cat) => {
        const its = grouped[cat].sort(
          (a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" })
        );
        if (firstRender && its.some((i) => i.added)) openCats.add(cat);
        return { name: cat, items: its, open: openCats.has(cat) };
      });
      return {
        title: `Shopping Cart${subtotalStr ? ` (${subtotalStr})` : ""}`,
        searchVal: searchTerm,
        categories
      };
    }
    function render() {
      host.innerHTML = window.Mustache.render(
        WIDGET_HTML_TEMPLATE,
        buildView()
      );
      win = host.firstElementChild;
      bindEvents();
      applyPhoneSize();
      if (winState === WIDGET_STATE.MIN) minimise(true);
      if (winState === WIDGET_STATE.FULL) maximise(true);
      const minBtn = win.querySelector("#sl-min");
      minBtn.textContent = winState === WIDGET_STATE.MIN ? ICONS.RESTORE : ICONS.MINIMIZE;
      firstRender = false;
    }
    function applyPhoneSize() {
      const w = Math.min(PHONE_WIDTH_PX, window.innerWidth * 0.9);
      const h = Math.floor(window.innerHeight * 0.8);
      Object.assign(win.style, {
        width: `${w}px`,
        height: `${h}px`,
        left: `${(window.innerWidth - w) / 2}px`,
        top: `${(window.innerHeight - h) / 2}px`
      });
    }
    function startDrag(e) {
      dragState.active = true;
      dragState.x = e.clientX;
      dragState.y = e.clientY;
      dragState.ox = parseFloat(win.style.left) || 0;
      dragState.oy = parseFloat(win.style.top) || 0;
      const onMove = (ev) => {
        if (!dragState.active) return;
        win.style.left = `${dragState.ox + ev.clientX - dragState.x}px`;
        win.style.top = `${dragState.oy + ev.clientY - dragState.y}px`;
      };
      const onUp = () => {
        dragState.active = false;
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
      };
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
      e.preventDefault();
    }
    function bindEvents() {
      win.querySelector("#sl-min").onclick = () => toggleMin();
      win.querySelector("#sl-max").onclick = () => toggleFull();
      win.querySelector("#sl-sync").onclick = () => syncWithCart();
      const searchInput = win.querySelector("#sl-search");
      const clearBtn = win.querySelector("#sl-clear");
      searchInput.oninput = () => {
        clearTimeout(debounceTmr);
        debounceTmr = window.setTimeout(() => {
          searchTerm = searchInput.value.trim();
          render();
        }, 1500);
      };
      clearBtn.onclick = () => {
        searchTerm = "";
        searchInput.value = "";
        render();
        searchInput.focus();
      };
      document.onkeydown = (e) => {
        if (e.key === "Tab") {
          e.preventDefault();
          searchInput.focus();
        }
      };
      const header = winState === WIDGET_STATE.MIN ? win : win.querySelector("#sl-header");
      header.onmousedown = (e) => startDrag(e);
      win.querySelectorAll(".sl-acc-header").forEach((h) => {
        const el = h;
        el.onclick = () => {
          const cat = el.dataset.cat;
          openCats.has(cat) ? openCats.delete(cat) : openCats.add(cat);
          render();
        };
      });
      win.querySelectorAll(".sl-tile").forEach((t) => {
        const tile = t;
        tile.onclick = () => handleTile(tile.dataset.name);
      });
    }
    function saveRect() {
      return {
        w: win.offsetWidth,
        h: win.offsetHeight,
        l: win.style.left,
        t: win.style.top
      };
    }
    function applyRect(r) {
      Object.assign(win.style, {
        width: `${r.w}px`,
        height: `${r.h}px`,
        left: r.l,
        top: r.t
      });
    }
    function minimise(initial = false) {
      if (!initial && winState === WIDGET_STATE.FULL) restoreFull();
      memoRect = saveRect();
      win.classList.add("sl-min");
      win.classList.remove("sl-full");
      Object.assign(win.style, { width: "300px", height: "48px" });
      winState = WIDGET_STATE.MIN;
      localStorage.setItem(LS_KEYS.WIDGET, winState);
    }
    function restoreMin() {
      win.classList.remove("sl-min");
      applyRect(memoRect);
      winState = WIDGET_STATE.NORMAL;
      localStorage.setItem(LS_KEYS.WIDGET, winState);
    }
    function maximise(initial = false) {
      if (!initial && winState === WIDGET_STATE.MIN) restoreMin();
      memoRect = saveRect();
      Object.assign(win.style, {
        left: "2vw",
        top: "2vh",
        width: "96vw",
        height: "95vh"
      });
      win.classList.add("sl-full");
      winState = WIDGET_STATE.FULL;
      localStorage.setItem(LS_KEYS.WIDGET, winState);
    }
    function restoreFull() {
      applyRect(memoRect);
      win.classList.remove("sl-full");
      winState = WIDGET_STATE.NORMAL;
      localStorage.setItem(LS_KEYS.WIDGET, winState);
    }
    function toggleMin() {
      winState === WIDGET_STATE.MIN ? restoreMin() : minimise();
    }
    function toggleFull() {
      winState === WIDGET_STATE.FULL ? restoreFull() : maximise();
    }
    function showProgress() {
      win.classList.add("sl-loading");
    }
    function hideProgress() {
      win.classList.remove("sl-loading");
    }
    async function handleTile(name) {
      showProgress();
      try {
        if (cart[name]) {
          delete cart[name];
          persist();
          return;
        }
        const prod = items.find((p) => p.name === name);
        if (!prod) return;
        const scrapes = [];
        for (const pp of prod.possibleProducts) {
          try {
            scrapes.push(await scrape(pp.link));
          } catch {
          }
        }
        if (!scrapes.length) {
          alert("Could not fetch price");
          return;
        }
        const best = scrapes.reduce((a, b) => a.price < b.price ? a : b);
        const buyBtn = best.doc.querySelector(
          SELECTORS.ADD_BUTTON
        );
        buyBtn?.click();
        scrapes.forEach((s) => s.iframe.remove());
        cart[name] = { link: best.link, price: best.price };
        persist();
      } finally {
        hideProgress();
      }
    }
    async function syncWithCart() {
      showProgress();
      try {
        localStorage.removeItem(LS_KEYS.CART);
        cart = {};
        const data = await fetch(URLS.MINI_CART, { credentials: "include" }).then(
          (r) => r.json()
        );
        const urls = /* @__PURE__ */ new Set();
        data.basket?.itemsSortedByBrand.forEach(
          (b) => b.items.forEach((i) => urls.add(i.productURL))
        );
        items.forEach((p) => {
          const m = p.possibleProducts.find((pp) => urls.has(pp.link));
          if (m) cart[p.name] = { link: m.link, price: 0 };
        });
        openCats = new Set(
          Object.keys(cart).map(
            (name) => items.find((i) => i.name === name)?.category || ""
          )
        );
        subtotalStr = await fetchSubtotal();
        persist();
      } catch (e) {
        console.error("Sync failed", e);
        alert("Failed to sync");
      } finally {
        hideProgress();
      }
    }
    function persist() {
      localStorage.setItem(LS_KEYS.CART, JSON.stringify(cart));
      render();
    }
  }

  // src/main.ts
  (async function bootstrap() {
    await loadMustache();
    const [items, subtotal] = await Promise.all([
      fetchProducts(),
      fetchSubtotal()
    ]);
    initShoppingList(items, subtotal);
  })();
})();
