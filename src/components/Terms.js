import { siteConfig } from '../data/siteData.js';
import '../styles/terms.css';

export function renderTerms() {
  return `
    <article class="terms-page fade-in">
      <div class="container">
        <div class="terms-page__card">
          <header class="terms-page__header">
            <span class="terms-page__subtitle">${siteConfig.name}</span>
            <h1 class="terms-page__title">Pravidla používání</h1>
          </header>

          <div class="terms-page__content">
            <section class="terms-section">
              <h2 class="terms-section__heading">Obecná ustanovení</h2>
              <p>AUTOSKLO DRIVE® a jejich grafické obrázky (loga) jsou oficiálně registrované ochranné známky společnosti AUTOSKLO DRIVE s.r.o.</p>
              <p>Návštěvníci oficiálních webových stránek společnosti AUTOSKLO DRIVE s.r.o. jsou povinni se řádně seznámit a plně přijmout tyto podmínky používání webu (dále jen „podmínky“) bez jakýchkoli omezení a výhrad.</p>
              <p>AUTOSKLO DRIVE s.r.o. si vyhrazuje právo tato pravidla kdykoli jednostranně změnit.</p>
              <p>Tato stránka slouží pouze pro informační účely a žádné informace na ní publikované nejsou nabídkou ve smyslu ustanovení § 1732 odst. 2 občanského zákoníku a nejsou rovněž veřejnou nabídkou podle ustanovení § 1780 občanského zákoníku. Chcete-li získat podrobné informace o nabídce zboží a služeb a jejich cenách, kontaktujte telefonicky na tel. č.: <strong>${siteConfig.phone}</strong>.</p>
            </section>

            <section class="terms-section">
              <h2 class="terms-section__heading">Produkty a ceny</h2>
              <p>Tato stránka obsahuje informace o službách, náhradních dílech, příslušenství a dalších produktech poskytovaných společností AUTOSKLO DRIVE s.r.o. (dále jen „produkty“). Veškeré informace obsažené na tomto webu slouží pouze pro informační účely. Ceny uvedené na webu slouží pouze pro informační účely, mohou se lišit od skutečných cen v servisních střediscích společnosti AUTOSKLO DRIVE s.r.o. v době, kdy se s nimi návštěvník na webu seznámí.</p>
              <p>Podrobnější a přesnější informace lze získat na tel. č.: <strong>${siteConfig.phone}</strong>. Odkazy na zboží, práce a služby prodávané třetími stranami jsou zveřejněny pouze pro informační účely a nenaznačují, že je společnost AUTOSKLO DRIVE s.r.o. podporuje nebo doporučuje.</p>
            </section>

            <section class="terms-section">
              <h2 class="terms-section__heading">Odkazy na stránky třetích stran</h2>
              <p>Web může obsahovat informace o webech třetích stran. Přechod na jakýkoli jiný internetový zdroj po odkazu ze stránky se provádí na vlastní riziko uživatele. AUTOSKLO DRIVE s.r.o. není odpovědná za přesnost informací, dat, rad nebo prohlášení zveřejněných na těchto stránkách. Společnost AUTOSKLO DRIVE s.r.o. poskytuje odkazy na jiné stránky pro pohodlí návštěvníků, což však neznamená, že společnost AUTOSKLO DRIVE s.r.o. schvaluje obsah těchto stránek nebo odpovídá za jejich obsah.</p>
            </section>

            <section class="terms-section">
              <h2 class="terms-section__heading">Duševní vlastnictví</h2>
              <p>Veškerá práva na informace, grafické obrázky, texty a další materiály a předměty obsažené na webu (dále jen „materiály“) náleží společnosti AUTOSKLO DRIVE s.r.o., jakož i dalším třetím stranám v souladu s podmínkami dohod uzavřených mezi AUTOSKLO DRIVE s.r.o. a příslušnými třetími stranami.</p>
              <p>Žádný z materiálů obsažených na těchto stránkách nebo jejich částech nesmí být reprodukován, používán nebo přenášen na třetí strany za účelem vytváření zisku bez předchozího písemného souhlasu společnosti AUTOSKLO DRIVE s.r.o.</p>
              <p>Návštěvník může prohlížet a tisknout Materiály obsažené na Stránkách pro osobní použití nebo pro rozhodování o nákupu Produktů a služeb společnosti AUTOSKLO DRIVE s.r.o.</p>
              <p>Všechny ochranné známky, loga, obchodní názvy nebo označení (včetně slovních, grafických a jiných označení nebo jejich kombinací) obsažené na těchto stránkách jsou majetkem společnosti AUTOSKLO DRIVE s.r.o. nebo jí náležejí na základě užívacího práva. Jejich zveřejnění na webu nelze považovat za svolení nebo udělení práv k jejich použití bez předchozího písemného souhlasu společnosti AUTOSKLO DRIVE s.r.o. nebo jejich držitelů autorských práv.</p>
            </section>

            <section class="terms-section">
              <h2 class="terms-section__heading">Odpovědnost</h2>
              <p>AUTOSKLO DRIVE s.r.o. dělá vše pro to, aby zajistila pravdivost informací obsažených na tomto webu. Společnost AUTOSKLO DRIVE s.r.o. však nezaručuje absolutní přesnost, úplnost nebo spolehlivost informací obsažených na stránkách, není odpovědná za nepřesnosti, možné chyby nebo jiné nedostatky ve zveřejňovaných informacích a nezaručuje nepřerušovaný provoz stránek.</p>
              <p>Společnost AUTOSKLO DRIVE s.r.o. není odpovědná za nepříznivé důsledky, jakož i za ztráty způsobené v důsledku omezení přístupu nebo v důsledku návštěvy webu a používání informací zveřejněných na webu, mimo jiné včetně ztrát za ztrátu dat a zisků, jakož i za ztráty způsobené viry, které poškodily počítačové vybavení návštěvníka.</p>
            </section>
          </div>

          <div class="terms-page__back-btn">
            <a href="#home" class="btn btn--primary">← Zpět na hlavní stranu</a>
          </div>
        </div>
      </div>
    </article>
  `;
}
