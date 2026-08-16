export const siteConfig = {
  name: 'AUTOSKLO DRIVE',
  slogan: ' Rychlá výměna & oprava autoskel',
  heroTitle: 'Opravíme nebo vyměníme sklo na Vašem vozidle',
  heroSubtitle: 'Vyřídíme veškerou administrativu s pojišťovnou za Vás.',
  phone: '+420 777 66 38 66',
  phoneRaw: '+420777663866',
  generalEmail: 'info@autosklodrive.cz',
  workingHours: 'Po–Pá: 08:00–17:00',
};

export const branches = [
  {
    id: 'modrany',
    name: 'Pobočka Praha 4 – Modřany',
    shortTitle: 'Pobočka Modřany',
    address: 'Mezi vodami 2252/9a, 143 00 Praha 4',
    phone: '+420 777 66 38 66',
    phoneRaw: '+420777663866',
    email: 'modrany@autosklodrive.cz',
    workingHours: 'Po–Pá: 08:00–17:00',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.062013898835!2d14.402636776882296!3d50.01021461833501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9386d3e387ad%3A0x673d31298075776a!2sMezi%20vodami%202252%2F9a%2C%20143%2000%20Praha%2012-Mod%C5%99any!5e0!3m2!1scs!2scz!4v1700000000000',
  },
  {
    id: 'lety',
    name: 'Pobočka Lety u Dobřichovic',
    shortTitle: 'Pobočka Lety',
    address: 'Pražská 454, 252 29 Lety u Dobřichovic',
    phone: '+420 777 66 38 66',
    phoneRaw: '+420777663866',
    email: 'lety@autosklodrive.cz',
    workingHours: 'Po–Pá: 08:00–17:00',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.8936907576575!2d14.254181976878931!3d49.93836705347963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b963737b5d6d3%3A0x679589d81d45464!2zUHJhxb5za8OhIDQ1NCwgMjUyIDI5IExldHk!5e0!3m2!1scs!2scz!4v1700000000000',
  },
];

export const servicesData = {
  'vymena-celniho-skla': {
    id: 'vymena-celniho-skla',
    title: 'Výměna čelního skla',
    subtitle: 'PROFESIONÁLNÍ MONTÁŽ',
    description:
      'Kompletní výměna poškozeného čelního skla pro všechny typy vozidel. Používáme pouze certifikovaná skla a špičková lepidla.',
    fullText: `
      <p>Nabízíme profesionální výměnu čelních, bočních i zadních skel u všech typů osobních i nákladních automobilů. Naše práce splňuje nejpřísnější standardy bezpečnosti.</p>
      <div style="margin: 25px 0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
        <img src="${import.meta.env.BASE_URL}assets/twincitiesautoglass-1536x941.jpg" alt="Výměna čelního skla" style="width: 100%; height: auto; max-height: 420px; object-fit: cover; display: block;" />
      </div>
      <ul>
        <li>Certifikovaná skla od předních výrobců</li>
        <li>Rychlost provedení - auto je k dispozici již po několika hodinách</li>
        <li>Záruka na těsnost a montáž</li>
      </ul>
    `,
    image: `${import.meta.env.BASE_URL}assets/twincitiesautoglass-1536x941.jpg`,
  },
  'oprava-prasklin': {
    id: 'oprava-prasklin',
    title: 'Oprava prasklin',
    subtitle: 'RYCHLÁ ZÁCHRANA',
    description:
      'Rychlá oprava drobných prasklin a pavouků bez nutnosti výměny celého skla.',
    fullText: `
      <p>Ne každá prasklina vyžaduje výměnu celého skla. Pokud je poškození malé a mimo zorné pole řidiče, dokážeme ho opravit metodou scelování.</p>
      <div style="margin: 25px 0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
        <img src="${import.meta.env.BASE_URL}assets/prask.jpg" alt="Oprava prasklin a pavouků čelního skla" style="width: 100%; height: auto; max-height: 420px; object-fit: cover; display: block;" />
      </div>
      <ul>
        <li>Ušetříte čas i peníze</li>
        <li>Zamezení dalšího šíření praskliny</li>
        <li>Ponechání původního továrního skla</li>
      </ul>
    `,
    image: `${import.meta.env.BASE_URL}assets/prask.jpg`,
  },
};

