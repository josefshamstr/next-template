import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | TechCorp GmbH',
  description: 'Rechtliche Informationen und Impressum der TechCorp GmbH',
};

export default function ImpressumPage() {
  return (
    <div className="flex flex-col mx-auto min-h-screen py-12 justify-center items-start">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>

      <div className="space-y-8">
        {/* Unternehmensangaben */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Angaben gemäß § 5 TMG
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>TechCorp GmbH</strong>
            </p>
            <p>Musterstraße 123</p>
            <p>1010 Wien</p>
            <p>Österreich</p>
          </div>
        </section>

        {/* Vertretungsberechtigte */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Vertretungsberechtigte Person
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>Geschäftsführer: Max Mustermann</p>
            <p>Registergericht: Handelsgericht Wien</p>
            <p>Registernummer: FN 123456a</p>
            <p>UID-Nummer: ATU12345678</p>
          </div>
        </section>

        {/* Kontakt */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Kontakt</h2>
          <div className="space-y-2 text-gray-700">
            <p>Telefon: +43 1 234 567 89</p>
            <p>E-Mail: office@techcorp.at</p>
            <p>Website: www.techcorp.at</p>
          </div>
        </section>

        {/* Aufsichtsbehörde */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Aufsichtsbehörde
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>Zuständige Aufsichtsbehörde:</p>
            <p>Magistrat der Stadt Wien</p>
            <p>MA 63 - Wirtschaft, Arbeit und Statistik</p>
            <p>Friedrich-Schmidt-Platz 3</p>
            <p>1082 Wien</p>
          </div>
        </section>

        {/* Berufsbezeichnung und berufsrechtliche Regelungen */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Berufsbezeichnung und berufsrechtliche Regelungen
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>Berufsbezeichnung: Softwareentwicklung</p>
            <p>Zuständige Kammer: Wirtschaftskammer Wien</p>
            <p>Verliehen durch: Republik Österreich</p>
            <p>Es gelten folgende berufsrechtliche Regelungen:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Gewerbeordnung 1994</li>
              <li>E-Commerce-Gesetz</li>
              <li>Datenschutz-Grundverordnung (DSGVO)</li>
            </ul>
          </div>
        </section>

        {/* Streitschlichtung */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Streitschlichtung
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:
              <a
                href="https://ec.europa.eu/consumers/odr/"
                className="text-blue-600 hover:text-blue-800 ml-1"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>
        </section>

        {/* Haftung für Inhalte */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Haftung für Inhalte
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht unter der Verpflichtung, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
              hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>
          </div>
        </section>

        {/* Haftung für Links */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Haftung für Links
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Links umgehend entfernen.
            </p>
          </div>
        </section>

        {/* Urheberrecht */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Urheberrecht
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem österreichischen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
              wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
              werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
              trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
              bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend
              entfernen.
            </p>
          </div>
        </section>

        {/* Bildnachweis */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Bildnachweis
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>Die auf dieser Website verwendeten Bilder stammen von:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Unsplash (unsplash.com) - kostenlose Stock-Fotos</li>
              <li>Eigene Fotografien und Grafiken</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
