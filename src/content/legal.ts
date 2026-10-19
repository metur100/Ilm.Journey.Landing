import type { Lang } from './site';

export interface PrivacyCopy {
  title: string;
  updated: string;
  intro: string;
  summaryTitle: string;
  summary: string;
  storedTitle: string;
  stored: string;
  internetTitle: string;
  internet: string;
  notificationsTitle: string;
  notifications: string;
  childrenTitle: string;
  children: string;
  storesTitle: string;
  stores: string;
  permissionsTitle: string;
  permissions: string;
  websiteTitle: string;
  website: string[];
  changesTitle: string;
  changes: string;
  contactTitle: string;
  contact: string;
}

export const PRIVACY: Record<Lang, PrivacyCopy> = {
  en: {
    title: 'Privacy policy',
    updated: 'Last updated',
    intro:
      'Ilm Journey is a free educational app by Medin Turkes (Certi Development). This policy explains how the app handles information.',
    summaryTitle: 'Summary',
    summary:
      'Ilm Journey does not collect, transmit, sell or share any personal data. There are no ads, no analytics, no tracking, no accounts and no in-app purchases.',
    storedTitle: 'Data stored on your device',
    stored:
      'The app stores your chosen name, your hero, who is learning (child, teen or adult), your learning progress, game stars, your garden, collected cards, review questions, badges, bookmarks, written reflections, Ramadan good deeds and settings only on your device. This data never leaves your device. You can delete it at any time with “Reset progress” in the settings, or by uninstalling the app.',
    internetTitle: 'Internet use',
    internet:
      'The app only uses the internet when you tap “Listen” on a Quran recitation. The audio file is then loaded from the Islamic Network CDN (cdn.islamic.network). Like every web request, this transmits your device’s IP address to that server; the app sends no other information. Everything else works offline. Some source references contain links to quran.com or sunnah.com. They open only when you tap them, in your browser; the privacy policies of those websites then apply.',
    notificationsTitle: 'Notifications',
    notifications:
      'If you switch on reminders, the app schedules local notifications on your device. No server is involved. You can switch them off in the app or in your device settings at any time.',
    childrenTitle: 'Children',
    children:
      'The app is suitable for children. Because it collects no personal data, no personal data of children is collected either.',
    storesTitle: 'Google Play and App Store',
    stores:
      'When you download the app from Google Play or the App Store, Google or Apple processes data according to its own privacy policy. We do not receive any personal data about you from this.',
    permissionsTitle: 'Permissions',
    permissions: 'The app only asks for permission to show notifications, and only if you switch on reminders.',
    websiteTitle: 'This website',
    website: [
      'This website presents Ilm Journey. It uses no cookies, no analytics, no advertising, no social media plugins and no external fonts or scripts. All files are loaded from the same server.',
      'This website is hosted by GitHub Pages, a service of GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. When you visit the website, GitHub automatically processes technical access data (server log files), in particular your IP address, the date and time of access, the page requested and browser information. This is necessary to deliver the website securely and to defend against attacks.',
      'Legal basis is Art. 6(1)(f) GDPR; our legitimate interest is the secure and reliable provision of this website. Data may be transferred to the USA. GitHub states that it participates in the EU–U.S. Data Privacy Framework; transfers are therefore based on an adequacy decision of the European Commission (Art. 45 GDPR). We have no access to these log files.',
      'Links to Google Play, the App Store and GitHub are ordinary links. Data is only transferred to these services when you click such a link; their privacy policies then apply.',
    ],
    changesTitle: 'Changes',
    changes: 'If this policy changes, the new version will be published on this page with a new date.',
    contactTitle: 'Contact',
    contact: 'Responsible for this app and contact for privacy questions:',
  },
  de: {
    title: 'Datenschutzerklärung',
    updated: 'Zuletzt aktualisiert',
    intro:
      'Ilm Journey ist eine kostenlose Lern-App von Medin Turkes (Certi Development). Diese Erklärung beschreibt, wie die App mit Informationen umgeht.',
    summaryTitle: 'Zusammenfassung',
    summary:
      'Ilm Journey erhebt, überträgt, verkauft oder teilt keine personenbezogenen Daten. Es gibt keine Werbung, keine Analyse, kein Tracking, keine Konten und keine In-App-Käufe.',
    storedTitle: 'Daten auf deinem Gerät',
    stored:
      'Die App speichert deinen gewählten Namen, deinen Helden, wer lernt (Kind, Jugendliche oder Erwachsene), deinen Lernfortschritt, deine Sterne in den Spielen, deinen Garten, gesammelte Karten, deine Wiederholungsfragen, Abzeichen, Lesezeichen, geschriebenen Reflexionen, guten Taten im Ramadan und Einstellungen ausschließlich auf deinem Gerät. Diese Daten verlassen dein Gerät nie. Du kannst sie jederzeit mit „Fortschritt zurücksetzen“ in den Einstellungen oder durch Deinstallieren der App löschen.',
    internetTitle: 'Internetnutzung',
    internet:
      'Die App nutzt das Internet nur, wenn du bei einer Koranrezitation auf „Anhören“ tippst. Die Audiodatei wird dann vom Islamic Network CDN (cdn.islamic.network) geladen. Wie bei jeder Webanfrage wird dabei die IP-Adresse deines Geräts an diesen Server übertragen; die App sendet keine weiteren Informationen. Alles andere funktioniert offline. Einige Quellenangaben enthalten Links zu quran.com oder sunnah.com. Sie öffnen sich nur, wenn du sie antippst, in deinem Browser; dann gelten die Datenschutzerklärungen dieser Websites.',
    notificationsTitle: 'Benachrichtigungen',
    notifications:
      'Wenn du Erinnerungen einschaltest, plant die App lokale Benachrichtigungen auf deinem Gerät. Dabei ist kein Server beteiligt. Du kannst sie jederzeit in der App oder in den Geräteeinstellungen ausschalten.',
    childrenTitle: 'Kinder',
    children:
      'Die App ist für Kinder geeignet. Da sie keine personenbezogenen Daten erhebt, werden auch keine Daten von Kindern erhoben.',
    storesTitle: 'Google Play und App Store',
    stores:
      'Wenn du die App über Google Play oder den App Store herunterlädst, verarbeitet Google bzw. Apple Daten nach der jeweils eigenen Datenschutzerklärung. Wir erhalten dadurch keine personenbezogenen Daten über dich.',
    permissionsTitle: 'Berechtigungen',
    permissions:
      'Die App fragt nur nach der Berechtigung, Benachrichtigungen anzuzeigen – und nur, wenn du Erinnerungen einschaltest.',
    websiteTitle: 'Diese Website',
    website: [
      'Diese Website stellt Ilm Journey vor. Sie verwendet keine Cookies, keine Analyse-Tools, keine Werbung, keine Social-Media-Plugins und keine externen Schriftarten oder Skripte. Alle Dateien werden vom selben Server geladen.',
      'Diese Website wird über GitHub Pages bereitgestellt, einen Dienst der GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Beim Aufruf der Website verarbeitet GitHub automatisch technische Zugriffsdaten (Server-Logfiles), insbesondere deine IP-Adresse, Datum und Uhrzeit des Zugriffs, die aufgerufene Seite und Browser-Informationen. Dies ist erforderlich, um die Website sicher auszuliefern und Angriffe abzuwehren.',
      'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt in der sicheren und zuverlässigen Bereitstellung dieser Website. Dabei können Daten in die USA übermittelt werden. GitHub gibt an, am EU-U.S. Data Privacy Framework teilzunehmen; die Übermittlung erfolgt daher auf Grundlage eines Angemessenheitsbeschlusses der Europäischen Kommission (Art. 45 DSGVO). Wir selbst haben keinen Zugriff auf diese Logfiles.',
      'Links zu Google Play, dem App Store und GitHub sind einfache Verlinkungen. Daten werden erst an diese Dienste übertragen, wenn du einen solchen Link anklickst; dann gelten deren Datenschutzerklärungen.',
    ],
    changesTitle: 'Änderungen',
    changes:
      'Wenn sich diese Erklärung ändert, wird die neue Fassung mit neuem Datum auf dieser Seite veröffentlicht.',
    contactTitle: 'Kontakt',
    contact: 'Verantwortlich für diese App und Ansprechpartner für Datenschutzfragen:',
  },
  bs: {
    title: 'Politika privatnosti',
    updated: 'Posljednje ažuriranje',
    intro:
      'Ilm Journey je besplatna edukativna aplikacija koju je izradio Medin Turkes (Certi Development). Ova politika objašnjava kako aplikacija postupa s podacima.',
    summaryTitle: 'Ukratko',
    summary:
      'Ilm Journey ne prikuplja, ne prenosi, ne prodaje i ne dijeli nikakve lične podatke. Nema reklama, analitike, praćenja, korisničkih računa ni kupovina u aplikaciji.',
    storedTitle: 'Podaci na tvom uređaju',
    stored:
      'Aplikacija čuva tvoje izabrano ime, tvog junaka, ko uči (dijete, mladi ili odrasli), napredak u učenju, zvjezdice u igrama, tvoju bašču, sakupljene karte, pitanja za ponavljanje, značke, zabilješke, napisana razmišljanja, dobra djela u ramazanu i postavke isključivo na tvom uređaju. Ti podaci nikad ne napuštaju tvoj uređaj. Možeš ih izbrisati u svakom trenutku opcijom „Poništi napredak“ u postavkama ili deinstaliranjem aplikacije.',
    internetTitle: 'Korištenje interneta',
    internet:
      'Aplikacija koristi internet samo kada dodirneš „Slušaj“ kod učenja Kur’ana. Audio datoteka se tada učitava s Islamic Network CDN-a (cdn.islamic.network). Kao i kod svakog web zahtjeva, pri tome se tom serveru prenosi IP adresa tvog uređaja; aplikacija ne šalje nikakve druge podatke. Sve ostalo radi bez interneta. Neki izvori sadrže linkove na quran.com ili sunnah.com. Otvaraju se samo kada ih dodirneš, u tvom pregledniku; tada važe politike privatnosti tih stranica.',
    notificationsTitle: 'Obavještenja',
    notifications:
      'Ako uključiš podsjetnike, aplikacija zakazuje lokalna obavještenja na tvom uređaju. Pri tome nije uključen nikakav server. Možeš ih isključiti u aplikaciji ili u postavkama uređaja u svakom trenutku.',
    childrenTitle: 'Djeca',
    children:
      'Aplikacija je prikladna za djecu. Budući da ne prikuplja lične podatke, ne prikuplja ni podatke djece.',
    storesTitle: 'Google Play i App Store',
    stores:
      'Kada preuzmeš aplikaciju s Google Playa ili App Storea, Google odnosno Apple obrađuje podatke prema svojoj politici privatnosti. Mi time ne dobivamo nikakve lične podatke o tebi.',
    permissionsTitle: 'Dozvole',
    permissions:
      'Aplikacija traži samo dozvolu za prikaz obavještenja – i to samo ako uključiš podsjetnike.',
    websiteTitle: 'Ova web stranica',
    website: [
      'Ova web stranica predstavlja Ilm Journey. Ne koristi kolačiće (cookies), analitiku, reklame, dodatke društvenih mreža ni vanjske fontove ili skripte. Sve datoteke se učitavaju s istog servera.',
      'Ova web stranica se nalazi na GitHub Pages, usluzi kompanije GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, SAD. Kada posjetiš stranicu, GitHub automatski obrađuje tehničke podatke o pristupu (log datoteke servera), posebno tvoju IP adresu, datum i vrijeme pristupa, traženu stranicu i podatke o pregledniku. To je potrebno za sigurnu isporuku stranice i odbranu od napada.',
      'Pravni osnov je član 6. stav 1. tačka f) GDPR-a; naš legitimni interes je sigurno i pouzdano pružanje ove stranice. Podaci se mogu prenijeti u SAD. GitHub navodi da učestvuje u okviru EU–U.S. Data Privacy Framework; prijenos se stoga zasniva na odluci Evropske komisije o adekvatnosti (član 45. GDPR-a). Mi nemamo pristup ovim log datotekama.',
      'Linkovi na Google Play, App Store i GitHub su obični linkovi. Podaci se prenose tim uslugama tek kada klikneš na takav link; tada važe njihove politike privatnosti.',
    ],
    changesTitle: 'Izmjene',
    changes:
      'Ako se ova politika promijeni, nova verzija bit će objavljena na ovoj stranici s novim datumom.',
    contactTitle: 'Kontakt',
    contact: 'Odgovorna osoba za ovu aplikaciju i kontakt za pitanja o privatnosti:',
  },
};