export const blogPosts = [
  {
    id: 'vymena-nebo-oprava',
    tag: 'Rady & Tipy',
    image: `${import.meta.env.BASE_URL}assets/scaled.jpg`,
    alt: 'Jak poznat poškozené čelní sklo',
    title: 'Jak poznat, kdy je nutná výměna a kdy stačí oprava čelního skla?',
    excerpt: 'Přečtěte si, jaká poškození lze bezpečně opravit scelováním a kdy je z bezpečnostních důvodů nutná výměna.',
    date: '10. srpna 2025',
    readTime: '4 min čtení',
    content: `
      <p>Poškozené čelní sklo je problém, se kterým se setká každý řidič. Klíčová otázka zní: kdy stačí oprava a kdy je nutná výměna? Odpověď závisí na několika faktorech.</p>

      <h3>Kdy je možná oprava (scelování)?</h3>
      <p>Oprava metodou scelování je možná tehdy, pokud jsou splněny tyto podmínky:</p>
      <ul>
        <li>Prasklina nebo pavouček je <strong>menší než 3 cm</strong></li>
        <li>Poškození se nenachází přímo <strong>v zorném poli řidiče</strong> (přibližně 30×40 cm ve středu skla)</li>
        <li>Prasklina nezasahuje na <strong>okraj skla</strong> (okraj pevnosti)</li>
        <li>Sklo není poškozeno <strong>zevnitř</strong></li>
        <li>Jde o <strong>čistou, nezamaštěnou</strong> prasklinu (čím déle čekáte, tím horší)</li>
      </ul>

      <h3>Kdy je nutná výměna?</h3>
      <p>Výměna celého čelního skla je nevyhnutelná v těchto případech:</p>
      <ul>
        <li>Prasklina je <strong>delší než 3 cm</strong> nebo se rozrostla</li>
        <li>Poškození zasahuje do <strong>zorného pole řidiče</strong></li>
        <li>Sklo je popraskané na <strong>více místech</strong> najednou</li>
        <li>Poškození sahá <strong>ke kraji skla</strong> – hrozí prasknutí celého skla</li>
        <li>Na skle jsou <strong>hluboké škrábance</strong> nebo mlhavé plochy</li>
      </ul>

      <h3>Proč neodkládat opravu?</h3>
      <p>Malá prasklina se může při teplotním šoku, na špatné cestě nebo při mytí vozu rychle rozrůst přes celé sklo. Tehdy oprava není možná a výměna je dražší. Proto doporučujeme přijet co nejdříve.</p>

      <h3>Jak probíhá oprava scelováním?</h3>
      <p>Technik nejprve prasklinu vyčistí od nečistot a vlhkosti, poté vstřikne speciální optickou pryskyřici pod tlakem. Po vytvrzení UV lampou je místo takřka neviditelné a pevnost skla je obnovena.</p>

      <p>Máte pochybnosti? <a href="#contacts">Zavolejte nám</a> nebo přijeďte – posoudíme sklo zdarma.</p>
    `,
  },
  {
    id: 'pojisteni-autoskel',
    tag: 'Pojištění',
    image: `${import.meta.env.BASE_URL}assets/insurance.jpeg`,
    alt: 'Vyřízení pojištění autoskel',
    title: 'Jak probíhá vyřízení pojistné události bez vaší starosti',
    excerpt: 'Kompletní návod k tomu, jak za vás vyřídíme veškerou administrativu s vaší pojišťovnou zdarma.',
    date: '22. července 2025',
    readTime: '5 min čtení',
    content: `
      <p>Výměna čelního skla přes pojišťovnu je pro mnoho řidičů záhadou. Ve skutečnosti je ale celý proces snadný – zejména pokud máte sjednáno havarijní pojištění nebo připojištění skel.</p>

      <h3>Co je připojištění skel?</h3>
      <p>Připojištění skel je doplněk k povinnému ručení nebo havarijnímu pojištění. Zpravidla kryje výměnu nebo opravu čelního, bočních i zadního skla bez spoluúčasti nebo s minimální spoluúčastí.</p>

      <h3>Jak to funguje v praxi u nás?</h3>
      <ol>
        <li><strong>Přijedete k nám</strong> nebo nám zavoláte – sdělíte název pojišťovny a číslo smlouvy</li>
        <li><strong>My zavoláme pojišťovně</strong> a nahlásíme pojistnou událost za vás</li>
        <li><strong>Provedeme práci</strong> – výměnu nebo opravu skla</li>
        <li><strong>Fakturu zasíláme přímo pojišťovně</strong> – vy neplatíte nic (nebo jen případnou spoluúčast)</li>
        <li><strong>Odjíždíte</strong> s novým sklem a nulovou starostí</li>
      </ol>

      <h3>S jakými pojišťovnami spolupracujeme?</h3>
      <p>Spolupracujeme se všemi hlavními pojišťovnami na českém trhu:</p>
      <ul>
        <li>Česká pojišťovna</li>
        <li>Kooperativa</li>
        <li>Allianz</li>
        <li>ČSOB Pojišťovna</li>
        <li>Generali</li>
        <li>Uniqa a další</li>
      </ul>

      <h3>Co potřebujete přinést?</h3>
      <ul>
        <li>Technický průkaz vozidla</li>
        <li>Číslo pojistné smlouvy (nebo název pojišťovny – my zjistíme zbytek)</li>
      </ul>

      <p>Máte dotaz ohledně pojistného krytí? <a href="#contacts">Kontaktujte nás</a> – rádi poradíme ještě před návštěvou.</p>
    `,
  },
  {
    id: 'zima-a-sklo',
    tag: 'Údržba',
    image: `${import.meta.env.BASE_URL}assets/Winter-Star-Auto-Glass.jpg`,
    alt: 'Péče o autosklo v zimě',
    title: 'Nejčastější chyby při škrabání zamrzlého skla v zimě',
    excerpt: 'Vyvarujte se poškrábání čelního skla a prasklinám způsobeným teplotním šokem při odmrazování.',
    date: '5. ledna 2025',
    readTime: '3 min čtení',
    content: `
      <p>Každou zimu přibývá poškozených čelních skel – a většina z toho není způsobena nehodami, ale nesprávným odmrazováním. Přitom stačí dodržet několik jednoduchých pravidel.</p>

      <h3>Chyba č. 1: Horká voda na zamrzlé sklo</h3>
      <p>Polití zamrzlého skla horkou nebo i teplou vodou způsobí <strong>teplotní šok</strong>. Sklo se nerovnoměrně rozpíná a praská. I malá předchozí prasklinka se může okamžitě rozrůst přes celé čelní sklo. Nikdy to nedělejte!</p>

      <h3>Chyba č. 2: Kovová škrabka nebo kreditní karta</h3>
      <p>Kovové předměty a improvizované nástroje jako kreditní karty nebo CD mohou zanechat na skle <strong>hluboké škrábance</strong>, které se pak při osvětlení nepříjemně lesknou a snižují viditelnost.</p>
      <p><strong>Řešení:</strong> Používejte kvalitní plastovou škrabku se širokým břitem nebo lepší gumovou stěrku.</p>

      <h3>Chyba č. 3: Odmrazovací kapalina v tryskách od léta</h3>
      <p>Letní kapalina do ostřikovačů zamrzne v zimě – a když ji nastartujete a zkusíte spustit ostřikovač, může prasknou hadička nebo se ucpat tryska. Vždy přecházejte na zimní kapalinu již v říjnu.</p>

      <h3>Jak správně odmrazit sklo?</h3>
      <ol>
        <li>Nastartujte motor a zapněte topení na čelní sklo (defrost)</li>
        <li>Počkejte 2–3 minuty, než se sklo rovnoměrně prohřeje</li>
        <li>Plastovou škrabkou jemně odstraňte led pohybem shora dolů</li>
        <li>Použijte odmrazovací sprej (v spreji) – bezpečné a rychlé řešení</li>
      </ol>

      <h3>Kdy zavolat nám?</h3>
      <p>Pokud se při odmrazování nebo škrabání na skle objevila prasklina nebo pavouček, neváhejte. Čím dříve přijedete, tím větší šance na levnou opravu (scelování). Po rozrůstání praskliny zbývá jen výměna celého skla.</p>

      <p><a href="#contacts">Objednejte se online</a> nebo zavolejte – přijedeme s řešením hned.</p>
    `,
  },
];

export const processSteps = [
  {
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
    title: 'Zavolejte',
    text: 'Zavolejte nám – najdeme to nejlepší řešení pro vás a domluvíme si termín opravy.',
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-4h14v4z"/><circle cx="7.5" cy="15" r="1.5"/><circle cx="16.5" cy="15" r="1.5"/></svg>`,
    title: 'Přivezte',
    text: 'Přivezte nám své vozidlo na domluvený termín montáže a vezměte si s sebou technický průkaz.',
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>`,
    title: 'Pojišťovna',
    text: 'Pokud máte sjednáno připojištění skel – komunikace a veškerou administrativu s pojišťovnou vyřídíme za vás.',
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 2C8.69 2 6 4.69 6 8c0 2.22 1.21 4.15 3 5.19V22l3-2 3 2v-8.81c1.79-1.04 3-2.97 3-5.19 0-3.31-2.69-6-6-6zm0 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>`,
    title: 'Odjezd',
    text: 'Odpoledne odjíždíte s novým čelním sklem a dobrým pocitem, že jste si zvolili nás.',
  },
];

export async function fetchSiteData() {
  const wpApiEndpoint = import.meta.env.VITE_WP_API_ENDPOINT;
  if (wpApiEndpoint) {
    try {
      const res = await fetch(`${wpApiEndpoint}/autosklo/v1/site-data`);
      if (res.ok) {
        const remoteData = await res.json();
        return remoteData;
      }
    } catch (e) {
      console.warn('Failed to fetch remote WP site data, using local siteData fallback.', e);
    }
  }
  return { siteConfig, branches, servicesData, processSteps };
}