export interface ImprintCopy {
  title: string;
  provider: string;
  contact: string;
  responsible: string;
  disclaimerTitle: string;
  disclaimer: string;
  disputeTitle: string;
  dispute: string;
}

export const IMPRINT: Record<Lang, ImprintCopy> = {
  en: {
    title: 'Imprint',
    provider: 'Information according to § 5 DDG (German Digital Services Act)',
    contact: 'Contact',
    responsible: 'Responsible for content according to § 18(2) MStV',
    disclaimerTitle: 'Liability for content and links',
    disclaimer:
      'We create the content of this website and of our apps with great care, including the religious content, which is based on the sources cited. Nevertheless, we cannot guarantee that it is complete and free of errors; the apps are learning companions and do not replace religious advice from qualified scholars. We are not responsible for the content of external websites linked from here; at the time of linking, no legal violations were recognisable.',
    disputeTitle: 'Consumer dispute resolution',
    dispute:
      'We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.',
  },
  de: {
    title: 'Impressum',
    provider: 'Angaben gemäß § 5 DDG',
    contact: 'Kontakt',
    responsible: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV',
    disclaimerTitle: 'Haftung für Inhalte und Links',
    disclaimer:
      'Die Inhalte dieser Website und unserer Apps erstellen wir mit größter Sorgfalt, auch die religiösen Inhalte, die auf den angegebenen Quellen beruhen. Für Vollständigkeit und Fehlerfreiheit können wir dennoch keine Gewähr übernehmen; die Apps sind Lernbegleiter und ersetzen keine religiöse Beratung durch qualifizierte Gelehrte. Für die Inhalte verlinkter externer Websites sind wir nicht verantwortlich; zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar.',
    disputeTitle: 'Verbraucherstreitbeilegung',
    dispute:
      'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
  },
  bs: {
    title: 'Impressum',
    provider: 'Podaci prema § 5 DDG (njemački Zakon o digitalnim uslugama)',
    contact: 'Kontakt',
    responsible: 'Odgovoran za sadržaj prema § 18 st. 2 MStV',
    disclaimerTitle: 'Odgovornost za sadržaj i linkove',
    disclaimer:
      'Sadržaj ove stranice i naših aplikacija izrađujemo s najvećom pažnjom, uključujući vjerski sadržaj koji se zasniva na navedenim izvorima. Ipak, ne možemo garantovati potpunost i tačnost bez greške; aplikacije su pratioci u učenju i ne zamjenjuju vjerski savjet kvalifikovanih učenjaka. Nismo odgovorni za sadržaj vanjskih stranica na koje upućujemo; u trenutku postavljanja linka nisu bila uočljiva kršenja zakona.',
    disputeTitle: 'Rješavanje potrošačkih sporova',
    dispute:
      'Nismo spremni niti obavezni učestvovati u postupcima rješavanja sporova pred tijelom za potrošačku arbitražu.',
  },
};
